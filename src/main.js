import Vue from "vue";
import { Rate } from "vant";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Rate);
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
});
