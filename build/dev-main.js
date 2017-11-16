// import 'src/content/panel/main'

// a rough mock for tweaking style

import locale from 'src/_locales/zh_CN/messages.json'
fakeChrome()

import 'normalize.css/normalize.css'
import Vue from 'vue'
Vue.config.productionTip = false

// dictBing()
// dictDictcn()
// dictUrban()
// dictVocabulary()
// dictWordReference()
// options()
// dictCobuild()
// dictMacmillan()
dictZdic()
// panel()

function panel () {
  const App = require('src/content/panel/main')
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: h => h('div', {}, [
      h(App),
      h('style', {
        domProps: {
          innerHTML: `
            body {
              height: 410px;
              width: 400px;
            }
          `
        }
      })
    ])
  })
}

function dictMacmillan () {
  const result = [
    {
      'pos': ' verb',
      'sc': ' [transitive]',
      'phsym': ' /lʌv/',
      'audio': 'http://www.macmillandictionary.com/media/british/uk_pron/l/lov/love_/love_British_English_pronunciation_85651.mp3',
      'star': 3,
      'senses': [
        "<div class=\"SENSE-BODY\"><div class=\"SENSE-NUM\">1</div><!-- End of DIV SENSE-NUM--><span class=\"RESTRICTION-CLASS\"><span class=\"SEP RESTRICTION-CLASS-before\"> [</span>never progressive<span class=\"SEP RESTRICTION-CLASS-after\">]</span></span><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span>to be very <a href=\"http://www.macmillandictionary.com/dictionary/british/strongly\" class=\"QUERY\" title=\"strongly\">strongly</a> <a href=\"http://www.macmillandictionary.com/dictionary/british/attract\" class=\"QUERY\" title=\"attracted\">attracted</a> to someone in an <a href=\"http://www.macmillandictionary.com/dictionary/british/emotional\" class=\"QUERY\" title=\"emotional\">emotional</a> and <a href=\"http://www.macmillandictionary.com/dictionary/british/sexual\" class=\"QUERY\" title=\"sexual\">sexual</a> way</span><div class=\"EXAMPLES\" id=\"love_1__2\"><p class=\"EXAMPLE\" resource=\"dict_british\">I love you.</p></div><!-- End of DIV EXAMPLES--><div class=\"EXAMPLES show_less\" id=\"love_1__3\"><p class=\"EXAMPLE\" resource=\"dict_british\">We love each other, and we’re <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/going_1\" title=\"going\">going</a></span> to get <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/married\" title=\"married\">married</a></span>.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/to-love-or-like-a-person\" class=\"cattitle\"><span class=\"h2\">To love or like a person:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/love_1#love_1__1\" title=\"love\">love</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/care-for#care-for__1\" title=\"care for\">care for</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/adore#adore__1\" title=\"adore\">adore</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/to-love-or-like-a-person\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for To love or like a person \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES-->      </div><!-- End of DIV SENSE-BODY--><div class=\"SENSE-INFO\"><div class=\"SENSE-INFO1\"><div class=\"sidebox show_less\" id=\"love_1__4\" fold=\"yes\"><div class=\"ONEBOX-HEAD\"><a onmousedown=\"$(this).parents('.sidebox').children('.sideboxbody').toggle();\"><img class=\"foldimage\" src=\"http://www.macmillandictionary.com/external/images/plus.png?version=2017-07-31-1344\"></a>Collocates:&nbsp;love </div><!-- End of DIV ONEBOX-HEAD--><div class=\"sideboxbody\">Adverbs frequently used with <span class=\"COL-HW\">love</span> <div class=\"p\">▪&nbsp;<span class=\"ONE-COLLOCATE\">dearly</span>, <span class=\"ONE-COLLOCATE\">deeply</span>, <span class=\"ONE-COLLOCATE\">passionately</span>, <span class=\"ONE-COLLOCATE\">really</span>, <span class=\"ONE-COLLOCATE\">truly</span></div><!-- End of DIV p--></div><!-- End of DIV sideboxbody--></div><!-- End of DIV sidebox show_less--></div><!-- End of DIV SENSE-INFO1--></div><!-- End of DIV SENSE-INFO-->",
        "<div class=\"SENSE-BODY\"><div class=\"SENSE-NUM\">2</div><!-- End of DIV SENSE-NUM--><span class=\"RESTRICTION-CLASS\"><span class=\"SEP RESTRICTION-CLASS-before\"> [</span>never progressive<span class=\"SEP RESTRICTION-CLASS-after\">]</span></span><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span>to <a href=\"http://www.macmillandictionary.com/dictionary/british/care_1\" class=\"QUERY\" title=\"care\">care</a> very much about someone, <a href=\"http://www.macmillandictionary.com/dictionary/british/especially\" class=\"QUERY\" title=\"especially\">especially</a> <a href=\"http://www.macmillandictionary.com/dictionary/british/member\" class=\"QUERY\" title=\"members\">members</a> of your <a href=\"http://www.macmillandictionary.com/dictionary/british/family_1\" class=\"QUERY\" title=\"family\">family</a> or <a href=\"http://www.macmillandictionary.com/dictionary/british/close_1\" class=\"QUERY\" title=\"close\">close</a> <a href=\"http://www.macmillandictionary.com/dictionary/british/friend_1\" class=\"QUERY\" title=\"friends\">friends</a></span><div class=\"EXAMPLES\" id=\"love_1__6\"><p class=\"EXAMPLE\" resource=\"dict_british\">She <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/love_1\" title=\"loved\">loved</a></span> her <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/children\" title=\"children\">children</a></span> with all her <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/heart_1\" title=\"heart\">heart</a></span>.</p></div><!-- End of DIV EXAMPLES--><div class=\"EXAMPLES show_less\" id=\"love_1__7\"><strong>love someone dearly</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">I’ve <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/known_1\" title=\"known\">known</a></span> <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/jack_1\" title=\"jack\">Jack</a></span> for <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/year\" title=\"years\">years</a></span> and I love him <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/dearly\" title=\"dearly\">dearly</a></span>.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/to-love-or-like-a-person\" class=\"cattitle\"><span class=\"h2\">To love or like a person:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/love_1#love_1__1\" title=\"love\">love</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/care-for#care-for__1\" title=\"care for\">care for</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/adore#adore__1\" title=\"adore\">adore</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/to-love-or-like-a-person\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for To love or like a person \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES-->      <ol class=\"SUB-SENSES\"><li id=\"love_1__8\"><div class=\"SUB-SENSE-BODY\"><div class=\"SENSE-NUM\">a.</div><!-- End of DIV SENSE-NUM--><div class=\"SUB-SENSE-CONTENT\"><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span><a href=\"http://www.macmillandictionary.com/dictionary/british/used\" class=\"QUERY\" title=\"used\">used</a> about <a href=\"http://www.macmillandictionary.com/dictionary/british/place_1\" class=\"QUERY\" title=\"places\">places</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/idea\" class=\"QUERY\" title=\"ideas\">ideas</a> etc</span><div class=\"EXAMPLES\" id=\"love_1__9\"><p class=\"EXAMPLE\" resource=\"dict_british\">She went back to the <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/country\" title=\"country\">country</a></span> she <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/love_1\" title=\"loved\">loved</a></span>.</p></div><!-- End of DIV EXAMPLES--><div class=\"EXAMPLES show_less\" id=\"love_1__10\"><p class=\"EXAMPLE\" resource=\"dict_british\">Those who love <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/money\" title=\"money\">money</a></span> will never find <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/happiness\" title=\"happiness\">happiness</a></span>.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/to-enjoy-something-or-to-enjoy-yourself\" class=\"cattitle\"><span class=\"h2\">To enjoy something, or to enjoy yourself:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/like_2#like_2__1\" title=\"like\">like</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/enjoy#enjoy__1\" title=\"enjoy\">enjoy</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/go-in-for#go-in-for__1\" title=\"go in for\">go in for</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/to-enjoy-something-or-to-enjoy-yourself\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for To enjoy something, or to enjoy yourself \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES--></div><!-- End of DIV SUB-SENSE-CONTENT--></div><!-- End of DIV SUB-SENSE-BODY-->                                                     <div id=\"ad_contentslot_1\" class=\"am-dictionary contentslot\">\n                            <script type=\"text/javascript\">\n                googletag.cmd.push(function() { googletag.display('ad_contentslot_1'); });\n                </script>\n                                </div>\n                 </li></ol></div><!-- End of DIV SENSE-BODY-->",
        "<div class=\"SENSE-BODY\"><div class=\"SENSE-NUM\">3</div><!-- End of DIV SENSE-NUM--><span class=\"RESTRICTION-CLASS\"><span class=\"SEP RESTRICTION-CLASS-before\"> [</span>never passive<span class=\"SEP RESTRICTION-CLASS-after\">]</span></span><span class=\"STYLE-LEVEL\"><span class=\"SEP STYLE-LEVEL-before\"> </span>mainly spoken</span><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span>to <a href=\"http://www.macmillandictionary.com/dictionary/british/like_1\" class=\"QUERY\" title=\"like\">like</a> or <a href=\"http://www.macmillandictionary.com/dictionary/british/enjoy\" class=\"QUERY\" title=\"enjoy\">enjoy</a> something very much</span><div class=\"EXAMPLES\" id=\"love_1__12\"><p class=\"EXAMPLE\" resource=\"dict_british\">Lucy <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/love_1\" title=\"loves\">loves</a></span> <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/chocolate\" title=\"chocolate\">chocolate</a></span>.</p></div><!-- End of DIV EXAMPLES--><div class=\"EXAMPLES show_less\" id=\"love_1__13\"><p class=\"EXAMPLE\" resource=\"dict_british\">We went to Corfu last <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/year\" title=\"year\">year</a></span> and <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/love_1\" title=\"loved\">loved</a></span> it.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_1__14\"><p class=\"EXAMPLE\" resource=\"dict_british\">I’ve been <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/retired\" title=\"retired\">retired</a></span> for a <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/year\" title=\"year\">year</a></span> now and I’m <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/loving_1\" title=\"loving\">loving</a></span> every <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/minute_1\" title=\"minute\">minute</a></span> of it.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_1__15\"><p class=\"EXAMPLE\" resource=\"dict_british\">I would love a glass of wine <span class=\"GL\"><span class=\"SEP GL-before\"> (=</span>would like one very much<span class=\"SEP GL-after\">)</span></span>.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_1__16\"><strong>love to do something</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">I would love to see them again.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_1__17\"><strong>love doing something</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\"><span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/ben\" title=\"ben\">Ben</a></span> <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/love_1\" title=\"loves\">loves</a></span> <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/play_1\" title=\"playing\">playing</a></span> the <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/piano_1\" title=\"piano\">piano</a></span>.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_1__18\"><strong>love nothing more/better than</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">I love nothing <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/better_1\" title=\"better\">better</a></span> than <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/have\" title=\"having\">having</a></span> a <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/really\" title=\"really\">really</a></span> <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/good_1\" title=\"good\">good</a></span> <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/meal\" title=\"meal\">meal</a></span> with a few <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/close_1\" title=\"close\">close</a></span> <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/friend_1\" title=\"friends\">friends</a></span>.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/to-enjoy-something-or-to-enjoy-yourself\" class=\"cattitle\"><span class=\"h2\">To enjoy something, or to enjoy yourself:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/like_2#like_2__1\" title=\"like\">like</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/enjoy#enjoy__1\" title=\"enjoy\">enjoy</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/go-in-for#go-in-for__1\" title=\"go in for\">go in for</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/to-enjoy-something-or-to-enjoy-yourself\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for To enjoy something, or to enjoy yourself \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/to-like-something\" class=\"cattitle\"><span class=\"h2\">To like something:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/like_2#like_2__1\" title=\"like\">like</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/love_2#love_2__14\" title=\"love\">love</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/adore#adore__3\" title=\"adore\">adore</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/to-like-something\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for To like something \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES-->      </div><!-- End of DIV SENSE-BODY-->"
      ]
    },
    {
      'pos': ' noun',
      'phsym': ' /lʌv/',
      'audio': 'http://www.macmillandictionary.com/media/british/uk_pron/l/lov/love_/love_British_English_pronunciation.mp3',
      'star': 3,
      'senses': [
        "<div class=\"SENSE-BODY\"><div class=\"SENSE-NUM\">1</div><!-- End of DIV SENSE-NUM--><span class=\"SYNTAX-CODING show_less\"><span class=\"SEP SYNTAX-CODING-before\"> [</span>uncountable<span class=\"SEP SYNTAX-CODING-after\">]</span></span><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span>a very <a href=\"http://www.macmillandictionary.com/dictionary/british/strong\" class=\"QUERY\" title=\"strong\">strong</a> <a href=\"http://www.macmillandictionary.com/dictionary/british/emotional\" class=\"QUERY\" title=\"emotional\">emotional</a> and <a href=\"http://www.macmillandictionary.com/dictionary/british/sexual\" class=\"QUERY\" title=\"sexual\">sexual</a> <a href=\"http://www.macmillandictionary.com/dictionary/british/feeling_1\" class=\"QUERY\" title=\"feeling\">feeling</a> for someone</span><div class=\"EXAMPLES\" id=\"love_2__2\"><strong>love for</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">the <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/speech\" title=\"speech\">speech</a></span> in which <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/romeo\" title=\"romeo\">Romeo</a></span> <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/express_1\" title=\"expresses\">expresses</a></span> his love for Juliet</p></div><!-- End of DIV EXAMPLES--><div class=\"EXAMPLES show_less\" id=\"love_2__3\"><strong>in love (with someone)</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">I <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/think_1\" title=\"think\">think</a></span> I’m in love.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_2__4\"><strong>fall in love (with someone) <span class=\"GL\"><span class=\"SEP GL-before\"> (=</span>to start to love someone<span class=\"SEP GL-after\">)</span></span></strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">They met and <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/fell_1\" title=\"fell\">fell</a></span> in love at <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/college\" title=\"college\">college</a></span>.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_2__5\"><strong>head over heels in love/madly in love <span class=\"GL\"><span class=\"SEP GL-before\"> (=</span>very much in love<span class=\"SEP GL-after\">)</span></span></strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">She’s <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/madly\" title=\"madly\">madly</a></span> in love with a <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/guy\" title=\"guy\">guy</a></span> she met in Spain.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_2__6\"><strong>true love <span class=\"GL\"><span class=\"SEP GL-before\"> (=</span>love that lasts forever<span class=\"SEP GL-after\">)</span></span></strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">I’m not <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/sure_1\" title=\"sure\">sure</a></span> I <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/believe\" title=\"believe\">believe</a></span> in <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/true_1\" title=\"true\">true</a></span> love.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_2__7\"><strong>unrequited love <span class=\"GL\"><span class=\"SEP GL-before\"> (=</span>when you love someone but they do not love you<span class=\"SEP GL-after\">)</span></span></strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">a <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/true_1\" title=\"true\">true</a></span> <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/story\" title=\"story\">story</a></span> of <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/unrequited\" title=\"unrequited\">unrequited</a></span> love</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_2__8\"><strong>unconditional love <span class=\"GL\"><span class=\"SEP GL-before\"> (=</span>love that forgives everything and asks for nothing<span class=\"SEP GL-after\">)</span></span></strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">Laura was <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/thankful\" title=\"thankful\">thankful</a></span> for her <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/father_1\" title=\"father\">father</a></span>’s <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/support_1\" title=\"support\">support</a></span> and <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/unconditional\" title=\"unconditional\">unconditional</a></span> love.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_2__9\"><strong>love blossoms/grows</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">Their love <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/blossom_2\" title=\"blossomed\">blossomed</a></span> over the <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/year\" title=\"years\">years</a></span>.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_2__10\"><strong>love at first sight <span class=\"GL\"><span class=\"SEP GL-before\"> (=</span>when you love someone from the first time you see them<span class=\"SEP GL-after\">)</span></span></strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">It was love at first <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/sight_1\" title=\"sight\">sight</a></span> when I met Allan.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/feelings-of-love-respect-and-admiration\" class=\"cattitle\"><span class=\"h2\">Feelings of love, respect and admiration:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/love_2#love_2__1\" title=\"love\">love</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/respect_1#respect_1__8\" title=\"respect\">respect</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/passion#passion__7\" title=\"passion\">passion</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/feelings-of-love-respect-and-admiration\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for Feelings of love, respect and admiration \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES-->      </div><!-- End of DIV SENSE-BODY-->",
        "<div class=\"SENSE-BODY\"><div class=\"SENSE-NUM\">2</div><!-- End of DIV SENSE-NUM--><span class=\"SYNTAX-CODING show_less\"><span class=\"SEP SYNTAX-CODING-before\"> [</span>uncountable<span class=\"SEP SYNTAX-CODING-after\">]</span></span><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span>the <a href=\"http://www.macmillandictionary.com/dictionary/british/feeling_1\" class=\"QUERY\" title=\"feeling\">feeling</a> of <a href=\"http://www.macmillandictionary.com/dictionary/british/liking\" class=\"QUERY\" title=\"liking\">liking</a> and <a href=\"http://www.macmillandictionary.com/dictionary/british/caring\" class=\"QUERY\" title=\"caring\">caring</a> for someone such as a <a href=\"http://www.macmillandictionary.com/dictionary/british/member\" class=\"QUERY\" title=\"member\">member</a> of your <a href=\"http://www.macmillandictionary.com/dictionary/british/family_1\" class=\"QUERY\" title=\"family\">family</a> or a <a href=\"http://www.macmillandictionary.com/dictionary/british/close_1\" class=\"QUERY\" title=\"close\">close</a> <a href=\"http://www.macmillandictionary.com/dictionary/british/friend_1\" class=\"QUERY\" title=\"friend\">friend</a></span><div class=\"EXAMPLES\" id=\"love_2__12\"><strong>love and affection</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\"><span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/children\" title=\"children\">Children</a></span> <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/need_1\" title=\"need\">need</a></span> a <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/lot_1\" title=\"lot\">lot</a></span> of love and <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/affection\" title=\"affection\">affection</a></span>.</p></div><!-- End of DIV EXAMPLES--><div class=\"EXAMPLES show_less\" id=\"love_2__13\"><strong>love for</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">his love for his <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/brother_1\" title=\"brother\">brother</a></span></p></div><!-- End of DIV EXAMPLES show_less--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/friendship-and-feelings-of-friendship\" class=\"cattitle\"><span class=\"h2\">Friendship and feelings of friendship:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/friendship#friendship__6\" title=\"friendship\">friendship</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/love_2#love_2__11\" title=\"love\">love</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/companionship#companionship__1\" title=\"companionship\">companionship</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/friendship-and-feelings-of-friendship\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for Friendship and feelings of friendship \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES-->      <ol class=\"SUB-SENSES\"><li id=\"love_2__14\"><div class=\"SUB-SENSE-BODY\"><div class=\"SENSE-NUM\">a.</div><!-- End of DIV SENSE-NUM--><div class=\"SUB-SENSE-CONTENT\"><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span><a href=\"http://www.macmillandictionary.com/dictionary/british/used\" class=\"QUERY\" title=\"used\">used</a> about <a href=\"http://www.macmillandictionary.com/dictionary/british/thing\" class=\"QUERY\" title=\"things\">things</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/idea\" class=\"QUERY\" title=\"ideas\">ideas</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/place_1\" class=\"QUERY\" title=\"places\">places</a> etc</span><div class=\"EXAMPLES\" id=\"love_2__15\"><strong>love of/for</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">He was someone with a <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/great_1\" title=\"great\">great</a></span> love of <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/life\" title=\"life\">life</a></span>.</p></div><!-- End of DIV EXAMPLES--><div class=\"EXAMPLES show_less\" id=\"love_2__16\"><p class=\"EXAMPLE\" resource=\"dict_british\"><span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/patriotism\" title=\"patriotism\">Patriotism</a></span> may be <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/define#define__11\" title=\"defined\">defined</a></span> as love for one’s <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/country\" title=\"country\">country</a></span>.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/to-like-something\" class=\"cattitle\"><span class=\"h2\">To like something:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/like_2#like_2__1\" title=\"like\">like</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/love_2#love_2__14\" title=\"love\">love</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/adore#adore__3\" title=\"adore\">adore</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/to-like-something\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for To like something \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES--></div><!-- End of DIV SUB-SENSE-CONTENT--></div><!-- End of DIV SUB-SENSE-BODY-->                                                     <div id=\"ad_contentslot_1\" class=\"am-dictionary contentslot\">\n                            <script type=\"text/javascript\">\n                googletag.cmd.push(function() { googletag.display('ad_contentslot_1'); });\n                </script>\n                                </div>\n                 </li></ol></div><!-- End of DIV SENSE-BODY-->",
        "<div class=\"SENSE-BODY\"><div class=\"SENSE-NUM\">3</div><!-- End of DIV SENSE-NUM--><span class=\"SYNTAX-CODING show_less\"><span class=\"SEP SYNTAX-CODING-before\"> [</span>countable<span class=\"SEP SYNTAX-CODING-after\">]</span></span><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span>someone who you have a <a href=\"http://www.macmillandictionary.com/dictionary/british/sexual\" class=\"QUERY\" title=\"sexual\">sexual</a> or <a href=\"http://www.macmillandictionary.com/dictionary/british/romantic_1\" class=\"QUERY\" title=\"romantic\">romantic</a> <a href=\"http://www.macmillandictionary.com/dictionary/british/relationship\" class=\"QUERY\" title=\"relationship\">relationship</a> with</span><div class=\"EXAMPLES\" id=\"love_2__18\"><strong>first love</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">the <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/boy_1\" title=\"boy\">boy</a></span> who was her first love</p></div><!-- End of DIV EXAMPLES--><div class=\"EXAMPLES show_less\" id=\"love_2__19\"><strong>the love of your life <span class=\"GL\"><span class=\"SEP GL-before\"> (=</span>the person you have loved most<span class=\"SEP GL-after\">)</span></span></strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">He had <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/lost_1\" title=\"lost\">lost</a></span> the love of his <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/life\" title=\"life\">life</a></span>.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/someone-who-is-loved-or-loves\" class=\"cattitle\"><span class=\"h2\">Someone who is loved or loves:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/lover#lover__1\" title=\"lover\">lover</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/admirer#admirer__4\" title=\"admirer\">admirer</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/love_2#love_2__17\" title=\"love\">love</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/someone-who-is-loved-or-loves\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for Someone who is loved or loves \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/a-man-or-woman-someone-is-having-a-relationship-with\" class=\"cattitle\"><span class=\"h2\">A man or woman someone is having a relationship with:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/lover#lover__5\" title=\"lover\">lover</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/love_2#love_2__17\" title=\"love\">love</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/significant-other#significant-other__1\" title=\"significant other\">significant other</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/a-man-or-woman-someone-is-having-a-relationship-with\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for A man or woman someone is having a relationship with \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES-->      <ol class=\"SUB-SENSES\"><li id=\"love_2__20\"><div class=\"SUB-SENSE-BODY\"><div class=\"SENSE-NUM\">a.</div><!-- End of DIV SENSE-NUM--><div class=\"SUB-SENSE-CONTENT\"><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span>something that you <a href=\"http://www.macmillandictionary.com/dictionary/british/enjoy\" class=\"QUERY\" title=\"enjoy\">enjoy</a> very much</span><div class=\"EXAMPLES\" id=\"love_2__21\"><p class=\"EXAMPLE\" resource=\"dict_british\"><span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/music\" title=\"music\">Music</a></span> was his <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/great_1\" title=\"greatest\">greatest</a></span> love.</p></div><!-- End of DIV EXAMPLES--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/enjoyable-things-and-experiences\" class=\"cattitle\"><span class=\"h2\">Enjoyable things and experiences:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/activity#activity__9\" title=\"activity\">activity</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/amusement#amusement__3\" title=\"amusement\">amusement</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/binge_1#binge_1__1\" title=\"binge\">binge</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/enjoyable-things-and-experiences\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for Enjoyable things and experiences \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES--></div><!-- End of DIV SUB-SENSE-CONTENT--></div><!-- End of DIV SUB-SENSE-BODY-->      </li></ol></div><!-- End of DIV SENSE-BODY-->",
        "<div class=\"SENSE-BODY\"><div class=\"SENSE-NUM\">4</div><!-- End of DIV SENSE-NUM--><span class=\"SYNTAX-CODING show_less\"><span class=\"SEP SYNTAX-CODING-before\"> [</span>countable<span class=\"SEP SYNTAX-CODING-after\">]</span></span><span class=\"DIALECT\"><span class=\"SEP DIALECT-before\"> </span>British</span><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span>someone who you <a href=\"http://www.macmillandictionary.com/dictionary/british/like_1\" class=\"QUERY\" title=\"like\">like</a> very much because they are <a href=\"http://www.macmillandictionary.com/dictionary/british/kind_1\" class=\"QUERY\" title=\"kind\">kind</a></span><div class=\"EXAMPLES\" id=\"love_2__23\"><p class=\"EXAMPLE\" resource=\"dict_british\">He’s a <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/real_1\" title=\"real\">real</a></span> love.</p></div><!-- End of DIV EXAMPLES--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/someone-who-is-kind-generous-or-helpful\" class=\"cattitle\"><span class=\"h2\">Someone who is kind, generous or helpful:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/saint#saint__4\" title=\"saint\">saint</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/gem#gem__3\" title=\"gem\">gem</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/angel#angel__2\" title=\"angel\">angel</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/someone-who-is-kind-generous-or-helpful\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for Someone who is kind, generous or helpful \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES-->                                                     <div id=\"ad_contentslot_2\" class=\"am-dictionary contentslot\">\n                            <script type=\"text/javascript\">\n                googletag.cmd.push(function() { googletag.display('ad_contentslot_2'); });\n                </script>\n                                </div>\n                 </div><!-- End of DIV SENSE-BODY-->",
        "<div class=\"SENSE-BODY\"><div class=\"SENSE-NUM\">5</div><!-- End of DIV SENSE-NUM--><span class=\"SYNTAX-CODING show_less\"><span class=\"SEP SYNTAX-CODING-before\"> [</span>uncountable<span class=\"SEP SYNTAX-CODING-after\">]</span></span><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span><a href=\"http://www.macmillandictionary.com/dictionary/british/used\" class=\"QUERY\" title=\"used\">used</a> at the <a href=\"http://www.macmillandictionary.com/dictionary/british/end_1\" class=\"QUERY\" title=\"end\">end</a> of a <a href=\"http://www.macmillandictionary.com/dictionary/british/letter\" class=\"QUERY\" title=\"letter\">letter</a> to someone you <a href=\"http://www.macmillandictionary.com/dictionary/british/know_1\" class=\"QUERY\" title=\"know\">know</a> well</span><div class=\"EXAMPLES\" id=\"love_2__25\"><strong>love (from)</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\"><span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/hope_1\" title=\"hope\">Hope</a></span> to see you <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/soon\" title=\"soon\">soon</a></span>. <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/love_1\" title=\"love\">Love</a></span>, <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/ray\" title=\"ray\">Ray</a></span>.</p></div><!-- End of DIV EXAMPLES--><div class=\"EXAMPLES show_less\" id=\"love_2__26\"><strong>lots of love (from)</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">Take <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/care_1\" title=\"care\">care</a></span>. <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/lot_2\" title=\"lots\">Lots</a></span> of love, Helen.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"EXAMPLES show_less\" id=\"love_2__27\"><strong>all my love <span class=\"GL\"><span class=\"SEP GL-before\"> (=</span>used for writing to someone you love<span class=\"SEP GL-after\">)</span></span></strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">I can’t <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/wait_1\" title=\"wait\">wait</a></span> to see you. All my love, Douglas.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/expressions-used-in-letters-and-correspondence\" class=\"cattitle\"><span class=\"h2\">Expressions used in letters and correspondence:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/dear_1#dear_1__1\" title=\"Dear\">Dear</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/postscript#postscript__1\" title=\"postscript\">postscript</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/love_2#love_2__24\" title=\"love\">love</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/expressions-used-in-letters-and-correspondence\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for Expressions used in letters and correspondence \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES-->      </div><!-- End of DIV SENSE-BODY-->",
        "<div class=\"SENSE-BODY\"><div class=\"SENSE-NUM\">6</div><!-- End of DIV SENSE-NUM--><span class=\"SYNTAX-CODING show_less\"><span class=\"SEP SYNTAX-CODING-before\"> [</span>singular<span class=\"SEP SYNTAX-CODING-after\">]</span></span><span class=\"DIALECT\"><span class=\"SEP DIALECT-before\"> </span>British</span><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span><a href=\"http://www.macmillandictionary.com/dictionary/british/used\" class=\"QUERY\" title=\"used\">used</a> for <a href=\"http://www.macmillandictionary.com/dictionary/british/talk_1\" class=\"QUERY\" title=\"talking\">talking</a> to your <a href=\"http://www.macmillandictionary.com/dictionary/british/husband\" class=\"QUERY\" title=\"husband\">husband</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/wife\" class=\"QUERY\" title=\"wife\">wife</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/girlfriend\" class=\"QUERY\" title=\"girlfriend\">girlfriend</a> etc</span><div class=\"EXAMPLES\" id=\"love_2__29\"><p class=\"EXAMPLE\" resource=\"dict_british\"><span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/did\" title=\"did\">Did</a></span> that <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/letter\" title=\"letter\">letter</a></span> <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/arrive\" title=\"arrive\">arrive</a></span>, love?</p></div><!-- End of DIV EXAMPLES--><div class=\"EXAMPLES show_less\" id=\"love_2__30\"><strong>my love</strong><span class=\"SEP EXAMPLE-before\">: </span><p class=\"EXAMPLE\" resource=\"dict_british\">You <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/know_1\" title=\"know\">know</a></span> I’ll never <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/leave_1\" title=\"leave\">leave</a></span> you, my love.</p></div><!-- End of DIV EXAMPLES show_less--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/names-used-for-talking-to-someone-in-a-friendly-way\" class=\"cattitle\"><span class=\"h2\">Names used for talking to someone in a friendly way:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/love_2#love_2__28\" title=\"love\">love</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/darling_1#darling_1__1\" title=\"darling\">darling</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/mate_1#mate_1__3\" title=\"mate\">mate</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/names-used-for-talking-to-someone-in-a-friendly-way\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for Names used for talking to someone in a friendly way \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES-->      <ol class=\"SUB-SENSES\"><li id=\"love_2__31\"><div class=\"SUB-SENSE-BODY\"><div class=\"SENSE-NUM\">a.</div><!-- End of DIV SENSE-NUM--><div class=\"SUB-SENSE-CONTENT\"><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span><a href=\"http://www.macmillandictionary.com/dictionary/british/used\" class=\"QUERY\" title=\"used\">used</a> by some <a href=\"http://www.macmillandictionary.com/dictionary/british/people_1\" class=\"QUERY\" title=\"people\">people</a> when <a href=\"http://www.macmillandictionary.com/dictionary/british/talk_1\" class=\"QUERY\" title=\"talking\">talking</a> to a <a href=\"http://www.macmillandictionary.com/dictionary/british/woman\" class=\"QUERY\" title=\"woman\">woman</a> whose name they do not <a href=\"http://www.macmillandictionary.com/dictionary/british/know_1\" class=\"QUERY\" title=\"know\">know</a><span class=\"USAGUC\"><span class=\"SEP USAGUC-before\">. </span>Some <a href=\"http://www.macmillandictionary.com/dictionary/british/women\" class=\"QUERY\" title=\"women\">women</a> find this <a href=\"http://www.macmillandictionary.com/dictionary/british/offensive_1\" class=\"QUERY\" title=\"offensive\">offensive</a></span></span><div class=\"EXAMPLES\" id=\"love_2__32\"><p class=\"EXAMPLE\" resource=\"dict_british\">That’ll be three <span class=\"EXAMPLE\"><a href=\"http://www.macmillandictionary.com/dictionary/british/pound_1\" title=\"pounds\">pounds</a></span>, love.</p></div><!-- End of DIV EXAMPLES--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/names-used-for-talking-to-people-you-don-t-know\" class=\"cattitle\"><span class=\"h2\">Names used for talking to people you don’t know:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/madam_1#madam_1__1\" title=\"madam\">madam</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/miss_2#miss_2__4\" title=\"miss\">miss</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/love_2#love_2__31\" title=\"love\">love</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/names-used-for-talking-to-people-you-don-t-know\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for Names used for talking to people you don’t know \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/names-used-for-talking-to-women-or-girls\" class=\"cattitle\"><span class=\"h2\">Names used for talking to women or girls:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/love_2#love_2__31\" title=\"love\">love</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/miss_2#miss_2__4\" title=\"miss\">miss</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/babe#babe__5\" title=\"babe\">babe</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/names-used-for-talking-to-women-or-girls\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for Names used for talking to women or girls \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES--></div><!-- End of DIV SUB-SENSE-CONTENT--></div><!-- End of DIV SUB-SENSE-BODY-->                                                     <div id=\"ad_contentslot_3\" class=\"am-dictionary contentslot\">\n                            <script type=\"text/javascript\">\n                googletag.cmd.push(function() { googletag.display('ad_contentslot_3'); });\n                </script>\n                                </div>\n                 </li></ol></div><!-- End of DIV SENSE-BODY-->",
        "<div class=\"SENSE-BODY\"><div class=\"SENSE-NUM\">7</div><!-- End of DIV SENSE-NUM--><span class=\"SYNTAX-CODING show_less\"><span class=\"SEP SYNTAX-CODING-before\"> [</span>uncountable<span class=\"SEP SYNTAX-CODING-after\">]</span></span><span class=\"DEFINITION\" resource=\"dict_british\"><span class=\"SEP DEFINITION-before\"> </span>a <a href=\"http://www.macmillandictionary.com/dictionary/british/score_1\" class=\"QUERY\" title=\"score\">score</a> of no <a href=\"http://www.macmillandictionary.com/dictionary/british/points\" class=\"QUERY\" title=\"points\">points</a> in <a href=\"http://www.macmillandictionary.com/dictionary/british/tennis\" class=\"QUERY\" title=\"tennis\">tennis</a></span><div class=\"EXAMPLES\" id=\"love_2__34\"><p class=\"EXAMPLE\" resource=\"dict_british\">forty-love</p></div><!-- End of DIV EXAMPLES--><div class=\"THES\"><div class=\"synonyms\"><span class=\"synonyms\"><span style=\"font-style:normal;\" class=\"icon_thesaurus_small_bullet\">Synonyms and related words\n                    </span></span></div><!-- End of DIV synonyms--><div class=\"thessnippet\"><a href=\"http://www.macmillandictionary.com/thesaurus-category/british/tennis\" class=\"cattitle\"><span class=\"h2\">Tennis:</span></a><span class=\"synonyms\"><a href=\"http://www.macmillandictionary.com/dictionary/british/ace_1#ace_1__3\" title=\"ace\">ace</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/advantage#advantage__15\" title=\"advantage\">advantage</a>, <a href=\"http://www.macmillandictionary.com/dictionary/british/bagel_2#bagel_2__1\" title=\"bagel\">bagel</a>...\n                </span><div class=\"centred\"><a class=\"moreButton\" href=\"http://www.macmillandictionary.com/thesaurus-category/british/tennis\" onclick=\"ga('send', 'event', 'entry', 'more','love');\" title=\"See all synonyms for Tennis \">\n                            Explore Thesaurus\n                    </a></div><!-- End of DIV centred--></div><!-- End of DIV thessnippet--></div><!-- End of DIV THES-->      </div><!-- End of DIV SENSE-BODY-->"
      ]
    }
  ]

  const App = require('src/dictionaries/macmillan/view')
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: h => h('div', {}, [
      h(App, {
        props: {
          result: result
        }
      }),
      h('style', {
        domProps: {
          innerHTML: `
            html {
              display: flex;
              justify-content: center;
              align-content: center;
              align-items: center;
              height: 100%;
              background: #ddd;
            }
            body {
              width: 400px;
              background: white;
              height: 600px;
              font-size: 12px;
              line-height: 1.6;
              color: #333;
              font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
            }
          `
        }
      })
    ])
  })
}

