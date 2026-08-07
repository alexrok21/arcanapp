import "@/assets/styles/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useTarotStore } from "@/store/tarot";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);

router.isReady().then(() => {
  const tarotStore = useTarotStore();
  tarotStore.resetState();

  if (router.currentRoute.value.path !== "/home") {
    router.push("/home");
  }

  // ✅ La splash screen se oculta desde App.vue después de 2 segundos
  // No la ocultamos acá para permitir que la splash de Vue se muestre
});

app.mount("#app");
