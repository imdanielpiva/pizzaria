import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      redirect: "/welcome",
      children: [
        {
          path: "/welcome",
          name: "Welcome",
          component: () =>
            import(/* webpackChunckName: "welcome" */ "@/views/Welcome.vue")
        },
        {
          path: "/order",
          name: "Order",
          redirect: "/order/size",
          component: () =>
            import(/* webpackChunckName: "order" */ "@/views/Order/Index.vue"),
          children: [
            {
              path: "/order/size",
              name: "OrderPizzaSize",
              component: () =>
                import(/* webpackChunckName: "pizza-size" */ "@/views/Order/PizzaSize.vue")
            },
            {
              path: "/order/flavor",
              name: "OrderPizzaFlavor",
              component: () =>
                import(/* webpackChunckName: "pizza-flavor" */ "@/views/Order/PizzaFlavor.vue")
            },
            {
              path: "/order/add-on",
              name: "OrderAddOn",
              component: () =>
                import(/* webpackChunckName: "add-on" */ "@/views/Order/AddOn.vue")
            },
            {
              path: "/order/checkout",
              name: "OrderCheckout",
              component: () =>
                import(/* webpackChunckName: "checkout" */ "@/views/Order/Checkout.vue")
            }
          ]
        }
      ]
    }
  ]
});
