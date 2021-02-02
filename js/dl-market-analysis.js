!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],t):"object"==typeof exports?exports.marketAnalysis=t(require("React"),require("ReactDOM")):e.marketAnalysis=t(e.React,e.ReactDOM)}(self,(function(e,t){return(()=>{"use strict";var a={970:(e,t,a)=>{a.r(t),a.d(t,{init:()=>se});var n=a(804),l=a.n(n),r=a(196),o=a.n(r);const i=()=>{},s=e=>((e,t)=>"function"==typeof e?e:t)(e,i),c=e=>"number"==typeof e&&!isNaN(e),u=(e,t)=>c(e)?e:t,m=(e,t)=>{if(!t)return e;const[a,n=""]=e.split("?"),l=Object.keys(t).map((e=>`${e}=${t[e]}`)).join("&");return`${a}?${n}${n.length?"&":""}${l}`};function p(e,t,a){return"function"==typeof t&&(a=t,t=void 0),function(e,t,a){"function"==typeof t&&(a=t,t=void 0);const n=s(a);return n(!0),fetch(m(e,t)).finally((()=>n(!1)))}(e,t,a).then((e=>e.json()))}function d(e,t){const a="object"==typeof t?t:{};return"number"==typeof t&&(a.minimumFractionDigits=a.maximumFractionDigits=t),new Intl.NumberFormat(navigator.language,a).format(e)}const g=(...e)=>Promise.all(e.map((e=>new Promise(((t,a)=>{const n=document.createElement("script");n.type="text/javascript",n.onload=()=>t(),n.onerror=a,n.src=e,document.getElementsByTagName("head")[0].appendChild(n)}))))).then(),v=(e,t="",a="",n="")=>e?`${a}${e}${n}`:t,b=(e,t="",a="",n="",l)=>"number"==typeof e?`${a}${d(e,l)}${n}`:t,f=(e,t="",a)=>b(e,t,"","%",a),y=(e,t="",a)=>b(e,t,"$","",a),h=({loading:e,children:t})=>l().createElement(l().Fragment,null,e?l().createElement("span",{className:"table__loading table__loading--cell"}):t),E=({loading:e,label:t,single:a,area:n})=>l().createElement("tr",null,l().createElement("td",null,t),l().createElement("td",null,l().createElement(h,{loading:e},a)),l().createElement("td",null,l().createElement(h,{loading:e},n))),_=({loading:e,demographics:t})=>{var a,n;return l().createElement("table",{className:"table table--demographics"},l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,"Demographic"),l().createElement("th",null,v(null===(a=null==t?void 0:t.Zip)||void 0===a?void 0:a.toString(),"Zip Code")),l().createElement("th",null,v(null===(n=null==t?void 0:t.Radius)||void 0===n?void 0:n.toString(),"Radius",""," Miles")))),l().createElement("tbody",null,[{label:"Population",single:b(null==t?void 0:t.SinglePopulation),area:b(null==t?void 0:t.AreaPopulation)},{label:"Female",single:b(null==t?void 0:t.SingleFemale),area:b(null==t?void 0:t.AreaFemale)},{label:"Female (30-60)",single:b(null==t?void 0:t.SingleFemale3060),area:b(null==t?void 0:t.AreaFemale3060)},{label:"Male",single:b(null==t?void 0:t.SingleMale),area:b(null==t?void 0:t.AreaMale)},{label:"Male (30-60)",single:b(null==t?void 0:t.SingleMale3060),area:b(null==t?void 0:t.AreaMale3060)},{label:"White",single:f(null==t?void 0:t.SingleWhite),area:f(null==t?void 0:t.AreaWhite)},{label:"Black",single:f(null==t?void 0:t.SingleBlack),area:f(null==t?void 0:t.AreaBlack)},{label:"Asian",single:f(null==t?void 0:t.SingleAsian),area:f(null==t?void 0:t.AreaAsian)},{label:"Other",single:f(null==t?void 0:t.SingleOther),area:f(null==t?void 0:t.AreaOther)},{label:"Hispanic",single:f(null==t?void 0:t.SingleHispanic),area:f(null==t?void 0:t.AreaHispanic)},{label:"Non-Hispanic",single:f(null==t?void 0:t.SingleNonHispanic),area:f(null==t?void 0:t.AreaNonHispanic)},{label:"Avg Income",single:y(null==t?void 0:t.SingleIncome),area:y(null==t?void 0:t.AreaIncome)},{label:"Home Value",single:y(null==t?void 0:t.SingleHome),area:y(null==t?void 0:t.AreaHome)}].map((t=>l().createElement(E,Object.assign({key:t.label,loading:e},t))))))},O=e=>!!e,N={email:e=>O(e)&&/.+@.+\.+/.test(e),practice:e=>!!e&&O(e.address),phone:e=>O(e)&&!!e&&10===e.replace(/\D/g,"").length,requiredString:O,specialty:e=>!!e&&!!e.SpecialtyId,website:e=>O(e)&&/.+\..+/.test(e)},S={conversionRate:25,driveSpeed:60,driveTime:15,form:{email:"",fullName:"",phone:"",practice:{address:"",lat:0,lng:0,name:"",zip:""},specialty:void 0,website:""},formValidators:{email:N.email,fullName:N.requiredString,phone:N.phone,practice:N.practice,specialty:N.specialty,website:N.website},isolineColor:"#086bb5",mapGestureHandling:!0,page:1,radius:10,setState:()=>{},templates:{},urls:{demographic:"",isoline:"",mapbox:"",procedures:"",specialties:"",submitLead:""}},w=(0,n.createContext)(S);const C=e=>{var{apiKey:t,className:a="",value:r,onChange:o}=e,i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["apiKey","className","value","onChange"]);(0,n.useContext)(w);const[s,c]=(0,n.useState)((null==r?void 0:r.name)||""),u=(0,n.useRef)(),m=(0,n.useCallback)((e=>{e?(e=>{return t=void 0,a=void 0,l=function*(){if(!(window.google&&window.google.maps&&window.google.maps.places))return console.debug("loading google places api"),g(`https://maps.googleapis.com/maps/api/js?key=${e}&libraries=places`).then((()=>console.debug("google places api loaded")));console.debug("google places api already loaded")},new((n=void 0)||(n=Promise))((function(e,r){function o(e){try{s(l.next(e))}catch(e){r(e)}}function i(e){try{s(l.throw(e))}catch(e){r(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n((function(e){e(a)}))).then(o,i)}s((l=l.apply(t,a||[])).next())}));var t,a,n,l})(t).then((()=>{u.current=new google.maps.places.Autocomplete(e,{types:["establishment"],componentRestrictions:{country:"us"}}),u.current.addListener("place_changed",(()=>{if(c(e.value),u.current){const e=u.current.getPlace();o((e=>{var t,a,n,l;return{address:e.formatted_address,lat:null===(t=e.geometry)||void 0===t?void 0:t.location.lat(),lng:null===(a=e.geometry)||void 0===a?void 0:a.location.lng(),name:e.name,zip:null===(l=null===(n=e.address_components)||void 0===n?void 0:n.find((e=>e.types.includes("postal_code"))))||void 0===l?void 0:l.short_name}})(e))}}))})):u.current&&u.current.unbindAll()}),[]);return l().createElement(P,Object.assign({},i,{value:s,onChange:e=>c(e),className:`input--google-place ${a}`,type:"text",inputRef:m,render:e=>l().createElement("span",{className:"input__input-wrapper"},e)}))},j=e=>!0===e?"valid":!1===e?"invalid":"unknown",x=({label:e,type:t,valid:a,validationMessage:r,className:o="",touched:i=!1,children:s})=>{const[c,u]=(0,n.useState)(i),m=`input${t?` input--${t}`:""}${o?` ${o}`:""}`.trim(),p=a&&a();return(0,n.useEffect)((()=>{i&&u(i)}),[i]),l().createElement("label",{className:m,onBlur:()=>u(!0)},l().createElement("span",{className:"input__label"},e),s,r&&l().createElement("span",{className:`input__validation input__validation--${j(p)}`},p||!c?"":"function"==typeof(d=r)?d():d));var d};const P=e=>{var{label:t,name:a,inputRef:n,type:r,className:o="",valid:i,validationMessage:s,touched:c,onChange:u,children:m,render:p}=e,d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["label","name","inputRef","type","className","valid","validationMessage","touched","onChange","children","render"]);const g="function"==typeof p?p:e=>l().createElement(l().Fragment,null,e,m);return l().createElement(x,{label:t,type:r,className:o,valid:i,validationMessage:s,touched:c},g(l().createElement("input",Object.assign({},d,{ref:n,className:"input__input",name:a,type:r,onChange:e=>u(e.target.value)}))))};const k=e=>"number"==typeof e&&!isNaN(e),M=e=>{const t=parseFloat(`${e}`);return k(t)?t:NaN},$=e=>{var{onChange:t,stepValueRender:a}=e,n=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["onChange","stepValueRender"]);const r=((e,t,a,n)=>{const r=((e,t,a)=>{const n=[];if(k(e)&&k(t)&&k(a))for(let l=e;l<=t;l+=a)n.push(l);return n})(e,t,a),o="function"==typeof n?n:e=>e;return r.length>0?l().createElement("span",{className:"input__steps"},r.map(((e,t)=>l().createElement("span",{key:t,className:`input__step input__step--${t+1}`},o(e))))):null})(M(n.min),M(n.max),M(n.step),a);return l().createElement(P,Object.assign({},n,{type:"range",onChange:e=>t(parseFloat(e)),render:e=>l().createElement("span",{className:"input__range-wrapper"},e,r)}))};const R=(e,t)=>{const a=e.indexOf(t);return a>=0?a:""},A=e=>{var{options:t,className:a,label:r,name:o,placeholder:i,value:s,valid:c,validationMessage:u,touched:m,optionRender:p,onChange:d}=e,g=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["options","className","label","name","placeholder","value","valid","validationMessage","touched","optionRender","onChange"]);(0,n.useContext)(w);const v=p||(e=>`${e}`);return l().createElement(x,{label:r,type:"select",className:a,valid:c,validationMessage:u,touched:m},l().createElement("select",Object.assign({},g,{className:"input__select",value:R(t,s),onChange:e=>d(t[parseInt(e.target.value,10)])}),i&&l().createElement("option",{value:"",disabled:!0},i),t.map(((e,t)=>l().createElement("option",{key:`${e}--${t}`,value:t},v(e))))))};const I=e=>{var{template:t,className:a}=e,n=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["template","className"]);return l().createElement(l().Fragment,null,t&&l().createElement("div",Object.assign({},n,{className:a,ref:e=>{e&&("string"==typeof t?e.innerHTML=t:e.appendChild(t))}})))},F=({modifier:e,children:t,toggle:a})=>l().createElement("label",{className:`toggle__label toggle__label--${e}`,onClick:()=>a()},t),D=({label:e,value:t,label1:a,value1:r,label2:o,value2:i,onChange:s})=>{const{templates:{toggle:c}}=(0,n.useContext)(w),u=()=>s(t===r?i:r);return l().createElement(x,{className:"toggle",label:e},l().createElement("input",{className:"toggle__input",type:"checkbox",checked:t===i,onChange:()=>u()}),l().createElement(F,{modifier:"1",toggle:u},a),l().createElement(I,{className:"toggle__icon",template:c}),l().createElement(F,{modifier:"2",toggle:u},o))},L=({location:e,locationIcon:t=""})=>l().createElement("div",{className:"location"},l().createElement(I,{className:"location__icon",template:t}),l().createElement("span",{className:"location__name"},e.name),l().createElement("address",{className:"location__address"},e.address));const T=e=>{return t=void 0,a=void 0,l=function*(){if(void 0===window.L){console.debug("loading leaflet");const t=["https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"],a=["https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"];return e&&(t.push("//unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css"),a.push("https://unpkg.com/leaflet-gesture-handling")),((...e)=>{e.forEach((e=>{const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)}))})(...t),g(...a).then((()=>console.debug("leaflet loaded")))}console.debug("leaflet already loaded")},new((n=void 0)||(n=Promise))((function(e,r){function o(e){try{s(l.next(e))}catch(e){r(e)}}function i(e){try{s(l.throw(e))}catch(e){r(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n((function(e){e(a)}))).then(o,i)}s((l=l.apply(t,a||[])).next())}));var t,a,n,l},H=()=>{const{suspend:e}=(0,n.useContext)(G),{driveSpeed:t,driveTime:a,form:{practice:{lat:r,lng:o}},mapGestureHandling:i,isolineColor:s,urls:{mapbox:c,isoline:u}}=(0,n.useContext)(w),m=(0,n.useRef)(),d=(0,n.useRef)(),g=(0,n.useCallback)((()=>{m.current&&p(u,{latitude:r,longitude:o,seconds:a*t},e).then((e=>{const t=m.current,a=d.current;if(t){const n=d.current=window.L.geoJSON(e,{style:()=>({color:s})}).addTo(t);t.fitBounds(n.getBounds()),a&&t.removeLayer(a)}}))}),[t,a,r,o,c,u]);return(0,n.useEffect)((()=>{g()}),[g]),l().createElement("div",{className:"map",ref:(0,n.useCallback)((e=>{e&&T(i).then((()=>{const t=m.current=window.L.map(e,{gestureHandling:!0}).setView([r,o],13);window.L.tileLayer(c,{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(t),g()}))}),[])})},B={currency:"USD",style:"currency",maximumFractionDigits:0,minimumFractionDigits:0},W=e=>d(e,B),V=({children:e})=>l().createElement("div",{className:"revenue-report__container"},e),Y=({label:e,value:t})=>l().createElement("div",{className:"revenue-report__field report-field"},l().createElement("div",{className:"report-field__label"},e),l().createElement("div",{className:"report-field__value"},t)),z=({procedure:e,availableProcedures:t,conversionRate:a,percentPopulation:r,onChange:o,onDelete:i})=>{const[s,m]=(0,n.useState)((null==e?void 0:e.DefaultPrice)||0),p=u(null==e?void 0:e.MinimumPrice,1),g=u(null==e?void 0:e.MaximumPrice,1e6);return(0,n.useEffect)((()=>{m((null==e?void 0:e.DefaultPrice)||0)}),[null==e?void 0:e.DefaultPrice]),l().createElement("div",{className:"revenue-report__item"},l().createElement(V,null,l().createElement(A,{label:"Choose a service",value:e,options:t,optionRender:e=>e.Label,onChange:o}),l().createElement(P,{label:"Adjust Price",type:"text",value:W(s),onChange:e=>{const t=parseInt(e.replace(/\D/g,""))||0;t<1e9&&m(t)},valid:()=>s>=p&&s<=g,validationMessage:()=>s<p?`Enter a number greater than ${W(p)}`:s>g?`Enter a number less than ${W(g)}`:c(null==e?void 0:e.MinimumPrice)&&c(null==e?void 0:e.MaximumPrice)?`Enter a number between ${W(p)} and ${W(g)}`:"Enter a valid number"})),l().createElement(V,null,e&&l().createElement(l().Fragment,null,l().createElement(Y,{label:"Prospects",value:d(e.ProceduresPerYear*r,0)}),l().createElement(Y,{label:"Patients",value:d(e.ProceduresPerYear*r*(a/100),0)}),l().createElement(Y,{label:"Potential",value:`$${d(s*e.ProceduresPerYear*r*(a/100),0)}`})),l().createElement("button",{className:"revenue-report__button revenue-report__button--remove",onClick:i},l().createElement("span",null,"Remove"))))},q=({procedures:e,percentPopulation:t})=>{const{conversionRate:a}=(0,n.useContext)(w),[r,o]=(0,n.useState)([]),i=((e,t)=>t.filter((t=>!e.some((e=>e.MasterProcedureId===t.MasterProcedureId)))))(r,e);(0,n.useEffect)((()=>{e&&e.length>0?o([e[0]]):o([])}),[e]);const s=(0,n.useCallback)(((e,t)=>{o((a=>a.map(((a,n)=>n===t?e:a))))}),[o]),c=(0,n.useCallback)((e=>{o((t=>t.filter(((t,a)=>a!==e))))}),[o]);return l().createElement("div",{className:"revenue-report"},r.map(((e,n)=>l().createElement(z,{key:e.MasterProcedureId,procedure:e,availableProcedures:[e,...i],conversionRate:a,percentPopulation:t,onChange:e=>s(e,n),onDelete:()=>c(n)}))),l().createElement("div",{className:"revenue-report__buttons"},l().createElement("button",{className:"revenue-report__button revenue-report__button--add",disabled:!i.length,onClick:()=>o((e=>[...e,i[0]]))},"Add Service"),l().createElement("button",{className:"revenue-report__button revenue-report__button--add-all",disabled:!i.length,onClick:()=>o((e=>[...e,...i]))},"Add All Services")))},Z=({stepCount:e,currentStep:t})=>l().createElement("div",{className:"step__indicator step-indicator"},"Step ",l().createElement("span",{className:"step-indicator__step"},t)," of ",l().createElement("span",{className:"step-indicator__step-count"},e)),J=({step:e,stepCount:t,title:a,subtitle:r,text:o,button:i,fields:s,validate:c})=>{const[u,m]=(0,n.useState)();return l().createElement("form",{className:`step step--${e}`,onSubmit:e=>{e.preventDefault(),m(!0),c()&&i.onClick()}},l().createElement(Z,{currentStep:e,stepCount:t}),l().createElement("h2",{className:"step__title"},a+" ",l().createElement("small",{className:"step__subtitle"},r)),l().createElement("p",{className:"step__text"},o),l().createElement("div",{className:"step__fields"},s.map(((e,t)=>{const a=e[0],r=e[1];return"boolean"==typeof u&&(r.touched=u),l().createElement("div",{className:"step__field",key:t},(0,n.createElement)(a,r))}))),l().createElement("button",{className:"step__button"},i.text))},K=({contain:e,children:t})=>e?l().createElement("div",{className:"modal__container"},t):l().createElement(l().Fragment,null,t),G=(0,n.createContext)({suspended:!1,suspend:()=>{}}),Q=({contain:e,children:t})=>{const[a,r]=(0,n.useState)(0),o=(0,n.useCallback)((e=>{r((t=>e?t+1:t-1))}),[]),i=a>0;return l().createElement(G.Provider,{value:{suspend:o,suspended:i}},l().createElement(K,{contain:e},t,i&&l().createElement("div",{className:"modal modal--suspense"})))},U=({pageNumber:e,children:t})=>l().createElement("div",{className:`page page--${e}`},t),X=e=>{let t=e.slice(0,3);return e.length>3&&(t+=`-${e.slice(3,6)}`),e.length>6&&(t+=`-${e.slice(6,10)}`),t},ee=({currentStep:e,moveNext:t})=>{const{suspend:a}=(0,n.useContext)(G),r=(0,n.useContext)(w),{form:o,formValidators:i,templates:{formDecor:s},urls:{specialties:c}}=r,[u,m]=(0,n.useState)([]);(0,n.useEffect)((()=>{p(c,a).then(m)}),[c]);const d=(e,t)=>(t.onChange=((e="",t,a)=>a||((e,t)=>a=>{e&&t.setState((t=>Object.assign(Object.assign({},t),{form:Object.assign(Object.assign({},t.form),{[e]:a})})))})(e,t))(t.name,r,t.onChange),[e,t]),g=Object.keys(i).reduce(((e,t)=>(e[t]=()=>i[t](o[t]),e)),{}),v=[l().createElement(J,{key:1,step:1,stepCount:2,title:"Instant Free",subtitle:"Market Analysis",text:"Learn about your market demographics, patients and local competitors.",button:{text:"View Free Market Report",onClick:t},validate:()=>g.practice()&&g.specialty()&&g.website(),fields:[d(C,{apiKey:"AIzaSyBYtv7IvmkQWjcOLgdFoZH04NygY4MCDeQ",label:"Practice Name",name:"practice",placeholder:"What is your practice name?",value:o.practice,valid:g.practice,validationMessage:"Enter your practice name."}),d(A,{label:"Specialty",name:"specialty",placeholder:"What is your specialty?",value:o.specialty,options:u,optionRender:e=>e.Label,valid:g.specialty,validationMessage:"Select a specialty."}),d(P,{label:"Website",type:"text",name:"website",placeholder:"What is your website?",value:o.website,valid:g.website,validationMessage:"Enter your website."})]}),l().createElement(J,{key:2,step:2,stepCount:2,title:"Verify",subtitle:"Your Medical Practice",text:"This report may only be accessed by a medical practice & its associates.",button:{text:"Unlock Market Report",onClick:t},validate:()=>g.fullName()&&g.email()&&g.phone(),fields:[d(P,{label:"Full Name",type:"text",name:"fullName",placeholder:"What is your full name?",value:o.fullName,valid:g.fullName,validationMessage:"Enter your full name."}),d(P,{label:"Email",type:"email",name:"email",placeholder:"What is your email?",value:o.email,valid:g.email,validationMessage:"Enter your email."}),d(P,{label:"Phone",type:"tel",name:"phone",placeholder:"What is your phone number?",value:X(o.phone),valid:g.phone,validationMessage:"Enter your phone number.",onChange:e=>{const t=e.replace(/\D/g,"");r.setState((e=>Object.assign(Object.assign({},e),{form:Object.assign(Object.assign({},e.form),{phone:t})})))}})]})];return l().createElement(U,{pageNumber:e},l().createElement(I,{className:"form__decor",template:s}),v[e-1])},te=({children:e})=>l().createElement("h2",{className:"page__heading"},e),ae=({actions:e})=>l().createElement("div",{className:"page__actions"},e.map((({onClick:e,template:t},a)=>l().createElement(I,{key:a,className:"page__action",template:t,onClick:e})))),ne=({modifier:e,children:t})=>l().createElement("div",{className:"page__section"+(e?` page__section--${e}`:"")},t),le=({modifier:e,children:t})=>l().createElement("div",{className:"page__sub-section"+(e?` page__sub-section--${e}`:"")},t),re=()=>{const{conversionRate:e,driveTime:t,form:{practice:a,specialty:r},hideRevenueReport:o,templates:{locationIcon:i,page3Header:s,backIcon:c="◀ Back"},radius:u,urls:m,setState:d}=(0,n.useContext)(w),{suspend:g}=(0,n.useContext)(G),{zip:v,lat:b,lng:f}=a,[y,h]=(0,n.useState)(!1),[E,O]=(0,n.useState)(),[N,S]=(0,n.useState)([]),C=!o&&r&&E&&N.length>0;return(0,n.useEffect)((()=>{((e,t,a,n,l,r,o)=>{p(e,{zip:t,latitude:a,longitude:n,radius:l},o).then(r)})(m.demographic,v,b,f,u,O,(e=>{h(e),g(e)}))}),[m.demographic,v,b,f,u,O]),(0,n.useEffect)((()=>{r&&p(m.procedures,{specialtyId:null==r?void 0:r.SpecialtyId},g).then(S)}),[null==r?void 0:r.SpecialtyId,m.procedures]),l().createElement(U,{pageNumber:3},l().createElement(I,{className:"page__header",template:s}),l().createElement(te,null,"Analyze Your Local Market",l().createElement(ae,{actions:[{onClick:()=>d((e=>Object.assign(Object.assign({},e),{page:1}))),template:c}]})),l().createElement(ne,{modifier:"demographics"},l().createElement(le,null,l().createElement(L,{location:a,locationIcon:i}),l().createElement($,{label:`${u} mile radius around your practice`,value:u,min:"0",max:"40",step:"10",onChange:e=>d((t=>Object.assign(Object.assign({},t),{radius:e})))}),C&&l().createElement($,{label:`${e}% conversion rate for new patients`,value:e,min:"0",max:"100",step:"25",stepValueRender:e=>`${e}%`,onChange:e=>d((t=>Object.assign(Object.assign({},t),{conversionRate:e})))})),l().createElement(_,{demographics:E,loading:y})),C&&l().createElement(l().Fragment,null,l().createElement(te,null,"Build Your Revenue Report"),l().createElement(q,{procedures:N,percentPopulation:(null==E?void 0:E.PercentPopulation)||100})),l().createElement(te,null,"View Patient Drive Times",l().createElement(D,{label:"Drive Time",value:t,label1:"15 min",value1:15,label2:"30 min",value2:30,onChange:e=>d((t=>Object.assign(Object.assign({},t),{driveTime:e})))})),l().createElement(Q,{contain:!0},l().createElement(H,null)))};const oe=(e,t,a,n)=>{var l;if(e<t){const t=e+1,{form:r,urls:{submitLead:o}}=n;return 3===t&&!a&&o&&function(e,t,a,n){const l=s(void 0);l(!0),fetch(m(e,void 0),{method:"POST",headers:{"Content-Type":"application/json"},body:"string"==typeof t?t:JSON.stringify(t)}).then((e=>e.json())).finally((()=>l(!1)))}(o,{PracticeName:r.practice.name,Specialty:null===(l=r.specialty)||void 0===l?void 0:l.Label,Website:r.website,FullName:r.fullName,Email:r.email,Phone:r.phone,LeadSource:"Market Analysis",__raw__:r}),t}return e},ie=e=>{var{debug:t,disableLeadSubmission:a=!1,children:r}=e,o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["debug","disableLeadSubmission","children"]);const[i,s]=(0,n.useState)(Object.assign(Object.assign({},S),o));return l().createElement(w.Provider,{value:Object.assign(Object.assign({},i),{setState:s})},l().createElement(Q,null,l().createElement("div",{className:`market-analysis-app market-analysis-app--page-${i.page}`},1===i.page||2===i.page?l().createElement(ee,{currentStep:i.page,moveNext:()=>s((e=>Object.assign(Object.assign({},e),{page:oe(e.page,3,a,i)})))}):l().createElement(re,null),t&&l().createElement(l().Fragment,null,l().createElement("h3",null,"State:"),l().createElement("pre",{style:{whiteSpace:"pre-wrap"}},l().createElement("code",null,JSON.stringify(i,null,4)))))))},se=(e,t)=>{o().render((0,n.createElement)(ie,t),e)};if("object"==typeof window.marketAnalysisConfig){let e=window.marketAnalysisConfig.root;"string"==typeof e&&(e=document.querySelector(e)),e&&se(e,window.marketAnalysisConfig.props)}else"function"==typeof window.marketAnalysisConfig&&window.marketAnalysisConfig(se)},804:t=>{t.exports=e},196:e=>{e.exports=t}},n={};function l(e){if(n[e])return n[e].exports;var t=n[e]={exports:{}};return a[e](t,t.exports,l),t.exports}return l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(970)})()}));