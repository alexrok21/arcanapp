import '@/assets/styles/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useTarotStore } from '@/store/tarot';
// Creamos la aplicación y el store
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
// Esperamos a que el router esté listo
router.isReady().then(() => {
    const tarotStore = useTarotStore();
    // Reiniciamos el estado al cargar la página
    tarotStore.resetState();
    // Si la ruta no es '/home', redirigimos
    if (router.currentRoute.value.path !== '/home') {
        router.push('/home');
    }
});
// Montamos la aplicación
app.mount('#app');
