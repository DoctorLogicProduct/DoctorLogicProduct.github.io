!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],t):"object"==typeof exports?exports.dlMarketAnalysis=t(require("React"),require("ReactDOM")):e.dlMarketAnalysis=t(e.React,e.ReactDOM)}(self,(function(e,t){return(()=>{"use strict";var a={470:(e,t,a)=>{a.r(t),a.d(t,{init:()=>ue});var n=a(804),l=a.n(n),r=a(196),o=a.n(r);const i=()=>{},s=e=>((e,t)=>"function"==typeof e?e:t)(e,i),c=e=>"number"==typeof e&&!isNaN(e),u=(e,t)=>{const a=[].concat(e,t).find((e=>c(e)));return c(a)?a:t},p=(e,t)=>{if(!t)return e;const[a,n=""]=e.split("?"),l=Object.keys(t).map((e=>`${e}=${t[e]}`)).join("&");return`${a}?${n}${n.length?"&":""}${l}`};function m(e,t,a){return"function"==typeof t&&(a=t,t=void 0),function(e,t,a){"function"==typeof t&&(a=t,t=void 0);const n=s(a);return n(!0),fetch(p(e,t)).finally((()=>n(!1)))}(e,t,a).then((e=>e.json()))}function d(e,t,a){return a="object"==typeof t?t:"object"==typeof a?a:{},"number"==typeof t&&(a.minimumFractionDigits=a.maximumFractionDigits=t),new Intl.NumberFormat(navigator.language,a).format(e)}function g(e,t,a){return a="object"==typeof t?t:"object"==typeof a?a:{},d(e,"number"==typeof t?t:void 0,Object.assign({currency:"USD",style:"currency",maximumFractionDigits:0,minimumFractionDigits:0},a))}const b=(...e)=>Promise.all(e.map((e=>new Promise(((t,a)=>{const n=document.createElement("script");n.type="text/javascript",n.onload=()=>t(),n.onerror=a,n.src=e,document.getElementsByTagName("head")[0].appendChild(n)}))))).then(),v=(e,t="",a="",n="")=>e?`${a}${e}${n}`:t,f=(e,t="",a="",n="",l)=>"number"==typeof e?`${a}${d(e,l)}${n}`:t,y=(e,t="",a)=>f(e,t,"","%",a),h=(e,t="",a)=>f(e,t,"$","",a),E=({loading:e,children:t})=>l().createElement(l().Fragment,null,e?l().createElement("span",{className:"table__loading table__loading--cell"}):t),_=({loading:e,label:t,single:a,area:n})=>l().createElement("tr",null,l().createElement("td",null,t),l().createElement("td",null,l().createElement(E,{loading:e},a)),l().createElement("td",null,l().createElement(E,{loading:e},n))),O=({loading:e,demographics:t})=>{var a,n;return l().createElement("table",{className:"table table--demographics"},l().createElement("thead",null,l().createElement("tr",null,l().createElement("th",null,"Demographic"),l().createElement("th",null,v(null===(a=null==t?void 0:t.Zip)||void 0===a?void 0:a.toString(),"Zip Code")),l().createElement("th",null,v(null===(n=null==t?void 0:t.Radius)||void 0===n?void 0:n.toString(),"Radius",""," Miles")))),l().createElement("tbody",null,[{label:"Population",single:f(null==t?void 0:t.SinglePopulation),area:f(null==t?void 0:t.AreaPopulation)},{label:"Female",single:f(null==t?void 0:t.SingleFemale),area:f(null==t?void 0:t.AreaFemale)},{label:"Female (30-60)",single:f(null==t?void 0:t.SingleFemale3060),area:f(null==t?void 0:t.AreaFemale3060)},{label:"Male",single:f(null==t?void 0:t.SingleMale),area:f(null==t?void 0:t.AreaMale)},{label:"Male (30-60)",single:f(null==t?void 0:t.SingleMale3060),area:f(null==t?void 0:t.AreaMale3060)},{label:"White",single:y(null==t?void 0:t.SingleWhite),area:y(null==t?void 0:t.AreaWhite)},{label:"Black",single:y(null==t?void 0:t.SingleBlack),area:y(null==t?void 0:t.AreaBlack)},{label:"Asian",single:y(null==t?void 0:t.SingleAsian),area:y(null==t?void 0:t.AreaAsian)},{label:"Other",single:y(null==t?void 0:t.SingleOther),area:y(null==t?void 0:t.AreaOther)},{label:"Hispanic",single:y(null==t?void 0:t.SingleHispanic),area:y(null==t?void 0:t.AreaHispanic)},{label:"Non-Hispanic",single:y(null==t?void 0:t.SingleNonHispanic),area:y(null==t?void 0:t.AreaNonHispanic)},{label:"Avg Income",single:h(null==t?void 0:t.SingleIncome),area:h(null==t?void 0:t.AreaIncome)},{label:"Home Value",single:h(null==t?void 0:t.SingleHome),area:h(null==t?void 0:t.AreaHome)}].map((t=>l().createElement(_,Object.assign({key:t.label,loading:e},t))))))};const N=e=>{var{apiKey:t,className:a="",value:r,onChange:o}=e,i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["apiKey","className","value","onChange"]);const[s,c]=(0,n.useState)((null==r?void 0:r.name)||""),u=(0,n.useRef)(),p=(0,n.useCallback)((e=>{e?(e=>{return t=void 0,a=void 0,l=function*(){if(!(window.google&&window.google.maps&&window.google.maps.places))return console.debug("loading google places api"),b(`https://maps.googleapis.com/maps/api/js?key=${e}&libraries=places`).then((()=>console.debug("google places api loaded")));console.debug("google places api already loaded")},new((n=void 0)||(n=Promise))((function(e,r){function o(e){try{s(l.next(e))}catch(e){r(e)}}function i(e){try{s(l.throw(e))}catch(e){r(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n((function(e){e(a)}))).then(o,i)}s((l=l.apply(t,a||[])).next())}));var t,a,n,l})(t).then((()=>{u.current=new google.maps.places.Autocomplete(e,{types:["establishment"],componentRestrictions:{country:"us"}}),u.current.addListener("place_changed",(()=>{if(c(e.value),u.current){const e=u.current.getPlace();o((e=>{var t,a,n,l;return{address:e.formatted_address,lat:null===(t=e.geometry)||void 0===t?void 0:t.location.lat(),lng:null===(a=e.geometry)||void 0===a?void 0:a.location.lng(),name:e.name,zip:null===(l=null===(n=e.address_components)||void 0===n?void 0:n.find((e=>e.types.includes("postal_code"))))||void 0===l?void 0:l.short_name}})(e))}}))})):u.current&&u.current.unbindAll()}),[]);return l().createElement(j,Object.assign({},i,{value:s,onChange:e=>c(e),className:`input--google-place ${a}`,type:"text",inputRef:p,render:e=>l().createElement("span",{className:"input__input-wrapper"},e)}))},w=e=>!0===e?"valid":!1===e?"invalid":"unknown",S=({label:e,type:t,valid:a,validationMessage:r,className:o="",touched:i=!1,children:s})=>{const[c,u]=(0,n.useState)(i),p=`input${t?` input--${t}`:""}${o?` ${o}`:""}`.trim(),m=a&&a();return(0,n.useEffect)((()=>{i&&u(i)}),[i]),l().createElement("label",{className:p,onBlur:()=>u(!0)},l().createElement("span",{className:"input__label"},e),s,r&&l().createElement("span",{className:`input__validation input__validation--${w(m)}`},m||!c?"":"function"==typeof(d=r)?d():d));var d};const j=e=>{var{label:t,name:a,inputRef:n,type:r,className:o="",valid:i,validationMessage:s,touched:c,onChange:u,children:p,render:m}=e,d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["label","name","inputRef","type","className","valid","validationMessage","touched","onChange","children","render"]);const g="function"==typeof m?m:e=>l().createElement(l().Fragment,null,e,p);return l().createElement(S,{label:t,type:r,className:o,valid:i,validationMessage:s,touched:c},g(l().createElement("input",Object.assign({},d,{ref:n,className:"input__input",name:a,type:r,onChange:e=>u(e.target.value)}))))};const C=e=>"number"==typeof e&&!isNaN(e),P=e=>{const t=parseFloat(`${e}`);return C(t)?t:NaN},x=e=>{var{onChange:t,stepValueRender:a}=e,n=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["onChange","stepValueRender"]);const r=((e,t,a,n)=>{const r=((e,t,a)=>{const n=[];if(C(e)&&C(t)&&C(a))for(let l=e;l<=t;l+=a)n.push(l);return n})(e,t,a),o="function"==typeof n?n:e=>e;return r.length>0?l().createElement("span",{className:"input__steps"},r.map(((e,t)=>l().createElement("span",{key:t,className:`input__step input__step--${t+1}`},o(e))))):null})(P(n.min),P(n.max),P(n.step),a);return l().createElement(j,Object.assign({},n,{type:"range",onChange:e=>t(parseFloat(e)),render:e=>l().createElement("span",{className:"input__range-wrapper"},e,r)}))};const k=e=>{var{options:t,className:a,label:n,placeholder:r,value:o,valid:i,validationMessage:s,touched:c,optionRender:u,onChange:p}=e,m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["options","className","label","placeholder","value","valid","validationMessage","touched","optionRender","onChange"]);const d=u||(e=>`${e}`),g=((e,t)=>{const a=e.indexOf(t);return a>=0?a:-1})(t,o),b=r&&-1===g;return l().createElement(S,{label:n,type:"select",className:a,valid:i,validationMessage:s,touched:c},l().createElement("select",Object.assign({},m,{className:"input__select"+(b?" input__select--placeholder":""),value:-1===g?"":g,onChange:e=>p(t[parseInt(e.target.value,10)])}),r&&l().createElement("option",{value:"",disabled:!0},r),t.map(((e,t)=>l().createElement("option",{key:`${e}--${t}`,value:t},d(e))))))},M=e=>!!e,$={email:e=>M(e)&&/.+@.+\.+/.test(e),practice:e=>!!e&&M(e.address),phone:e=>M(e)&&!!e&&10===e.replace(/\D/g,"").length,requiredString:M,specialty:e=>!!e&&!!e.SpecialtyId,website:e=>M(e)&&/.+\..+/.test(e)},A={conversionRate:25,driveTime:15,form:{email:"",fullName:"",phone:"",practice:{address:"",lat:0,lng:0,name:"",zip:""},specialty:void 0,website:""},formValidators:{email:$.email,fullName:$.requiredString,phone:$.phone,practice:$.practice,specialty:$.specialty,website:$.website},isolineColor:"#086bb5",mapGestureHandling:!0,page:1,placeholders:{email:"What is your email?",fullName:"What is your full name?",phone:"What is your phone number?",practice:"What is your practice name?",specialty:"What is your specialty?",website:"What is your website?"},radius:10,setState:i,templates:{},urls:{demographic:"",isoline:"",mapbox:"",procedures:"",specialties:""}},R=(0,n.createContext)(A);const I=e=>{var{template:t,className:a}=e,r=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["template","className"]);const o=(0,n.useCallback)((e=>{e&&t&&("string"==typeof t?e.innerHTML=t:e.appendChild(t.cloneNode(!0)))}),[t]);return l().createElement(l().Fragment,null,t&&l().createElement("div",Object.assign({},r,{className:a,ref:o})))},F=({modifier:e,children:t,toggle:a})=>l().createElement("label",{className:`toggle__label toggle__label--${e}`,onClick:()=>a()},t),D=({label:e,value:t,label1:a,value1:r,label2:o,value2:i,onChange:s})=>{const{templates:{toggle:c}}=(0,n.useContext)(R),u=()=>s(t===r?i:r);return l().createElement(S,{className:"input--toggle toggle",label:e},l().createElement("input",{className:"toggle__input",type:"checkbox",checked:t===i,onChange:()=>u()}),l().createElement(F,{modifier:"1",toggle:u},a),l().createElement(I,{className:"toggle__icon",template:c}),l().createElement(F,{modifier:"2",toggle:u},o))},T=({location:e,locationIcon:t=""})=>l().createElement("div",{className:"location"},l().createElement(I,{className:"location__icon",template:t}),l().createElement("span",{className:"location__name"},e.name),l().createElement("address",{className:"location__address"},e.address));const L=e=>{return t=void 0,a=void 0,l=function*(){if(void 0===window.L){console.debug("loading leaflet");const t=["https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"],a=["https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"];return e&&(t.push("//unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css"),a.push("https://unpkg.com/leaflet-gesture-handling")),((...e)=>{e.forEach((e=>{const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)}))})(...t),b(...a).then((()=>console.debug("leaflet loaded")))}console.debug("leaflet already loaded")},new((n=void 0)||(n=Promise))((function(e,r){function o(e){try{s(l.next(e))}catch(e){r(e)}}function i(e){try{s(l.throw(e))}catch(e){r(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n((function(e){e(a)}))).then(o,i)}s((l=l.apply(t,a||[])).next())}));var t,a,n,l},H=()=>{const{suspend:e}=(0,n.useContext)(Q),{driveTime:t,form:{practice:{lat:a,lng:r}},mapGestureHandling:o,isolineColor:i,urls:{mapbox:s,isoline:c}}=(0,n.useContext)(R),u=(0,n.useRef)(),p=(0,n.useRef)(),d=(0,n.useCallback)((()=>{u.current&&m(c,{latitude:a,longitude:r,seconds:60*t},e).then((e=>{const t=u.current,a=p.current;if(t){const n=p.current=window.L.geoJSON(e,{style:()=>({color:i})}).addTo(t);t.fitBounds(n.getBounds()),a&&t.removeLayer(a)}}))}),[t,a,r,s,c]);return(0,n.useEffect)((()=>{d()}),[d]),l().createElement("div",{className:"map",ref:(0,n.useCallback)((e=>{e&&L(o).then((()=>{const t=u.current=window.L.map(e,{gestureHandling:!0}).setView([a,r],13);window.L.tileLayer(s,{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(t),d()}))}),[])})},U=({show:e,modifier:t,children:a})=>e?l().createElement("div",{className:"modal"+(t?` modal--${t}`:"")},!!n.Children.count&&l().createElement("div",{className:"modal__body"},a)):null,B=({disable:e,form:t,submitUrl:a})=>{var n;if(!e&&a){const[e,...r]=t.fullName.split(" "),o={practice_name:t.practice.name,specialty:(null===(n=t.specialty)||void 0===n?void 0:n.Label)||"",url:t.website,first_name:e,last_name:r.join(" "),email:t.email,phone:t.phone},i=p(a,o);return l().createElement("iframe",{src:i,width:"1",height:"1"})}return null},W=({modifier:e,children:t})=>l().createElement("div",{className:"revenue-report__container"+(e?` revenue-report__container--${e}`:"")},t),V=({label:e,value:t,modifier:a})=>l().createElement("div",{className:"revenue-report__field report-field"+(a?` report-field--${a}`:"")},l().createElement("div",{className:"report-field__label"},e),l().createElement("div",{className:"report-field__value"},t)),z=({pair:{procedure:e,values:{patients:t,potential:a,prospects:r}},availableProcedures:o,onChange:i,setUserPrice:s,onDelete:c})=>{const p=u([null==e?void 0:e.UserPrice,null==e?void 0:e.DefaultPrice],0),[m,b]=(0,n.useState)(g(p));return l().createElement("div",{className:"revenue-report__item"},l().createElement(W,null,l().createElement(k,{label:"Choose a service",value:e,options:o,optionRender:e=>e.Label,onChange:i}),l().createElement(j,{label:"Adjust Price",type:"text",value:m,onBlur:()=>b(g(p)),onChange:t=>{if(t&&"$"!==t){const a=(e=>parseInt(e.replace(/\D/g,""))||0)(t);a<=Number.MAX_SAFE_INTEGER&&e&&(b(`$${a.toString()}`),s(e,a))}else b("$"),s(e,0)},disabled:!e,inputMode:"numeric"})),l().createElement(W,null,e&&l().createElement(l().Fragment,null,l().createElement(V,{label:"Prospects",value:d(r,0)}),l().createElement(V,{label:"Patients",value:d(t,0)}),l().createElement(V,{label:"Potential",value:g(a)})),l().createElement("button",{className:"revenue-report__button revenue-report__button--remove",onClick:c},l().createElement("span",null,"Remove"))))},q={currency:"USD",style:"currency",maximumFractionDigits:0,minimumFractionDigits:0},Y=({DefaultPrice:e,UserPrice:t,ProceduresPerYear:a},n,l)=>{const r=u(t,e);return{patients:Math.floor(a*n*(l/100)),potential:Math.floor(r*a*n*(l/100)),prospects:Math.floor(a*n)}},K=({procedures:e,percentPopulation:t,setUserPrice:a})=>{const{conversionRate:r}=(0,n.useContext)(R),[o,i]=(0,n.useState)([]),s=((e,t)=>t.filter((t=>!e.some((e=>e.procedure.MasterProcedureId===t.MasterProcedureId)))))(o,e),c=(e=>e.reduce(((e,{values:{patients:t,potential:a,prospects:n}})=>({patients:e.patients+t,potential:e.potential+a,prospects:e.prospects+n})),{prospects:0,patients:0,potential:0}))(o),u=(0,n.useCallback)((e=>({procedure:e,values:Y(e,t,r)})),[Y,t,r]);(0,n.useEffect)((()=>{e&&e.length>0?i([u(e[0])]):i([])}),[e]),(0,n.useEffect)((()=>{i((e=>e.map((e=>u(e.procedure)))))}),[u]);const p=(0,n.useCallback)(((e,t)=>{i((a=>a.map(((a,n)=>n===t?u(e):a))))}),[i]),m=(0,n.useCallback)((e=>{i((t=>t.filter(((t,a)=>a!==e))))}),[i]);return l().createElement("div",{className:"revenue-report"},o.map(((e,t)=>l().createElement(z,{key:e.procedure.MasterProcedureId,pair:e,availableProcedures:[e.procedure,...s],onChange:e=>p(e,t),setUserPrice:a,onDelete:()=>m(t)}))),l().createElement("div",{className:"revenue-report__totals"},l().createElement(W,{modifier:"totals"},l().createElement("h3",{className:"revenue-report__total-label"},"Totals"),l().createElement(V,{label:"Prospects",value:d(c.prospects,0)}),l().createElement(V,{label:"Patients",value:d(c.patients,0)}),l().createElement(V,{label:"Potential",value:(g=c.potential,d(g,q))}))),l().createElement("div",{className:"revenue-report__buttons"},l().createElement("button",{className:"revenue-report__button revenue-report__button--add",disabled:!s.length,onClick:()=>i((e=>[...e,u(s[0])]))},"Add Service"),l().createElement("button",{className:"revenue-report__button revenue-report__button--add-all",disabled:!s.length,onClick:()=>i((e=>[...e,...s.map((e=>u(e)))]))},"Add All Services")));var g},Z=({stepCount:e,currentStep:t})=>l().createElement("div",{className:"step__indicator step-indicator"},"Step ",l().createElement("span",{className:"step-indicator__step"},t)," of ",l().createElement("span",{className:"step-indicator__step-count"},e)),G=({step:e,stepCount:t,title:a,subtitle:r,text:o,button:i,fields:s,validate:c})=>{const[u,p]=(0,n.useState)();return l().createElement("form",{className:`step step--${e}`,onSubmit:e=>{e.preventDefault(),p(!0),c()&&i.onClick()}},l().createElement(Z,{currentStep:e,stepCount:t}),l().createElement("h2",{className:"step__title"},a+" ",l().createElement("small",{className:"step__subtitle"},r)),l().createElement("p",{className:"step__text"},o),l().createElement("div",{className:"step__fields"},s.map(((e,t)=>{const a=e[0],r=e[1];return"boolean"==typeof u&&(r.touched=u),l().createElement("div",{className:"step__field",key:t},(0,n.createElement)(a,r))}))),l().createElement("button",{className:"step__button"},i.text))},J=({contain:e,children:t})=>e?l().createElement("div",{className:"modal__container"},t):l().createElement(l().Fragment,null,t),Q=(0,n.createContext)({suspended:!1,suspend:i}),X=({contain:e,children:t})=>{const[a,r]=(0,n.useState)(0),o=(0,n.useCallback)((e=>{r((t=>e?t+1:t-1))}),[]),i=a>0;return l().createElement(Q.Provider,{value:{suspend:o,suspended:i}},l().createElement(J,{contain:e},t,l().createElement(U,{show:i,modifier:"suspense"})))},ee=({pageNumber:e,children:t})=>l().createElement("div",{className:`page page--${e}`},t),te=e=>{let t=e.slice(0,3);return e.length>3&&(t+=`-${e.slice(3,6)}`),e.length>6&&(t+=`-${e.slice(6)}`),t},ae=({currentStep:e,moveNext:t})=>{const{suspend:a}=(0,n.useContext)(Q),r=(0,n.useContext)(R),{form:o,formValidators:i,placeholders:s,templates:{formDecor:c},urls:{specialties:u}}=r,[p,d]=(0,n.useState)([]);(0,n.useEffect)((()=>{m(u,a).then((e=>{d(e);const t=e.find((e=>{var t;return e.SpecialtyId===(null===(t=o.specialty)||void 0===t?void 0:t.SpecialtyId)}));t&&r.setState((e=>Object.assign(Object.assign({},e),{form:Object.assign(Object.assign({},e.form),{specialty:t})})))}))}),[u]);const g=(e,t)=>(t.onChange=((e="",t,a)=>a||((e,t)=>a=>{e&&t.setState((t=>Object.assign(Object.assign({},t),{form:Object.assign(Object.assign({},t.form),{[e]:a})})))})(e,t))(t.name,r,t.onChange),[e,t]),b=Object.keys(i).reduce(((e,t)=>(e[t]=()=>i[t](o[t]),e)),{}),v=[l().createElement(G,{key:1,step:1,stepCount:2,title:"Instant Free",subtitle:"Market Analysis",text:"Learn about your market demographics, patients and local competitors.",button:{text:"View Free Market Report",onClick:t},validate:()=>b.practice()&&b.specialty()&&b.website(),fields:[g(N,{apiKey:"AIzaSyBYtv7IvmkQWjcOLgdFoZH04NygY4MCDeQ",label:"Practice Name",name:"practice",placeholder:s.practice,value:o.practice,valid:b.practice,validationMessage:"Enter your practice name.",autoFocus:!0}),g(k,{label:"Specialty",name:"specialty",placeholder:s.specialty,value:o.specialty,options:p,optionRender:e=>e.Label,valid:b.specialty,validationMessage:"Select a specialty."}),g(j,{label:"Website",type:"text",name:"website",placeholder:s.website,value:o.website,valid:b.website,validationMessage:"Enter your website."})]}),l().createElement(G,{key:2,step:2,stepCount:2,title:"Verify",subtitle:"Your Medical Practice",text:"This report may only be accessed by a medical practice & its associates.",button:{text:"Unlock Market Report",onClick:t},validate:()=>b.fullName()&&b.email()&&b.phone(),fields:[g(j,{label:"Full Name",type:"text",name:"fullName",placeholder:s.fullName,value:o.fullName,valid:b.fullName,validationMessage:"Enter your full name.",autoFocus:!0}),g(j,{label:"Email",type:"email",name:"email",placeholder:s.email,value:o.email,valid:b.email,validationMessage:"Enter your email."}),g(j,{label:"Phone",type:"tel",name:"phone",placeholder:s.phone,value:te(o.phone),valid:b.phone,validationMessage:"Enter your phone number.",onChange:e=>{const t=e.replace(/\D/g,"");r.setState((e=>Object.assign(Object.assign({},e),{form:Object.assign(Object.assign({},e.form),{phone:t})})))}})]})];return l().createElement(ee,{pageNumber:e},l().createElement(I,{className:"form__decor",template:c}),v[e-1])},ne=({children:e})=>l().createElement("h2",{className:"page__heading"},e),le=({actions:e})=>l().createElement("div",{className:"page__actions"},e.map((({onClick:e,template:t},a)=>l().createElement(I,{key:a,className:"page__action",template:t,onClick:e,onKeyUp:t=>(" "===t.key||"Enter"===t.key)&&e(),tabIndex:0})))),re=({modifier:e,children:t})=>l().createElement("div",{className:"page__section"+(e?` page__section--${e}`:"")},t),oe=({modifier:e,children:t})=>l().createElement("div",{className:"page__sub-section"+(e?` page__sub-section--${e}`:"")},t),ie=({moveTo:e})=>{const{conversionRate:t,driveTime:a,form:{practice:r,specialty:o},hideRevenueReport:i,templates:{locationIcon:s,page3Disclaimer:c,page3Header:u,backIcon:p,printIcon:d},radius:g,urls:b,setState:v}=(0,n.useContext)(R),{suspend:f}=(0,n.useContext)(Q),{zip:y,lat:h,lng:E}=r,[_,N]=(0,n.useState)(!1),[w,S]=(0,n.useState)(),[j,C]=(0,n.useState)([]),P=(0,n.useCallback)(((e,t)=>{C((a=>a.map((a=>(a.MasterProcedureId===e.MasterProcedureId&&(a.UserPrice=t),a)))))}),[C]),k=!i&&o&&w&&j.length>0;return(0,n.useEffect)((()=>{((e,t,a,n,l,r,o)=>{m(e,{zip:t,latitude:a,longitude:n,radius:l},o).then(r)})(b.demographic,y,h,E,g,S,(e=>{N(e),f(e)}))}),[b.demographic,y,h,E,g,S]),(0,n.useEffect)((()=>{o&&m(b.procedures,{specialtyId:null==o?void 0:o.SpecialtyId},f).then(C)}),[null==o?void 0:o.SpecialtyId,b.procedures]),l().createElement(ee,{pageNumber:3},l().createElement(I,{className:"page__header",template:u}),l().createElement(ne,null,"Analyze Your Local Market",l().createElement(le,{actions:[{onClick:()=>e(1),template:p},{onClick:()=>{window.print()},template:d}]})),l().createElement(re,{modifier:"demographics"},l().createElement(oe,null,l().createElement(T,{location:r,locationIcon:s}),l().createElement(x,{label:`${g} mile radius around your practice`,value:g,min:"0",max:"40",step:"10",onChange:e=>v((t=>Object.assign(Object.assign({},t),{radius:e})))}),k&&l().createElement(x,{label:`${t}% conversion rate for new patients`,value:t,min:"0",max:"100",step:"25",stepValueRender:e=>`${e}%`,onChange:e=>v((t=>Object.assign(Object.assign({},t),{conversionRate:e})))})),l().createElement(O,{demographics:w,loading:_})),k&&l().createElement(l().Fragment,null,l().createElement(ne,null,"Build Your Revenue Report"),l().createElement(K,{procedures:j,percentPopulation:(null==w?void 0:w.PercentPopulation)||100,setUserPrice:P})),l().createElement(ne,null,"View Patient Drive Times",l().createElement(D,{label:"Drive Time",value:a,label1:"15 min",value1:15,label2:"30 min",value2:30,onChange:e=>v((t=>Object.assign(Object.assign({},t),{driveTime:e})))})),l().createElement(X,{contain:!0},l().createElement(H,null)),l().createElement(I,{className:"page__disclaimer",template:c}))};const se=(e,t)=>{if(e>=1&&e<=3){const{disableLeadSubmission:a,form:n,urls:{submitLead:l},setState:r}=t;3===e&&!a&&l&&((e,t)=>{var a;(function(e,t,a,n,l){const r=s(void 0);r(!0),fetch(p(e,void 0),Object.assign({method:"POST",headers:{"Content-Type":"application/json"},body:"string"==typeof t?t:JSON.stringify(t)},void 0)).then((e=>e.json())).finally((()=>r(!1)))})(e,{PracticeName:t.practice.name,Specialty:null===(a=t.specialty)||void 0===a?void 0:a.Label,Website:t.website,FullName:t.fullName,Email:t.email,Phone:t.phone,LeadSource:"Market Analysis",__raw__:t})})(l,n),window.scrollTo({behavior:"smooth",top:0}),r((t=>Object.assign(Object.assign({},t),{page:e})))}},ce=e=>{var{debug:t}=e,a=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}(e,["debug"]);const[r,o]=(0,n.useState)(Object.assign(Object.assign({},A),a)),i=Object.assign(Object.assign({},r),{setState:o});return l().createElement(R.Provider,{value:i},l().createElement(X,null,l().createElement("div",{className:`market-analysis-app market-analysis-app--page-${r.page}`},1===r.page||2===r.page?l().createElement(ae,{currentStep:r.page,moveNext:()=>se(r.page+1,i)}):l().createElement(l().Fragment,null,l().createElement(ie,{moveTo:e=>se(e,i)}),l().createElement(B,{submitUrl:i.urls.pardot,form:i.form,disable:i.disableLeadSubmission})),t&&l().createElement(l().Fragment,null,l().createElement("h3",null,"State:"),l().createElement("pre",{style:{whiteSpace:"pre-wrap"}},l().createElement("code",null,JSON.stringify(r,null,4)))))))},ue=(e,t)=>{o().render((0,n.createElement)(ce,t),e)};if("object"==typeof window.marketAnalysisConfig){let e=window.marketAnalysisConfig.root;"string"==typeof e&&(e=document.querySelector(e)),e&&ue(e,window.marketAnalysisConfig.props)}else"function"==typeof window.marketAnalysisConfig&&window.marketAnalysisConfig(ue)},804:t=>{t.exports=e},196:e=>{e.exports=t}},n={};function l(e){if(n[e])return n[e].exports;var t=n[e]={exports:{}};return a[e](t,t.exports,l),t.exports}return l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(470)})()}));