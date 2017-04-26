// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import ElementUI from 'element-ui';
//引入element-ui的默认CSS样式
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);
Vue.directive('dragChange',function(el){
  var oDiv = el;
  oDiv.onmousedown = function(ev){

    oDiv.parentNode.parentNode.setAttribute('draggable','false');
    var height = oDiv.parentNode.parentNode.style.height.substring(0,oDiv.parentNode.parentNode.style.height.length-2);
    var width = oDiv.parentNode.parentNode.offsetWidth;
    var elId = el.getAttribute('id');
    var disX = ev.clientX;
    var disY = ev.clientY;
      document.onmousemove = function(ev){
        var l = ev.clientX-disX;
        var t = ev.pageY-disY;
        if(elId=='dragRight'){
          oDiv.parentNode.parentNode.style.flex="none"
          oDiv.parentNode.parentNode.style.width =parseInt(width) +parseInt(l) + 'px';
          console.log(oDiv.parentNode.parentNode.style.width)

        }
        if(elId=='dragBottom'){
          oDiv.parentNode.parentNode.style.height =parseInt(height) +parseInt(t) + 'px';
        }
        if(elId=='dragBoth'){
          oDiv.parentNode.parentNode.style.flex="none";
          oDiv.parentNode.parentNode.style.height =parseInt(height) +parseInt(t) + 'px';
          oDiv.parentNode.parentNode.style.width =parseInt(width) +parseInt(l) + 'px';
        }
      };
      document.onmouseup = function(){
        document.onmousemove=null;
        document.onmouseup=null;
      };
  };
});
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
