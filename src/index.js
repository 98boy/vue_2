import Vue from "vue";
import App from "@/App";

// 1、Vue的实例，可以使用原型中的$on和$emit
// 2、所有组件都可以看到这个对象
// Vue.prototype.$bus = new Vue();

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  el: "#root",
  render: (h) => h(App),
});