function dictZdic () {
  // const result = {
  //   "phsym": [
  //     {
  //       "pinyin": "hǎo",
  //       "pron": "http://www.zdic.net/p/mp3/hao3.mp3"
  //     },
  //     {
  //       "pinyin": "hào",
  //       "pron": "http://www.zdic.net/p/mp3/hao4.mp3"
  //     }
  //   ],
  //   "html": "\n\n<span class=\"diczx4\"></span><p><strong>基本字义</strong></p>\n\n<hr class=\"dichr\">\n<p>● <strong>好</strong></p>\n\n<p><span class=\"dicpy\">hǎo ㄏㄠˇ</span></p>\n\n<p><em>1.</em> 优点多或使人满意的，与“<span class=\"diczx3\">坏</span>”相对：～人。～汉。～歹。～事多磨。</p>\n\n<p><em>2.</em> 身体康健，疾病消失，生活幸福：您～。安～。</p>\n\n<p><em>3.</em> 友爱，和睦：友～。相～。</p>\n\n<p><em>4.</em> 容易：～办。～使。～懂。</p>\n\n<p><em>5.</em> 完成，完善：办～了。</p>\n\n<p><em>6.</em> 表示应允、赞成：～！你干得不错。</p>\n\n<p><em>7.</em> 很，甚：～冷。～快。～坏。～一会儿。</p>\n\n<p><em>8.</em> 便于：场地清理干净～打球。</p>\n\n<p><em>9.</em> 反话，表示不满意：～，这下可坏了！</p>\n\n<p><strong>其它字义</strong></p>\n\n<hr class=\"dichr\">\n<p>● <strong>好</strong></p>\n\n<p><span class=\"dicpy\">hào ㄏㄠˋ</span></p>\n\n<p><em>1.</em> 喜爱，与“<span class=\"diczx3\">恶</span>”（<span class=\"dicpy\">wù ㄨˋ</span>）相对：～奇。～色。～尚（爱好和崇尚）。～高骛远（亦作“好高务远”）。～逸恶劳。</p>\n\n<p><em>2.</em> 常常，容易（发生事情）：刚学会骑车的人～摔跤。</p>\n\n<p class=\"zdct1\"><strong>汉英互译</strong></p>\n<hr class=\"dichr\">\n<p class=\"zdct1\">◎ <strong>好</strong></p>\n<p class=\"zdct1\"><span class=\"diczx3\">good</span>　　　<span class=\"diczx3\">fine</span>　　　<span class=\"diczx3\">kind</span>　　　<span class=\"diczx3\">nice</span>　　　<span class=\"diczx3\">Ok</span>　　　<span class=\"diczx3\">all right</span>　　　<span class=\"diczx3\">get well</span></p>\n<p class=\"zdct1\"><strong>相关词语</strong></p>\n<hr class=\"dichr\">\n<p class=\"zdct1\">◎ <strong>好</strong></p>\n<p class=\"zdct1\"><span class=\"diczx3\">佳</span>　　　<span class=\"diczx3\">美</span>　　　<span class=\"diczx3\">差</span>　　　<span class=\"diczx3\">坏</span>　　　<span class=\"diczx3\">恶</span>　　　<span class=\"diczx3\">孬</span>　　　<span class=\"diczx3\">糟</span></p><p class=\"zdct1\"><strong>English</strong></p><hr class=\"dichr\">good, excellent, fine; well<p></p>\n"
  // }

  const result = {
    "phsym": [
      {
        "pinyin": "hǎo",
        "pron": "http://www.zdic.net/p/mp3/hao3.mp3"
      },
      {
        "pinyin": "shì",
        "pron": "http://www.zdic.net/p/mp3/shi4.mp3"
      }
    ],
    "html": "\n<h1>好事</h1>\n<p>拼音：<span class=\"dicpy\">hǎo shì</span> </p>\n<p>注音：<span class=\"diczy\">ㄏㄠˇ ㄕㄧˋ</span></p>\n<h2>[高级汉语词典]</h2>\n<p>◎ <strong>好事</strong> <span class=\"dicpy\">hǎoshì</span></p><p>(1) [Buddhist service]∶佛事或道场。特指为死事所做的超度仪式</p>\n<p><span class=\"diczx1\">扬起布幡作好事</span></p>\n<p>(2) [good deed]∶有益的事情</p>\n<p><span class=\"diczx1\">先驱者为国家做一件好事</span></p>\n<p>(3) [an act of charity]∶旧时指慈善的事情</p>\n<p><span class=\"diczx1\">给我做件好事吧,我的孩子</span></p>\n<p>◎ <strong>好事</strong> <span class=\"dicpy\">hàoshì</span></p><p>[meddlesome;officious] 喜欢多事。爱参与他人事务的</p>\n<h2>[國語辭典]</h2>\n<div class=\"gycd\"><div class=\"pz\"><ruby><rbc><rb>好事</rb></rbc><rtc><rt>hǎo shì</rt></rtc><rtc><rt> ㄏㄠˇ ㄕˋ</rt></rtc></ruby></div><ol><div class=\"gycd-item\"><li><p class=\"def\"><span class=\"gc_sy\">喜慶之事。</span><span class=\"gc_yy\">初刻拍案驚奇．卷二十九：「小姪為此發奮讀書，指望完成好事。豈知宅上忽然另許了人家。」</span></p></li></div><div class=\"gycd-item\"><li><p class=\"def\"><span class=\"gc_sy\">善事。</span><span class=\"gc_yy\">清平山堂話本．西湖三塔記：「這是好事，倘人來尋時，還他。」</span><span class=\"gc_jy\"><span class=\"gc_jfy_i\">近</span>功德、善事</span><span class=\"gc_fy\"><span class=\"gc_jfy_i\">反</span>壞事</span></p></li></div><div class=\"gycd-item\"><li><p class=\"def\"><span class=\"gc_sy\">請僧道做建醮、祈福、追薦等法事活動。</span><span class=\"gc_yy\">五代史平話．晉史．卷上：「咱與卿等宜喚集僧道，就寺觀作些好事，以回天意。」</span><span class=\"gc_yy\">元．李壽卿．度柳翠．楔子：「今年是老柳十周年，請十眾僧做好事。」</span></p></li></div><div class=\"gycd-item\"><li><p class=\"def\"><span class=\"gc_sy\">表示驚訝和不滿的話。</span><span class=\"gc_yy\">紅樓夢．第六十八回：「孽障種子！和你老子作的好事！我就說不好的。」</span></p></li></div></ol></div><div class=\"gycd\"><div class=\"pz\"><ruby><rbc><rb>好事</rb></rbc><rtc><rt>hào shì</rt></rtc><rtc><rt> ㄏㄠˋ ㄕˋ</rt></rtc></ruby></div><ol><div class=\"gycd-item\"><li><p class=\"def\"><span class=\"gc_sy\">喜歡多事、興造事端。</span><span class=\"gc_yy\">孟子．萬章上：「好事者為之也。」</span><span class=\"gc_yy\">儒林外史．第四十一回：「那些好事的惡少，都一傳兩，兩傳三的來物色。」</span></p></li></div><div class=\"gycd-item\"><li><p class=\"def\"><span class=\"gc_sy\">有某種愛好。</span><span class=\"gc_yy\">南朝梁．劉勰．文心雕龍．書記：「休璉好事，留意詞翰：抑其次也。」</span></p></li></div><div class=\"gycd-item\"><li><p class=\"def\"><span class=\"gc_sy\">熱心助人。</span><span class=\"gc_yy\">兒女英雄傳．第七回：「不由的一聲哭喊，被這位好事的姑娘聽見，就尋聲救苦的搜尋出來。」</span></p></li></div></ol></div>\n"
  }

  const App = require('src/dictionaries/zdic/view')
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: h => h('div', {}, [
      h(App, {
        props: {
          result: result
        }
      }),
      h('style', {
        domProps: {
          innerHTML: `
            html {
              display: flex;
              justify-content: center;
              align-content: center;
              align-items: center;
              height: 100%;
              background: #ddd;
            }
            body {
              width: 400px;
              background: white;
              height: 600px;
              font-size: 12px;
              line-height: 1.6;
              color: #333;
              font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
            }
          `
        }
      })
    ])
  })
}

