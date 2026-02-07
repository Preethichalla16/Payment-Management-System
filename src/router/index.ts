import { createRouter, createWebHistory } from "vue-router";
import UserList from "../views/UserList.vue";
import UserForm from "../views/UserForm.vue";
import PaymentList from "../views/PaymentList.vue";
import PaymentDetail from "../views/PaymentDetail.vue";
import PaymentForm from "../views/PaymentForm.vue";

const routes = [
  { path: "/", name: "dashboard", component: () => import("../views/Dashboard.vue") },
  { path: "/users", name: "users", component: UserList },
  { path: "/users/new", name: "user-create", component: UserForm },
  { path: "/users/:id", name: "user-detail", component: () => import("../views/UserDetail.vue"), props: true },
  {
    path: "/users/:id/edit",
    name: "user-edit",
    component: UserForm,
    props: true,
  },
  { path: "/payments", name: "payments", component: PaymentList },
  { path: "/payments/new", name: "payment-create", component: PaymentForm },
  {
    path: "/payments/:id",
    name: "payment-detail",
    component: PaymentDetail,
    props: true,
  },
  {
    path: "/payments/:id/edit",
    name: "payment-edit",
    component: PaymentForm,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
