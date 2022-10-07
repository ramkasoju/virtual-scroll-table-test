// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import Vue from "vue";
import ScrollExample from "./VirtualList";

import VueVirtualScroller from "vue-virtual-scroller";
Vue.use(VueVirtualScroller);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { ScrollExample },
  template: "<ScrollExample/>"
});