function dictCobuild () {
  const result = {
    'title': 'love',
    'level': '考研                                                                                                                                                                                                                                                                         /                                         \n                                                                            \n                                                                                        CET6                                                                                                                                                                                                                             /                                         \n                                                                            \n                                                                                                                                    CET4                                                                                                                                                                                 /',
    'star': 5,
    'prons': [
      {
        'phsym': '\n                                    英 [lʌv]\n                                                                            \n                                                                    ',
        'audio': 'http://res.iciba.com/resource/amp3/oxford/0/4f/5b/4f5bbc0f19c33e5f1a0b6b974b4eacce.mp3'
      },
      {
        'phsym': '\n                                    美 [lʌv]\n                                                                            \n                                                                    ',
        'audio': 'http://res.iciba.com/resource/amp3/1/0/b5/c0/b5c0b187fe309af0f4d35982fd961d7e.mp3'
      }
    ],
    'defs': [
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">VERB</span>\n                                            <span class=\"family-chinese\">爱；爱慕</span>\n                                            <span class=\"family-english size-english prep-en\">If you love someone, you feel romantically or sexually attracted to them, and they are very important to you.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>Oh, Amy, I <b>love</b> you...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/9/f/0/9f08000eade9b7ca00c57a2cc19ba7aa.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">哦，埃米，我爱你。</p>\n                                                    </div>\n                                                </div>\n                                                                                            <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>We <b>love</b> each other. We want to spend our lives together.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/5/d/e/5deb8408236ccdbb90af18f5026ec13d.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">我们彼此相爱。我们希望共度一生。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">N-UNCOUNT</span>\n                                            <span class=\"family-chinese\">爱情；爱意</span>\n                                            <span class=\"family-english size-english prep-en\">Love is a very strong feeling of affection towards someone who you are romantically or sexually attracted to.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>Our <b>love</b> for each other has been increased by what we've been through together.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/7/7/1/7714fc5be5872022043c6ef4d0df12e7.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">我们共同经历了这些风风雨雨后，彼此更加相爱了。</p>\n                                                    </div>\n                                                </div>\n                                                                                            <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>...a old fashioned <b>love</b> story.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/3/3/0/3307a0d03b9c3e9d0814ecc8f359e5ea.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">老式爱情故事</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">VERB</span>\n                                            <span class=\"family-chinese\">疼爱；关爱</span>\n                                            <span class=\"family-english size-english prep-en\">You  say that you love someone when their happiness is very important to you, so that you behave in a kind and caring way towards them.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>You'll never <b>love</b> anyone the way you <b>love</b> your baby.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/7/7/4/774bc7c16645e58bc4e266d57c706e85.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">你决不会像疼爱自己的宝宝一样疼爱别人。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">N-UNCOUNT</span>\n                                            <span class=\"family-chinese\">疼爱；关爱</span>\n                                            <span class=\"family-english size-english prep-en\">Love is the feeling that a person's happiness is very important to you, and the way you show this feeling in your behaviour towards them.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>My <b>love</b> for all my children is unconditional...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/4/6/6/466d3dd07b426f2c5df0063e9bd5a088.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">我对自己所有孩子的爱都是无条件的。</p>\n                                                    </div>\n                                                </div>\n                                                                                            <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>She's  got a great capacity for <b>love</b>.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/c/1/4/c1434cc93a69042db2f5a9b7098b864d.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">她很懂得如何去爱。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">VERB</span>\n                                            <span class=\"family-chinese\">喜欢；喜爱</span>\n                                            <span class=\"family-english size-english prep-en\">If you love something, you like it very much.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>We loved the food so much, especially the fish dishes...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/0/e/a/0ea021972a2a1e70556c6f2ce88cc2e7.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">我们很喜欢这些食物，尤其是鱼。</p>\n                                                    </div>\n                                                </div>\n                                                                                            <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>I loved reading.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/c/a/2/ca264de93a3d2be7fd64e4fb6e8d19dd.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">我很爱读书。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">VERB</span>\n                                            <span class=\"family-chinese\">热爱；珍爱</span>\n                                            <span class=\"family-english size-english prep-en\">You can say that you love something when you consider that it is important and want to protect or support it.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>I <b>love</b> my country as you <b>love</b> yours.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/c/5/c/c5c5e3ba36578f377c275acf7daced42.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">我热爱我的祖国，就像你热爱你的祖国一样。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">N-UNCOUNT</span>\n                                            <span class=\"family-chinese\">热爱</span>\n                                            <span class=\"family-english size-english prep-en\">Love is a strong liking for something, or a belief that it is important.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>This is no way to encourage a <b>love</b> of literature...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/f/7/d/f7d088ea4f344e24c90b52e95e58ecc2.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">靠这种办法想激起对文学的热爱是行不通的。</p>\n                                                    </div>\n                                                </div>\n                                                                                            <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>The French are known for their <b>love</b> of their language.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/7/1/7/7173212cfb5fb7b11acf5af77adc50b3.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">法国人热爱自己的语言是出了名的。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">N-COUNT</span>\n                                            <span class=\"family-chinese\">爱人；情人；所爱之物</span>\n                                            <span class=\"family-english size-english prep-en\">Your love is someone or something that you love.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>'She is the <b>love</b> of my life,' he said...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/5/e/1/5e15f531035539684bc8ffba3c7370f4.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">“她是我一生所爱，”他说道。</p>\n                                                    </div>\n                                                </div>\n                                                                                            <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>Music's one of my great loves.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/2/6/3/2639af56390a0a81f7069fa8dbad6b8e.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">音乐是我的至爱之一。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">VERB</span>\n                                            <span class=\"family-chinese\">乐于；很愿意</span>\n                                            <span class=\"family-english size-english prep-en\">If you would love to have or do something, you very much want to have it or do it.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>I would <b>love</b> to play for England again...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/3/c/4/3c4692d2e979a4d57258acdbf73fc83f.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">我很乐意再次为英格兰队效力。</p>\n                                                    </div>\n                                                </div>\n                                                                                            <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>I would <b>love</b> a hot bath and clean clothes...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/e/7/9/e7982780a792942eed96ccca746b5cab.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">要是能洗个热水澡、换身干净的衣服就太好了。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">N-VOC</span>\n                                            <span class=\"family-chinese\">（用于昵称）亲爱的</span>\n                                            <span class=\"family-english size-english prep-en\">Some people use love as an affectionate way of addressing someone.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>Well, I'll take your word for it then, <b>love</b>...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/d/8/0/d806c114c83e13d9959fd2ea05661df8.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">唔，那我就信你吧，亲爱的。</p>\n                                                    </div>\n                                                </div>\n                                                                                            <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>Don't  cry, my <b>love</b>.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/3/8/3/38377bd6908e36b8aa4112d1b836144e.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">别哭，亲爱的。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">NUM</span>\n                                            <span class=\"family-chinese\">（网球比赛中的）零分</span>\n                                            <span class=\"family-english size-english prep-en\">In tennis, love is a score of zero.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>He beat Thomas Muster of Austria three sets to <b>love</b>.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/f/6/b/f6b69eaa15fae8a64730b606b7cf2636.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">他3比0直取奥地利的托马斯·蒙斯特。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">CONVENTION</span>\n                                            <span class=\"family-chinese\">（给朋友或亲人写信时结尾具名前的非正式用语）爱你（们）的</span>\n                                            <span class=\"family-english size-english prep-en\">You can use expressions such as 'love', 'love from', and 'all my love', followed by your name, as an informal way of ending a letter to a friend or relation.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>...with <b>love</b> from Grandma and Grandpa.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/0/0/5/005edcdca07f84981995468743536bbf.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">爱你的爷爷、奶奶</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">N-UNCOUNT</span>\n                                            <span class=\"family-chinese\">问候；致意</span>\n                                            <span class=\"family-english size-english prep-en\">If you send someone your love, you ask another person, who will soon be speaking or writing to them, to tell them that you are thinking about them with affection.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>Please give her my <b>love</b>.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/2/2/3/223dcedd8c8f183657c120865180bc5f.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">请代我问候她。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">PHRASE</span>\n                                            <span class=\"family-chinese\">堕入爱河；（与…）相爱</span>\n                                            <span class=\"family-english size-english prep-en\">If you fall in love with someone, you start to be in love with them.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>I fell in <b>love</b> with him because of his kind nature...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/8/4/b/84b7a5c0f15c4d6d20eceab7fe7576c9.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">我爱上他，是因为他秉性善良。</p>\n                                                    </div>\n                                                </div>\n                                                                                            <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>We fell madly in <b>love</b>.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/c/c/8/cc885d7a8ef35b7c145c3d0793f10403.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">我们疯狂地相爱了。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">PHRASE</span>\n                                            <span class=\"family-chinese\">喜欢上；喜爱上</span>\n                                            <span class=\"family-english size-english prep-en\">If you fall in love with something, you start to like it very much.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>Working with Ford closely, I fell in <b>love</b> with the cinema.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/e/e/d/eed71ea00454365d87da875a3ea23235.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">与福特的密切合作开始令我爱上了电影。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">PHRASE</span>\n                                            <span class=\"family-chinese\">对…倾心；爱慕；热恋</span>\n                                            <span class=\"family-english size-english prep-en\">If you are in love with someone, you feel romantically or sexually attracted to them, and they are very important to you.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>Laura had never before been in <b>love</b>...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/0/2/4/024465e5cb4c1767834c2fd836ab99e0.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">劳拉之前从来没有恋爱过。</p>\n                                                    </div>\n                                                </div>\n                                                                                            <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>I've  never really been in <b>love</b> with anyone...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/5/0/2/50267e6e7f90223424e876e93b8d01d2.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">我从来没有真正爱上过谁。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">PHRASE</span>\n                                            <span class=\"family-chinese\">喜欢；喜爱；热爱</span>\n                                            <span class=\"family-english size-english prep-en\">If you are in love with something, you like it very much.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>He had always been in <b>love</b> with the enchanted landscape of the West.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/f/c/a/fcae6b17d0b898b24617c1bd4e93d2b3.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">他一向热爱西部的迷人风光。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">PHRASE</span>\n                                            <span class=\"family-chinese\">（…之间）彼此厌恶，水火不容</span>\n                                            <span class=\"family-english size-english prep-en\">If you say that there is no love lost between two people or groups or there is little love lost between them, you mean that they do not like each other at all.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>There was no <b>love</b> lost between the two men who were supposed to be working in harmony on a mounting crisis.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/9/4/b/94b7466a17968d0d3d482d38e112408e.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">在一场日益严峻的危机面前，本应和睦共处、通力合作的这两个男人却势同水火。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">PHR-RECIP</span>\n                                            <span class=\"family-chinese\">做爱；性交</span>\n                                            <span class=\"family-english size-english prep-en\">When two people make love, they have sex.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>Have you ever made <b>love</b> to a girl before?...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/9/0/d/90d0c6f1491bd79ad5a082df70318bd2.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">你和女孩有过云雨之欢吗？</p>\n                                                    </div>\n                                                </div>\n                                                                                            <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>One night, after 18 months of friendship, they made <b>love</b> for the first and last time.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/a/b/c/abc4675d13e825f9bb096362b1cb1bad.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">一天晚上，做了18个月的朋友之后，他们第一次也是最后一次上了床。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">PHRASE</span>\n                                            <span class=\"family-chinese\">无论如何（也不…）</span>\n                                            <span class=\"family-english size-english prep-en\">If you cannot or will not do something for love or money, you are completely unable to do it or you do not intend to do it.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>Replacement parts couldn't be found for <b>love</b> or money...</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/2/a/6/2a6dc5522cfee2091d8385d549603d05.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">替换零件怎么都找不到。</p>\n                                                    </div>\n                                                </div>\n                                                                                            <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>I'm not coming back up here. Never, for <b>love</b> nor money.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/7/0/0/7004f81883984466bd0c0e072c5c1f63.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">我不打算再回这里了，绝对不回了。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        ",
      "\n                                        <p class=\"size-chinese\">\n                                            <span class=\"family-english\">PHRASE</span>\n                                            <span class=\"family-chinese\">一见钟情</span>\n                                            <span class=\"family-english size-english prep-en\">Love at first sight is the experience of starting to be in love with someone as soon as you see them for the first time.</span>\n                                        </p>\n                                                                                                                                    <div class=\"text-sentence\">\n                                                    <div class=\"sentence-item\">\n                                                        <i class=\"circle-icon\"></i>\n                                                        <p class=\"family-english\">\n                                                            <span>It was <b>love</b> at first sight, and he proposed to me six weeks later.</span>\n                                                            <i class=\"icon-sound\" ms-on-click=\"sound('http://res-tts.iciba.com/tts_dj/6/d/8/6d8cea3dc788551cd31b9f4e0a60d61e.mp3')\"></i>\n                                                        </p>\n                                                        <p class=\"family-chinese size-chinese\">我们一见钟情，他6周后就向我求婚了。</p>\n                                                    </div>\n                                                </div>\n                                                                                                                        "
    ]
  }

  const App = require('src/dictionaries/cobuild/view')
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: h => h('div', {}, [
      h(App, {
        props: {
          result: result
        }
      }),
      h('style', {
        domProps: {
          innerHTML: `
            html {
              display: flex;
              justify-content: center;
              align-content: center;
              align-items: center;
              height: 100%;
              background: #ddd;
            }
            body {
              width: 400px;
              background: white;
              height: 600px;
              font-size: 12px;
              line-height: 1.6;
              color: #333;
              font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
            }
          `
        }
      })
    ])
  })
}

