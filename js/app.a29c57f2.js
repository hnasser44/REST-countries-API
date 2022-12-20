(function(){"use strict";var e={5405:function(e,t,n){var o=n(9242),r=n(3396),a=n(7362);function s(e,t,n,o,s,u){const i=(0,r.up)("Header"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(a.q,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i),(0,r.Wm)(c)])),_:1})}var u=n(7139);const i=e=>((0,r.dD)("data-v-1e269083"),e=e(),(0,r.Cn)(),e),c=i((()=>(0,r._)("div",{class:"title"},[(0,r._)("h1",null,"Where in the world?")],-1))),l=i((()=>(0,r._)("i",{class:"fas fa-moon"},null,-1))),d=i((()=>(0,r._)("span",null,"Dark Mode",-1))),f=[l,d],p=i((()=>(0,r._)("i",{class:"fas fa-sun"},null,-1))),g=i((()=>(0,r._)("span",null,"Light Mode",-1))),m=[p,g],h=i((()=>(0,r._)("hr",null,null,-1)));function y(e,t,n,o,a,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",{class:(0,u.C_)(e.getDarkMode?"dark-mode":"")},[c,e.getDarkMode?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",{key:0,onClick:t[0]||(t[0]=(...e)=>s.changeTheme&&s.changeTheme(...e)),class:"theme"},f)),e.getDarkMode?((0,r.wg)(),(0,r.iD)("div",{key:1,onClick:t[1]||(t[1]=(...e)=>s.changeTheme&&s.changeTheme(...e)),class:"theme"},m)):(0,r.kq)("",!0)],2),h],64)}var v=n(65),k={name:"Header",data:()=>({}),computed:{...(0,v.Se)(["getDarkMode"])},methods:{changeTheme(){this.$store.commit("setDarkMode",!this.getDarkMode)}}},_=n(89);const C=(0,_.Z)(k,[["render",y],["__scopeId","data-v-1e269083"]]);var w=C,b={name:"App",components:{Header:w},data:()=>({})};const D=(0,_.Z)(b,[["render",s]]);var M=D,j=n(2483),O=(n(2087),n(9533));const S={class:"filter-cont"},N={class:"countries-cont"},T=["onClick"],z={class:"flag"},U=["src"],A={class:"country-info"},B={class:"country-name"},F={class:"country-population"},P=(0,r._)("span",null,"Population:",-1),q={class:"country-region"},H=(0,r._)("span",null,"Region:",-1),R={class:"country-capital"},E=(0,r._)("span",null,"Capital:",-1);function x(e,t,n,o,a,s){const i=(0,r.up)("SearchInput");return(0,r.wg)(),(0,r.iD)("div",{class:(0,u.C_)(e.getDarkMode?"wrapper":"")},[(0,r.Wm)(i),(0,r._)("div",S,[(0,r.Wm)(O.r,{label:"Filter by Region",items:["Africa","America","Asia","Europe","Oceania"],modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selected=t),"bg-color":"white"},null,8,["modelValue"])]),(0,r._)("div",N,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getCountries,(t=>((0,r.wg)(),(0,r.iD)("div",{onClick:e=>s.test(t.name),class:(0,u.C_)(["country",e.getDarkMode?"dark-mode-card":""]),key:t.area},[(0,r._)("div",z,[(0,r._)("img",{src:t.flags.svg,alt:"flag"},null,8,U)]),(0,r._)("div",A,[(0,r._)("h2",B,(0,u.zw)(t.name),1),(0,r._)("p",F,[P,(0,r.Uk)(" "+(0,u.zw)(t.population),1)]),(0,r._)("p",q,[H,(0,r.Uk)(" "+(0,u.zw)(t.region),1)]),(0,r._)("p",R,[E,(0,r.Uk)(" "+(0,u.zw)(t.capital),1)])])],10,T)))),128))])],2)}n(7658);var W=n(8231);const Z={class:"box"},$={key:0,class:"box"};function I(e,t,n,a,s,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("form",Z,[(0,r.Wm)(W.hw,{label:"Search for a country...","prepend-inner-icon":"mdi-magnify",modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=t=>e.search=t),onKeypress:(0,o.D2)(i.check,["enter"]),"bg-color":"white"},null,8,["modelValue","onKeypress"])]),e.getCountryNotFound?((0,r.wg)(),(0,r.iD)("div",$,[(0,r._)("p",{class:(0,u.C_)(e.getDarkMode?"dark-mode-error":"")},"Sorry, no results found",2)])):(0,r.kq)("",!0)],64)}var L={name:"SearchInput",data:()=>({search:""}),methods:{...(0,v.nv)(["searchCountry"]),check(e){e.preventDefault(),this.searchCountry(this.search),this.search=""}},computed:{...(0,v.Se)(["getCountryNotFound","getDarkMode"])}};const V=(0,_.Z)(L,[["render",I],["__scopeId","data-v-312d0c86"]]);var Y=V;const K=e=>((0,r.dD)("data-v-ed086ac4"),e=e(),(0,r.Cn)(),e),G=K((()=>(0,r._)("i",{class:"fas fa-arrow-left"},null,-1))),J=K((()=>(0,r._)("span",null,"Back",-1))),Q={class:"flag"},X=["src"],ee={class:"country-info"},te={class:"country-name"},ne={class:"country-population"},oe=K((()=>(0,r._)("span",null,"Population:",-1))),re={class:"country-region"},ae=K((()=>(0,r._)("span",null,"Region:",-1))),se={class:"country-sub-region"},ue=K((()=>(0,r._)("span",null,"Sub Region:",-1))),ie={class:"country-capital"},ce=K((()=>(0,r._)("span",null,"Capital:",-1))),le={class:"country-top-level-domain"},de=K((()=>(0,r._)("span",null,"Top Level Domain:",-1))),fe={class:"country-currencies"},pe=K((()=>(0,r._)("span",null,"Currencies:",-1))),ge={class:"country-languages"},me=K((()=>(0,r._)("span",null,"Languages:",-1))),he={key:0,class:"country-border-countries"},ye=K((()=>(0,r._)("span",null,"Border Countries:",-1))),ve={key:1,class:"country-border-countries"},ke=K((()=>(0,r._)("span",null,"Border Countries:",-1)));function _e(e,t,n,o,a,s){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{class:(0,u.C_)([e.getDarkMode?"dark-mode-goBack":"","goBack"])},[(0,r.Wm)(i,{to:"/",class:"link"},{default:(0,r.w5)((()=>[G,J])),_:1})],2),e.loaded?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,u.C_)(e.getDarkMode?"dark-mode-card":"")},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getSingleCountryDetails,(t=>((0,r.wg)(),(0,r.iD)("div",{class:(0,u.C_)(["country",e.getDarkMode?"dark-mode-card":""]),key:t},[(0,r._)("div",Q,[(0,r._)("img",{src:t.flags.svg,alt:"flag"},null,8,X)]),(0,r._)("div",ee,[(0,r._)("h2",te,(0,u.zw)(t.name),1),(0,r._)("p",ne,[oe,(0,r.Uk)(" "+(0,u.zw)(t.population),1)]),(0,r._)("p",re,[ae,(0,r.Uk)(" "+(0,u.zw)(t.region),1)]),(0,r._)("p",se,[ue,(0,r.Uk)(" "+(0,u.zw)(t.subregion),1)]),(0,r._)("p",ie,[ce,(0,r.Uk)(" "+(0,u.zw)(t.capital),1)]),(0,r._)("p",le,[de,(0,r.Uk)(" "+(0,u.zw)(t.topLevelDomain.join(", ")),1)]),(0,r._)("p",fe,[pe,(0,r.Uk)(" "+(0,u.zw)(t.currencies.map((e=>e.name)).join(", ")),1)]),(0,r._)("p",ge,[me,(0,r.Uk)(" "+(0,u.zw)(t.languages.map((e=>e.name)).join(", ")),1)]),t.borders?((0,r.wg)(),(0,r.iD)("p",he,[ye,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.borders,(e=>((0,r.wg)(),(0,r.iD)("button",{key:e},(0,u.zw)(e),1)))),128))])):(0,r.kq)("",!0),t.borders?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("p",ve,[ke,(0,r.Uk)(" N/A ")]))])],2)))),128))],2)):(0,r.kq)("",!0)],64)}var Ce={name:"CardDetails",data:()=>({Country:{},loaded:!1,languages:[],currencies:[]}),methods:{...(0,v.nv)(["getCountryByName"])},computed:{...(0,v.Se)(["getSingleCountryDetails","getDarkMode"])},mounted(){this.getCountryByName(this.$route.query.name),this.loaded=!0}};const we=(0,_.Z)(Ce,[["render",_e],["__scopeId","data-v-ed086ac4"]]);var be=we,De={name:"Card",components:{SearchInput:Y,CardDetails:be},data:()=>({selected:null}),methods:{...(0,v.nv)(["fetchAllCountries","filterByRegion"]),test(e){this.$router.push({path:"/Countries",query:{name:`${e}`}})}},computed:{...(0,v.Se)(["getCountries","getDarkMode"])},mounted(){this.fetchAllCountries()},watch:{selected(){this.filterByRegion(this.selected)}}};const Me=(0,_.Z)(De,[["render",x]]);var je=Me;const Oe=[{path:"/",name:"Card",component:je},{path:"/Countries",name:"CardDetails",component:be}],Se=(0,j.p7)({history:(0,j.PO)("/"),routes:Oe});var Ne=Se,Te=n(4311),ze=(0,v.MT)({state:{Countries:[],SingleCountryDetails:{},CountryNotFound:!1,darkMode:!1},getters:{getCountries(e){return e.Countries},getSingleCountryDetails(e){return e.SingleCountryDetails},getCountryNotFound(e){return e.CountryNotFound},getDarkMode(e){return e.darkMode}},mutations:{setCountries(e,t){e.Countries=t},setSingleCountryDetails(e,t){e.SingleCountryDetails=t},setCountryNotFound(e,t){e.CountryNotFound=t},setDarkMode(e,t){e.darkMode=t}},actions:{async fetchAllCountries({commit:e}){const t=await Te.Z.get("https://restcountries.com/v2/all"),n=await t.data;e("setCountries",n)},async getCountryByName({commit:e},t){const n=await Te.Z.get(`https://restcountries.com/v2/name/${t}`),o=await n.data;console.log(o),e("setSingleCountryDetails",o)},async filterByRegion({commit:e},t){e("setCountries",[]);const n=await fetch(`https://restcountries.com/v2/region/${t}`),o=await n.json();e("setCountries",o)},async searchCountry({commit:e},t){fetch(`https://restcountries.com/v2/name/${t}`).then((e=>e.json())).then((t=>{404===t.status?e("setCountryNotFound",!0):(e("setCountryNotFound",!1),e("setCountries",t))})).catch((e=>{console.error("something went wrong")}))}},modules:{}}),Ue=(n(9773),n(8957)),Ae=(0,Ue.Rd)();async function Be(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Be(),(0,o.ri)(M).use(Ne).use(ze).use(Ae).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var s=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var u=!0,i=0;i<o.length;i++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[i])}))?o.splice(i--,1):(u=!1,a<s&&(s=a));if(u){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var a=Object.create(null);n.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&o;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){s[e]=function(){return o[e]}}));return s["default"]=function(){return o},n.d(a,s),a}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.6373b5a8.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="rest-countries-api:";n.l=function(o,r,a,s){if(e[o])e[o].push(r);else{var u,i;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=o),e[o]=[r];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var s=n.p+n.u(t),u=new Error,i=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,r[1](u)}};n.l(s,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,s=o[0],u=o[1],i=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(i)var l=i(n)}for(t&&t(o);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkrest_countries_api"]=self["webpackChunkrest_countries_api"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5405)}));o=n.O(o)})();
//# sourceMappingURL=app.a29c57f2.js.map