(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{4284:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){return n(4194)}])},2642:function(e){e.exports={container:"MapPage_container__xYWXo",main:"MapPage_main__9rDnn",mapHeader:"MapPage_mapHeader__3oQ9O",mapImage:"MapPage_mapImage__enP0P",mapInfo:"MapPage_mapInfo__GI_qE",mapStats:"MapPage_mapStats__q55sE",stat:"MapPage_stat__sxArn",statIcon:"MapPage_statIcon__KuDGT",statValue:"MapPage_statValue__F1uP_",statLabel:"MapPage_statLabel__9e1yA",playButton:"MapPage_playButton__A22gH",mapDescription:"MapPage_mapDescription__ymrug",branding:"MapPage_branding__HuPlP",iframeContainer:"MapPage_iframeContainer__qN9dy",iframe:"MapPage_iframe__EmsgL",fadeOut:"MapPage_fadeOut__I3Vau",fadeIn:"MapPage_fadeIn__4GKks",backButton:"MapPage_backButton__hUtxm",mapAuthor:"MapPage_mapAuthor__oups6",statusMessage:"MapPage_statusMessage__gBAeq"}},695:function(e,a,n){"use strict";n.d(a,{Z:function(){return h}});var t=n(5893),s=n(8773),l=n(4490),o=n(1062),i=n(9222),c=n(3753);function r(e){var a,n,l,r,d,u;let{session:m,openAccountModal:h,navbarMode:p,inCrazyGames:g}=e,{t:v}=(0,i.$)("common");return!g||m&&(null==m?void 0:null===(a=m.token)||void 0===a?void 0:a.secret)?(0,t.jsx)(t.Fragment,{children:m&&(null==m?void 0:null===(n=m.token)||void 0===n?void 0:n.secret)?(0,t.jsx)("button",{className:"gameBtn ".concat(p?"navBtn":"accountBtn"," ").concat((null==m?void 0:null===(r=m.token)||void 0===r?void 0:r.supporter)?"supporterBtn":""),onClick:()=>{h()},children:(null==m?void 0:null===(d=m.token)||void 0===d?void 0:d.username)?(0,t.jsx)("p",{style:{color:"white",marginRight:"10px",marginLeft:"10px"},children:null==m?void 0:null===(u=m.token)||void 0===u?void 0:u.username}):null}):(0,t.jsx)("button",{className:"gameBtn ".concat(p?"navBtn":"accountBtn"),disabled:g,onClick:()=>{null===m&&((0,c.Z)("login_attempt"),(0,o.zB)("google"))},children:(null==m?void 0:null===(l=m.token)||void 0===l?void 0:l.secret)||null===m?(0,t.jsx)("div",{style:{marginRight:"10px",marginLeft:"10px",display:"flex",alignItems:"center",justifyContent:"center"},children:g?(0,t.jsx)(t.Fragment,{children:"..."}):(0,t.jsxs)(t.Fragment,{children:[v("login"),"\xa0\xa0",(0,t.jsx)(s.ldW,{className:"home__squarebtnicon"})]})}):"..."})}):null}var d=n(4295);function u(e){let{connected:a,shown:n}=e;return(0,t.jsx)("div",{className:"wsIcon ".concat(n?"":"hidden"),children:(0,t.jsx)(d.QbL,{size:50,style:{opacity:1,color:"white"}})})}var m=n(7294);function h(e){var a,n;let{maintenance:o,inCrazyGames:c,inCoolMathGames:h,inGame:p,openAccountModal:g,shown:v,backBtnPressed:_,reloadBtnPressed:x,setGameOptionsModalShown:j,onNavbarPress:f,onFriendsPress:y,gameOptions:N,session:b,screen:w,multiplayerState:k,loading:M}=e,{t:P}=(0,i.$)("common"),C=((null==k?void 0:k.inGame)||"singleplayer"===w)&&!M,[B,I]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{window.location.search.includes("app=true")&&I(!1)},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"navbar ".concat(v?"":"hidden"),children:[(0,t.jsxs)("div",{className:"nonHome ".concat("home"===w?"":"shown"),children:[(0,t.jsx)("h1",{className:"navbar__title desktop",onClick:f,children:"WorldGuessr"}),(0,t.jsx)("h1",{className:"navbar__title mobile",onClick:f,children:"WG"}),(0,t.jsx)("button",{className:"gameBtn navBtn backBtn desktop",onClick:_,children:P("back")}),(0,t.jsx)("button",{className:"gameBtn navBtn backBtn mobile",onClick:_,children:(0,t.jsx)(s.x_l,{})})]}),C&&(0,t.jsx)("button",{className:"gameBtn navBtn backBtn",style:{backgroundColor:"#000099"},onClick:x,children:(0,t.jsx)(d.O3P,{})}),(null==k?void 0:k.playerCount)&&(0,t.jsx)("span",{className:"bigSpan onlineText desktop ".concat("home"!==w?"notHome":""," ").concat("singleplayer"===w||"onboarding"===w||(null==k?void 0:k.inGame)||!(null==k?void 0:k.connected)?"hide":""),children:o?P("maintenanceMode"):P("onlineCnt",{cnt:k.playerCount})}),!(null==k?void 0:k.connected)&&(0,t.jsx)(u,{connected:!1,shown:!0}),"multiplayer"===w&&(null==k?void 0:k.inGame)&&(null==k?void 0:null===(a=k.gameData)||void 0===a?void 0:a.players.length)>0&&(0,t.jsxs)("span",{id:"playerCnt",className:"bigSpan",children:["\xa0 ",(0,t.jsx)(s.Xws,{})," ",k.gameData.players.length]}),(0,t.jsxs)("div",{className:"navbar__right",children:[(null==b?void 0:null===(n=b.token)||void 0===n?void 0:n.secret)&&(0,t.jsx)("button",{className:"gameBtn friendBtn",onClick:y,disabled:!(null==k?void 0:k.connected),children:(0,t.jsx)(s.wN,{size:40})}),"singleplayer"===w&&(0,t.jsxs)("button",{className:"gameBtn navBtn",disabled:M,onClick:()=>j(!0),children:["all"!==N.location&&N.location?(null==N?void 0:N.countryMap)?(0,l.Z)(N.location):null==N?void 0:N.communityMapName:P("allCountries"),N.nm&&N.npz?", NMPZ":N.nm?", NM":N.npz?", NPZ":"","\xa0",(0,t.jsx)(d.dou,{size:20})]}),!p&&B&&!h&&(0,t.jsx)(r,{inCrazyGames:c,session:b,navbarMode:!0,openAccountModal:g})]})]})})}},4490:function(e,a,n){"use strict";n.d(a,{Z:function(){return l}});var t=n(693);let s={GB:"United Kingdom",US:"United States",RU:"Russia",KR:"South Korea"};function l(e){var a;return null!==(a=s[e])&&void 0!==a?a:t.rZ(e)}},3753:function(e,a,n){"use strict";function t(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=window;try{n.gtag("event",e,a)}catch(e){console.log("error sending gtag event",e)}}n.d(a,{Z:function(){return t}})},4194:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return m}});var t=n(5893),s=n(7294),l=n(9008),o=n(1163),i=n(2642),c=n(695),r=n(9222),d=n(5114),u=n(1062);function m(e){var a;let{}=e,n=(0,o.useRouter)(),[m,h]=(0,s.useState)(0),[p,g]=(0,s.useState)([]),[v,_]=(0,s.useState)(i.iframe),{t:x}=(0,r.$)("common"),[j,f]=(0,s.useState)({});return(0,s.useEffect)(()=>{var e;let{apiUrl:a}=(0,d.Z)(),t=new URLSearchParams(window.location.search),s=n.query.s||n.query.slug||t.get("s")||t.get("slug");s&&(console.log("fetching map data for",s,(0,u.wU)()),fetch(a+"/api/map/publicData?slug=".concat(s),{headers:{authorization:null===(e=(0,u.wU)())||void 0===e?void 0:e.authorization}}).then(async e=>{if(e.ok){let a=await e.json();console.log("fetched map data:",a),f(a.mapData)}else console.error("Failed to fetch map data:",e),404===e.status&&n.push("/404")}).catch(e=>{alert("An error occurred while fetching map data")}))},[]),(0,s.useEffect)(()=>{if(!j.data)return;let e=j.data.map(e=>"//www.google.com/maps/embed/v1/streetview?key=AIzaSyA2fHNuyc768n9ZJLTrfbkWLNK3sLOK-iQ&location=".concat(e.lat,",").concat(e.lng,"&fov=60"));g(e);let a=setInterval(()=>{_(i.iframe+" "+i.fadeOut),setTimeout(()=>{h(Math.floor(Math.random()*e.length)),_(i.iframe+" "+i.fadeIn)},1e3)},5e3);return()=>clearInterval(a)},[j.data]),(0,t.jsxs)("div",{className:i.container,children:[(0,t.jsxs)(l,{children:[(0,t.jsx)("title",{children:(null==j?void 0:j.name)?"".concat(j.name," - WorldGuessr"):"Play this Custom Map on WorldGuessr"}),(0,t.jsx)("meta",{name:"description",content:"Explore the world on WorldGuessr, a free GeoGuessr clone. "}),(0,t.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/icon.ico"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"})]}),(0,t.jsx)("style",{children:"\n          .mainBody {\n            user-select: auto !important;\n            overflow: auto !important;\n          }\n        "}),(0,t.jsxs)("main",{className:i.main,children:[(0,t.jsx)(c.Z,{}),(null==j?void 0:j.name)&&(0,t.jsxs)(t.Fragment,{children:[j.in_review&&(0,t.jsx)("div",{className:i.statusMessage,children:(0,t.jsx)("p",{children:"⏳ This map is currently under review."})}),j.reject_reason&&(0,t.jsx)("div",{className:i.statusMessage,children:(0,t.jsxs)("p",{children:["❌ This map has been rejected: ",j.reject_reason]})})]}),(0,t.jsxs)("div",{className:i.branding,children:[(0,t.jsx)("h1",{children:"WorldGuessr"}),(0,t.jsx)("center",{children:(0,t.jsxs)("button",{onClick:()=>window.location.href="/".concat(window.location.search.includes("crazygames")?"?crazygames=true":""),className:i.backButton,children:["← ",x("backToGame")]})})]}),!j.name&&(0,t.jsx)("div",{className:i.statusMessage,style:{backgroundColor:"green",color:"white"},children:(0,t.jsx)("center",{children:(0,t.jsx)("p",{children:"Loading map..."})})}),j.name&&(0,t.jsxs)("div",{className:i.mapHeader,children:[(0,t.jsxs)("div",{className:i.mapImage,children:[p.length>0&&(0,t.jsx)("div",{className:i.iframeContainer,children:(0,t.jsx)("iframe",{className:v,loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",src:p[m]})}),j.countryCode&&(0,t.jsx)("img",{src:"https://flagcdn.com/w2560/".concat(null===(a=j.countryCode)||void 0===a?void 0:a.toLowerCase(),".png"),style:{width:"100%",height:"100%",objectFit:"cover"}})]}),(0,t.jsxs)("div",{className:i.mapInfo,children:[(0,t.jsx)("h1",{children:j.name}),(0,t.jsx)("p",{children:j.description_short})]})]}),(null==j?void 0:j.name)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{className:i.playButton,onClick:()=>{window.location.href="/?map=".concat(j.countryCode||j.slug).concat(window.location.search.includes("crazygames")?"&crazygames=true":"")},children:"PLAY"}),(0,t.jsxs)("div",{className:i.mapStats,children:[void 0!==j.plays&&(0,t.jsxs)("div",{className:i.stat,children:[(0,t.jsx)("span",{className:i.statIcon,children:"\uD83D\uDC65"}),(0,t.jsx)("span",{className:i.statValue,children:j.plays.toLocaleString()}),(0,t.jsx)("span",{className:i.statLabel,children:"Plays"})]}),void 0!==j.hearts&&(0,t.jsxs)("div",{className:i.stat,children:[(0,t.jsx)("span",{className:i.statIcon,children:"❤️"}),(0,t.jsx)("span",{className:i.statValue,children:j.hearts.toLocaleString()}),(0,t.jsx)("span",{className:i.statLabel,children:"Hearts"})]})]}),(0,t.jsxs)("div",{className:i.mapDescription,children:[(0,t.jsx)("h2",{children:"About this map"}),j.description_long.split("\n").map((e,a)=>(0,t.jsx)("p",{children:e},a)),(0,t.jsxs)("p",{className:i.mapAuthor,children:["Created by ",(0,t.jsx)("strong",{children:j.created_by}),j.created_at&&" ".concat(j.created_at," ago")]})]})]})]})]})}n(4173)}},function(e){e.O(0,[396,365,997,693,132,888,774,179],function(){return e(e.s=4284)}),_N_E=e.O()}]);