function dictWordReference () {
  const result = {
    'idioms': [
      "Idiomsin love (with), having or feeling deep affection or passion (for): [no object]I'm glad you're in love.[~ + object]She's in love with me.",
      'Idiomsmake love, [no object] to have sexual relations.'
    ],
    'etym': ' bef. 900; (noun, nominal) Middle English; Old English lufu, cognate with Old Frisian luve, Old High German luba, Gothic lubō; (verb, verbal) Middle English lov(i)en, Old English lufian; cognate with Old Frisian luvia, Old High German lubōn to love, Latin lubēre (later libēre) to be pleasing; akin to lief'
  }

  const App = require('src/dictionaries/wordreference/view')
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: h => h('div', {}, [
      h(App, {
        props: {
          result
        }
      }),
      h('style', {
        domProps: {
          innerHTML: `
            html {
              display: flex;
              justify-content: center;
              align-content: center;
              align-items: center;
              height: 100%;
              background: #ddd;
            }
            body {
              width: 400px;
              background: white;
              height: 600px;
              font-size: 12px;
              line-height: 1.6;
              color: #333;
              font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
            }
          `
        }
      })
    ])
  })
}

function dictVocabulary () {
  const result = {
    'type': 'lex',
    title: 'helping',
    'phsym': [
      {
        'lang': 'US',
        'al': '[lʌv]',
        'pron': 'http://media.engkoo.com:8129/en-us/D86CEAEFA3504E6E1368552B058AD528.mp3'
      },
      {
        'lang': 'UK',
        'al': '[lʌv]',
        'pron': 'http://media.engkoo.com:8129/en-gb/D86CEAEFA3504E6E1368552B058AD528.mp3'
      }
    ],
    'cdef': [
      {
        'pos': 'n',
        'def': '爱；爱情；热爱；恋爱'
      },
      {
        'pos': 'v',
        'def': '爱；喜欢；热爱；喜爱'
      },
      {
        'pos': 'web',
        'def': '爱心；真爱'
      }
    ],
    'inf': {
      's': 'love',
      'pl': 'loves',
      'pp': 'loved',
      'prp': 'loving',
      '3pps': 'loves',
      'prt': 'loves',
      'pt': 'loved'
    }
  }

  const App = require('src/dictionaries/vocabulary/view')
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: h => h('div', {}, [
      h(App, {
        props: {
          result
        }
      }),
      h('style', {
        domProps: {
          innerHTML: `
            html {
              display: flex;
              justify-content: center;
              align-content: center;
              align-items: center;
              height: 100%;
              background: #ddd;
            }
            body {
              width: 400px;
              background: white;
              height: 600px;
              font-size: 12px;
              line-height: 1.6;
              color: #333;
              font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
            }
          `
        }
      })
    ])
  })
}

