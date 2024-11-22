import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

import AgentView from "@/views/AgentView.vue";
import AgentDetail from "@/components/AgentDetail.vue";

import WeaponsView from "@/views/WeaponsView.vue";
import WeaponDetails from "@/components/WeaponDetails.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/agents",
    name: "agents",
    component: AgentView,
  },
  {
    path: "/agents/:id",
    name: "agent-detail", // Menambahkan nama rute untuk Agent Detail
    component: AgentDetail,
  },
  { path: "/weapons", name: "weapons", component: WeaponsView },
  {
    path: "/weapons/:id",
    name: "weapon-detail",
    component: WeaponDetails,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;