!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=37)}([function(e,t,n){"use strict";let r=e=>!!(e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0),i=e=>!(!e||"object"!=typeof e),o=e=>"function"==typeof e,a=(e,t)=>{if(!r(e))throw new TypeError(s(e,"list"));if(!o(t))throw new TypeError(s(t,"function"));for(let n=0;n<e.length;n++)if(!t(e[n]))return!1;return!0},s=(e,t)=>`Expect ${t} type, but got type ${typeof e}, and value is ${e}`;e.exports={isArray:e=>Array.isArray(e),likeArray:r,isString:e=>"string"==typeof e,isObject:i,isFunction:o,isNumber:e=>"number"==typeof e&&!isNaN(e),isBool:e=>"boolean"==typeof e,isNode:e=>"object"==typeof Node?e instanceof Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName,isPromise:e=>e&&"object"==typeof e&&"function"==typeof e.then&&"function"==typeof e.catch,isNull:e=>null===e,isUndefined:e=>void 0===e,isFalsy:e=>!e,isRegExp:e=>e instanceof RegExp,isReadableStream:e=>i(e)&&o(e.on)&&o(e.pipe),isWritableStream:e=>i(e)&&o(e.on)&&o(e.write),funType:(e,t=[])=>{if(!o(e))throw new TypeError(s(e,"function"));if(!r(t))throw new TypeError(s(t,"array"));for(let e=0;e<t.length;e++){let n=t[e];if(n&&!o(n))throw new TypeError(s(n,"function"))}return function(){for(let n=0;n<t.length;n++){let r=t[n],i=arguments[n];if(r&&!r(i))throw new TypeError(`Argument type error. Arguments order ${n}. Argument is ${i}. function is ${e}, args are ${arguments}.`)}return e.apply(this,arguments)}},any:a,exist:(e,t)=>{if(!r(e))throw new TypeError(s(e,"array"));if(!o(t))throw new TypeError(s(t,"function"));for(let n=0;n<e.length;n++)if(t(e[n]))return!0;return!1},and:(...e)=>{if(!a(e,o))throw new TypeError("The argument of and must be function.");return t=>{for(let n=0;n<e.length;n++)if(!(0,e[n])(t))return!1;return!0}},or:(...e)=>{if(!a(e,o))throw new TypeError("The argument of and must be function.");return t=>{for(let n=0;n<e.length;n++)if((0,e[n])(t))return!0;return!1}},not:e=>{if(!o(e))throw new TypeError("The argument of and must be function.");return t=>!e(t)},mapType:e=>{if(!i(e))throw new TypeError(s(e,"obj"));for(let t in e){let n=e[t];if(!o(n))throw new TypeError(s(n,"function"))}return t=>{if(!i(t))return!1;for(let n in e)if(!(0,e[n])(t[n]))return!1;return!0}},listType:e=>{if(!o(e))throw new TypeError(s(e,"function"));return t=>a(t,e)},truth:()=>!0}},function(e,t,n){"use strict";let{isObject:r,funType:i,or:o,isString:a,isFalsy:s,likeArray:l}=n(0),u=n(8),{map:d,reduce:p,find:c,findIndex:f,forEach:m,filter:g,any:h,exist:y,compact:b}=n(19),v=(e,t,n)=>-1!==f(e,t,n),w=(e,t,n)=>(e[n]=t,e),x=(e,t,n=[])=>p(e,(e,n)=>(v(e,n,t)||e.push(n),e),n),k=i((e,t="")=>{let n=(t=t.trim())?t.split("."):[];return p(n,j,e,T)},[r,o(a,s)]),j=(e,t)=>e[t],T=e=>!e,E=e=>l(e)&&!a(e)?p(e,(e,t)=>e=e.concat(E(t)),[]):[e];e.exports={flat:E,contain:v,difference:(e,t,n)=>p(e,(e,r)=>(v(t,r,n)||v(e,r,n)||e.push(r),e),[]),union:(e,t,n)=>x(t,n,x(e,n)),interset:(e,t,n)=>p(e,(e,r)=>(v(t,r,n)&&e.push(r),e),[]),map:d,reduce:p,iterate:u,find:c,findIndex:f,deRepeat:x,forEach:m,filter:g,any:h,exist:y,get:k,delay:e=>new Promise(t=>{setTimeout(t,e)}),mergeMap:(e={},t={})=>p(t,w,p(e,w,{})),compact:b}},function(module,exports,__webpack_require__){"use strict";let{reduce:reduce}=__webpack_require__(16),{funType:funType,isObject:isObject,or:or,isString:isString,isFalsy:isFalsy}=__webpack_require__(0),defineProperty=(e,t,n)=>(Object.defineProperty?Object.defineProperty(e,t,n):e[t]=n.value,e),hasOwnProperty=(e,t)=>{if(e.hasOwnProperty)return e.hasOwnProperty(t);for(var n in e)if(n===t)return!0;return!1},toArray=(e=[])=>Array.prototype.slice.call(e),get=funType((e,t="")=>{let n=(t=t.trim())?t.split("."):[];return reduce(n,getValue,e,invertLogic)},[isObject,or(isString,isFalsy)]),getValue=(e,t)=>e[t],invertLogic=e=>!e,set=(e,t="",n)=>{let r=(t=t.trim())?t.split("."):[],i=e;if(isObject(i)&&r.length){for(let e=0;e<r.length-1;e++)if(i=i[r[e]],!isObject(i))return null;return i[r[r.length-1]]=n,!0}},authProp=e=>{let t=(t,n,r)=>{t[n]={token:e,value:r}};return{set:(n,r,i)=>{let o=null;hasOwnProperty(n,r)||defineProperty(n,r,{enumerable:!1,configurable:!1,set:t=>{isObject(t)&&t.token===e&&(o=t.value)},get:()=>o}),t(n,r,i)}}},evalCode=code=>"string"!=typeof code?code:eval(`(function(){\n    try {\n        ${code}\n    } catch(err) {\n        console.log('Error happened, when eval code.');\n        throw err;\n    }\n})()`),delay=e=>new Promise(t=>{setTimeout(t,e)}),runSequence=(e,t=[],n,r)=>{if(!e.length)return Promise.resolve();let i=e[0],o=i&&i.apply(n,t);return r&&o===r?Promise.resolve(r):Promise.resolve(o).then(()=>runSequence(e.slice(1),t,n,r))};module.exports={defineProperty:defineProperty,hasOwnProperty:hasOwnProperty,toArray:toArray,get:get,set:set,authProp:authProp,evalCode:evalCode,delay:delay,runSequence:runSequence}},function(e,t,n){"use strict";let r=n(21),{listenEventType:i,attachDocument:o,dispatchEvent:a}=r();e.exports={bindEvents:(e,t)=>{e.__eventMap=t;for(let e in t)i(e)},attachDocument:o,dispatchEvent:a}},function(e,t,n){"use strict";let{map:r}=n(1),{isObject:i,isNode:o}=n(0),a=n(23);let s=e=>(...t)=>{let{tagName:n,attributes:r,childs:i}=a(t);l(r)&&(i=[r],r={}),u(r.plugin,n,r,i);let{attrMap:o,eventMap:s}=d(r);return{tagName:n,attrMap:o,eventMap:s,elementType:e,type:"kabanery_node",childNodes:i}},l=e=>i(e)&&"kabanery_node"===e.type,u=(e=[],t,n,r)=>{for(let i=0;i<e.length;i++){let o=e[i];o&&o(t,n,r)}},d=e=>{let t={},n={};for(let r in e){let i=e[r];0===r.indexOf("on")?n[r.substring(2)]=i:"plugin"!==r&&(t[r]=i)}return{attrMap:t,eventMap:n}},p=e=>{if(o(e))return e.outerHTML;if(l(e)){let{tagName:t,attrMap:n,childNodes:i}=e,o=r(n,(e,t)=>`${t}="${e}"`).join(" ");return o=o?" "+o:"",`<${t}${o}>${r(i,p).join("")}</${t}>`}return e+""};e.exports={n:s("html"),svgn:s("svg"),cn:s,bindPlugs:(e,t=[])=>(...n)=>{let{tagName:r,attributes:i,childs:o}=a(n),s=i.plugin=i.plugin||[];return i.plugin=s.concat(t),e(r,i,o)},isKabaneryNode:l,toHTML:p,parseArgs:a}},function(e,t,n){"use strict";let{createElement:r,createSvgElement:i}=n(25),{bindEvents:o}=n(3),{map:a}=n(1),{isKabaneryNode:s}=n(4),l=e=>{if(s(e)){let t=null;return t="html"===e.elementType?r(e.tagName,e.attrMap,a(e.childNodes,l)):i(e.tagName,e.attrMap,a(e.childNodes,l)),o(t,e.eventMap),t}return e};e.exports=l},function(e,t,n){"use strict";let{isPromise:r,likeArray:i,isObject:o,funType:a,isFunction:s,isUndefined:l,or:u,isNumber:d,isFalsy:p,isReadableStream:c,mapType:f}=n(0),m=a((e,t={})=>(e=e||[],r(e)?e.then(e=>m(e,t)):g(e,t)),[u(r,o,s,p),u(l,f({predicate:u(s,p),transfer:u(s,p),output:u(s,p),limit:u(l,d,s)}))]),g=(e,t)=>{let n=(t=h(t,e)).def,r=0;if(c(e)){let i=-1;return new Promise((o,a)=>{e.on("data",a=>{let s=y(a,e,++i,r,n,t);n=s.rets,r=s.count,s.stop&&o(n)}),e.on("end",()=>{o(n)}),e.on("error",e=>{a(e)})})}if(i(e))for(let i=0;i<e.length;i++){let o=e[i],a=y(o,e,i,r,n,t);if(n=a.rets,r=a.count,a.stop)return n}else if(o(e))for(let i in e){let o=e[i],a=y(o,e,i,r,n,t);if(n=a.rets,r=a.count,a.stop)return n}return n},h=(e,t)=>{let{predicate:n,transfer:r,output:i,limit:o}=e;return e.predicate=n||w,e.transfer=r||k,e.output=i||v,void 0===o&&(o=t&&t.length),o=e.limit=b(o),e},y=(e,t,n,r,i,{predicate:o,transfer:a,output:s,limit:l})=>l(i,e,n,t,r)?{stop:!0,count:r,rets:i}:(o(e)&&(i=s(i,a(e,n,t,i),n,t),r++),{stop:!1,count:r,rets:i}),b=e=>l(e)?x:d(e)?(t,n,r,i,o)=>o>=e:e,v=(e,t)=>(e.push(t),e),w=()=>!0,x=()=>!1,k=e=>e;e.exports={iterate:m}},function(e,t,n){"use strict";let{likeArray:r,isObject:i,funType:o,isFunction:a,isUndefined:s,or:l,isNumber:u,isFalsy:d,mapType:p}=n(0),c=o((e=[],t={})=>{let{predicate:n,transfer:o,output:a,limit:s,def:l}=t;t.predicate=n||h,t.transfer=o||b,t.output=a||g,void 0===s&&(s=e&&e.length),s=t.limit=m(s);let u=l,d=0;if(r(e))for(let n=0;n<e.length;n++){let r=f(e,n,d,u,t);if(u=r.rets,d=r.count,r.stop)return u}else if(i(e))for(let n in e){let r=f(e,n,d,u,t);if(u=r.rets,d=r.count,r.stop)return u}return u},[l(i,a,d),l(s,p({predicate:l(a,d),transfer:l(a,d),output:l(a,d),limit:l(s,u,a)}))]),f=(e,t,n,r,{predicate:i,transfer:o,output:a,limit:s})=>{let l=e[t];return s(r,l,t,e,n)?{stop:!0,count:n,rets:r}:(i(l)&&(r=a(r,o(l,t,e,r),t,e),n++),{stop:!1,count:n,rets:r})},m=e=>s(e)?y:u(e)?(t,n,r,i,o)=>o>=e:e,g=(e,t)=>(e.push(t),e),h=()=>!0,y=()=>!1,b=e=>e;e.exports=c},function(e,t,n){"use strict";let{likeArray:r,isObject:i,funType:o,isFunction:a,isUndefined:s,or:l,isNumber:u,isFalsy:d,mapType:p}=n(0),c=o((e=[],t={})=>{let{predicate:n,transfer:o,output:a,limit:s,def:l}=t;t.predicate=n||h,t.transfer=o||b,t.output=a||g,void 0===s&&(s=e&&e.length),s=t.limit=m(s);let u=l,d=0;if(r(e))for(let n=0;n<e.length;n++){let r=f(e,n,d,u,t);if(u=r.rets,d=r.count,r.stop)return u}else if(i(e))for(let n in e){let r=f(e,n,d,u,t);if(u=r.rets,d=r.count,r.stop)return u}return u},[l(i,a,d),l(s,p({predicate:l(a,d),transfer:l(a,d),output:l(a,d),limit:l(s,u,a)}))]),f=(e,t,n,r,{predicate:i,transfer:o,output:a,limit:s})=>{let l=e[t];return s(r,l,t,e,n)?{stop:!0,count:n,rets:r}:(i(l)&&(r=a(r,o(l,t,e,r),t,e),n++),{stop:!1,count:n,rets:r})},m=e=>s(e)?y:u(e)?(t,n,r,i,o)=>o>=e:e,g=(e,t)=>(e.push(t),e),h=()=>!0,y=()=>!1,b=e=>e;e.exports=c},function(e,t,n){"use strict";let{attachDocument:r}=n(3),{isNode:i}=n(0),{flat:o,forEach:a}=n(1),s=n(5);e.exports=((e,t)=>{e=o(e),a(e,e=>{e=s(e),i(e)&&t.appendChild(e)}),r(l(t))});let l=e=>{for(;e.parentNode;)e=e.parentNode;return e}},function(e,t,n){n(36)({name:"Arre Chen\n[readme-lang:zh]陈俊宇",age:27,avatar:"./avatar.jpg",gender:"male\n[readme-lang:zh]男",country:"China\n[readme-lang:zh]中国",residence:"HangZhou\n[readme-lang:zh]北京",email:"chenjunyuwork@gmail.com",blog:"http://lovekino.github.io",phone:"(+86) 17701038758",bio:["Love challenges.\n[readme-lang:zh]热爱挑战。","Love to explore and practice interesting ideas.\n[readme-lang:zh]喜欢探索、实践有趣的想法。","Fast learner, love to learn cool things.\n[readme-lang:zh]喜欢学习有趣的知识。"],avatarPath:"./res/avatar.jpg",github:"https://github.com/LoveKino",linkedIn:"http://www.linkedin.com/in/arre-chen",workingYears:5,targetPosition:"web developer/software developer",education:[{university:"Sichuan university\n[readme-lang:zh]四川大学",duration:{start:"2009",end:"2013"},degree:"bachelor\n[readme-lang:zh]本科",major:"computer technology and science\n[readme-lang:zh]计算机科学与技术",GPA:"3.6/4.0"}],workExperience:[{orgnization:"Meituan\n[readme-lang:zh]美团大众点评",duration:{start:"2015.07",end:"2017.08"},jobTitle:"Full stack engineer\n[readme-lang:zh]前端工程师",department:"front basic technology group\n[readme-lang:zh]前端基础技术组",jobContent:"Applied new technolgies, solved tough problems. Built a testing project from zero and applied to company, improved testing efficiency of QA and developers. Technical service and support, leaded new teammates."},{orgnization:"Baidu\n[readme-lang:zh]百度",duration:{start:"2014.07",end:"2015.07"},jobTitle:"Front end engineer\n[readme-lang:zh]前端工程师",department:"Baidu takeout BU\n[readme-lang:zh]百度外卖事业部",jobContent:"Reformed front end technology stack, advocated full stack. Leaded some projects, developed frameworks and tools, leaded new teammates."},{orgnization:"Csair\n[readme-lang:zh]南航",duration:{start:"2012.10",end:"2014.07"},jobContent:"Developed and maintained business system software (java and front end).\n[readme-lang:zh]业务系统的软件开发(前端和java)",department:"",jobTitle:"Software engineer\n[readme-lang:zh]软件工程师"}],projects:[{name:"freekite",duration:{start:"2016.07",end:"2017.08"},role:["project leader"],bio:"Automated process testing tool\n[readme-lang:zh]自动化测试工具",profile:"An approach to test business process for QA & Dev to reduce the manpower.\n[readme-lang:zh] 一种提供给测试和研发使用的减少人力为目的的测试业务流程的方法。",skills:["electron","nodeJs","javascript","android","webpack","html5","css3","golang","ruby","rethinkdb","pm2"],traits:["case management","node finding algorithm","web standard","automatic flexible UI assertions","service scheduling","multiple systems"],outcome:"Successfully applied to some business units of Meituan.",features:["Test business process by recoding, playing, asserting, reporting which all based on UI operations.\n[readme-lang:zh]基于UI操作的录制、回放、断言、报告等测试业务流程.","Node finding algorithm. According to the data collected by recoding, applying node finding algorithm can stably find suitable node when playback.\n[readme-lang:zh]节点寻找算法，根据录制采集的节点和环境数据能够稳定地在回放时找到合适的节点.","Manage cases based on action tree, reuse actions from different cases.\n[readme-lang:zh]基于Action Tree的case管理，复用动作，降低case管理复杂度","Automatic flexible UI assertions. Fetch information from page to generate assertions.\n[readme-lang:zh]自动化UI断言，自动从页面提取信息，生成UI断言","Service scheduling. Run cases in server side, schedule user test jobs."]},{name:"node UI-layer framework",duration:{start:"2015.06",end:"2015.06"},company:"Baidu",bio:"business migration",profile:"Build a node UI framework to migrate Baidu takeout UI logic layer from php to node.",role:["project leader"],skills:["node","express","pm2","mocha","headdump"],traits:["split app","DI","middlewares","dif business norm","auto testing"],outcome:"Carrying all traffic from web side (high point about 100qps) steadily with less machines."},{name:"user-side webapp SPA refactor",duration:{start:"2015.02",end:"2015.02"},url:"http://waimai.baidu.com/mobile/waimai",role:["project leader"],profile:"User-side webapp was a multiple page framework which based on fisp + smarty. To impove the user experience, we developed the SPA framework.",skills:["html5","zepto","smarty","pagelets"],traits:["memory auto clean","preloading","page cache","configurable between SPA & MPA"],outcome:"Faster and smoother user experience."},{name:"vane",duration:{start:"2015.12",end:"2016.5"},company:"Meituan",role:["develop front end and back end","design product"],bio:"interface management platform",profile:"An interface management platform, which used a simple doc-base language and user interface to define interfaces to generate api documents, api unit tests and api mocks.",skills:["node","koa","mocha","react","webpack","rethinkdb","pm2"],traits:["doc-base language","CS + BS"],features:[]},{name:"takeout & nuomi component",duration:{start:"2015.05",end:"2015.05"},role:["develop business","develop offline script"],company:"Baidu",skills:["html5","zepto","ral"],bio:"html5-native hybrid",profile:"Embed Baidu takeout business to the nuomi app in the form of hybird.",traits:["multiple webview hybrid","local mock","fraud mechanism","aspect monitor"]},{name:"user-side webapp customization framework",duration:{start:"2015.03",end:"2015.03"},role:["design and build the framework"],profile:"Baidu takeout is a O2O business, traffic channels(Wechat, Map ...) are important. Embeded into different channels with H5 form and with different customized effect or functions. This solution is built to solve the problem.",skills:["smarty","fisp","zepto"],traits:["non-invasion","customization norm","resource granularity"]}],sideProjects:[{name:"docway",profile:"Generate documents for a project.",url:"https://github.com/LoveKino/docway"},{name:"browser-js-env",profile:"Run js code in local browsers by CLI or API.",url:"https://github.com/LoveKino/browser-js-env"},{name:"kabanery",profile:"Data-driven, easy-composing front end view DSL.",url:"https://github.com/LoveKino/kabanery"},{name:"syntaxer",profile:"Build AST based on BNF and LR1.",url:"https://github.com/LoveKino/syntaxer"},{name:"pfc-compiler",profile:"PFC is simple, basic data types + function composition.",url:"https://github.com/LoveKino/syntaxer"},{name:"kabanery-lumine",duration:{start:"2017.05",end:"today\n[readme-lang:zh]今"},role:["owner"],bio:"DSL based front end framework",url:"https://github.com/LoveKino/kabanery-lumine",profile:"DSL based, Data migration from signal system, Common views integration Front End framework",skills:["javascript","css","html","nodeJs","compiler"],traits:["view definition DSL","RPC DSL","common views","theme system","signal system","handler framework and DSL"],features:["Data migration system. Signal system, simple DSL to update page, simple DSL to request and response data.","Common views, theme system, skelton tools and other tools."]},{name:"nenc",duration:{start:"2017.05",end:"today\n[readme-lang:zh]今"},role:["owner"],bio:"A language and compilers trying to unify platforms",type:"opensource",url:"https://github.com/LoveKino/nenc",profile:"Compiled to other platform languages, like javascript, java ...\n[readme-lang:zh]一种简单的跨平台、易混合的函数式语言，编译成其他平台如：JavaScript、java等语言.",skills:["c++","nodeJs","java","compiler"],traits:["micro-interpreters","easy-hybrid","lazy evaluation"],features:["Lazy evaluation, Magic bottom-up re-evaluation mechanism, ...","It's easy to hybrid nenc code with host code. You can config host files as libraries, and you also can embed nenc code to host code.\n[readme-lang:zh]混合nenc的代码和宿主代码会很容易。你可以配置宿主代码的文件作为库引入到nenc中，也可以嵌入nenc的代码到宿主代码中。","I wrote the general Lexical Analyzer and the general Syntax Analysis.\n[readme-lang:zh]我编写了通用的词法和语法分析器","A general semantic analysis method by using pfc as middle code.\n[readme-lang:zh]通过将pfc作为中间代码，定义了一种通用的语义分析方法","Micro-interpreters for js, java, ..."]}],skills:{proficient:[{name:"javascript"},{name:"node"},{name:"html5"},{name:"css3"},{name:"react"},{name:"jquery"},{name:"webpack"},{name:"OOP"},{name:"FP"},{name:"TDD"}],familiar:[{name:"compiler"},{name:"algorithm"},{name:"java"},{name:"shell"},{name:"rethinkdb"},{name:"Test Automation"}],normal:[{name:"c++"},{name:"android"},{name:"ruby"},{name:"golang"},{name:"MongoDB"}]}})},function(e,t,n){"use strict";let{isObject:r,funType:i,or:o,isString:a,isFalsy:s,likeArray:l}=n(0),u=n(6),{map:d,reduce:p,find:c,findIndex:f,forEach:m,filter:g,any:h,exist:y,compact:b,reverse:v,overArgs:w}=n(12),x=(e,t,n)=>-1!==f(e,t,n),k=(e,t,n)=>(e[n]=t,e),j=(e,t,n=[])=>p(e,(e,n)=>(x(e,n,t)||e.push(n),e),n),T=i((e,t="")=>{let n=(t=t.trim())?t.split("."):[];return p(n,E,e,A)},[r,o(a,s)]),E=(e,t)=>e[t],A=e=>!e,P=e=>l(e)&&!a(e)?p(e,(e,t)=>e=e.concat(P(t)),[]):[e];e.exports={flat:P,contain:x,difference:(e,t,n)=>p(e,(e,r)=>(x(t,r,n)||x(e,r,n)||e.push(r),e),[]),union:(e,t,n)=>j(t,n,j(e,n)),interset:(e,t,n)=>p(e,(e,r)=>(x(t,r,n)&&e.push(r),e),[]),map:d,reduce:p,iterate:u,find:c,findIndex:f,deRepeat:j,forEach:m,filter:g,any:h,exist:y,get:T,delay:e=>new Promise(t=>{setTimeout(t,e)}),mergeMap:(e={},t={})=>p(t,k,p(e,k,{})),compact:b,reverse:v,overArgs:w}},function(e,t,n){"use strict";let{iterate:r}=n(6),{isFunction:i}=n(0),o={eq:(e,t)=>e===t},a=(e,t)=>{for(let n in t)e[n]=e[n]||t[n]},s=(e,t,n,i)=>r(e,{output:t,def:n,limit:i}),l=(e,t,n={})=>{a(n,o);let{eq:s}=n,l=i(t)?t:e=>s(t,e),p=r(e,{transfer:u,limit:d,predicate:l,def:[]});return p.length?p[0]:-1},u=(e,t)=>t,d=(e,t,n,r,i)=>i>=1,p=e=>!e,c=e=>!!e;e.exports={overArgs:(e,t)=>(...n)=>{let r=t(...n);return e(...r)},map:(e,t,n)=>r(e,{transfer:t,def:[],limit:n}),forEach:(e,t)=>r(e,{limit:e=>!0===e,transfer:t,output:(e,t)=>t,def:!1}),reduce:s,find:(e,t,n)=>{let r=l(e,t,n);if(-1!==r)return e[r]},findIndex:l,filter:(e,t,n)=>s(e,(e,n,r,i)=>(t&&t(n,r,i)&&e.push(n),e),[],n),any:(e,t)=>s(e,(e,n,r,i)=>{let o=t&&t(n,r,i);return e&&c(o)},!0,p),exist:(e,t)=>s(e,(e,n,r,i)=>{let o=t&&t(n,r,i);return e||c(o)},!1,c),compact:e=>s(e,(e,t)=>(t&&e.push(t),e),[]),reverse:e=>s(e,(e,t)=>(e.unshift(t),e),[])}},function(e,t,n){"use strict";let r=n(14),i=n(15),o=e=>{for(var t=0;e;)t+=e.offsetLeft,e=e.offsetParent;return t},a=e=>{for(var t=0;e;)t+=e.offsetTop,e=e.offsetParent;return t};e.exports={getX:o,getY:a,getClientX:e=>o(e)-window.scrollX,getClientY:e=>a(e)-window.scrollY,removeChilds:e=>{for(;e&&e.firstChild;)e.removeChild(e.firstChild)},once:(e,t,n,r)=>{let i=function(o){let a=n.apply(this,[o]);return e.removeEventListener(t,i,r),a};e.addEventListener(t,i,r)},shadowFrame:r,getAttributeMap:(e=[])=>{let t={};for(let n=0;n<e.length;n++){let{name:r,value:i}=e[n];t[r]=i}return t},startMomenter:i,getClasses:(e="")=>{let t=[],n=e.split(" ");for(let e=0;e<n.length;e++){let r=n[e];(r=r.trim())&&t.push(r)}return t}}},function(e,t,n){"use strict";e.exports=(()=>{let e=document.createElement("div"),t=e.createShadowRoot();t.innerHTML='<div id="shadow-page"></div>';let n=null,r=()=>(document.getElementsByTagName("html")[0].appendChild(e),t.getElementById("shadow-page"));return{start:()=>n||(n=new Promise(e=>{document.body?e(r()):document.addEventListener("DOMContentLoaded",()=>{e(r())})})),close:()=>{n.then(()=>{let t=e.parentNode;t&&t.removeChild(e)})},sr:t,rootDiv:e}})},function(e,t,n){"use strict";let r=e=>"complete"===e.readyState||!e.attachEvent&&"interactive"===e.readyState;e.exports=((e=document)=>{let t=!1,n=[];return(()=>{let r=()=>{if(!t){t=!0;for(let e=0;e<n.length;e++)n[e]();n=[]}};e.addEventListener?(e.addEventListener("DOMContentLoaded",r),e.addEventListener("DOMContentLoaded",r)):e.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&r()})})(),({generalWaitTime:i=0,startTimeout:o=1e4}={})=>new Promise((a,s)=>{t||r(e)?setTimeout(a,i):(n.push(a),setTimeout(()=>{s(new Error("timeout"))},o))})})},function(e,t,n){"use strict";let{isObject:r,funType:i,or:o,isString:a,isFalsy:s,likeArray:l}=n(0),u=n(7),{map:d,reduce:p,find:c,findIndex:f,forEach:m,filter:g,any:h,exist:y,compact:b}=n(17),v=(e,t,n)=>-1!==f(e,t,n),w=(e,t,n)=>(e[n]=t,e),x=(e,t,n=[])=>p(e,(e,n)=>(v(e,n,t)||e.push(n),e),n),k=i((e,t="")=>{let n=(t=t.trim())?t.split("."):[];return p(n,j,e,T)},[r,o(a,s)]),j=(e,t)=>e[t],T=e=>!e,E=e=>l(e)&&!a(e)?p(e,(e,t)=>e=e.concat(E(t)),[]):[e];e.exports={flat:E,contain:v,difference:(e,t,n)=>p(e,(e,r)=>(v(t,r,n)||v(e,r,n)||e.push(r),e),[]),union:(e,t,n)=>x(t,n,x(e,n)),interset:(e,t,n)=>p(e,(e,r)=>(v(t,r,n)&&e.push(r),e),[]),map:d,reduce:p,iterate:u,find:c,findIndex:f,deRepeat:x,forEach:m,filter:g,any:h,exist:y,get:k,delay:e=>new Promise(t=>{setTimeout(t,e)}),mergeMap:(e={},t={})=>p(t,w,p(e,w,{})),compact:b}},function(e,t,n){"use strict";let r=n(7),i={eq:(e,t)=>e===t},o=(e,t)=>{for(let n in t)e[n]=e[n]||t[n]},a=(e,t,n,i)=>r(e,{output:t,def:n,limit:i}),s=(e,t,n={})=>{o(n,i);let{eq:a}=n,s=r(e,{transfer:l,limit:u,predicate:e=>a(t,e),def:[]});return s.length?s[0]:-1},l=(e,t)=>t,u=(e,t,n,r,i)=>i>=1,d=e=>!e,p=e=>!!e;e.exports={map:(e,t,n)=>r(e,{transfer:t,def:[],limit:n}),forEach:(e,t)=>r(e,{limit:e=>!0===e,transfer:t,output:(e,t)=>t,def:!1}),reduce:a,find:(e,t,n)=>{let r=s(e,t,n);if(-1!==r)return e[r]},findIndex:s,filter:(e,t,n)=>a(e,(e,n,r,i)=>(t&&t(n,r,i)&&e.push(n),e),[],n),any:(e,t)=>a(e,(e,n,r,i)=>{let o=t&&t(n,r,i);return e&&p(o)},!0,d),exist:(e,t)=>a(e,(e,n,r,i)=>{let o=t&&t(n,r,i);return e||p(o)},!1,p),compact:e=>a(e,(e,t)=>(t&&e.push(t),e),[])}},function(e,t,n){"use strict";e.exports=n(22)},function(e,t,n){"use strict";let r=n(8),i={eq:(e,t)=>e===t},o=(e,t)=>{for(let n in t)e[n]=e[n]||t[n]},a=(e,t,n,i)=>r(e,{output:t,def:n,limit:i}),s=(e,t,n={})=>{o(n,i);let{eq:a}=n,s=r(e,{transfer:l,limit:u,predicate:e=>a(t,e),def:[]});return s.length?s[0]:-1},l=(e,t)=>t,u=(e,t,n,r,i)=>i>=1,d=e=>!e,p=e=>!!e;e.exports={map:(e,t,n)=>r(e,{transfer:t,def:[],limit:n}),forEach:(e,t)=>r(e,{limit:e=>!0===e,transfer:t,output:(e,t)=>t,def:!1}),reduce:a,find:(e,t,n)=>{let r=s(e,t,n);if(-1!==r)return e[r]},findIndex:s,filter:(e,t,n)=>a(e,(e,n,r,i)=>(t&&t(n,r,i)&&e.push(n),e),[],n),any:(e,t)=>a(e,(e,n,r,i)=>{let o=t&&t(n,r,i);return e&&p(o)},!0,d),exist:(e,t)=>a(e,(e,n,r,i)=>{let o=t&&t(n,r,i);return e||p(o)},!1,p),compact:e=>a(e,(e,t)=>(t&&e.push(t),e),[])}},function(e,t,n){"use strict";let{n:r}=n(4),{isArray:i,isFunction:o,isObject:a}=n(0),{map:s}=n(1);e.exports=((...e)=>{let t=e[0],n={},l=[];return i(e[1])?l=e[1]:o(e[1])?l=[e[1]]:a(e[1])&&(n=e[1],i(e[2])?l=e[2]:o(e[2])&&(l=[e[2]])),(...e)=>{let a=t=>s(t,t=>i(t)?a(t):o(t)?t(...e):t);return r(t,n,a(l))}})},function(e,t,n){"use strict";let{contain:r}=n(1);e.exports=(()=>{let e=[],t={},n={},a=t=>{e.length||e.push(document);for(let n=0;n<e.length;n++){let r=e[n];s(r,t)}},s=(e,t)=>{let r=null;n[t]?r=n[t]:(r=l(t),n[t]=r),e.addEventListener(t,r)},l=e=>(function(t){let n=this,r=t.target,o=t.stopPropagation;t.stopPropagation=function(...e){return t.__stopPropagation=!0,o&&o.apply(this,e)};let a=i(r);for(let r=0;r<a.length;r++){let i=a[r];u(t,e,i,n)}}),u=(e,t,n,r)=>{if(e.__stopPropagation)return!0;let i=d(t,n);return i&&i.apply(r,[e])},d=(e,t)=>{let n=t&&t.__eventMap;return n&&n[e]};return{listenEventType:e=>{t[e]||a(e),t[e]=!0},attachDocument:(n=document)=>{if(!r(e,n)){for(let e in t){let t=o(e);n[t]||(s(n,e),n[t]=!0)}e.push(n)}},dispatchEvent:(e,t)=>{let r=n[e];r&&r(t)}}});let i=e=>{let t=[];for(;e;)t.push(e),e=e.parentNode;return t},o=e=>`__event_type_id_${e}`},function(e,t,n){"use strict";let{n:r,svgn:i,bindPlugs:o,toHTML:a,parseArgs:s,isKabaneryNode:l,cn:u}=n(4),d=n(27),p=n(31),c=n(9),f=n(20),m=n(5),{dispatchEvent:g}=n(3);e.exports={n:r,isKabaneryNode:l,cn:u,N:f,svgn:i,view:p,plugs:d,bindPlugs:o,mount:c,toHTML:a,reduceNode:m,parseArgs:s,dispatchEvent:g}},function(e,t,n){"use strict";let r=n(24),{isString:i,isObject:o,isNode:a,likeArray:s,isNumber:l,isBool:u}=n(0),d=(e="")=>{let t=e.split(" ")[0],n=e.substring(t.length);return(n=n&&n.trim())?[t,n]:[t]},p=e=>{let t=[];if(a(e))t.push(e);else if(s(e))for(let n=0;n<e.length;n++){let r=e[n];t=t.concat(p(r))}else e&&t.push(e);return t};e.exports=(e=>{let t,n={},c=[],f=e.shift(),m=d(f);m.length>1?(t=m[0],n=m[1]):t=f,t=t.toLowerCase().trim();let g=e.shift(),h={};return s(g)||i(g)||a(g)||l(g)||u(g)?c=g:o(g)&&(h=g,c=e.shift()||[]),{tagName:t,attributes:n=r(n,h),childs:p(c)}})},function(e,t,n){"use strict";let{isString:r,isObject:i}=n(0),{mergeMap:o}=n(1);const a=/([\w-]+)\s*=\s*(([\w-]+)|('.*?')|(".*?"))/;let s=(e="")=>{if(r(e))return e;if(!i(e))throw new TypeError(`Expect object for style object, but got ${e}`);let t=[];for(let n in e){let r=e[n];n=l(n),r=u(r,n),t.push(`${n}: ${r}`)}return t.join(";")},l=e=>e.replace(/[A-Z]/,e=>`-${e.toLowerCase()}`),u=(e,t)=>{if("number"==typeof e&&"z-index"!==t)return e+"px";if("padding"===t||"margin"===t){let t=e.split(" ");for(let e=0;e<t.length;e++){let n=t[e];isNaN(Number(n))||(t[e]=n+"px")}e=t.join(" ")}return e};e.exports=((e,t)=>{if(r(e)){let t=e.trim(),n=[],r=!1;for(;!r;){let e=t.replace(a,(e,t,r)=>(n.push([t,r]),"")).trim();e===t&&(r=!0),t=e}e={};for(let t=0;t<n.length;t++){let[r,i]=n[t];("'"===i[0]&&"'"===i[i.length-1]||'"'===i[0]&&'"'===i[i.length-1])&&(i=i.substring(1,i.length-1)),e[r]=i}}return(e=o(e,t)).style&&(e.style=s(e.style)),e})},function(e,t,n){"use strict";let{isNode:r}=n(0);let i=(e,t,n)=>{for(let n in t){let r=t[n];e.setAttribute(n,r)}for(let t=0;t<n.length;t++){let i=n[t];r(i)?e.appendChild(i):e.textContent=i+""}};e.exports={createElement:(e,t,n)=>{let r=document.createElement(e);return i(r,t,n),r},createSvgElement:(e,t,n)=>{let r=document.createElementNS("http://www.w3.org/2000/svg",e);return i(r,t,n),r}}},function(e,t,n){"use strict";e.exports=(e=>(t,n)=>{for(let t in n){let i=n[t];0===t.indexOf("on")&&"function"==typeof i&&(n[t]=r(i,e))}});let r=(e,t)=>(function(){try{let n=e.apply(this,arguments);return(n=Promise.resolve(n)).catch(t),n}catch(e){return t(e)}})},function(e,t,n){"use strict";let r=n(28),i=n(26);e.exports={twowaybinding:r,eventError:i}},function(e,t,n){"use strict";let{get:r,set:i}=n(2);e.exports=((e,t)=>(n,o,a)=>{let s=r(e,t,"");"input"===n?o.value=s:a.unshift(s),o.oninput||(o.oninput=(n=>{i(e,t,n.target.value)}))})},function(e,t,n){"use strict";let{getAttributeMap:r}=n(13),{hasOwnProperty:i}=n(2),{forEach:o}=n(1);e.exports=((e,t)=>{let n=r(e.attributes),a=r(t.attributes);o(n,(t,n)=>{if(i(a,n)){let r=a[n];r!==t&&e.setAttribute(n,r)}else e.removeAttribute(n)}),o(a,(t,r)=>{i(n,r)||e.setAttribute(r,t)})})},function(e,t,n){"use strict";let{toArray:r}=n(2),{isNode:i}=n(0),{forEach:o}=n(1),a=n(29),s=(e,t)=>{let n=e.parentNode;return n?(n.replaceChild(t,e),t):e},l=e=>{let t=e.parentNode;t&&t.removeChild(e)},u=(e,t)=>{if(!t)return l(e);if(3===e.nodeType&&3===t.nodeType&&(e.textContent=t.textContent),i(e)&&i(t)){if(3===e.nodeType&&3===t.nodeType)return e.textContent=t.textContent,e;if(e.tagName!==t.tagName||"INPUT"===e.tagName)return s(e,t);d(e,t)}return e},d=(e,t)=>{a(e,t),t.ctx&&t.ctx.transferCtx(e),t.__eventMap&&(e.__eventMap=t.__eventMap);let n=r(e.childNodes),i=r(t.childNodes);p(n,i,e)},p=(e,t,n)=>(c(e,t),o(e,(e,n)=>{u(e,t[n])}),f(e,t,n),e),c=(e,t)=>{for(let n=t.length;n<e.length;n++)l(e[n])},f=(e,t,n)=>{for(let r=e.length;r<t.length;r++){let e=t[r];n.appendChild(e)}};e.exports=((e,t)=>{let n=null;return e?t?n=u(e,t):(l(e),n=null):n=t,n})},function(e,t,n){"use strict";let{set:r}=n(2),{isObject:i,isFunction:o,likeArray:a}=n(0),{forEach:s}=n(1),l=n(30),u=n(5),d=n(9),p=(e,t,{afterRender:n}={})=>{let r=(r,i)=>{let o=f({view:e,afterRender:n});return c(o,r,i,t)},i=r=>{r.create=(r=>{let i=f({view:e,afterRender:n});r&&r(i);let o=(e,n)=>c(i,e,n,t);return o.ctx=i,o}),r.expand=((e={})=>{let t=(...t)=>{let n=t[0];return t[0]=p.ext(n,e),r(...t)};return i(t),t})};return i(r),r};p.ext=((e,t={})=>n=>{for(let e in t)n[e]=t[e];return o(e)?e(n):e});let c=(e,t,n,r)=>{let i=e.initData(t,e);return n&&n(i,e),r&&r(i,e),e.replaceView()},f=({view:e,afterRender:t})=>{let n=null,i=null,p=null,c=()=>{let e=f();return e=u(e),n=l(n,e),t&&t(g),n&&(n.ctx=g),n},f=()=>{p||(p=e);let t=p(i,g);return o(t)?(p=t)(i,g):t},g={update:(...e)=>{if(!e.length)return c();if(1===e.length&&a(e[0])){let t=e[0];return s(t,e=>{r(i,e[0],e[1])}),c()}{let[t,n]=e;return o(n)&&(n=n(i)),r(i,t,n),c()}},getNode:()=>n,getData:()=>i,transferCtx:e=>{n=e,e.ctx=g},initData:(e={})=>i=m(e,g),replaceView:c,appendView:e=>{n&&d(e,n)},getCtx:()=>g};return g},m=(e,t)=>{let n=null;if(n=o(e)?e(t):e,!i(n))throw new TypeError(`Expect object, but got ${n}. Type is ${typeof n}`);return n};e.exports=p},function(e,t,n){"use strict";let r=(e,t,n="en")=>{t=t||n;let r=i(e);return r.hasOwnProperty(t)?r[t]:r[n]},i=e=>{let t={},n="en",r=e.split("\n");for(let e=0;e<r.length;e++){let i=r[e],a=o(i);if(a){let{type:e,next:r}=a;t[e]=t[e]||[],t[e].push(r),n=e}else t[n]=t[n]||[],t[n].push(i)}return t},o=e=>{let t=/^\s*\[readme\-lang\:(.*)\](.*)$/.exec(e);return!!t&&{type:t[1],next:t[2]}};e.exports={getLangText:(e,t)=>r(e,t).join("\n"),filterTextByLang:r,matchLang:o,breakTextByLang:i}},function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"=";var a={};if("string"!=typeof e||0===e.length)return a;var s=/\+/g;e=e.split(t);var l=1e3;o&&"number"==typeof o.maxKeys&&(l=o.maxKeys);var u=e.length;l>0&&u>l&&(u=l);for(var d=0;d<u;++d){var p,c,f,m,g=e[d].replace(s,"%20"),h=g.indexOf(n);h>=0?(p=g.substr(0,h),c=g.substr(h+1)):(p=g,c=""),f=decodeURIComponent(p),m=decodeURIComponent(c),r(a,f)?i(a[f])?a[f].push(m):a[f]=[a[f],m]:a[f]=m}return a};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";function r(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var i=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,s){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?r(a(e),function(a){var s=encodeURIComponent(i(a))+n;return o(e[a])?r(e[a],function(e){return s+encodeURIComponent(i(e))}).join(t):s+encodeURIComponent(i(e[a]))}).join(t):s?encodeURIComponent(i(s))+n+encodeURIComponent(i(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},a=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},function(e,t,n){"use strict";t.decode=t.parse=n(33),t.encode=t.stringify=n(34)},function(e,t,n){"use strict";let{n:r,mount:i}=n(18),{map:o}=n(11),{getLangText:a}=n(32),s=n(35);e.exports=(({name:e,bio:t,github:n,blog:f,linkedIn:m,residence:g,country:h,phone:y,email:b,skills:v,workingYears:w,workExperience:x,projects:k,sideProjects:j,education:T})=>{let E=s.parse(window.location.search.substring(1)).lang,A=e=>a(e,E);return i(r("div",{style:{textAlign:"center",width:"100%",color:"rgb(85,85,85)",padding:"24 0 0 0"}},[r("div",{style:{fontFamily:"Arial",padding:"0 8 0 8",textAlign:"left",width:700,display:"inline-block"}},[r("div",{style:{borderBottom:"1px solid black",padding:"0 0 2 0",fontSize:14,color:"rgb(100,100,100)"}},[r("span",{style:{fontSize:26,fontWeight:"bold",padding:"0 10 0 0"}},A(e)),r("span",`${A(g)}, ${A(h)}`),r('span style="padding:0 15px"',"|"),r("span",A(y)),r('span style="padding:0 15px"',"|"),r("span",A(b))]),r("div",{style:{display:"flex",flexDirection:"row",padding:"8 0 0 0",fontSize:14}},[r("div",{style:{flex:"1.3",lineHeight:20}},o(t,e=>r("li",[A(e)]))),r("div",{style:{flex:"1",lineHeight:20,marginLeft:10}},[r("div",[r("div",{style:{width:70,display:"inline-block",textAlign:"right",marginRight:5}},[r("div",{style:{fontWeight:"bold",display:"inline-block",padding:"0 5 0 5",backgroundColor:"rgb(238,238,238)",color:"rgb(153,153,153)",borderLeft:"3px solid rgb(148,195,128)"}},"GitHub")]),r(`a target="blank" href="${n}"`,{style:{textDecoration:"none",color:"rgb(100,100,100)"}},n)]),r("div",[r("div",{style:{width:70,display:"inline-block",textAlign:"right",marginRight:5}},[r("div",{style:{fontWeight:"bold",padding:"0 5 0 5",display:"inline-block",backgroundColor:"rgb(238,238,238)",color:"rgb(153,153,153)",borderTop:"3px solid rgb(148,195,128)"}},"Blog")]),r(`a target="blank" href="${f}"`,{style:{textDecoration:"none",color:"rgb(100,100,100)"}},f)]),r("div",[r("div",{style:{width:70,display:"inline-block",textAlign:"right",marginRight:5}},[r("div",{style:{fontWeight:"bold",padding:"0 5 0 5",backgroundColor:"rgb(238,238,238)",display:"inline-block",color:"rgb(153,153,153)",borderRight:"3px solid rgb(148,195,128)"}},"LinkedIn")]),r(`a target="blank" href="${m}"`,{style:{textDecoration:"none",color:"rgb(100,100,100)"}},m)])])]),c(`Work Experience (${w}+ years)`),o(x,({orgnization:e,duration:t,jobTitle:n,department:i,jobContent:o})=>r("div",{style:{margin:"0 0 10 0"}},[r("div",[r("div",{style:{display:"inline-block",width:120,fontSize:14}},`${t.start} - ${A(t.end)}`),r("span",{style:{}},[r("span",{style:{fontWeight:"bold"}},A(e)),i&&r("span",{style:{padding:"0 5"}},"|"),r("span",{style:{fontSize:14}},A(i)),r("span",{style:{paddingLeft:20,fontWeight:"bold"}},`${A(n)}`)])]),r("div",{style:{paddingLeft:120,fontSize:14}},[r("div",`${A(o)}`)])])),c("Project Experience"),u(k.slice(0,3),{getText:A}),c("Side Projects"),l(j.slice(0,5),{getText:A}),r("div",{style:{fontSize:14,padding:"6 0 0 0"}},[r("span","See more side projects of mine, please visit my github "),d("https://github.com/LoveKino")]),c("Main Skills"),r('div style="font-size:14px;"',[Object.keys(v).map(e=>v[e]&&r("ul",{style:{padding:0,margin:0,fontSize:14}},[p(e,r("span",[o(v[e],({name:e})=>r('div style="display:inline-block;padding-right:14px"',[e])),r("span","...")]))]))]),c("Education"),o(T,({university:e,duration:t,degree:n,major:i,GPA:o})=>r("div",[r("div",{style:{fontWeight:"bold"}},[r("div",A(e)),r("span",{style:{fontSize:14}},[r("span",{style:{paddingLeft:20}},[r("span",t.start),r("span","-"),r("span",A(t.end))]),r("span",{style:{paddingLeft:20}},A(i)),r("span",{style:{paddingLeft:20}},A(n)),o&&r("span",{style:{paddingLeft:20}},`GPA: ${A(o)}`)])])]))])]),document.body)});let l=(e,{getText:t})=>o(e,({name:e,url:n,profile:i})=>r("div",{style:{margin:0,display:"flex",flexDirection:"row",fontSize:14}},[r("div",{style:{flex:"1"}},t(e)),r("div",{style:{flex:"6"}},[r("span",{style:{padding:"0 4 0 0"}},t(i)),d(n)])])),u=(e,{getText:t})=>o(e,({name:e,url:n,profile:i,skills:a,traits:s,duration:l,role:u,outcome:c})=>r("div",{style:{margin:"4 0 10 0"}},[r("div",{style:{fontWeight:"bold"}},[r("span",{style:{padding:"0 10 0 0"}},t(e)),r("div",{style:{display:"inline-block",fontSize:14,fontWeight:"normal",color:"rgb(194,194,194)"}},[l&&r("div",{style:{display:"inline-block",padding:"0 10 0 0"}},`${t(l.start)} - ${t(l.end)}`),r("div",{style:{display:"inline-block"}},u.join(", "))])]),r("ul",{style:{padding:0,margin:0,fontSize:14}},[i&&p("content",[r("span",t(i))]),a&&p("techs",o(a,(e,n)=>r("li",{style:{display:"inline-block",marginRight:5}},[r("span",t(e)),n<a.length-1?r("span",","):null]))),s&&p("features",o(s,(e,n)=>r("li",{style:{display:"inline-block",marginRight:5}},[r("span",t(e)),n<s.length-1?r("span",","):null]))),c&&p("outcome",c),n&&p("url",[d(n)])])])),d=e=>r(`a href="${e}"`,{style:{textDecoration:"none",color:"rgb(64,105,211)"}},e),p=(e,t)=>r("li",{style:{marginLeft:24}},[r("div",{style:{width:"10%",float:"left"}},`${e}:`),r("div",{style:{width:"90%",float:"right"}},t),r('div style="clear:both"')]),c=e=>r("h3",{style:{margin:"12 0 6 0",padding:0}},e)},function(e,t,n){e.exports=n(10)}]);