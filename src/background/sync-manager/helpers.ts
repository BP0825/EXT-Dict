import { storage } from '@/_helpers/browser-api'
import { getWords, saveWords, Word, getSyncMeta, setSyncMeta, deleteSyncMeta } from '@/background/database'
import { MsgType } from '@/typings/message'

import { Observable } from 'rxjs/Observable'
import { concat } from 'rxjs/observable/concat'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { map } from 'rxjs/operators/map'
import { filter } from 'rxjs/operators/filter'
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged'

export interface NotebookFile {
  timestamp: number
  words: Word[]
}

export interface DlResponse {
  json: NotebookFile
  etag: string
}

export interface UploadConfig {
  readonly word?: Readonly<Word>
  /** Do not sync before upload */
  readonly force?: boolean
}

export interface DownloadConfig<Config = any> {
  /** Test connectivity. Do not update anything. */
  readonly testConfig?: Readonly<Config>
  /** ignore server 304 cache */
  readonly noCache?: boolean
}

export abstract class SyncService<Config = any, Meta = any> {
  static readonly id: string
  static readonly title: {
    readonly 'en': string,
    readonly 'zh-CN': string,
    readonly 'zh-TW': string
  }
  abstract config: Config
  abstract meta?: Meta

  static getDefaultConfig () {
    return {}
  }
  static getDefaultMeta () {
    return {}
  }
  abstract init (config: Readonly<Config>): Promise<void>
  abstract upload (config: UploadConfig): Promise<void>
  abstract download (config: DownloadConfig): Promise<void>
  startInterval () {/* nothing */}
}

export async function setSyncConfig<T = any> (serviceID: string, config: T): Promise<void> {
  let { syncConfig } = await storage.sync.get('syncConfig')
  if (!syncConfig) { syncConfig = {} }
  syncConfig[serviceID] = config
  await storage.sync.set({ syncConfig })
}

export async function getSyncConfig<T> (serviceID: string): Promise<T | undefined> {
  const { syncConfig } = await storage.sync.get('syncConfig')
  if (syncConfig !== undefined) {
    return syncConfig[serviceID]
  }
}

export async function removeSyncConfig (serviceID?: string): Promise<void> {
  if (serviceID) {
    await setSyncConfig(serviceID, null)
  } else {
    await storage.sync.remove('syncConfig')
  }
}

/** Get a sync config and listen changes */
export function createSyncConfigStream<C> (serviceID: string): Observable<C | null> {
  return concat(
    fromPromise(getSyncConfig<C | null>(serviceID)),
    storage.sync.createStream<{ [index: string]: C | null }>('syncConfig').pipe(
      map(({ newValue }) => newValue && newValue[serviceID]),
    ),
  ).pipe(
    filter((v): v is C | null => v !== undefined),
    distinctUntilChanged((x, y) => x === y ||
      x != null && y != null && Object.keys(y).every(k => y[k] === x[k])
    )
  )
}

/**
 * Service meta data is saved with the database
 * so that it can be shared across browser vendors.
 */
export async function setMeta<T = any> (serviceID: string, meta: T): Promise<void> {
  await setSyncMeta(serviceID, JSON.stringify(meta))
}

/**
 * Service meta data is saved with the database
 * so that it can be shared across browser vendors.
 */
export async function getMeta<T> (serviceID: string): Promise<T | undefined> {
  const text = await getSyncMeta(serviceID)
  if (text) {
    return JSON.parse(text)
  }
}

/**
 * Service meta data is saved with the database
 * so that it can be shared across browser vendors.
 */
export async function deleteMeta (serviceID: string): Promise<void> {
  await deleteSyncMeta(serviceID)
}

export async function setNotebook (words: Word[]): Promise<void> {
  await saveWords({ area: 'notebook', words })
}

export async function getNotebook (): Promise<Word[]> {
  return (await getWords({ type: MsgType.GetWords, area: 'notebook' })).words || []
}
