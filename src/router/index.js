import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "test",
      component: () => import(/* webpackChunkName: "route-test" */ "@/components/test"),
    },
  ],
});
