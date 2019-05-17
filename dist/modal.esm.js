import e from"vue";var t=function(e,t,o,a,n,l,i,r,d,s){"boolean"!=typeof i&&(d=r,r=i,i=!1);var c,m="function"==typeof o?o.options:o;if(e&&e.render&&(m.render=e.render,m.staticRenderFns=e.staticRenderFns,m._compiled=!0,n&&(m.functional=!0)),a&&(m._scopeId=a),l?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(l)},m._ssrRegister=c):t&&(c=i?function(){t.call(this,s(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),c)if(m.functional){var f=m.render;m.render=function(e,t){return c.call(t),f(e,t)}}else{var p=m.beforeCreate;m.beforeCreate=p?[].concat(p,c):[c]}return o}({render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.showModal?o("div",[e.showMask?o("div",{staticClass:"modal-mask",style:{opacity:e.opacity,"z-index":e.zIndex},on:{touchstart:e.handleStart,touchmove:e.handleMove,touchend:e.handleEnd}}):e._e(),e._v(" "),o("div",{staticClass:"modal-wrap",style:{"z-index":e.zIndex+1}},[o("div",{staticClass:"modal"},[o("div",{staticClass:"modal-head"},[e._t("modal-head",[e._v(e._s(e.title))])],2),e._v(" "),o("div",{staticClass:"modal-content",class:[e.contentClass]},[e._t("default",[o("div",{domProps:{innerHTML:e._s(e.message)}})])],2),e._v(" "),o("span",{staticClass:"modal-close",on:{click:e.modalClose}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",id:"svg-modal-close",width:"100%",height:"100%"}},[o("path",{attrs:{d:"M7.414 6l4.243 4.243a1 1 0 0 1-1.414 1.414L6 7.414l-4.243 4.243a1 1 0 0 1-1.414-1.414L4.586 6 .343 1.757A1 1 0 1 1 1.757.343L6 4.586 10.243.343a1 1 0 1 1 1.414 1.414L7.414 6z",fill:"#333","fill-rule":"nonzero"}})])]),e._v(" "),"confirm"===e.modalType?o("div",{staticClass:"modal-foot"},[e._t("modal-foot",[o("div",{staticClass:"btn-cancel",on:{click:e.cancel}},[e._v(e._s(e.cancelText))]),e._v(" "),o("div",{staticClass:"btn-confirm",on:{click:e.confirm}},[e._v(e._s(e.confirmText))])])],2):e._e(),e._v(" "),"alert"===e.modalType?o("div",{staticClass:"modal-foot"},[e._t("modal-foot",[o("div",{staticClass:"btn-alert",on:{click:e.confirm}},[e._v(e._s(e.btnText))])])],2):e._e()])])]):e._e()},staticRenderFns:[]},void 0,{props:{showModal:{type:Boolean,default:!1},title:{type:String,default:"温馨提示"},contentClass:{type:String,default:""},message:{type:String,default:""},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确定"},btnText:{type:String,default:"确定"},callBack:{type:Function,default:function(){}},preventScroll:{type:Boolean,default:!0},showMask:{type:Boolean,default:!0},clickMask:{type:Boolean,default:!1},modalType:{type:String,default:"alert"},opacity:{type:Number,default:.6},zIndex:{type:Number,default:1}},methods:{modalClose:function(){this.callBack("close"),this.$emit("close")},cancel:function(){this.callBack("cancel"),this.$emit("cancel")},confirm:function(){this.callBack("confirm"),this.$emit("confirm")},handleStart:function(e){this.preventScroll&&e.preventDefault(),this.clickMask&&this.callBack("mask")},handleMove:function(e){this.$emit("handleMove",e)},handleEnd:function(e){this.$emit("handleEnd",e)}}},void 0,!1,void 0,void 0,void 0);!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".modal-mask{position:absolute;width:100%;height:100%;left:0;top:0;background-color:rgba(0,0,0,.6)}.modal-wrap{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.modal-wrap .modal{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:5.9rem;background-color:#fff;border-radius:.08rem}.modal-wrap .modal .modal-head{padding-top:.32rem;padding-bottom:.32rem;font-size:.32rem;line-height:.44rem;color:#333;text-align:center;font-weight:500}.modal-wrap .modal .modal-content{padding-left:.4rem;padding-right:.4rem;max-height:6.4rem;overflow:auto;-webkit-overflow-scrolling:touch}.modal-wrap .modal .modal-foot{padding-top:.4rem;padding-bottom:.6rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.modal-wrap .modal .modal-foot .btn-alert{width:4.7rem;height:.8rem;border-radius:.08rem;font-size:.32rem;line-height:.8rem;text-align:center;color:#fff;margin-left:auto;margin-right:auto;background-color:#007bff}.modal-wrap .modal .modal-foot .btn-cancel{width:2.36rem;height:.8rem;border-radius:.08rem;font-size:.32rem;line-height:.8rem;text-align:center;color:#333;border:.02rem solid #333}.modal-wrap .modal .modal-foot .btn-confirm{width:2.36rem;height:.8rem;border-radius:.08rem;font-size:.32rem;line-height:.8rem;text-align:center;color:#fff;background-color:#007bff}.modal-wrap .modal .modal-foot .btn-cancel+.btn-confirm{margin-left:.4rem}.modal-wrap .modal .modal-close{position:absolute;right:.2rem;top:.16rem;padding:.2rem}.modal-wrap .modal .modal-close svg{display:inline-block;vertical-align:sub;width:.32rem;height:.32rem}");var o=function(o){void 0===o&&(o={});var a=new(e.extend(t))({el:document.createElement("div"),propsData:o});return document.body.appendChild(a.$el),a},a=function(e){void 0===e&&(e={});var t=o(e);return new Promise(function(e){t.callBack=function(o){t.showModal=!1,e(o)},t.showModal=!0})},n=function(e){void 0===e&&(e={}),e.modalType="confirm";var t=o(e);return new Promise(function(e){t.callBack=function(o){t.showModal=!1,e(o)},t.showModal=!0})},l=function(e){l.installed||(l.installed=!0,e.component("modal",t),e.$alert=e.prototype.$alert=a,e.$confirm=e.prototype.$confirm=n)},i={install:l},r=null;"undefined"!=typeof window?r=window.Vue:"undefined"!=typeof global&&(r=global.Vue),r&&r.use(i);export default i;
