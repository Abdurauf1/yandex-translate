(this["webpackJsonphomework-15"]=this["webpackJsonphomework-15"]||[]).push([[0],{29:function(n,e,t){},30:function(n,e,t){},51:function(n,e,t){"use strict";t.r(e);var r,a,c,i,s=t(1),l=t.n(s),d=t(20),o=t.n(d),j=(t(29),t(30),t(5)),p=t(21),x=t.n(p),u=t(2),b=t(3),h=b.a.div(r||(r=Object(u.a)(["\n    width: 100%;\n    border: 1px solid lightgrey;\n    padding: 15px;\n    &:focus-within {\n        outline: 1px auto var(--yellow);\n    }\n"]))),O=b.a.div(a||(a=Object(u.a)(["\n    margin-bottom: 10px;\n    display: flex;\n    align-items: center;\n    svg {\n        width: 15px;\n        margin: 0 10px;\n    }\n"]))),g=b.a.select(c||(c=Object(u.a)(["\n    padding: 5px;\n    &:focus{\n        outline: 0;\n    }\n"]))),f=b.a.textarea(i||(i=Object(u.a)(["\n    width: 100%;\n    min-height: 40px;\n    border: 0;\n    resize: none;\n    font-size: 20px;\n\n    &::placeholder{\n        font-size: 20px;\n    }\n    &:focus{\n        outline: 0;\n    }\n    @media only screen and (max-width: 768px){\n        font-size: 18px;\n        &::placeholder{\n            font-size: 18px;\n        }\n\n    @media only screen and (max-width: 425px){\n        font-size: 15px;\n        &::placeholder{\n            font-size: 15px;\n        }\n}\n"]))),m=t(0);var v,w=function(n){var e=n.getTranslatedWords,t=Object(s.useState)(""),r=Object(j.a)(t,2),a=r[0],c=r[1],i=function(n,e){return function(n){switch(n){case"ru":return"Russian";case"en":return"English";case"pl":return"Polandish";case"uk":return"Ukrainian";case"de":return"German";case"fr":return"French";case"es":return"Spanish";case"it":return"Italian";case"tr":return"Turkish";default:return""}}(n.split("-")[e])},l=Object(s.useState)("en-ru"),d=Object(j.a)(l,2),o=d[0],p=d[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(h,{children:[Object(m.jsx)(O,{children:Object(m.jsx)(g,{value:o,onChange:function(n){return p(n.target.value)},children:["ru-en","ru-pl","ru-uk","ru-de","ru-fr","ru-es","ru-it","ru-tr","en-ru","en-de","en-fr","en-es","en-it","en-tr","pl-ru","uk-ru","de-ru","de-en","fr-ru","fr-en","es-ru","es-en","it-ru","it-en","tr-ru","tr-en"].map((function(n){return Object(m.jsxs)("option",{value:n,children:[i(n,0)," \u279e ",i(n,1)]})}))})}),Object(m.jsx)(f,{rows:4,placeholder:"Start typing or insert a link",value:a,onChange:function(n){e(o,n.target.value.split(" ").join("+")),c(n.target.value),console.log(n.target.value.split(" ").join("+"))}})]})})},y=b.a.nav(v||(v=Object(u.a)(["\n    background-color: transparent;\n    width: 100%;\n    height: fit-content;\n    p {\n        color: #002033;\n        font-size: 50px;\n        font-weight: bold;\n        margin: 0 0 0 40px;\n        span {\n            color: #FC3F1D;\n        }\n    }\n"])));var k,z,F,S,T,C,E,I,J,W,B,D,G,M,P=function(){return Object(m.jsx)(y,{children:Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"Y"}),"andex Translate"]})})},R=b.a.div(k||(k=Object(u.a)(["\n    width: 100%;\n"]))),U=b.a.p(z||(z=Object(u.a)(["\n    //display: flex;\n"]))),Y=b.a.span(F||(F=Object(u.a)(["\n    font-weight:bold;\n"]))),Z=b.a.span(S||(S=Object(u.a)(["\n    margin: 0 5px;\n    color: darkgrey;\n"]))),q=b.a.small(T||(T=Object(u.a)(["\n    color: grey;\n"]))),A=b.a.small(C||(C=Object(u.a)(["\n    color: grey;\n    margin-left: 5px;\n"]))),H=b.a.p(E||(E=Object(u.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    padding-left: 25px;\n    position: relative;\n"]))),K=b.a.p(I||(I=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: darkgrey;\n"]))),L=b.a.p(J||(J=Object(u.a)(["\n    margin-right: 5px;\n    color: #4b4b99;\n"]))),N=b.a.p(W||(W=Object(u.a)(["\n    margin-right: 5px;\n    color: #4b4b99;\n\n"]))),Q=b.a.p(B||(B=Object(u.a)(["\n    color: #80494b;\n    //margin:5px 0 5px 25px;\n    margin-left: 25px;\n"]))),V=b.a.p(D||(D=Object(u.a)(["\n    color: grey;\n    margin-left: 40px;\n"]))),X=b.a.span(G||(G=Object(u.a)(["\n    color: black;\n"]))),$=b.a.span(M||(M=Object(u.a)(["\n    margin: 0 5px;\n"])));var _,nn,en=function(n){var e,t=n.translated;return Object(m.jsx)(R,{children:null===t||void 0===t||null===(e=t.def)||void 0===e?void 0:e.map((function(n){var e=n.text,t=n.pos,r=n.ts,a=n.tr;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(U,{children:[Object(m.jsx)(Y,{children:e}),Object(m.jsxs)(Z,{children:["[",r,"]"]}),Object(m.jsx)(q,{children:t})]}),null===a||void 0===a?void 0:a.map((function(n,e){var t=n.text,r=(n.pos,n.gen),c=n.syn,i=n.mean,s=n.ex;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(H,{children:[a.length>1&&Object(m.jsx)(K,{children:e+1}),Object(m.jsxs)(L,{children:[t,r&&Object(m.jsx)(A,{children:r}),Object(m.jsx)(X,{children:c?".":""})]}),null===c||void 0===c?void 0:c.map((function(n,e){var t=n.text,r=(n.pos,n.gen);return Object(m.jsxs)(N,{children:[t,r&&Object(m.jsx)(A,{children:r}),Object(m.jsx)(X,{children:c.length-1!==e?",":""})]})}))]}),i&&Object(m.jsxs)(Q,{children:["(",i.map((function(n,e){var t=n.text;return Object(m.jsxs)("span",{children:[t,i.length-1!==e&&" "]})})),")"]}),s&&Object(m.jsx)(V,{children:s.map((function(n){var e=n.text,t=n.tr;return Object(m.jsxs)("p",{children:[e,Object(m.jsx)($,{children:"-"}),t&&t.map((function(n){var e=n.text;return Object(m.jsx)("span",{children:e})}))]})}))})]})}))]})}))})},tn=b.a.div(_||(_=Object(u.a)(["\n    width: 1140px;\n    margin: auto;\n    padding: 50px 0;\n    display:flex;\n    justify-content: center;\n    flex-wrap: wrap;\n@media only screen and (max-width: 1200px){\n    width: 90%;\n}\n\n@media only screen and (max-width: 942px){\n    padding: 35px 0;\n    width: 95%;\n}\n\n@media only screen and (max-width: 425px){\n    width: 100%;\n    padding: 20px 0;\n}\n\n"]))),rn=b.a.div(nn||(nn=Object(u.a)(["\n    width: 50%;\n    padding: 0 20px;\n\n@media only screen and (max-width:768px){\n    width: 100%;\n}\n"])));var an=function(){Object(s.useEffect)((function(){return a("")}));var n=Object(s.useState)(),e=Object(j.a)(n,2),t=e[0],r=e[1],a=function(n,e){x.a.get("https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20201201T163137Z.5c6593134cc1fcb4.7ea53295a0777094051036688cd986b837fc9391&lang="+n+"&text="+e).then((function(n){console.log(n),r(n.data)}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(P,{}),Object(m.jsxs)(tn,{children:[Object(m.jsx)(rn,{children:Object(m.jsx)(w,{getTranslatedWords:a})}),Object(m.jsx)(rn,{children:Object(m.jsx)(en,{translated:t})})]})]})};var cn=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(an,{})})};o.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(cn,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.da9a2b85.chunk.js.map