import{A as e,D as t,K as n,L as r,M as i,S as a,X as o,Y as s,a as c,d as l,i as u,it as d,k as f,nt as p,o as m,ot as h,s as g,tt as _,u as v}from"./BUGhTafE.js";import"./xihTtKlq.js";function y(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function b(e){if(Array.isArray(e))return e}function x(e){if(Array.isArray(e))return y(e)}function ee(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,ce(r.key),r)}}function ne(e,t,n){return t&&te(e.prototype,t),n&&te(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=ue(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function C(e,t,n){return(t=ce(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ie(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ae(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?w(Object(n),!0).forEach(function(t){C(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function E(e,t){return b(e)||ie(e,t)||ue(e,t)||ae()}function D(e){return x(e)||re(e)||ue(e)||oe()}function se(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ce(e){var t=se(e,`string`);return typeof t==`symbol`?t:t+``}function le(e){"@babel/helpers - typeof";return le=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},le(e)}function ue(e,t){if(e){if(typeof e==`string`)return y(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}var de=function(){},fe={},pe={},me=null,he={mark:de,measure:de};try{typeof window<`u`&&(fe=window),typeof document<`u`&&(pe=document),typeof MutationObserver<`u`&&(me=MutationObserver),typeof performance<`u`&&(he=performance)}catch{}var ge=(fe.navigator||{}).userAgent,_e=ge===void 0?``:ge,O=fe,k=pe,ve=me,ye=he;O.document;var A=!!k.documentElement&&!!k.head&&typeof k.addEventListener==`function`&&typeof k.createElement==`function`,be=~_e.indexOf(`MSIE`)||~_e.indexOf(`Trident/`),xe,Se=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ce=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,we={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Te={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ee=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],j=`classic`,M=`duotone`,De=`sharp`,Oe=`sharp-duotone`,ke=`chisel`,Ae=`etch`,je=`graphite`,Me=`jelly`,Ne=`jelly-duo`,Pe=`jelly-fill`,Fe=`notdog`,Ie=`notdog-duo`,Le=`slab`,Re=`slab-press`,ze=`thumbprint`,Be=`utility`,Ve=`utility-duo`,He=`utility-fill`,Ue=`whiteboard`,We=`Classic`,Ge=`Duotone`,Ke=`Sharp`,qe=`Sharp Duotone`,Je=`Chisel`,Ye=`Etch`,Xe=`Graphite`,Ze=`Jelly`,Qe=`Jelly Duo`,$e=`Jelly Fill`,et=`Notdog`,tt=`Notdog Duo`,nt=`Slab`,rt=`Slab Press`,it=`Thumbprint`,at=`Utility`,ot=`Utility Duo`,st=`Utility Fill`,ct=`Whiteboard`,lt=[j,M,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue];xe={},C(C(C(C(C(C(C(C(C(C(xe,j,We),M,Ge),De,Ke),Oe,qe),ke,Je),Ae,Ye),je,Xe),Me,Ze),Ne,Qe),Pe,$e),C(C(C(C(C(C(C(C(C(xe,Fe,et),Ie,tt),Le,nt),Re,rt),ze,it),Be,at),Ve,ot),He,st),Ue,ct);var ut={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},dt={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},ft=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),pt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},mt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ht={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},gt=[`kit`];C(C({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var _t={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},vt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},yt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},bt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},xt,St={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ct=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];xt={},C(C(C(C(C(C(C(C(C(C(xt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),C(C(C(C(C(C(C(C(C(xt,`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),C(C({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var wt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Tt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Et={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Dt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Ct,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Ot=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],kt=[1,2,3,4,5,6,7,8,9,10],At=kt.concat([11,12,13,14,15,16,17,18,19,20]),jt=[].concat(D(Object.keys(Tt)),Ot,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,St.GROUP,St.SWAP_OPACITY,St.PRIMARY,St.SECONDARY],kt.map(function(e){return`${e}x`}),At.map(function(e){return`w-${e}`})),Mt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},N=`___FONT_AWESOME___`,Nt=16,Pt=`fa`,Ft=`svg-inline--fa`,P=`data-fa-i2svg`,It=`data-fa-pseudo-element`,Lt=`data-fa-pseudo-element-pending`,Rt=`data-prefix`,zt=`data-icon`,Bt=`fontawesome-i2svg`,Vt=`async`,Ht=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ut=[`::before`,`::after`,`:before`,`:after`],Wt=function(){try{return!0}catch{return!1}}();function F(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[j]}})}var Gt=T({},we);Gt[j]=T(T(T(T({},{"fa-duotone":`duotone`}),we[j]),ht.kit),ht[`kit-duotone`]);var Kt=F(Gt),qt=T({},pt);qt[j]=T(T(T(T({},{duotone:`fad`}),qt[j]),bt.kit),bt[`kit-duotone`]);var Jt=F(qt),Yt=T({},Et);Yt[j]=T(T({},Yt[j]),yt.kit);var Xt=F(Yt),Zt=T({},wt);Zt[j]=T(T({},Zt[j]),_t.kit),F(Zt);var Qt=Se,$t=`fa-layers-text`,en=Ce;F(T({},ut));var tn=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],nn=Te,rn=[].concat(D(gt),D(jt)),I=O.FontAwesomeConfig||{};function an(e){var t=k.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function on(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}k&&typeof k.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=E(e,2),n=t[0],r=t[1],i=on(an(n));i!=null&&(I[r]=i)});var sn={styleDefault:`solid`,familyDefault:j,cssPrefix:Pt,replacementClass:Ft,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};I.familyPrefix&&(I.cssPrefix=I.familyPrefix);var L=T(T({},sn),I);L.autoReplaceSvg||(L.observeMutations=!1);var R={};Object.keys(sn).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(t){L[e]=t,z.forEach(function(e){return e(R)})},get:function(){return L[e]}})}),Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){L.cssPrefix=e,z.forEach(function(e){return e(R)})},get:function(){return L.cssPrefix}}),O.FontAwesomeConfig=R;var z=[];function cn(e){return z.push(e),function(){z.splice(z.indexOf(e),1)}}var B=Nt,V={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ln(e){if(!(!e||!A)){var t=k.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=k.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return k.head.insertBefore(t,r),e}}var un=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function dn(){for(var e=12,t=``;e-- >0;)t+=un[Math.random()*62|0];return t}function H(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function fn(e){return e.classList?H(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function pn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function mn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${pn(e[n])}" `},``).trim()}function hn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function gn(e){return e.size!==V.size||e.x!==V.x||e.y!==V.y||e.rotate!==V.rotate||e.flipX||e.flipY}function _n(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function vn(e){var t=e.transform,n=e.width,r=n===void 0?Nt:n,i=e.height,a=i===void 0?Nt:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&be?c+=`translate(${t.x/B-r/2}em, ${t.y/B-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/B}em), calc(-50% + ${t.y/B}em)) `:c+=`translate(${t.x/B}em, ${t.y/B}em) `,c+=`scale(${t.size/B*(t.flipX?-1:1)}, ${t.size/B*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var yn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function bn(){var e=Pt,t=Ft,n=R.cssPrefix,r=R.replacementClass,i=yn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var xn=!1;function Sn(){R.autoAddCss&&!xn&&(ln(bn()),xn=!0)}var Cn={mixout:function(){return{dom:{css:bn,insertCss:Sn}}},hooks:function(){return{beforeDOMElementCreation:function(){Sn()},beforeI2svg:function(){Sn()}}}},U=O||{};U[N]||(U[N]={}),U[N].styles||(U[N].styles={}),U[N].hooks||(U[N].hooks={}),U[N].shims||(U[N].shims=[]);var W=U[N],wn=[],Tn=function(){k.removeEventListener(`DOMContentLoaded`,Tn),En=1,wn.map(function(e){return e()})},En=!1;A&&(En=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),En||k.addEventListener(`DOMContentLoaded`,Tn));function Dn(e){A&&(En?setTimeout(e,0):wn.push(e))}function G(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?pn(e):`<${t} ${mn(r)}>${a.map(G).join(``)}</${t}>`}function On(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var kn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},An=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:kn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function jn(e){return D(e).length===1?e.codePointAt(0).toString(16):null}function Mn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Nn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Mn(t);typeof W.hooks.addPack==`function`&&!r?W.hooks.addPack(e,Mn(t)):W.styles[e]=T(T({},W.styles[e]||{}),i),e===`fas`&&Nn(`fa`,t)}var K=W.styles,Pn=W.shims,Fn=Object.keys(Xt),In=Fn.reduce(function(e,t){return e[t]=Object.keys(Xt[t]),e},{}),Ln=null,Rn={},zn={},Bn={},Vn={},Hn={};function Un(e){return~rn.indexOf(e)}function Wn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Un(i)?i:null}var Gn=function(){var e=function(e){return An(K,function(t,n,r){return t[r]=An(n,e,{}),t},{})};Rn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),zn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Hn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in K||R.autoFetchSvg,n=An(Pn,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Bn=n.names,Vn=n.unicodes,Ln=Qn(R.styleDefault,{family:R.familyDefault})};cn(function(e){Ln=Qn(e.styleDefault,{family:R.familyDefault})}),Gn();function Kn(e,t){return(Rn[e]||{})[t]}function qn(e,t){return(zn[e]||{})[t]}function q(e,t){return(Hn[e]||{})[t]}function Jn(e){return Bn[e]||{prefix:null,iconName:null}}function Yn(e){var t=Vn[e],n=Kn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function J(){return Ln}var Xn=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(e){var t=j,n=Fn.reduce(function(e,t){return e[t]=`${R.cssPrefix}-${t}`,e},{});return lt.forEach(function(r){(e.includes(n[r])||e.some(function(e){return In[r].includes(e)}))&&(t=r)}),t}function Qn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?j:t,r=Kt[n][e];if(n===M&&!e)return`fad`;var i=Jt[n][e]||Jt[n][r],a=e in W.styles?e:null;return i||a||null}function $n(e){var t=[],n=null;return e.forEach(function(e){var r=Wn(R.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function er(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var tr=Dt.concat(mt);function nr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=er(e.filter(function(e){return tr.includes(e)})),a=er(e.filter(function(e){return!tr.includes(e)})),o=E(i.filter(function(e){return r=e,!Ee.includes(e)}),1)[0],s=o===void 0?null:o,c=Zn(i),l=T(T({},$n(a)),{},{prefix:Qn(s,{family:c})});return T(T(T({},l),or({values:e,family:c,styles:K,config:R,canonical:l,givenPrefix:r})),rr(n,r,l))}function rr(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Jn(i):{},o=q(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!K.far&&K.fas&&!R.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var ir=lt.filter(function(e){return e!==j||e!==M}),ar=Object.keys(Et).filter(function(e){return e!==j}).map(function(e){return Object.keys(Et[e])}).flat();function or(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===M,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&ir.includes(n)&&(Object.keys(s).find(function(e){return ar.includes(e)})||l.autoFetchSvg)&&(r.prefix=ft.get(n).defaultShortPrefixId,r.iconName=q(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=J()||`fas`),r}var sr=function(){function e(){ee(this,e),this.definitions={}}return ne(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=T(T({},e.definitions[n]||{}),t[n]),Nn(n,t[n]);var r=Xt[j][n];r&&Nn(r,t[n]),Gn()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),cr=[],Y={},X={},lr=Object.keys(X);function ur(e,t){var n=t.mixoutsTo;return cr=e,Y={},Object.keys(X).forEach(function(e){lr.indexOf(e)===-1&&delete X[e]}),cr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),le(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Y[e]||(Y[e]=[]),Y[e].push(r[e])})}e.provides&&e.provides(X)}),n}function dr(e,t){var n=[...arguments].slice(2);return(Y[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Z(e){var t=[...arguments].slice(1);(Y[e]||[]).forEach(function(e){e.apply(null,t)})}function Q(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return X[e]?X[e].apply(null,t):void 0}function fr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||J();if(t)return t=q(n,t)||t,On(pr.definitions,n,t)||On(W.styles,n,t)}var pr=new sr,$={noAuto:function(){R.autoReplaceSvg=!1,R.observeMutations=!1,Z(`noAuto`)},config:R,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return A?(Z(`beforeI2svg`,e),Q(`pseudoElements2svg`,e),Q(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Dn(function(){mr({autoReplaceSvgRoot:t}),Z(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(le(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Qn(e[0]);return{prefix:n,iconName:q(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${R.cssPrefix}-`)>-1||e.match(Qt))){var r=nr(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||J(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=J();return{prefix:i,iconName:q(i,e)||e}}}},library:pr,findIconDefinition:fr,toHtml:G},mr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?k:e;(Object.keys(W.styles).length>0||R.autoFetchSvg)&&A&&R.autoReplaceSvg&&$.dom.i2svg({node:t})};function hr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return G(e)})}}),Object.defineProperty(e,"node",{get:function(){if(A){var t=k.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function gr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(gn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=hn(T(T({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function _r(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${R.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:T(T({},i),{},{id:o}),children:r}]}]}function vr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function yr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[R.replacementClass,a?`${R.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:T(T({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!vr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[P]=``);var _=T(T({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:T({},l.styles)}),v=r.found&&n.found?Q(`generateAbstractMask`,_)||{children:[],attributes:{}}:Q(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?_r(_):gr(_)}function br(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=T(T({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[P]=``);var l=T({},a.styles);gn(i)&&(l.transform=vn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=hn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function xr(e){var t=e.content,n=e.extra,r=T(T({},n.attributes),{},{class:n.classes.join(` `)}),i=hn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Sr=W.styles;function Cr(e){var t=e[0],n=e[1],r=E(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${R.cssPrefix}-${nn.GROUP}`},children:[{tag:`path`,attributes:{class:`${R.cssPrefix}-${nn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${R.cssPrefix}-${nn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var wr={found:!1,width:512,height:512};function Tr(e,t){!Wt&&!R.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Er(e,t){var n=t;return t===`fa`&&R.styleDefault!==null&&(t=J()),new Promise(function(r,i){if(n===`fa`){var a=Jn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Sr[t]&&Sr[t][e]){var o=Sr[t][e];return r(Cr(o))}Tr(e,t),r(T(T({},wr),{},{icon:R.showMissingIcons&&e&&Q(`missingIconAbstract`)||{}}))})}var Dr=function(){},Or=R.measurePerformance&&ye&&ye.mark&&ye.measure?ye:{mark:Dr,measure:Dr},kr=`FA "7.2.0"`,Ar=function(e){return Or.mark(`${kr} ${e} begins`),function(){return jr(e)}},jr=function(e){Or.mark(`${kr} ${e} ends`),Or.measure(`${kr} ${e}`,`${kr} ${e} begins`,`${kr} ${e} ends`)},Mr={begin:Ar,end:jr},Nr=function(){};function Pr(e){return typeof(e.getAttribute?e.getAttribute(P):null)==`string`}function Fr(e){var t=e.getAttribute?e.getAttribute(Rt):null,n=e.getAttribute?e.getAttribute(zt):null;return t&&n}function Ir(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function Lr(){return R.autoReplaceSvg===!0?Hr.replace:Hr[R.autoReplaceSvg]||Hr.replace}function Rr(e){return k.createElementNS(`http://www.w3.org/2000/svg`,e)}function zr(e){return k.createElement(e)}function Br(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Rr:zr:t;if(typeof e==`string`)return k.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Br(e,{ceFn:n}))}),r}function Vr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Hr={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Br(e),t)}),t.getAttribute(P)===null&&R.keepOriginalSource){var n=k.createComment(Vr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~fn(t).indexOf(R.replacementClass))return Hr.replace(e);var r=RegExp(`${R.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===R.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return G(e)}).join(`
`);t.setAttribute(P,``),t.innerHTML=a}};function Ur(e){e()}function Wr(e,t){var n=typeof t==`function`?t:Nr;if(e.length===0)n();else{var r=Ur;R.mutateApproach===Vt&&(r=O.requestAnimationFrame||Ur),r(function(){var t=Lr(),r=Mr.begin(`mutate`);e.map(t),r(),n()})}}var Gr=!1;function Kr(){Gr=!0}function qr(){Gr=!1}var Jr=null;function Yr(e){if(ve&&R.observeMutations){var t=e.treeCallback,n=t===void 0?Nr:t,r=e.nodeCallback,i=r===void 0?Nr:r,a=e.pseudoElementsCallback,o=a===void 0?Nr:a,s=e.observeMutationsRoot,c=s===void 0?k:s;Jr=new ve(function(e){if(!Gr){var t=J();H(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Pr(e.addedNodes[0])&&(R.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&R.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Pr(e.target)&&~tn.indexOf(e.attributeName))if(e.attributeName===`class`&&Fr(e.target)){var r=nr(fn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Rt,a||t),s&&e.target.setAttribute(zt,s)}else Ir(e.target)&&i(e.target)})}}),A&&Jr.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Xr(){Jr&&Jr.disconnect()}function Zr(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Qr(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=nr(fn(e));return i.prefix||=J(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=qn(i.prefix,e.innerText)||Kn(i.prefix,jn(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function $r(e){return H(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function ei(){return{iconName:null,prefix:null,transform:V,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Qr(e),r=n.iconName,i=n.prefix,a=n.rest,o=$r(e),s=dr(`parseNodeAttributes`,{},e);return T({iconName:r,prefix:i,transform:V,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Zr(e):[],attributes:o}},s)}var ni=W.styles;function ri(e){var t=R.autoReplaceSvg===`nest`?ti(e,{styleParser:!1}):ti(e);return~t.extra.classes.indexOf($t)?Q(`generateLayersText`,e,t):Q(`generateSvgReplacementMutation`,e,t)}function ii(){return[].concat(D(mt),D(Dt))}function ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!A)return Promise.resolve();var n=k.documentElement.classList,r=function(e){return n.add(`${Bt}-${e}`)},i=function(e){return n.remove(`${Bt}-${e}`)},a=R.autoFetchSvg?ii():Ee.concat(Object.keys(ni));a.includes(`fa`)||a.push(`fa`);var o=[`.${$t}:not([${P}])`].concat(a.map(function(e){return`.${e}:not([${P}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=H(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Mr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=ri(t);n&&e.push(n)}catch(e){Wt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Wr(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ri(e).then(function(e){e&&Wr([e],t)})}function si(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:fr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:fr(i||{}),e(r,T(T({},n),{},{mask:i}))}}var ci=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?V:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return hr(T({type:`icon`},e),function(){return Z(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),yr({icons:{main:Cr(v),mask:s?Cr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:T(T({},V),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},li={mixout:function(){return{icon:si(ci)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ai,e.nodeCallback=oi,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?k:t,r=e.callback;return ai(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Er(n,r),o.iconName?Er(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=E(o,2),u=l[0],d=l[1];t([e,yr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=hn(a);o.length>0&&(n.style=o);var s;return gn(i)&&(s=Q(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},ui={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return hr({type:`layer`},function(){Z(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${R.cssPrefix}-layers`].concat(D(r)).join(` `)},children:n}]})}}}},di={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return hr({type:`counter`,content:e},function(){return Z(`beforeDOMElementCreation`,{content:e,params:t}),xr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${R.cssPrefix}-layers-counter`].concat(D(a))}})})}}}},fi={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?V:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return hr({type:`text`,content:e},function(){return Z(`beforeDOMElementCreation`,{content:e,params:t}),br({content:e,transform:T(T({},V),r),extra:{attributes:s,styles:l,classes:[`${R.cssPrefix}-layers-text`].concat(D(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(be){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,br({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},pi=RegExp(`"`,`ug`),mi=[1105920,1112319],hi=T(T(T(T({},{FontAwesome:{normal:`fas`,400:`fas`}}),dt),Mt),vt),gi=Object.keys(hi).reduce(function(e,t){return e[t.toLowerCase()]=hi[t],e},{}),_i=Object.keys(gi).reduce(function(e,t){var n=gi[t];return e[t]=n[900]||D(Object.entries(n))[0][1],e},{});function vi(e){return jn(D(e.replace(pi,``))[0]||``)}function yi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(pi,``),r=n.codePointAt(0),i=r>=mi[0]&&r<=mi[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function bi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(gi[n]||{})[i]||_i[n]}function xi(e,t){var n=`${Lt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=H(e.children).filter(function(e){return e.getAttribute(It)===t})[0],o=O.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(en),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=bi(s,l),p=vi(d),m=c[0].startsWith(`FontAwesome`),h=yi(o),g=Kn(f,p),_=g;if(m){var v=Yn(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Rt)!==f||a.getAttribute(zt)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=ei(),b=y.extra;b.attributes[It]=t,Er(g,f).then(function(i){var a=yr(T(T({},y),{},{icons:{main:i,mask:Xn()},prefix:f,iconName:_,extra:b,watchable:!0})),o=k.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return G(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Si(e){return Promise.all([xi(e,`::before`),xi(e,`::after`)])}function Ci(e){return e.parentNode!==document.head&&!~Ht.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(It)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var wi=function(e){return!!e&&Ut.some(function(t){return e.includes(t)})},Ti=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=S(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(wi(a)){var o=Ut.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(A){var n;if(t)n=e;else if(R.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=S(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=S(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=S(Ti(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){R.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=H(n).filter(Ci).map(Si),i=Mr.begin(`searchPseudoElements`);Kr(),Promise.all(r).then(function(){i(),qr(),e()}).catch(function(){i(),qr(),t()})})}}var Di={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ei,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?k:t;R.searchPseudoElements&&Ei(n)}}},Oi=!1,ki={mixout:function(){return{dom:{unwatch:function(){Kr(),Oi=!0}}}},hooks:function(){return{bootstrap:function(){Yr(dr(`mutationObserverCallbacks`,{}))},noAuto:function(){Xr()},watch:function(e){var t=e.observeMutationsRoot;Oi?qr():Yr(dr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Ai=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},ji={mixout:function(){return{parse:{transform:function(e){return Ai(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Ai(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:T({},a.outer),children:[{tag:`g`,attributes:T({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:T(T({},t.icon.attributes),a.path)}]}]}}}},Mi={x:0,y:0,width:`100%`,height:`100%`};function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Pi(e){return e.tag===`g`?e.children:[e]}ur([Cn,li,ui,di,fi,Di,ki,ji,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?nr(n.split(` `).map(function(e){return e.trim()})):Xn();return r.prefix||=J(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=_n({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:T(T({},Mi),{},{fill:`white`})},p=c.children?{children:c.children.map(Ni)}:{},m={tag:`g`,attributes:T({},d.inner),children:[Ni(T({tag:c.tag,attributes:T(T({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:T({},d.outer),children:[m]},g=`mask-${a||dn()}`,_=`clip-${a||dn()}`,v={tag:`mask`,attributes:T(T({},Mi),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Pi(u)},v]};return t.push(y,{tag:`rect`,attributes:T({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Mi)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;O.matchMedia&&(t=O.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:T(T({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=T(T({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:T(T({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:T(T({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:T(T({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:T(T({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:T(T({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:T(T({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:T(T({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:$}),$.noAuto;var Fi=$.config;$.library,$.dom;var Ii=$.parse;$.findIconDefinition,$.toHtml;var Li=$.icon;$.layer,$.text,$.counter,d();function Ri(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,flash:o,spin:s,spinPulse:c,spinReverse:l,pulse:u,fixedWidth:d,inverse:f,border:p,listItem:m,flip:h,size:g,rotation:_,pull:v}=e,y={"fa-beat":t,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":a,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":d,"fa-inverse":f,"fa-border":p,"fa-li":m,"fa-flip":h===!0,"fa-flip-horizontal":h===`horizontal`||h===`both`,"fa-flip-vertical":h===`vertical`||h===`both`,[`fa-${g}`]:g!=null,[`fa-rotate-${_}`]:_!=null&&_!==0,[`fa-pull-${v}`]:v!=null,"fa-swap-opacity":e.swapOpacity};return Object.keys(y).map(e=>y[e]?e:null).filter(e=>e)}function zi(e){return e-=0,e===e}function Bi(e){return zi(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))}function Vi(e){return typeof e==`string`?e:Object.keys(e).reduce((t,n)=>t+n.split(/(?=[A-Z])/).join(`-`).toLowerCase()+`:`+e[n]+`;`,``)}function Hi(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>Hi(e,t)),i=Object.keys(t.attributes||{}).reduce((e,n)=>{let r=t.attributes[n];return n===`style`?e.attrs.style=Vi(r):n.indexOf(`aria-`)===0||n.indexOf(`data-`)===0?e.attrs[n.toLowerCase()]=r:e.attrs[Bi(n)]=r,e},{attrs:{}});return e(t.tag,{...i.attrs},r)}var Ui=!1;try{Ui=!0}catch{}function Wi(...e){!Ui&&console&&typeof console.error==`function`&&console.error(...e)}function Gi(e){if(e&&typeof e==`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Ii.icon)return Ii.icon(e);if(e===null)return null;if(e&&typeof e==`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}function Ki(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?{[e]:t}:{}}var qi=i(`<svg></svg>`);function Ji(e,t){p(t,!1);let n=c(t,`tag`,8),r=c(t,`props`,8),i=c(t,`children`,8),o=c(t,`style`,8,null),s=c(t,`ref`,12,null);if(n()!==`svg`)throw Error(`SvgElement requires a tag of "svg"`);function u(e){return e?.reduce((e,t)=>e+(t.tag?d(t):t),``)||``}function d({tag:e,props:t,children:n}){return`<${e} ${Object.keys(t).map(e=>`${e}="${t[e]}"`).join(` `)}>${u(n)}</${e}>`}let m=u(i()),y=r()?.style?`${r().style}${o()||``}`:o(),b={...r(),style:y};g();var x=qi();l(x,()=>({...b})),a(x,()=>m,!0),h(x),v(x,e=>s(e),()=>s()),f(e,x),_()}function Yi(i,a){let l=u(a,[`children`,`$$slots`,`$$events`,`$$legacy`]),d=u(l,`border.mask.maskId.fixedWidth.inverse.flip.icon.listItem.pull.pulse.rotation.size.spin.spinPulse.spinReverse.beat.fade.beatFade.bounce.shake.symbol.title.titleId.transform.swapOpacity.ref.style`.split(`.`));p(a,!1),c(a,`border`,8,!1);let h=c(a,`mask`,8,null),v=c(a,`maskId`,8,null);c(a,`fixedWidth`,8,!1),c(a,`inverse`,8,!1),c(a,`flip`,8,!1);let y=c(a,`icon`,8,null);c(a,`listItem`,8,!1),c(a,`pull`,8,null),c(a,`pulse`,8,!1),c(a,`rotation`,8,null),c(a,`size`,8,null),c(a,`spin`,8,!1),c(a,`spinPulse`,8,!1),c(a,`spinReverse`,8,!1),c(a,`beat`,8,!1),c(a,`fade`,8,!1),c(a,`beatFade`,8,!1),c(a,`bounce`,8,!1),c(a,`shake`,8,!1);let b=c(a,`symbol`,8,!1),x=c(a,`title`,8,``),ee=c(a,`titleId`,8,null),te=c(a,`transform`,8,null);c(a,`swapOpacity`,8,!1);let ne=c(a,`ref`,12,null),S=c(a,`style`,8,null),C=Gi(y()),re=Ki(`classes`,[...Ri(l),...(l.class||``).split(` `)]),ie=Ki(`transform`,typeof te()==`string`?Ii.transform(te()):te()),ae=Ki(`mask`,Gi(h())),oe=Li(C,{...re,...ie,...ae,symbol:b(),title:x(),titleId:ee(),maskId:v()}),w=s(null);if(!oe)Wi(`Could not find icon`,C);else{let{abstract:e}=oe;o(w,Hi((e,t,n)=>({tag:e,props:t,children:n}),e[0],d))}g();var T=e(),E=n(T),D=e=>{Ji(e,m(()=>r(w),{get style(){return S()},get ref(){return ne()},set ref(e){ne(e)},$$legacy:!0}))};t(E,e=>{r(w)&&e(D)}),f(i,T),_()}var Xi={prefix:`fas`,iconName:`ear-listen`,icon:[512,512,[`assistive-listening-systems`],`f2a2`,`M379.6 .3c-8.9 1.2-17.2 6.2-22.4 14.1-6.8 10.4-7 24.1-.4 34.6 5.6 8.9 15.5 12.7 23.8 18.5 7.5 5.2 17.6 13.2 27.7 24.2 20 21.7 39.5 54.3 39.5 100.3 0 17.7 14.3 32 32 32s32-14.3 32-32c0-66-28.5-113.4-56.5-143.7-13.9-15.1-27.8-26.1-38.3-33.3-11-7.6-23.5-16.6-37.6-14.7zM240 128c-57.6 0-105.1 43.6-111.3 99.5-1.9 17.6-17.8 30.2-35.3 28.3s-30.2-17.8-28.3-35.3c9.7-88 84.3-156.5 174.9-156.5 97.2 0 176 78.8 176 176 0 46-17.7 87.9-46.6 119.3-12 13-17.4 24.8-17.4 34.7l0 6.1c0 61.9-50.1 112-112 112-17.7 0-32-14.3-32-32s14.3-32 32-32c26.5 0 48-21.5 48-48l0-6.1c0-32.9 17.4-59.6 34.4-78 18.4-20 29.6-46.6 29.6-75.9 0-61.9-50.1-112-112-112zM0 480a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64zM240 208c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-17.7-14.3-32-32-32z`]},Zi={prefix:`fas`,iconName:`receipt`,icon:[384,512,[129534],`f543`,`M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.2-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6S384 14.6 384 24l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6l-40.4-34.6-40.4 34.6c-9 7.7-22.2 7.7-31.2 0l-40.4-34.6-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM104 136c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0zM80 352c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24-120c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z`]},Qi={prefix:`fas`,iconName:`clock`,icon:[512,512,[128339,`clock-four`],`f017`,`M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`]},$i={prefix:`fas`,iconName:`chevron-right`,icon:[320,512,[9002],`f054`,`M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`]},ea={prefix:`fas`,iconName:`shield-heart`,icon:[512,512,[],`e574`,`M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2 .5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0 172.4-82.5 213.2-264 213.6-363.2 .1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM249.6 183.5l6.4 8.5 6.4-8.5c11.1-14.8 28.5-23.5 46.9-23.5 32.4 0 58.7 26.3 58.7 58.7l0 5.3c0 49.1-65.8 98.1-96.5 118.3-9.5 6.2-21.5 6.2-30.9 0-30.7-20.2-96.5-69.3-96.5-118.3l0-5.3c0-32.4 26.3-58.7 58.7-58.7 18.5 0 35.9 8.7 46.9 23.5z`]},ta={prefix:`fas`,iconName:`gear`,icon:[512,512,[9881,`cog`],`f013`,`M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z`]},na={prefix:`fas`,iconName:`right-from-bracket`,icon:[512,512,[`sign-out-alt`],`f2f5`,`M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z`]},ra={prefix:`fas`,iconName:`trash-can`,icon:[448,512,[61460,`trash-alt`],`f2ed`,`M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z`]},ia={prefix:`fas`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`]},aa={prefix:`fas`,iconName:`user`,icon:[448,512,[128100,62144,62470,`user-alt`,`user-large`],`f007`,`M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z`]},oa={prefix:`fas`,iconName:`arrow-right`,icon:[512,512,[8594],`f061`,`M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z`]},sa={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},ca={prefix:`fas`,iconName:`circle-check`,icon:[512,512,[61533,`check-circle`],`f058`,`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`]},la={prefix:`fas`,iconName:`headphones`,icon:[448,512,[127911,62863,`headphones-alt`,`headphones-simple`],`f025`,`M64 224c0-88.4 71.6-160 160-160s160 71.6 160 160l0 37.5c-10-3.5-20.8-5.5-32-5.5l-16 0c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48l16 0c53 0 96-43 96-96l0-160C448 100.3 347.7 0 224 0S0 100.3 0 224L0 384c0 53 43 96 96 96l16 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-16 0c-11.2 0-22 1.9-32 5.5L64 224z`]},ua={prefix:`fas`,iconName:`chevron-left`,icon:[320,512,[9001],`f053`,`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`]},da={prefix:`fas`,iconName:`star`,icon:[576,512,[11088,61446],`f005`,`M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z`]},fa={prefix:`fas`,iconName:`arrow-left`,icon:[512,512,[8592],`f060`,`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z`]},pa={prefix:`fas`,iconName:`bars`,icon:[448,512,[`navicon`],`f0c9`,`M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`]},ma={prefix:`fas`,iconName:`cart-shopping`,icon:[640,512,[128722,`shopping-cart`],`f07a`,`M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z`]};export{sa as _,ia as a,Yi as b,ca as c,ta as d,la as f,da as g,ea as h,ma as i,Qi as l,na as m,oa as n,ua as o,Zi as p,pa as r,$i as s,fa as t,Xi as u,ra as v,Fi as x,aa as y};