function dictBing () {
  const bingResult = {
    'type': 'lex',
    title: 'helping',
    'phsym': [
      {
        'lang': 'US',
        'al': '[lʌv]',
        'pron': 'http://media.engkoo.com:8129/en-us/D86CEAEFA3504E6E1368552B058AD528.mp3'
      },
      {
        'lang': 'UK',
        'al': '[lʌv]',
        'pron': 'http://media.engkoo.com:8129/en-gb/D86CEAEFA3504E6E1368552B058AD528.mp3'
      }
    ],
    'cdef': [
      {
        'pos': 'n',
        'def': '爱；爱情；热爱；恋爱'
      },
      {
        'pos': 'v',
        'def': '爱；喜欢；热爱；喜爱'
      },
      {
        'pos': 'web',
        'def': '爱心；真爱'
      }
    ],
    'inf': {
      's': 'love',
      'pl': 'loves',
      'pp': 'loved',
      'prp': 'loving',
      '3pps': 'loves',
      'prt': 'loves',
      'pt': 'loved'
    }
  }

  const Bing = require('src/dictionaries/bing/view')
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: h => h('div', {}, [
      h(Bing, {
        props: {
          result: bingResult
        }
      }),
      h('style', {
        domProps: {
          innerHTML: `
            html {
              display: flex;
              justify-content: center;
              align-content: center;
              align-items: center;
              height: 100%;
              background: #ddd;
            }
            body {
              width: 400px;
              background: white;
              height: 600px;
              font-size: 12px;
              line-height: 1.6;
              color: #333;
              font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
            }
          `
        }
      })
    ])
  })
}

