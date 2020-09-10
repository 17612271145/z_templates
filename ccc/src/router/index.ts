import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let routers = [
  {
    path: "/",
    component: () => import("src/layout/default.vue"),
    children:[{
      path: "/test",
      name:'test', 
      component: () => import("src/views/test.vue")  
    }]
  },
  {
    path: "/test",
    name:'test',
    
  },
  {
    path: "*",
    component: () => import("src/views/error.vue")
  },
];

const router = new VueRouter({
  routes: routers,
});


export default router;
