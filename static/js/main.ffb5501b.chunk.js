(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,i){e.exports=i(23)},23:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(2),o=i(4),a=i(3),l=i(5),s=i(6),c=i(7),d=i.n(c),y=i(13),u=i.n(y),h=i(0),p=i(14),v=(i(33),i(15)),f=i(16),m=i(17),w=i(18),S=i(9),g=i(19),b=i(20),k=i(21),A=i.n(k);i(32);function j(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return C(e,t);var i={}.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?C(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==i.return||i.return()}finally{if(l)throw o}}}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}var E,V,D,O,W={speed:10,runningSpeed:30,jump:15,gravity:30,maxSpeed:.5,background:8965358,cameraDistance:3,debug:!1,damping:4},L=W.speed,z=!1,M=!1,P=[],I=5,R={height:window.innerHeight-50,width:window.innerWidth},x=function(e){function t(){var e,i;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(i=Object(o.a)(this,(e=Object(a.a)(t)).call.apply(e,[this].concat(l)))).controls=function(e){var t=Object(s.a)(Object(s.a)(i)),n=e*(M?L:L/4);(t.keyStates.KeyW||t.joyStates.up)&&t.playerVelocity.add(t.getForwardVector().multiplyScalar(n)),(t.keyStates.KeyS||t.joyStates.down)&&t.playerVelocity.add(t.getForwardVector().multiplyScalar(-n)),(t.keyStates.KeyA||t.joyStates.left)&&t.playerVelocity.add(t.getSideVector().multiplyScalar(-n)),(t.keyStates.KeyD||t.joyStates.right)&&t.playerVelocity.add(t.getSideVector().multiplyScalar(n)),M&&t.keyStates.Space&&(t.playerVelocity.y=W.jump)},i.animate=function(){for(var e=Object(s.a)(Object(s.a)(i)),t=Math.min(.05,E.getDelta())/I,n=0;n<I;n++){e.controls(t),e.updatePlayer(t),e.updateSpheres(t),e.teleportPlayerIfOob();var r,o=j(P);try{for(o.s();!(r=o.n()).done;){r.value.update(t)}}catch(a){o.e(a)}finally{o.f()}}e.renderer.render(V,O),D.update(),requestAnimationFrame(e.animate)},i}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.init(),this.animate()}},{key:"componentWillUnmount",value:function(){}},{key:"init",value:function(){var e=this,t=this;E=new h.j,(V=new h.ob).background=new h.k(8965358),V.fog=new h.t(8965358,0,300),this.renderer=new h.Fb({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=h.Ab,this.renderer.outputEncoding=h.Gb,this.renderer.toneMapping=h.a,this.mount.appendChild(this.renderer.domElement),(O=new h.fb(100,window.innerWidth/window.innerHeight,.1,1e3)).rotation.order="YXZ";var i=new h.w(4491451,8772,.5);i.position.set(2,1,1),V.add(i);var n=new h.n(16777215,.8);n.position.set(-5,25,-1),n.castShadow=!0,n.shadow.camera.near=.01,n.shadow.camera.far=500,n.shadow.camera.right=30,n.shadow.camera.left=-30,n.shadow.camera.top=30,n.shadow.camera.bottom=-30,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.radius=4,n.shadow.bias=-6e-5,V.add(n),(D=new b.a).domElement.style.position="absolute",D.domElement.style.top="0px",this.mount.appendChild(D.domElement),this.Soldiers=[],this.spheres=[];this.SPHERE_RADIUS=.1;for(var r=new h.x(t.SPHERE_RADIUS,5),o=new h.U({color:12303172}),a=0;a<100;a++){var l=new h.S(r,o);l.castShadow=!0,l.receiveShadow=!0,V.add(l),t.spheres.push({mesh:l,collider:new h.rb(new h.Cb(0,-100,0),t.SPHERE_RADIUS),velocity:new h.Cb})}if(this.worldOctree=new m.a,this.playerCollider=new S.a(new h.Cb(0,.35,0),new h.Cb(0,2,0),.35),this.playerVelocity=new h.Cb,this.playerDirection=new h.Cb,this.keyStates={},this.joyStates={},this.stateList={},this.currentAction="",this.previousAction="",this.vector1=new h.Cb,this.vector2=new h.Cb,this.vector3=new h.Cb,document.addEventListener("keydown",function(i){t.keyStates[i.code]=!0,t.keyStates.KeyW||t.keyStates.KeyS||t.keyStates.KeyA||t.keyStates.KeyD?t.stateList.Standing==t.currentAction&&(z?e.fadeToAction("Running",.4):e.fadeToAction("Walking",.2)):t.keyStates.KeyR&&(L=(z=!z)?W.runningSpeed:W.speed)}),document.addEventListener("keyup",function(i){t.keyStates[i.code]=!1,t.keyStates.KeyW||t.keyStates.KeyS||t.keyStates.KeyA||t.keyStates.KeyD||t.stateList.Standing!==t.currentAction&&(e.fadeToAction("Standing",.2),t.playerVelocity.x=0,t.playerVelocity.z=0)}),document.addEventListener("mousedown",function(){document.body.requestPointerLock(),performance.now()}),document.addEventListener("mousemove",function(e){document.pointerLockElement===document.body&&(O.rotation.y-=e.movementX/500,O.rotation.x-=e.movementY/500)}),window.addEventListener("resize",this.onWindowResize()),this.isMobile()){var s,c,d=!1,y=0;document.addEventListener("touchstart",function(e){e.preventDefault();for(var t=e.touches.length,i=0;i<t;i++){if(e.touches[i].pageX>window.innerWidth/2){d=!0,s=e.touches[i].pageX,c=e.touches[i].pageY,y=i;break}}},{passive:!1}),document.addEventListener("touchmove",function(e){if(d){var t=e.touches[y].pageX-s,i=e.touches[y].pageY-c;O.rotation.y-=t/500,O.rotation.x-=i/500,s=e.touches[y].pageX,c=e.touches[y].pageY}}),document.addEventListener("touchend",function(e){"undefined"==typeof e.touches[y]&&(d=!1,y=0)});var u=A.a.create({zone:document.getElementById("left"),mode:"semi",position:{left:"50%",top:"50%"},color:"white",size:150,multitouch:!0,restJoystick:{y:!0}});u.on("start",function(e,i){console.log(i),t.stateList.Walking!==t.currentAction&&t.fadeToAction("Walking",.2)}),u.on("end",function(e,i){t.stateList.Standing!==t.currentAction&&t.fadeToAction("Standing",.2),t.setjoyStates("")}),u.on("dir:up",function(e,i){t.joyStates.up=!0,t.setjoyStates("up")}),u.on("dir:down",function(e,i){t.joyStates.down=!0,t.setjoyStates("down")}),u.on("dir:left",function(e,i){t.joyStates.left=!0,t.setjoyStates("left")}),u.on("dir:right",function(e,i){t.joyStates.right=!0,t.setjoyStates("right")})}(new f.a).setPath("").load("city.mtl",function(e){e.preload(),(new v.a).setMaterials(e).setPath("").load("city.obj",function(e){e.position.set(50,0,3),V.add(e),t.worldOctree.fromGraphNode(e)});var i=new w.a(t.worldOctree);i.visible=!1,V.add(i);var n=new g.a({width:200});n.add(W,"debug").onChange(function(e){i.visible=e}),n.add(W,"cameraDistance",.5,10),n.add(W,"jump",1,50)}),(new p.a).load("Soldier.glb",function(e){e.scene.traverse(function(e){e.isMesh&&(e.castShadow=!0)});var i=e.scene,n=new h.d(i);t.stateList.Standing=n.clipAction(e.animations[0]),t.stateList.Walking=n.clipAction(e.animations[3]),t.stateList.Running=n.clipAction(e.animations[1]),t.currentAction=t.stateList.Standing,t.currentAction.play(),P.push(n),t.Soldiers.push(i),V.add(i)})}},{key:"setjoyStates",value:function(e){for(var t in this.joyStates)this.joyStates[t]=t===e}},{key:"onWindowResize",value:function(){O.aspect=window.innerWidth/window.innerHeight,O.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}},{key:"playerCollisions",value:function(){var e=this.worldOctree.capsuleIntersect(this.playerCollider);M=!1,e&&((M=e.normal.y>0)||this.playerVelocity.addScaledVector(e.normal,-e.normal.dot(this.playerVelocity)),this.playerCollider.translate(e.normal.multiplyScalar(e.depth)))}},{key:"updatePlayer",value:function(e){var t=Math.exp(-W.damping*e)-1;M||(this.playerVelocity.y-=W.gravity*e,t*=.1),this.playerVelocity.addScaledVector(this.playerVelocity,t);var i=this.playerVelocity.clone().multiplyScalar(e);this.playerCollider.translate(i),this.playerCollisions(),O.position.copy(this.playerCollider.end),O.getWorldDirection(this.playerDirection),this.playerDirection.normalize(),O.position.add(this.playerDirection.multiplyScalar(-W.cameraDistance));var n,r=j(this.Soldiers);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.position.copy(this.playerCollider.start),o.rotation.z=O.rotation.z,o.rotation.y=O.rotation.y}}catch(a){r.e(a)}finally{r.f()}}},{key:"playerSphereCollision",value:function(e){for(var t=this.vector1.addVectors(this.playerCollider.start,this.playerCollider.end).multiplyScalar(.5),i=e.collider.center,n=this.playerCollider.radius+e.collider.radius,r=n*n,o=0,a=[this.playerCollider.start,this.playerCollider.end,t];o<a.length;o++){var l=a[o],s=l.distanceToSquared(i);if(s<r){var c=this.vector1.subVectors(l,i).normalize(),d=this.vector2.copy(c).multiplyScalar(c.dot(this.playerVelocity)),y=this.vector3.copy(c).multiplyScalar(c.dot(e.velocity));this.playerVelocity.add(y).sub(d),e.velocity.add(d).sub(y);var u=(n-Math.sqrt(s))/2;i.addScaledVector(c,-u)}}}},{key:"spheresCollisions",value:function(){for(var e=0,t=this.spheres.length;e<t;e++)for(var i=this.spheres[e],n=e+1;n<t;n++){var r=this.spheres[n],o=i.collider.center.distanceToSquared(r.collider.center),a=i.collider.radius+r.collider.radius;if(o<a*a){var l=this.vector1.subVectors(i.collider.center,r.collider.center).normalize(),s=this.vector2.copy(l).multiplyScalar(l.dot(i.velocity)),c=this.vector3.copy(l).multiplyScalar(l.dot(r.velocity));i.velocity.add(c).sub(s),r.velocity.add(s).sub(c);var d=(a-Math.sqrt(o))/2;i.collider.center.addScaledVector(l,d),r.collider.center.addScaledVector(l,-d)}}}},{key:"updateSpheres",value:function(e){var t=this;t.spheres.forEach(function(i){i.collider.center.addScaledVector(i.velocity,e);var n=t.worldOctree.sphereIntersect(i.collider);n?(i.velocity.addScaledVector(n.normal,1.5*-n.normal.dot(i.velocity)),i.collider.center.add(n.normal.multiplyScalar(n.depth))):i.velocity.y-=W.gravity*e;var r=Math.exp(-W.damping*e)-1;i.velocity.addScaledVector(i.velocity,r),t.playerSphereCollision(i)}),t.spheresCollisions();var i,n=j(t.spheres);try{for(n.s();!(i=n.n()).done;){var r=i.value;r.mesh.position.copy(r.collider.center)}}catch(o){n.e(o)}finally{n.f()}}},{key:"getForwardVector",value:function(){return O.getWorldDirection(this.playerDirection),this.playerDirection.y=0,this.playerDirection.normalize(),this.playerDirection}},{key:"getSideVector",value:function(){return O.getWorldDirection(this.playerDirection),this.playerDirection.y=0,this.playerDirection.normalize(),this.playerDirection.cross(O.up),this.playerDirection}},{key:"fadeToAction",value:function(e,t){this.previousAction=this.currentAction,this.currentAction=this.stateList[e],this.previousAction!==this.currentAction&&this.previousAction.fadeOut(t),this.currentAction&&this.currentAction.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(t).play()}},{key:"teleportPlayerIfOob",value:function(){O.position.y<=-25&&(this.playerCollider.start.set(0,.35,0),this.playerCollider.end.set(0,3,0),this.playerCollider.radius=.35,O.position.copy(this.playerCollider.end),O.rotation.set(0,-10,0))}},{key:"isMobile",value:function(){return!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}},{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{style:R,ref:function(t){return e.mount=t}}),d.a.createElement("div",{id:"left",className:"zone"}))}}]),t}(c.Component),K=function(e){function t(){var e,i;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(i=Object(o.a)(this,(e=Object(a.a)(t)).call.apply(e,[this].concat(l)))).state={},i}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){this.state.percentComplete;return d.a.createElement(d.a.Fragment,null,d.a.createElement(x,null))}}]),t}(d.a.Component),T=document.getElementById("root");u.a.createRoot(T).render(d.a.createElement(K,null))},32:function(e,t,i){}},[[22,1,2]]]);
//# sourceMappingURL=main.ffb5501b.chunk.js.map