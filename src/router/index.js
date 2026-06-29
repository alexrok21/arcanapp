import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DrawView from '@/views/DrawView.vue';
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeView },
    { path: '/draw', component: DrawView, meta: { requiresReset: true } }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
