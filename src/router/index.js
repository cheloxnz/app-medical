import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import SideBar from "../components/SideBar.vue";
import Table from "../components/Table.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'SideBar',
      component: SideBar,
      children: [
        {
          path: '/doctors',
          name: "Table",
          component: Table
        }
      ]
    },
  ]
});

export default router;