function dictDictcn () {
  const dictcnResult = {
    etym: [
      '☆ 直接源自古英语的fluu；最初源自原始日耳曼语的lubo，意为爱，亲情，友情。',
      '☆ 直接源自古英语的fluu；最初源自原始日耳曼语的lubo，意为爱，亲情，友情。'
    ],
    chart: {
      '1': {
        'percent': 67,
        'sense': '爱'
      },
      '2': {
        'percent': 16,
        'sense': '喜欢'
      },
      '3': {
        'percent': 9,
        'sense': '爱情'
      },
      '4': {
        'percent': 3,
        'sense': '热爱'
      },
      '5': {
        'percent': 2,
        'sense': '喜爱'
      },
      '6': {
        'percent': 2,
        'sense': '恋爱'
      },
      '7': {
        'percent': 1,
        'sense': '情人'
      }
    }
  }

  const Dictcn = require('src/dictionaries/dictcn/view')
  const VueHighcharts = require('vue-highcharts')
  Vue.use(VueHighcharts)
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: h => h('div', {}, [
      h(Dictcn, {
        props: {
          result: dictcnResult
        }
      }),
      h('style', {
        domProps: {
          innerHTML: `
            html {
              display: flex;
              justify-content: center;
              align-content: center;
              align-items: center;
              height: 100%;
              background: #ddd;
            }
            body {
              width: 400px;
              background: white;
              height: 600px;
              font-size: 12px;
              line-height: 1.6;
              color: #333;
              font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
            }
          `
        }
      })
    ])
  })
}

