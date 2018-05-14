/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["https://cn.vuejs.org/2014/03/22/vuejs-010-release/index.html","2529bdb8fa5b5cb5916f42073064dc64"],["https://cn.vuejs.org/2014/07/29/vue-next/index.html","e43a81aa70cba5cb0331314faf1341a8"],["https://cn.vuejs.org/2014/11/09/vue-011-release/index.html","93e942b5d9b17968eac0d1bdd9c4a5f9"],["https://cn.vuejs.org/2014/12/08/011-component/index.html","62a116a798308401d861fc7d48adb4af"],["https://cn.vuejs.org/2015/06/11/012-release/index.html","674b735a151aefb7df91c448b9a95fdd"],["https://cn.vuejs.org/2015/10/26/1.0.0-release/index.html","9358684c1f442b43da301f3e17faf77c"],["https://cn.vuejs.org/2015/10/28/why-no-template-url/index.html","bcc3333f0878bf25d807ee9aaf7db46a"],["https://cn.vuejs.org/2015/12/28/vue-cli/index.html","23ebf97e6d897c43865c2c2e69098c3c"],["https://cn.vuejs.org/2016/02/06/common-gotchas/index.html","20e54b3481a8d92533eb8e3640b6aa10"],["https://cn.vuejs.org/2016/03/14/march-update/index.html","1a388b1dfbf44e2bdfe35de806afe0cf"],["https://cn.vuejs.org/2016/04/27/announcing-2.0/index.html","efdb3fb0b1204b30a318a82454dc897c"],["https://cn.vuejs.org/about/index.html","e9a594e5c2cbf7ba05dc856266a4c868"],["https://cn.vuejs.org/api/index.html","176a72f4aaa42c3b6a404d370e87fbb8"],["https://cn.vuejs.org/archives/2014/03/index.html","e5cc800e59043d94139696e44cfda2d4"],["https://cn.vuejs.org/archives/2014/07/index.html","6614a375b001948fd32857a0ec5c7373"],["https://cn.vuejs.org/archives/2014/11/index.html","741e47c5432b8038dd9d973826beae6a"],["https://cn.vuejs.org/archives/2014/12/index.html","24a40d275b989cf66a6f92ee8e442ffa"],["https://cn.vuejs.org/archives/2014/index.html","0226c43ce57814421979c6d76749117f"],["https://cn.vuejs.org/archives/2015/06/index.html","a8dddf9be11b8b21bd767683c41be75e"],["https://cn.vuejs.org/archives/2015/10/index.html","f0eaa3ee4ce82ca409ac4da60fc00e78"],["https://cn.vuejs.org/archives/2015/12/index.html","0b57860f2af45fcbaad9717862855ae2"],["https://cn.vuejs.org/archives/2015/index.html","1fceac448303b75dc2b71c75e185080f"],["https://cn.vuejs.org/archives/2016/02/index.html","cd291599fd7336315846f18fdd965487"],["https://cn.vuejs.org/archives/2016/03/index.html","9dd51ea7d35f17483b3f51cb2d1b36ae"],["https://cn.vuejs.org/archives/2016/04/index.html","19616aa3e7afb58e24b7fcf732011111"],["https://cn.vuejs.org/archives/2016/index.html","3f37318368e000ebc817904b0a0778e5"],["https://cn.vuejs.org/archives/index.html","013bfc8128a0c75c863c4cde3ec297b7"],["https://cn.vuejs.org/archives/page/2/index.html","a227fe8f36b3b7c3f642b7467b02c20e"],["https://cn.vuejs.org/atom.xml","89a03cd3fc8c9c5ef563f88c65b70afe"],["https://cn.vuejs.org/browserconfig.xml","a1327babc882f9875f57f5b367c9ffc9"],["benchmark.css"/*tpa=https://cn.vuejs.org/css/benchmark.css*/,"b083e0006589a5ba88a250eb8ee12cc5"],["index.css"/*tpa=https://cn.vuejs.org/css/index.css*/,"cdca73c978b29c5a00043b4b89b97aa6"],["page.css"/*tpa=https://cn.vuejs.org/css/page.css*/,"d1100e0f89b350d62e7bcbb1074c2313"],["search.css"/*tpa=https://cn.vuejs.org/css/search.css*/,"e4e6c1e2a49dfe73bd8f10ca3409c040"],["https://cn.vuejs.org/examples/commits.html","3cd3b2db40187e7f2d236473bae9ce59"],["https://cn.vuejs.org/examples/elastic-header.html","198f4c19911bf30785905adb996ef899"],["https://cn.vuejs.org/examples/firebase.html","266080b80e262a2b93289d466d1337b5"],["https://cn.vuejs.org/examples/grid-component.html","3119ba25bb6b9dcc2f40d3f60e2136df"],["https://cn.vuejs.org/examples/hackernews.html","f793aeb8d340c60945b0a58f3afa25c9"],["https://cn.vuejs.org/examples/index.html","dc91b34e726c12318c4d083a3090c156"],["https://cn.vuejs.org/examples/modal.html","88b6a98ec8a44cd783eaf0d71fcf46a7"],["https://cn.vuejs.org/examples/select2.html","b812ad3b215af513c979c0d9759fe5c9"],["https://cn.vuejs.org/examples/svg.html","0a1876c72d22212d243ed8c2d5b0404e"],["https://cn.vuejs.org/examples/todomvc.html","a048618225f78a66ff322bb1dde98a37"],["https://cn.vuejs.org/examples/tree-view.html","4815e09c4b3af4132da0e95dc1fbc945"],["https://cn.vuejs.org/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["https://cn.vuejs.org/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["https://cn.vuejs.org/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["https://cn.vuejs.org/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["https://cn.vuejs.org/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["https://cn.vuejs.org/guide/class-and-style.html","a3174f2083dd58fbd1aa965dcc98133f"],["https://cn.vuejs.org/guide/comparison.html","7c06634379b01b8e7ef0dfc90b9b8517"],["https://cn.vuejs.org/guide/components.html","d98663b0d45a91f0a40541c1efe2bbfc"],["https://cn.vuejs.org/guide/computed.html","3fcf408c7cdfd856ea75b6a5562ba8aa"],["https://cn.vuejs.org/guide/conditional.html","896e19e7955f2616eb31ab4d8c65178c"],["https://cn.vuejs.org/guide/custom-directive.html","697987fdd04783febdbff2aa2932c41d"],["https://cn.vuejs.org/guide/deployment.html","be96515c673712671d042337366ddf63"],["https://cn.vuejs.org/guide/events.html","0ebaec88003f2e1ab59ff868764d961a"],["https://cn.vuejs.org/guide/forms.html","09ead2d35e42cdd09d848b27ec357491"],["https://cn.vuejs.org/guide/index.html","e3171c7c94b236d5caa91894d8fdd581"],["https://cn.vuejs.org/guide/installation.html","8acd1ab4fbaa082958259bf3a22d7b22"],["https://cn.vuejs.org/guide/instance.html","61021765831307e8278d034c23502dd6"],["https://cn.vuejs.org/guide/join.html","f2287c54050c9b576ed05af7baf6af73"],["https://cn.vuejs.org/guide/list.html","772e05d65b4587501785906a4b681efd"],["https://cn.vuejs.org/guide/migration-vue-router.html","e0d8a3e2dc09e2bda939c23c1e967765"],["https://cn.vuejs.org/guide/migration-vuex.html","9b8659c8a4506acd24f2c0e3bee160f3"],["https://cn.vuejs.org/guide/migration.html","af37d4bfb217e88a7f02eb92c446497f"],["https://cn.vuejs.org/guide/mixins.html","270f751a44e1d1e18b9a31406a34fe8b"],["https://cn.vuejs.org/guide/plugins.html","40467c9724e4917ae32582ac543db41b"],["https://cn.vuejs.org/guide/reactivity.html","5b1e83c4a12b5f3e687e89e0a0b1ef05"],["https://cn.vuejs.org/guide/render-function.html","4139dd80783f9eecb92d57dcf23dc54d"],["https://cn.vuejs.org/guide/routing.html","f7f89a93550ee84e925ed84d6912a650"],["https://cn.vuejs.org/guide/single-file-components.html","095eb3d7152439579d7a56227fe273f4"],["https://cn.vuejs.org/guide/ssr.html","9143accd02c56349a3ec40d79eeefb4d"],["https://cn.vuejs.org/guide/state-management.html","81ea6d4aee3ef538b507e4a5a0c3e3a0"],["https://cn.vuejs.org/guide/syntax.html","611a256a910e0d1adfd5b418535e0ac1"],["https://cn.vuejs.org/guide/transitioning-state.html","3f36248a3d9f6f21f10725f15775c5d6"],["https://cn.vuejs.org/guide/transitions.html","4513c62165ee217697830a40e1795365"],["https://cn.vuejs.org/guide/unit-testing.html","0f69c6b7a8d743af6384b8a2208b9a33"],["100offer-main.png"/*tpa=https://cn.vuejs.org/images/100offer-main.png*/,"8d37ff203f0818315e97516ae2e9f4ba"],["100offer.png"/*tpa=https://cn.vuejs.org/images/100offer.png*/,"5fc04cb5266c2171ce5cc68ca6be8ea4"],["2mhost.png"/*tpa=https://cn.vuejs.org/images/2mhost.png*/,"4b8d618675f5ae2e25873930e0f1a33b"],["actualize.png"/*tpa=https://cn.vuejs.org/images/actualize.png*/,"caed3eca0208a349140a95b354d07382"],["anymod.png"/*tpa=https://cn.vuejs.org/images/anymod.png*/,"f85debec44ea29dd53d2e4f19eb889b4"],["chaitin.png"/*tpa=https://cn.vuejs.org/images/chaitin.png*/,"2e90c7e1644d533624b59194544aab8b"],["check.png"/*tpa=https://cn.vuejs.org/images/check.png*/,"1ab55a9d7d368f9e185314b4ee3e108a"],["coin-bch.png"/*tpa=https://cn.vuejs.org/images/coin-bch.png*/,"e9634e36f11c3f176b39b58e0820d049"],["coin-btc.png"/*tpa=https://cn.vuejs.org/images/coin-btc.png*/,"8047fc21916eb3615d0a4efe57f1c432"],["coin-eth.png"/*tpa=https://cn.vuejs.org/images/coin-eth.png*/,"cd0db0d4bc0a7bdd0663f4d01bdf1afd"],["coin-ltc.png"/*tpa=https://cn.vuejs.org/images/coin-ltc.png*/,"933d3713c8ac395d46df6cc4557a63e6"],["components.png"/*tpa=https://cn.vuejs.org/images/components.png*/,"c7b535e898bc597be0098040c2402f8b"],["data.png"/*tpa=https://cn.vuejs.org/images/data.png*/,"d777bbbf663f281783a84284ce7d3d18"],["datacamp.png"/*tpa=https://cn.vuejs.org/images/datacamp.png*/,"e8cd9907a77af393f0029a681707d831"],["dom-tree.png"/*tpa=https://cn.vuejs.org/images/dom-tree.png*/,"7ed63c53d0fe7e8e1c0a74332f6eb775"],["down.png"/*tpa=https://cn.vuejs.org/images/down.png*/,"39cee69a29f44c5ae8acacf0c7c0c9fe"],["famebroker.png"/*tpa=https://cn.vuejs.org/images/famebroker.png*/,"50c05f70a13a6ccf44ebc50d6b97263c"],["fancygrid.png"/*tpa=https://cn.vuejs.org/images/fancygrid.png*/,"06f2ce38e8497841593455ca53e58623"],["feed.png"/*tpa=https://cn.vuejs.org/images/feed.png*/,"fc48422363785bd7645699a57c9c9660"],["frontend-love.png"/*tpa=https://cn.vuejs.org/images/frontend-love.png*/,"13f1e90195ff2a1fa94aee3f84b79121"],["frontend-meetups.png"/*tpa=https://cn.vuejs.org/images/frontend-meetups.png*/,"4d67ea5944cde49c38173b904fff492b"],["geekbang.jpg"/*tpa=https://cn.vuejs.org/images/geekbang.jpg*/,"5d61b90673ef0f9ebe4f29a4e4236983"],["geekbang.png"/*tpa=https://cn.vuejs.org/images/geekbang.png*/,"01e13a8a35908530fe39a31c0b06d2bf"],["geekbang2.jpg"/*tpa=https://cn.vuejs.org/images/geekbang2.jpg*/,"e9383dba40eba15b7e7ea199c3212de1"],["geekbang3.gif"/*tpa=https://cn.vuejs.org/images/geekbang3.gif*/,"37dbf6a0429d8ed42c312047937c92b3"],["hn-architecture.png"/*tpa=https://cn.vuejs.org/images/hn-architecture.png*/,"08daea42db8838ab4762f25b68dc743a"],["hn.png"/*tpa=https://cn.vuejs.org/images/hn.png*/,"34849a03c242cc54b8fbab606902cbf3"],["htmlburger.png"/*tpa=https://cn.vuejs.org/images/htmlburger.png*/,"3c838f6dbddb1361e6019f521578171f"],["icons.png"/*tpa=https://cn.vuejs.org/images/icons.png*/,"24c9ea5274c732f8ec0ee13fb2361313"],["android-icon-144x144.png"/*tpa=https://cn.vuejs.org/images/icons/android-icon-144x144.png*/,"42d2c151cc101a4c42ac51bd96c8b24d"],["android-icon-192x192.png"/*tpa=https://cn.vuejs.org/images/icons/android-icon-192x192.png*/,"ad7d1af025254f7fb6c45917d26c0486"],["android-icon-36x36.png"/*tpa=https://cn.vuejs.org/images/icons/android-icon-36x36.png*/,"005fffcd0a3cce3dacf8856645501213"],["android-icon-48x48.png"/*tpa=https://cn.vuejs.org/images/icons/android-icon-48x48.png*/,"e898ac737b264364a216e2007b1fd7da"],["android-icon-72x72.png"/*tpa=https://cn.vuejs.org/images/icons/android-icon-72x72.png*/,"ad659ec7e8eae4a50b73145c69772d42"],["android-icon-96x96.png"/*tpa=https://cn.vuejs.org/images/icons/android-icon-96x96.png*/,"90c13bf806fb3b3749ef1f60cc5dc34c"],["apple-icon-114x114.png"/*tpa=https://cn.vuejs.org/images/icons/apple-icon-114x114.png*/,"69c4653429d7ac74ef8b968ad0676a19"],["apple-icon-120x120.png"/*tpa=https://cn.vuejs.org/images/icons/apple-icon-120x120.png*/,"3bb7b09526b130a7713f247e7db6b835"],["apple-icon-144x144.png"/*tpa=https://cn.vuejs.org/images/icons/apple-icon-144x144.png*/,"42d2c151cc101a4c42ac51bd96c8b24d"],["apple-icon-152x152.png"/*tpa=https://cn.vuejs.org/images/icons/apple-icon-152x152.png*/,"6f0e515bd57131a7e9c584c0a99492c6"],["apple-icon-180x180.png"/*tpa=https://cn.vuejs.org/images/icons/apple-icon-180x180.png*/,"91bc1dd313b750413e8e54349d2d7feb"],["apple-icon-57x57.png"/*tpa=https://cn.vuejs.org/images/icons/apple-icon-57x57.png*/,"d322b29db86a269ca682d6d54450a6d1"],["apple-icon-60x60.png"/*tpa=https://cn.vuejs.org/images/icons/apple-icon-60x60.png*/,"99b633995d668a30d869843d322cb2d5"],["apple-icon-72x72.png"/*tpa=https://cn.vuejs.org/images/icons/apple-icon-72x72.png*/,"ad659ec7e8eae4a50b73145c69772d42"],["apple-icon-76x76.png"/*tpa=https://cn.vuejs.org/images/icons/apple-icon-76x76.png*/,"293bd080883b88e811ec54fd1d17f04c"],["apple-icon-precomposed.png"/*tpa=https://cn.vuejs.org/images/icons/apple-icon-precomposed.png*/,"8366f4f77f84f5945d37c8b6b5e85466"],["apple-icon.png"/*tpa=https://cn.vuejs.org/images/icons/apple-icon.png*/,"8366f4f77f84f5945d37c8b6b5e85466"],["favicon-16x16.png"/*tpa=https://cn.vuejs.org/images/icons/favicon-16x16.png*/,"b0fb918340bdb38c3f82934c3b83da28"],["favicon-32x32.png"/*tpa=https://cn.vuejs.org/images/icons/favicon-32x32.png*/,"495a42102231b5a1e1999b969fe59ca9"],["favicon-96x96.png"/*tpa=https://cn.vuejs.org/images/icons/favicon-96x96.png*/,"90c13bf806fb3b3749ef1f60cc5dc34c"],["ms-icon-144x144.png"/*tpa=https://cn.vuejs.org/images/icons/ms-icon-144x144.png*/,"42d2c151cc101a4c42ac51bd96c8b24d"],["ms-icon-150x150.png"/*tpa=https://cn.vuejs.org/images/icons/ms-icon-150x150.png*/,"81b31836aa22a0861e979c3f798c2257"],["ms-icon-310x310.png"/*tpa=https://cn.vuejs.org/images/icons/ms-icon-310x310.png*/,"dc00a74758f465cf5545d759a7fc26fc"],["ms-icon-70x70.png"/*tpa=https://cn.vuejs.org/images/icons/ms-icon-70x70.png*/,"e20d096831d0fe142137fb69fd7c5915"],["infinitynewtab.png"/*tpa=https://cn.vuejs.org/images/infinitynewtab.png*/,"1137f7c599e5f5ff6a4bc393a7bb3b3a"],["itunescn.png"/*tpa=https://cn.vuejs.org/images/itunescn.png*/,"ca4a777f3e67fda2fc0c703e5a0f3845"],["jsfiddle.png"/*tpa=https://cn.vuejs.org/images/jsfiddle.png*/,"cdaaf61398b8ccde5fbfb28daab02dc2"],["juejin.png"/*tpa=https://cn.vuejs.org/images/juejin.png*/,"f8a801162a92753a9f69ee528ea72d81"],["laravel.png"/*tpa=https://cn.vuejs.org/images/laravel.png*/,"854ba2a1472cff4b73bbb98cc2bf6e74"],["lifecycle.png"/*tpa=https://cn.vuejs.org/images/lifecycle.png*/,"1d3dae65499d59846dfbfaaa7daae963"],["logged-proxied-data.png"/*tpa=https://cn.vuejs.org/images/logged-proxied-data.png*/,"72b84d29d68b46cb4772b225aaf581e9"],["logo.png"/*tpa=https://cn.vuejs.org/images/logo.png*/,"c2a605fbc0e687b2e1b4b90a7c445cdd"],["menu.png"/*tpa=https://cn.vuejs.org/images/menu.png*/,"f97c6cafce76896f725f56d22c33dc5d"],["monterail.png"/*tpa=https://cn.vuejs.org/images/monterail.png*/,"a1b2c43f5834a30140acf56a56ee3d7e"],["mvvm.png"/*tpa=https://cn.vuejs.org/images/mvvm.png*/,"edd0080fb145315fbc96164c219fee7e"],["neds.png"/*tpa=https://cn.vuejs.org/images/neds.png*/,"26976f4858a5bb554d3db85c64188e6e"],["onsen-ui.png"/*tpa=https://cn.vuejs.org/images/onsen-ui.png*/,"c9c5c8fc38c7121ca4d5b83438d1ce9e"],["patreon.png"/*tpa=https://cn.vuejs.org/images/patreon.png*/,"c55a20c3dface37cde7d1534e243c9fe"],["paypal.png"/*tpa=https://cn.vuejs.org/images/paypal.png*/,"70c8748866c09556ef5abb1a32496f25"],["props-events.png"/*tpa=https://cn.vuejs.org/images/props-events.png*/,"27584e95845e262286d25c47d44e0979"],["search.png"/*tpa=https://cn.vuejs.org/images/search.png*/,"57bde6918157195ab105e3c5d0967dec"],["someline.png"/*tpa=https://cn.vuejs.org/images/someline.png*/,"2e05b0cfb1eaa734666dab9e5f92cea1"],["state.png"/*tpa=https://cn.vuejs.org/images/state.png*/,"c4265cfefa02351484110c3c8d2a623a"],["stdlib.png"/*tpa=https://cn.vuejs.org/images/stdlib.png*/,"0c3292d4d501cfb819cf38e8324d9220"],["strikingly.png"/*tpa=https://cn.vuejs.org/images/strikingly.png*/,"c220cba956cba87d47c972340ef872d1"],["tde.png"/*tpa=https://cn.vuejs.org/images/tde.png*/,"dfd1f4c2d07907d379fc26e890827f14"],["tmvuejs2.png"/*tpa=https://cn.vuejs.org/images/tmvuejs2.png*/,"260af8aecb932915b0aff029550a80a4"],["tooltwist.png"/*tpa=https://cn.vuejs.org/images/tooltwist.png*/,"2ac56564865b514da3fd3c3532113c14"],["transition.png"/*tpa=https://cn.vuejs.org/images/transition.png*/,"ca34aef3910abf105dc112aa23026d54"],["upyun-large.png"/*tpa=https://cn.vuejs.org/images/upyun-large.png*/,"cd66170a5022b5c9444119e3fa5cb83a"],["upyun-main.jpg"/*tpa=https://cn.vuejs.org/images/upyun-main.jpg*/,"54d539ea772a02d69d71c290932e110b"],["upyun-small.png"/*tpa=https://cn.vuejs.org/images/upyun-small.png*/,"7a42625327e1495cec13cbe25c7a200d"],["vue-component-with-preprocessors.png"/*tpa=https://cn.vuejs.org/images/vue-component-with-preprocessors.png*/,"7288b0138807e76b63b20efcb73a1423"],["vue-component.png"/*tpa=https://cn.vuejs.org/images/vue-component.png*/,"15bcfe9fb8601c7599b1b2d21364cddb"],["vuejobs.png"/*tpa=https://cn.vuejs.org/images/vuejobs.png*/,"c623aef2e3089ed2849adc9ae6349627"],["https://cn.vuejs.org/images/vuejobs.svg","c31e68ce1f2663afbe9655c368c6dd35"],["vuejsadmin.png"/*tpa=https://cn.vuejs.org/images/vuejsadmin.png*/,"dd05607d35642239837fff531f3c4a09"],["vueschool.png"/*tpa=https://cn.vuejs.org/images/vueschool.png*/,"76826a1bd7948d115b1a8d774cf2eb25"],["vuetify.png"/*tpa=https://cn.vuejs.org/images/vuetify.png*/,"40e87e078618e137638baebe188029ad"],["xfive.png"/*tpa=https://cn.vuejs.org/images/xfive.png*/,"016402e334a83e4af9ff0958d39a7b0e"],["xiaozhuanlan-sidebar.png"/*tpa=https://cn.vuejs.org/images/xiaozhuanlan-sidebar.png*/,"bf39498271eb2d224410c8cb207e3091"],["xiaozhuanlan.png"/*tpa=https://cn.vuejs.org/images/xiaozhuanlan.png*/,"d7732ded0ee72192bf05ab43b191084f"],["https://cn.vuejs.org/index.html","19c7415b53d9543610432c9612c6d8c7"],["common.js"/*tpa=https://cn.vuejs.org/js/common.js*/,"5d096deda71e901179f81dcd39c6171d"],["css.escape.js"/*tpa=https://cn.vuejs.org/js/css.escape.js*/,"fe4db48c9e3f272a6d12cf1312de889e"],["smooth-scroll.min.js"/*tpa=https://cn.vuejs.org/js/smooth-scroll.min.js*/,"53a7fcc785e987d5ed08302f36de6653"],["vue.js"/*tpa=https://cn.vuejs.org/js/vue.js*/,"440e570c372631aa20b9c778ad9e7273"],["vue.min.js"/*tpa=https://cn.vuejs.org/js/vue.min.js*/,"9cfa1585246355bf21ba3980f5843cdb"],["https://cn.vuejs.org/manifest.json","bd8de9895abf2cc1faa760a8bd1004d8"],["https://cn.vuejs.org/menu/index.html","bd57b4fd938fb7e3981233c2617f99bb"],["https://cn.vuejs.org/page/2/index.html","ec3f6acd670bd1d30bcdecf7c1673914"],["https://cn.vuejs.org/support-vuejs/index.html","e0024d8ce40e58a9d75d13c4e0e32948"],["https://cn.vuejs.org/v2/api/index.html","89210213c68226734c8692c4355a558a"],["https://cn.vuejs.org/v2/cookbook/adding-instance-properties.html","48bcf18e8c95d4ab43396f81dcd81b20"],["https://cn.vuejs.org/v2/cookbook/cookbook-contributions.html","fec5975d479aded61d43fe3c95261328"],["https://cn.vuejs.org/v2/cookbook/form-validation.html","d61af1c5d2d4de816492d17140c332e0"],["https://cn.vuejs.org/v2/cookbook/index.html","addb8dc52c4186a16e2a17550bf4382d"],["https://cn.vuejs.org/v2/examples/commits.html","74dc1268fd2910e1b3160f1b817e1943"],["https://cn.vuejs.org/v2/examples/deepstream.html","1fe4ff8935c1f432dbeaee0aef59fbde"],["https://cn.vuejs.org/v2/examples/elastic-header.html","23018c657e2b1542eddb5f76b1c39718"],["https://cn.vuejs.org/v2/examples/firebase.html","128c5c1c8dfc99dad2817cb7fe2d97a8"],["https://cn.vuejs.org/v2/examples/grid-component.html","5670b2719eaf2a0ac2b44809a040f5ed"],["https://cn.vuejs.org/v2/examples/hackernews.html","4a95ac09f622af99b7f2da5824cf3181"],["https://cn.vuejs.org/v2/examples/index.html","76a390b87c73ec83c71f3eaeb89a9716"],["https://cn.vuejs.org/v2/examples/modal.html","ce67c6c433f54e4c4d9065308e64f290"],["https://cn.vuejs.org/v2/examples/select2.html","fd0a9935a05f41aeb401834a2b263815"],["https://cn.vuejs.org/v2/examples/svg.html","38e2432ac98a856d1ac4783d7dba630d"],["https://cn.vuejs.org/v2/examples/todomvc.html","673287dd2216a07a83027120d7129dd5"],["https://cn.vuejs.org/v2/examples/tree-view.html","7e1c0eab816e997324204bba0fe6685d"],["https://cn.vuejs.org/v2/guide/class-and-style.html","7c640265225e8edf0380905cdb91cc04"],["https://cn.vuejs.org/v2/guide/comparison.html","b22448e6fb47ef839e24e02c87c1dc9f"],["https://cn.vuejs.org/v2/guide/components.html","bcd01de0f018f71895ec1ad51b997b32"],["https://cn.vuejs.org/v2/guide/computed.html","2fb0044698833cc58b73b28b8f720996"],["https://cn.vuejs.org/v2/guide/conditional.html","16703e918042e4ffb73cac4ac9185995"],["https://cn.vuejs.org/v2/guide/custom-directive.html","2edc20fbf6f4b4608a6f5b67ef219179"],["https://cn.vuejs.org/v2/guide/deployment.html","89fe25c2a1179b37face093e989b9b64"],["https://cn.vuejs.org/v2/guide/events.html","3116ad2960082ccfa61bc967f61dadd0"],["https://cn.vuejs.org/v2/guide/filters.html","4a05f20b486f858435b4a0276efd5e15"],["https://cn.vuejs.org/v2/guide/forms.html","20230d0b7686ade522a02c44cc5c1656"],["https://cn.vuejs.org/v2/guide/index.html","8f92cb343d80a15e693ad6db85f37fe4"],["https://cn.vuejs.org/v2/guide/installation.html","f2de766fe98f48c0de3c8339bc87e302"],["https://cn.vuejs.org/v2/guide/instance.html","3c4479ae8c3f2bd182324b28fb45c195"],["https://cn.vuejs.org/v2/guide/join.html","a50df57b0d42387793004c6a3abb5222"],["https://cn.vuejs.org/v2/guide/list.html","431d561bade44e9391c41000c98c6d77"],["https://cn.vuejs.org/v2/guide/migration-vue-router.html","d497101c8cba56d9f802bc3b1fea3862"],["https://cn.vuejs.org/v2/guide/migration-vuex.html","242ab3fd6d0a7ce4104e2ef240e59b9c"],["https://cn.vuejs.org/v2/guide/migration.html","5a690dc75bc2679d62cfb9149dae9526"],["https://cn.vuejs.org/v2/guide/mixins.html","e81f58d09814202156f51e2ab72bb788"],["https://cn.vuejs.org/v2/guide/plugins.html","c94c73ebe49f3a36010b93daab1727b1"],["https://cn.vuejs.org/v2/guide/reactivity.html","c77c6a5732523a1d9e8f2b28119dc2be"],["https://cn.vuejs.org/v2/guide/render-function.html","27a2e2dbf86ba3d556c2a88f743c6ff1"],["https://cn.vuejs.org/v2/guide/routing.html","d0392532dd2bdadc945b2b66a3d97092"],["https://cn.vuejs.org/v2/guide/single-file-components.html","2ef15f3d3c030967d16b0fc7d7ec71e2"],["https://cn.vuejs.org/v2/guide/ssr.html","efc46a9640ea6659d6e801c1a2a26593"],["https://cn.vuejs.org/v2/guide/state-management.html","0459623e07f2eae972b06266494a4624"],["https://cn.vuejs.org/v2/guide/syntax.html","b7724489dee5bb1a0cb17e75a96d4c7d"],["https://cn.vuejs.org/v2/guide/team.html","82c97d2bbad9397b8da6b8a0e311b43e"],["https://cn.vuejs.org/v2/guide/transitioning-state.html","5982c6bbb7057a67ffe9acd2bbd1a352"],["https://cn.vuejs.org/v2/guide/transitions.html","287dd834e8c18768e151904d71ed6673"],["https://cn.vuejs.org/v2/guide/typescript.html","874f4706a522d01e609fe68f10cdf022"],["https://cn.vuejs.org/v2/guide/unit-testing.html","22fad522f23fe297f78a985afbe0392b"],["https://cn.vuejs.org/v2/style-guide/index.html","a9323eca58d51be8bf0f0ca843eaad74"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'https://cn.vuejs.org/index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'https://cn.vuejs.org/index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"https://cn.vuejs.org/sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"https://cn.vuejs.org/ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://cn.vuejs.org/cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://cn.vuejs.org/fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://cn.vuejs.org/fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://cn.vuejs.org/cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://cn.vuejs.org/maxcdn.bootstrapcdn.com"});




