(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{967:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/svEmbed",function(){return n(2521)}])},9008:function(e,t,n){e.exports=n(7828)},4795:function(e,t,n){"use strict";var o=n(5893),r=n(7294),s=n(3663);t.Z=e=>{let{nm:t=!1,npz:n=!1,showRoadLabels:a=!0,lat:l,long:c,showAnswer:i=!1,hidden:d=!1,onLoad:u}=e;(0,r.useEffect)(()=>{let e=Element.prototype.appendChild;Element.prototype.appendChild=function(t){return"SCRIPT"===t.tagName&&t.src.includes("QuotaService.RecordEvent")?t:e.call(this,t)};let t=new MutationObserver(e=>{for(let t of e)for(let e of t.addedNodes)("STYLE"===e.tagName&&"undefined"===e.getAttribute("nonce")||e.innerText.includes(".mapsConsumerUiSceneCoreScene__root")||e.innerText.includes(".dismissButton"))&&e.parentNode.removeChild(e)});return t.observe(document.head,{childList:!0}),()=>{Element.prototype.appendChild=e,t.disconnect()}},[]);let p=(0,r.useRef)(null),[m,w]=(0,r.useState)(!0),g="googlemaps",h=a&&(!t&&!n||t&&n);window.reloadLoc=()=>{if(h){let e=document.getElementById("streetview");e&&(e.src=e.src)}else p.current&&(p.current.setVisible(!1),p.current=null),v()};let f=()=>{document.querySelectorAll('meta[http-equiv="origin-trial"]').forEach(e=>e.remove()),(0,s.Z)(),setTimeout(()=>{(0,s.Z)()},1e3)},v=()=>{l&&c&&document.getElementById(g)&&(p.current=new google.maps.StreetViewPanorama(document.getElementById(g),{position:{lat:l,lng:c},pov:{heading:0,pitch:0},motionTracking:!1,linksControl:!(t&&!i),clickToGo:!(t&&!i),panControl:!(n&&!i),zoomControl:!(n&&!i),showRoadLabels:a,disableDefaultUI:!0}),setTimeout(()=>{p.current.setPov(p.current.getPhotographerPov()),p.current.setZoom(0)},100),u(),p.current.addListener("pano_changed",()=>{w(!1),f()}))};return((0,r.useEffect)(()=>(w(!0),h?p.current&&(p.current.setVisible(!1),p.current=null):v(),()=>{p.current&&(google.maps.event.clearListeners(p.current,"pano_changed"),p.current.setVisible(!1),p.current=null)}),[l,c,t,n,a,h]),(0,r.useEffect)(()=>{i&&!h&&(console.log("temporarily disabling nm,npz"),p.current.setOptions({linksControl:!0,clickToGo:!0,panControl:!1,zoomControl:!1}))},[i]),l||c)?h?(0,o.jsx)("iframe",{className:"".concat(n&&t&&!i?"nmpz":""," ").concat(d?"hidden":""," streetview"),src:"https://www.google.com/maps/embed/v1/streetview?location=".concat(l,",").concat(c,"&key=AIzaSyA2fHNuyc768n9ZJLTrfbkWLNK3sLOK-iQ&fov=90&language=iw"),referrerPolicy:"no-referrer-when-downgrade",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture",onLoad:()=>{w(!1),u&&l&&c&&u()},style:{width:"100vw",height:"calc(100vh + 300px)",zIndex:100,transform:"translateY(-285px)"},id:"streetview"}):(0,o.jsx)("div",{id:g,className:"streetview inverted ".concat(m||d?"hidden":"","\n      ").concat(n&&!i?"nmpz":"","\n      ")}):null}},3663:function(e,t,n){"use strict";function o(){try{var e;null===(e=document.querySelector("a[rel=noopener]"))||void 0===e||e.remove()}catch(e){}}n.d(t,{Z:function(){return o}})},2521:function(e,t,n){"use strict";n.r(t);var o=n(5893),r=n(7294),s=n(4795),a=n(9008);t.default=()=>{let[e,t]=(0,r.useState)({nm:!1,npz:!1,showRoadLabels:!0,lat:null,long:null,showAnswer:!1,hidden:!1});return(0,r.useEffect)(()=>{{let e=new URLSearchParams(window.location.search);t({nm:"true"===e.get("nm"),npz:"true"===e.get("npz"),showRoadLabels:"false"!==e.get("showRoadLabels"),lat:parseFloat(e.get("lat")),long:parseFloat(e.get("long")),showAnswer:"true"===e.get("showAnswer"),hidden:"true"===e.get("hidden")})}},[]),(0,r.useEffect)(()=>{let n=n=>{n.data&&"object"==typeof n.data&&"updateProps"===n.data.type&&(console.log("Received message from parent",n.data),t({...e,...n.data.props}))};return window.addEventListener("message",n),()=>{window.removeEventListener("message",n)}},[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{children:(0,o.jsx)("script",{src:"https://maps.googleapis.com/maps/api/js?v=weekly",defer:!0})}),(0,o.jsx)(s.Z,{nm:e.nm,npz:e.npz,showRoadLabels:e.showRoadLabels,lat:e.lat,long:e.long,showAnswer:e.showAnswer,hidden:e.hidden,onLoad:()=>{console.log("StreetView Loaded"),window.parent.postMessage({type:"onLoad"},"*")}})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=967)}),_N_E=e.O()}]);