function dictUrban () {
  const result = [
    {
      'title': 'Temple',
      pron: 'http://wav.urbandictionary.com/man-29993.wav',
      'meaning': '\ntem·pull\n\n–verb\n\n1.\n\nWhen Temple University Japan fails to inform a student of something that will detrimentally affect that student until it is too late.\n',
      'example': "\nMy friend was Templed last semester and had to leave the country because the school didn't tell him he was missing some visa documentation until two weeks after it was due.\n",
      tags: ['tuj', 'templed', 'fucked over', 'screwed', 'ass raped', 'boned'],
      'contributor': '\nby skoff\nJanuary 06, 2011\n',
      'thumbsUp': '125',
      'thumbsDown': '45'
    },
    {
      'title': 'temple',
      'meaning': '\nNormally a religious term, the word temple comes from the Latin word templum. It can mean...\n\n\n\n1. n. A place used for worship, usually during ancient times. However, it is often the name for where Hindu, Buddhist, Zoroastrian, Shinto, and Sikh religions practice.\n\n\n\n2. n. The region on the head behind the eyes, near the temporal bone.\n\n\n\n3. n. Several cities in the United States are named Temple, in states including Georgia, Maine, Michigan, New Hampshire, Oklahoma, Pennsylvania and Texas.\n\n\n\n4. n. One of two buildings in Jerusalem that is at the center of Jewish faith.\n',
      'example': "\n1. I went to the temple with my Buddhist friend the other day. It was strange.\n\n\n\n2. A person often rubs their temples when they have a headache.\n\n\n\n3. We're going to drive over to Temple next weekend, you in?\n\n\n\n4. I heard Tommy had gone to Jerusalem to visit The Temple.\n",
      'contributor': '\nby StabbyBaby\nJanuary 07, 2008\n',
      'thumbsUp': '88',
      'thumbsDown': '62'
    },
    {
      'title': 'Temple',
      'meaning': "\nThe names of a gorgeous girl who gets straight A's. She's misunderstood, and a complete misfit, but she doesn't like fitting in, anyway. She's known to wear lots of black and talk to few people. Some think she's shy and/or goth, but she's really just extremely anti-social and doesn't like people. Even so, she loves the stage and is a great actor. She's a very artistic person, but doesn't reveal her true talents to many. She loves anime and video games. She loves animals and nature, and hates those who litter and contribute to destroying the environment. She's a very kind and caring person who's been hurt more than she deserves.\n",
      'example': "\nGirl H: \"Wow, did you see that Temple?\"\n\nGirl S: \"What a goth. She's so goth she doesn't even know she's goth.\"\n\nGirl H: \"She's not goth. You're just jealous because she's way cooler and prettier than both of us combined.\"\n\nGirl S: \"That is so true.\"\n",
      'contributor': "\nby Jack Skellington's Bride\nOctober 22, 2013\n",
      'thumbsUp': '32',
      'thumbsDown': '18'
    },
    {
      'title': 'Temple',
      'meaning': '\nHoly; elevated; praiseworthy; dope as fuck\n',
      'example': "\n\"Trevor! This weed is so temple bruhbruh, where'd you get it?\"\n",
      'contributor': '\nby GingerAle42\nAugust 03, 2016\n',
      'thumbsUp': '2',
      'thumbsDown': '2'
    },
    {
      'title': 'temple',
      'meaning': '\nA place where people tend to pray, like the ancient aztek used to sacrifice people.\n',
      'example': "\n\"Joe is gonna be sacrificed today, at that new temple. Wanna come watch?\" \"sure, That'd be fun.\"\n",
      'contributor': '\nby Lollipop man\nJuly 14, 2006\n',
      'thumbsUp': '101',
      'thumbsDown': '116'
    }
  ]

  const Urban = require('src/dictionaries/urban/view')
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: h => h('div', {}, [
      h(Urban, {
        props: {
          result: result
        }
      }),
      h('style', {
        domProps: {
          innerHTML: `
            html {
              display: flex;
              justify-content: center;
              align-content: center;
              align-items: center;
              height: 100%;
              background: #ddd;
            }
            body {
              width: 400px;
              background: white;
              height: 600px;
              font-size: 12px;
              line-height: 1.6;
              color: #333;
              font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
            }
          `
        }
      })
    ])
  })
}

