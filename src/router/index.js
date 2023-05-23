import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import("@/views/Home.vue")
        },
        {
            path: '/projetos',
            name: 'Projects',
            component: () => import("@/views/Projects.vue")
        }
    ]
})
