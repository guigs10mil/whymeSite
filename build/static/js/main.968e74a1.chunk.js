(this["webpackJsonpwhyme-three"]=this["webpackJsonpwhyme-three"]||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var c=n(7),s=n(1),a=n.n(s),r=n(32),o=n.n(r),i=(n(72),n(2)),l=n(6),j=n(4),u=n(5),b=(n(73),function(e){var t=e.title,n=void 0===t?"NO TITLE":t,s=e.callback,a=void 0===s?function(){return null}:s;return Object(c.jsxs)("header",{children:[Object(c.jsx)("div",{className:"logo",onClick:function(){return a()},children:Object(c.jsx)("span",{children:"whyme."})}),Object(c.jsx)("div",{className:"episode",children:Object(c.jsx)("span",{children:n})})]})}),h=n(31),p=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={play:!1,progress:0},e.audio=new Audio(e.props.url),e.intervalID=null,e.togglePlay=function(){e.setState({play:!e.state.play},(function(){e.state.play?e.audio.play():e.audio.pause()}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.audio.addEventListener("ended",(function(){return e.setState({play:!1})})),this.intervalID=setInterval((function(){e.setState({progress:e.audio.currentTime/e.audio.duration})}),100)}},{key:"componentWillUnmount",value:function(){var e=this;this.audio.removeEventListener("ended",(function(){return e.setState({play:!1})})),clearInterval(this.intervalID),this.audio.pause()}},{key:"render",value:function(){return Object(c.jsxs)("footer",{style:{alignItems:"flex-start",justifyContent:"flex-end"},children:[Object(c.jsx)("div",{className:"player-controls",children:this.state.play?Object(c.jsx)(h.c,{size:"2vh",color:"#2a2a24",onClick:this.togglePlay}):Object(c.jsx)(h.d,{size:"2vh",color:"#38332B",onClick:this.togglePlay})}),Object(c.jsx)("div",{className:"progress",children:Object(c.jsx)("div",{style:{backgroundColor:"#38332B",flex:this.state.progress}})})]})}}]),n}(a.a.Component),d=n(0),O=n(9),f=n(22),x=function(e){var t=e.modelpath,n=e.position,s=void 0===n?[0,0,0]:n,a=e.rotation,r=void 0===a?[0,0,0]:a,o=e.scale,i=void 0===o?[1,1,1]:o,l=Object(f.c)(t,!0);return Object(c.jsx)("primitive",{position:s,rotation:r,scale:i,object:l.scene.clone(!0),dispose:null})},m=function(e){var t=e.children,n=e.position,a=void 0===n?[0,0,0]:n,r=e.rotation,o=void 0===r?[0,0,0]:r,i=e.scale,l=void 0===i?[1,1,1]:i,j=e.left,u=void 0!==j&&j,b=Object(s.useRef)();return Object(O.f)((function(){b.current.rotation.y+=u?-.01:.01})),Object(c.jsx)("group",{ref:b,position:a,rotation:o,scale:l,children:t})},g=function(e){var t=e.children,n=e.position,a=void 0===n?[0,0,0]:n,r=e.rotation,o=void 0===r?[0,0,0]:r,i=e.scale,l=void 0===i?[1,1,1]:i,j=e.range,u=void 0===j?[-5,5]:j,b=Object(s.useRef)();return Object(O.f)((function(){b.current.position.y>u[1]?b.current.position.y=u[0]:b.current.position.y+=.01})),Object(c.jsx)("group",{ref:b,position:a,rotation:o,scale:l,children:t})},y=function(e){var t=e.children,n=e.position,a=void 0===n?[0,0,0]:n,r=e.rotation,o=void 0===r?[0,0,0]:r,i=e.scale,l=void 0===i?[1,1,1]:i;var j=new d.Vector2(0,0),u=Object(s.useRef)();return Object(O.f)((function(){u.current.rotation.y=j.x/10,u.current.rotation.z=-j.y/10})),window.addEventListener("mousemove",(function(e){j.x=e.clientX/window.innerWidth*2-1,j.y=-e.clientY/window.innerHeight*2+1}),!1),Object(c.jsx)("group",{ref:u,position:a,rotation:o,scale:l,children:t})},v=n(25),k=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).backgroundElement=function(e,t,n,a){return Object(c.jsx)(g,{position:[e,0,t],range:[-12,12],children:Object(c.jsx)(m,{left:n,children:Object(c.jsx)(s.Suspense,{fallback:null,children:Object(c.jsx)(x,{modelpath:"/heart.glb",scale:[.2,.2,.2]})})})},a)},e.backgroundElements=function(){for(var e=[],t=0;t<100;t++)e.push([50*Math.random(),24*(Math.random()-.5),30*(Math.random()-.5),Math.random()<.5,t]);return e.map((function(e){return Object(c.jsx)(g,{position:[e[0],e[1],e[2]],range:[-12-e[0]/5,12+e[0]/5],children:Object(c.jsx)(m,{left:e[3],children:Object(c.jsx)(s.Suspense,{fallback:null,children:Object(c.jsx)(x,{modelpath:"/heart.glb",scale:[.2,.2,.2]})})})},e[4])}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(O.a,{colorManagement:!0,camera:{position:[-30,0,0],fov:30},children:[Object(c.jsx)("ambientLight",{}),Object(c.jsx)("color",{attach:"background",args:["#F8E3BD"]}),Object(c.jsx)(s.Suspense,{fallback:null,children:Object(c.jsx)(f.a,{background:!1,files:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"],path:"/Cube-Map/"})}),Object(c.jsx)(y,{children:Object(c.jsx)("group",{rotation:[0,17*Math.PI/16,0],children:Object(c.jsxs)(s.Suspense,{fallback:null,children:[Object(c.jsx)(x,{modelpath:"/statueHead.glb",scale:[.5,.5,.5]}),Object(c.jsx)(m,{position:[1,4.5,0],children:Object(c.jsx)(x,{modelpath:"/heart.glb",scale:[.6,.6,.6]})})]})})}),this.backgroundElements(),Object(c.jsxs)(v.b,{children:[Object(c.jsx)(v.a,{focusDistance:.029,focalLength:.008,bokehScale:2,height:480}),Object(c.jsx)(v.c,{opacity:.1}),Object(c.jsx)(v.d,{eskil:!1,offset:.01,darkness:.8})]})]})})}}]),n}(a.a.Component),w=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(O.a,{colorManagement:!0,camera:{position:[-40,4,10],fov:20},children:[Object(c.jsx)("ambientLight",{}),Object(c.jsx)("pointLight",{intensity:2,position:[0,3,0]}),Object(c.jsx)("color",{attach:"background",args:["#3388ff"]}),Object(c.jsx)(s.Suspense,{fallback:null,children:Object(c.jsx)(f.a,{background:!1,files:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"],path:"/Cube-Map/"})}),Object(c.jsx)(y,{children:Object(c.jsx)("group",{position:[0,-1.4,0],rotation:[0,-.5,0],children:Object(c.jsxs)(s.Suspense,{fallback:null,children:[Object(c.jsx)(x,{modelpath:"/cat.glb",position:[-1,0,-2],scale:[.1,.1,.1]}),Object(c.jsx)(x,{modelpath:"/cat.glb",rotation:[0,-1.6,0],position:[2,0,2],scale:[.09,.09,.09]})]})})}),Object(c.jsxs)(m,{children:[Object(c.jsxs)("mesh",{position:[2,3,6],rotation:[2,5,8],children:[Object(c.jsx)("boxBufferGeometry",{attach:"geometry"}),Object(c.jsx)(f.b,{attach:"material",factor:1,speed:10})]}),Object(c.jsxs)("mesh",{position:[2,3,-6],rotation:[2,-5,5],children:[Object(c.jsx)("boxBufferGeometry",{attach:"geometry"}),Object(c.jsx)(f.b,{attach:"material",factor:1,speed:10})]}),Object(c.jsxs)("mesh",{position:[-2,-3,-10],rotation:[1,2,0],children:[Object(c.jsx)("boxBufferGeometry",{attach:"geometry"}),Object(c.jsx)(f.b,{attach:"material",factor:1,speed:10})]}),Object(c.jsxs)("mesh",{position:[-4,-3,-6],rotation:[2,5,8],children:[Object(c.jsx)("boxBufferGeometry",{attach:"geometry"}),Object(c.jsx)(f.b,{attach:"material",factor:1,speed:10})]}),Object(c.jsxs)("mesh",{position:[-2,-3,6],rotation:[2,-5,5],children:[Object(c.jsx)("boxBufferGeometry",{attach:"geometry"}),Object(c.jsx)(f.b,{attach:"material",factor:1,speed:10})]}),Object(c.jsxs)("mesh",{position:[4,-1,10],rotation:[1,2,0],children:[Object(c.jsx)("boxBufferGeometry",{attach:"geometry"}),Object(c.jsx)(f.b,{attach:"material",factor:1,speed:10})]})]}),Object(c.jsx)(v.b,{})]})})}}]),n}(a.a.Component),S=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(O.a,{camera:{position:[-40,4,10],fov:20},children:[Object(c.jsx)("ambientLight",{}),Object(c.jsx)("pointLight",{position:[3,3,3]}),Object(c.jsx)(s.Suspense,{fallback:null,children:Object(c.jsx)(f.a,{background:!1,files:["px.png","nx.png","py.png","ny.png","pz.png","nz.png"],path:"/Cube-Map/"})}),Object(c.jsx)(y,{children:Object(c.jsx)("group",{rotation:[-.5,19*Math.PI/16,-1],children:Object(c.jsx)(s.Suspense,{fallback:null,children:Object(c.jsx)(x,{modelpath:"/scene.gltf",scale:[30,30,30]})})})}),Object(c.jsx)(v.b,{})]})})}}]),n}(a.a.Component),C=n(10),L=n(54),M=window.innerHeight/100,N=function(e,t,n){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(n,")")};var I=function(e){var t=e.index,n=void 0===t?1:t,s=e.callback,a=void 0===s?function(){return null}:s,r=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2-32*(n-1)*M)/20,1.1]},o=Object(L.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),i=Object(C.a)(o,2),l=i[0],j=i[1];return Object(c.jsx)(L.a.div,{className:"card card"+n.toString(),onMouseMove:function(e){var t=e.clientX,n=e.clientY;return j({xys:r(t,n)})},onMouseLeave:function(){return j({xys:[0,0,1]})},onClick:function(){return a()},style:{transform:l.xys.interpolate(N)}})},z=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"linkGroup",children:[Object(c.jsx)("a",{href:"https://open.spotify.com/artist/6TCy6SzS0fARjG3Y637lpr",className:"link",children:Object(c.jsx)(h.e,{href:"https://open.spotify.com/artist/6TCy6SzS0fARjG3Y637lpr",className:"linkIcon"})}),Object(c.jsx)("a",{href:"https://www.youtube.com/channel/UCyBIq1-kF6LL4wGLCgYWzrg",className:"link",children:Object(c.jsx)(h.f,{href:"https://open.spotify.com/artist/6TCy6SzS0fARjG3Y637lpr",className:"linkIcon"})}),Object(c.jsx)("a",{href:"https://music.apple.com/br/artist/whyme/1491270726?l=en",className:"link",children:Object(c.jsx)(h.b,{href:"https://open.spotify.com/artist/6TCy6SzS0fARjG3Y637lpr",className:"linkIcon"})}),Object(c.jsx)("a",{href:"https://www.instagram.com/whyme.music/",className:"link",children:Object(c.jsx)(h.a,{href:"https://open.spotify.com/artist/6TCy6SzS0fARjG3Y637lpr",className:"linkIcon"})})]})})}}]),n}(a.a.Component),E=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={scene:0},e.scenes=["HOME","SO ALONE","WHEN YOU'LL COME HOME","I DON'T REALLY KNOW"],e.displayScene=function(t){return 0===e.state.scene?Object(c.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(c.jsx)(I,{index:0,callback:function(){return e.setState({scene:1})}}),Object(c.jsx)(I,{callback:function(){return e.setState({scene:2})}}),Object(c.jsx)(I,{index:2,callback:function(){return e.setState({scene:3})}})]}):1===e.state.scene?Object(c.jsx)(k,{}):2===e.state.scene?Object(c.jsx)(w,{}):3===e.state.scene?Object(c.jsx)(S,{}):void 0},e.displayFooter=function(e){switch(e){case 0:return Object(c.jsx)(z,{});case 1:return Object(c.jsx)(p,{url:"/soAloneMaster.mp3"});case 2:return Object(c.jsx)(p,{url:"/whenUllComeHome2.mp3"});case 3:return Object(c.jsx)(p,{url:"/idontreallynoMaster.mp3"});default:return Object(c.jsx)(z,{})}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[this.displayScene(this.state.scene),Object(c.jsx)(b,{title:this.scenes[this.state.scene],callback:function(){return e.setState({scene:0})}}),this.displayFooter(this.state.scene)]})}}]),n}(a.a.Component),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),G()}},[[87,1,2]]]);
//# sourceMappingURL=main.968e74a1.chunk.js.map