function options () {
  const App = require('src/options/Options')
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: h => h(App)
  })
}

function fakeChrome () {
  window.chrome = {
    runtime: {
      getURL: () => { },
      sendMessage (message, cb) {
        switch (message.msg) {
          case 'GET_SELECTED_TEXT':
            cb({ text: 'love' })
            break
        }
      },
      onMessage: {
        addListener () { }
      },
      getManifest () { return { version: '' } }
    },
    i18n: {
      getMessage: (m) => locale[m] && locale[m].message
    },
    storage: {
      sync: {
        get: () => { },
        set: () => { }
      },
      onChanged: {
        addListener: () => { }
      }
    },
    tabs: {
      getCurrent () { }
    }
  }
}

// import Vue from 'vue'
// import Loader from 'src/content/panel/components/Loader'
// Vue.config.productionTip = false
// new Vue({ // eslint-disable-line no-new
//   el: '#app',
//   render: h => h('div', {}, [
//     h(Loader),
//     h('style', {
//       domProps: {
//         innerHTML: `
//           html {
//             height: 100%;
//           }
//           body {
//             height: 100%;
//             overflow: hidden;
//           }
//         `
//       }
//     })
//   ])
// })

// let Vue = require('vue').default
// let App = require('src/options/Options')
// Vue.config.productionTip = false
// new Vue({ // eslint-disable-line no-new
//   el: '#app',
//   render: h => h(App)
// })
