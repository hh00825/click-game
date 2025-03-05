import { createWebHistory, createRouter } from "vue-router";
import ClickGame from "@/components/ClickGame.vue";

const routes = [
    {
        path: "/",
        name: "ClickGame",
        component: ClickGame,
    },
];

const router = createRouter({
    history: createWebHistory("click-game"),
    routes,
});

export default router;
