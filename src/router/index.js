import { createRouter, createWebHashHistory } from "vue-router";
import Main from "@/pages/Main";
import About from "@/pages/About";
import TodoPage from "@/pages/TodoPage";
import TodoIdPage from "@/pages/TodoIdPage";
import TodoPageComposition from "@/pages/TodoPageComposition";
import TodoPageStore from "@/pages/TodoPageStore";
import Examples from "@/pages/Examples";

const routes = [
  { path: "/", component: Main },
  { path: "/about", component: About },
  { path: "/todos", component: TodoPage },
  { path: "/todo/:id", component: TodoIdPage },
  { path: "/composition", component: TodoPageComposition },
  { path: "/store", component: TodoPageStore },
  { path: "/examples", component: Examples },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
