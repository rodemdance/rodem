(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{276:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("4d6a2e0f",content,!0,{sourceMap:!1})},298:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("0b7a125c",content,!0,{sourceMap:!1})},314:function(t,e,n){"use strict";var o=n(491),r=n(500),c=n(480),d=n(224),l=n(100),v=n(497),f=n(503),m=n(501),h=n(498),w=n(105),k=n(495),_=n(499),y=n(222),x=n(315),$=n(223),C=n(145),U=n(151),A=n(494),N=n(502),L=n(496),O=n(492),j=n(483),T=n(31),E=(n(88),n(225)),z={name:"DefaultLayout",mounted:function(){var t=this;window.onresize=function(){t.vh=window.innerHeight}},methods:{goTo:function(t){if(0===t)return this.$vuetify.goTo(0,{easing:"easeInOutCubic",duration:300,offset:0});this.$vuetify.goTo("#"+t,{easing:"easeInOutCubic",duration:300,offset:"contacts"===t?64:0})},login:function(){var t=this;return Object(T.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(E.a)(),e.next=3,Object(E.b)(n,t.email,t.password).catch((function(t){return"nouser"}));case 3:if("nouser"!==(o=e.sent)){e.next=7;break}return console.log("User not found"),e.abrupt("return",!1);case 7:t.$store.dispatch("setUser",{id:o.user.uid}),t.hiddenLogin=!1;case 9:case"end":return e.stop()}}),e)})))()},logout:function(){console.log("logout")},changeLoading:function(t){console.log(t)}},computed:{user:function(){return this.$store.getters.user},loading:function(){return this.$store.getters.loading}},data:function(){return{vh:0,email:"",password:"",showPassword:!1,hiddenLogin:!1,clicksOnCopyright:0,items:[],menu:[{selector:"about",title:"Про клуб"},{selector:"eventsList",title:"Заходи"},{selector:"reviews",title:"Відгуки"},{selector:"contacts",title:"Контакти"}]}},watch:{clicksOnCopyright:function(t){5===t&&(this.clicksOnCopyright=0,this.hiddenLogin=!0)}}},D=(n(453),n(108)),component=Object(D.a)(z,(function(){var t=this,e=t._self._c;return e(o.a,[e(r.a,{staticClass:"main-bar",attrs:{fixed:"",app:"","hide-on-scroll":!1}},[e(O.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}]}),t._v(" "),e(O.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}]}),t._v(" "),e(c.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],attrs:{color:"red darken-2",text:""},on:{click:function(e){return t.goTo(0)}}},[t._v("Про клуб")]),t._v(" "),e(O.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}]}),t._v(" "),e(c.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],attrs:{color:"red darken-2",text:""},on:{click:function(e){return t.goTo("eventsList")}}},[t._v("Заходи")]),t._v(" "),e(O.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}]}),t._v(" "),e(x.a,{staticStyle:{"max-width":"85px"},attrs:{contain:"",height:"50",src:"/rodem.svg"},on:{click:function(e){return t.goTo(0)}}}),t._v(" "),e(O.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}]}),t._v(" "),e(c.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],attrs:{color:"red darken-2",text:""},on:{click:function(e){return t.goTo("reviews")}}},[t._v("Відгуки")]),t._v(" "),e(O.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}]}),t._v(" "),e(c.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],attrs:{color:"red darken-2",text:""},on:{click:function(e){return t.goTo("contacts")}}},[t._v("Контакти")]),t._v(" "),e(O.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}]}),t._v(" "),e(O.a),t._v(" "),e(N.a,{attrs:{"offset-y":"","close-on-click":"",rounded:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(c.a,t._g(t._b({staticClass:"hidden-md-and-up",attrs:{icon:""}},"v-btn",r,!1),o),[e(y.a,[t._v("mdi-menu")])],1)]}}])},[t._v(" "),e($.a,{staticClass:"top-list"},t._l(t.menu,(function(link,n){return e(C.a,{key:"link-"+n,on:{click:function(e){return t.goTo(link.selector)}}},[e(U.a,[t._v(t._s(link.title))])],1)})),1)],1)],1),t._v(" "),e(A.a,{staticStyle:{"padding-top":"0px !important"}},[e(f.a,{attrs:{fluid:""}},[e("Nuxt")],1)],1),t._v(" "),e(k.a,{staticClass:"font-family-philosopher",attrs:{dark:"",padless:""}},[e(d.a,{staticClass:"white--text text-center w-100",attrs:{flat:"",tile:"",color:"red lighten-1"}},[e(l.b,{staticClass:"mb-0 mt-4"},[e(L.a,{staticClass:"justify-center custom-footer"},[e(v.a,{attrs:{cols:"12",lg:"3"}},[e(y.a,[t._v("mdi-mail")]),t._v(" "),e("div",{staticClass:"mt-2"},[e("a",{attrs:{href:"mailto:viktorija.ivanytska@gmail.com"}},[t._v("viktorija.ivanytska@gmail.com")])])],1),t._v(" "),e(v.a,{attrs:{cols:"12",lg:"3"}},[e(y.a,[t._v("mdi-phone")]),t._v(" "),e("div",{staticClass:"mt-2"},[e("a",{attrs:{href:"tel:+380663957382"}},[t._v("066-395-7382")])])],1),t._v(" "),e(v.a,{attrs:{cols:"12",lg:"3"}},[e(y.a,[t._v("mdi-facebook")]),t._v(" "),e("div",{staticClass:"mt-2"},[e("a",{attrs:{href:"https://www.facebook.com/RODEM.DANCE"}},[t._v("RODEM.DANCE")])])],1)],1)],1),t._v(" "),e(h.a),t._v(" "),e(l.b,{staticClass:"white--text"},[e("div",{staticClass:"mb-2"},[t._v("Родем - танцювальна школа для людей будь-якого віку і рівнів підготовки.")]),t._v(" "),e("div",{on:{click:function(e){t.clicksOnCopyright=t.clicksOnCopyright+1}}},[t._v('© Танцювальний клуб "Родем", '+t._s((new Date).getFullYear()))])])],1)],1),t._v(" "),e(m.a,{attrs:{width:"460"},model:{value:t.hiddenLogin,callback:function(e){t.hiddenLogin=e},expression:"hiddenLogin"}},[e(d.a,{staticStyle:{"max-width":"460px",width:"100%"},attrs:{tile:t.$vuetify.breakpoint.xs}},[e(l.c,{staticClass:"red--text justify-center display-1"},[t._v("\n          Вхід\n        ")]),t._v(" "),e(l.b,{staticClass:"pt-8",class:{"pa-8":t.$vuetify.smAndUp}},[e(_.a,[e(j.a,{attrs:{label:"Ваш email",color:"red",outlined:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),e(j.a,{attrs:{color:"red",label:"Ваш пароль",type:t.showPassword?"text":"password","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",outlined:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),e(c.a,{staticClass:"rounded-pill",attrs:{block:"",color:"red darken-2",dark:""},on:{click:t.login}},[t._v("Увійти!")]),t._v(" "),e(c.a,{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"mt-2 mb-2",attrs:{block:"",color:"blue"},on:{click:t.logout}},[t._v("Вийти")])],1)],1)],1),t._v(" "),e(w.b,[e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading-screen",staticStyle:{position:"fixed"}},[e(x.a,{staticStyle:{"max-width":"50%","max-height":"50%"},attrs:{contain:"",src:"/rodem.svg"}})],1)])],1)}),[],!1,null,null,null);e.a=component.exports},324:function(t,e,n){n(325),t.exports=n(326)},372:function(t,e,n){"use strict";n(276)},373:function(t,e,n){var o=n(17)(!1);o.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=o},453:function(t,e,n){"use strict";n(298)},454:function(t,e,n){var o=n(17)(!1);o.push([t.i,".w-100{width:100%}.main-bar{background:#f8edeb;background:radial-gradient(circle,#f8edeb 0,#ffb5a7 100%)}.v-app-bar{z-index:200!important}.leaflet-container{z-index:100!important}.custom-footer a{text-decoration:none;color:#fff!important;font-size:120%}.loading-screen{background:#f8edeb;background:radial-gradient(circle,#f8edeb 0,#ffb5a7 100%);width:100%;height:100vh;position:absolute;top:0;left:0;z-index:2000;display:flex;justify-content:center;align-items:center}",""]),t.exports=o},455:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return r})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return d}));var o=function(){return{user:null,loading:!0}},r={user:function(t){return t.user},loading:function(t){return t.loading}},c={setUser:function(t,e){t.user=e},setLoading:function(t,e){t.loading=e}},d={setUser:function(t,e){(0,t.commit)("setUser",e)},setLoading:function(t,e){(0,t.commit)("setLoading",e)}}},98:function(t,e,n){"use strict";var o=n(491),r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(n(372),n(108)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[324,6,2,7]]]);