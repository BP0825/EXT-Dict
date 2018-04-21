import { appConfigFactory, AppConfig } from '@/app-config'
import { addAppConfigListener } from '@/_helpers/config-manager'

/*-----------------------------------------------*\
    Actions
\*-----------------------------------------------*/

export const enum Actions {
  NEW_CONFIG = 'configs/NEW_CONFIG'
}

/*-----------------------------------------------*\
    State
\*-----------------------------------------------*/

export type ConfigState = AppConfig

export default function reducer (state = appConfigFactory(), action): ConfigState {
  switch (action.type) {
    case Actions.NEW_CONFIG:
      return action.payload
    default:
      return state
  }
}

/*-----------------------------------------------*\
    Action Creators
\*-----------------------------------------------*/

type Action = { type: Actions, payload?: any }

/** When app config is updated */
export function newConfig (config): Action {
  return { type: Actions.NEW_CONFIG, payload: config }
}

/*-----------------------------------------------*\
    Side Effects
\*-----------------------------------------------*/

type Dispatcher = (
  dispatch: (action: Action) => any,
) => any

export function listenConfig (): Dispatcher {
  return dispatch => {
    addAppConfigListener(({ config }) => dispatch(newConfig(config)))
  }
}
