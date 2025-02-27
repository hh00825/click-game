import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld,
    },
];

const router = createRouter({
    history: createWebHistory("click-game"),
    routes,
});

export default router;
