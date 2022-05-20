import { createWebHistory, createRouter } from "vue-router";
import homePage from "@/views/HomePage.vue";
import sobreMim from "@/views/AboutMe.vue";
import formAddTask from "@/views/CriarTask.vue";
import listarTasks from "@/views/ListarTask.vue";
import removerTodasTasks from "@/views/RemoverTodasTasks.vue";
import paginaDeErro404 from "@/views/NotFoundPage404.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: homePage,
  },
  {
    path: "/about",
    name: "Sobre mim",
    component: sobreMim,
  },
  {
    path: "/form",
    name: "formCad",
    component: formAddTask,
  },
  {
    path: "/list",
    name: "list",
    component: listarTasks,
  },
  {
    path: "/remove-all",
    name: "remove-all",
    component: removerTodasTasks,
  },
  {
    path: "/:catchAll(.*)",
    name: "Página de erro - 404",
    component: paginaDeErro404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;