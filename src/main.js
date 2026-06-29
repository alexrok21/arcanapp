import "@/assets/styles/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { SplashScreen } from "@capacitor/splash-screen";
import App from "./App.vue";
import router from "./router";
import { useTarotStore } from "@/store/tarot";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
router.isReady().then(async () => {
    const tarotStore = useTarotStore();
    tarotStore.resetState();
    if (router.currentRoute.value.path !== "/home") {
        router.push("/home");
    }
    // Ocultá la splash DESPUÉS de que el router esté listo
    await SplashScreen.hide();
});
app.mount("#app");
