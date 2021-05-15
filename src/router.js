import Vue from "vue";
import Router from "vue-router";
import partOne from "./components/partOne";
import partTwo from "./components/partTwo";
const routes = [
  { path: "/one", component: partOne, name: "partOne" },
  { path: "/two", component: partTwo, name: "partTwo" },
];
Vue.use(Router);
export default new Router({
  routes,
});
