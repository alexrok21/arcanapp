<template>
  <!-- Splash screen en Vue con imagen personalizada -->
  <div v-if="showSplash" class="splash-overlay">
    <div class="splash-image-container">
      <img :src="splashImage" alt="Arcanapp" class="splash-image" />
      <div class="loading-dots">
        <span>.</span><span>.</span><span>.</span>
      </div>
    </div>
  </div>

  <!-- Contenido principal de la app -->
  <router-view v-slot="{ Component }">
    <Transition name="fade-slide" mode="out-in">
      <component :is="Component" v-if="!showSplash" />
    </Transition>
  </router-view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Capacitor } from '@capacitor/core'
import { SplashScreen } from '@capacitor/splash-screen'
import splashImage from '@/assets/splash/splash.png' // ✅ Tu imagen personalizada

const showSplash = ref(true)

onMounted(async () => {
  // ✅ Espera 2 segundos (suficiente para experiencia suave sin molestar)
  await new Promise(resolve => setTimeout(resolve, 2000))

  // ✅ Oculta splash nativo (si existe) de forma segura
  if (Capacitor.isNativePlatform()) {
    try {
      await SplashScreen.hide({ fadeOutDuration: 300 })
    } catch (e) {
      console.warn('SplashScreen.hide error (ignorado):', e)
      // Fallback silencioso
      SplashScreen.hide().catch(() => { })
    }
  }

  // ✅ Oculta splash en Vue
  showSplash.value = false
})
</script>

<style scoped>
/* Contenedor principal del splash */
.splash-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.4s ease-out;
}

/* Contenedor de la imagen */
.splash-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  /* ← agregá flex */
  justify-content: center;
  /* ← centra horizontalmente */
  align-items: center;
  /* ← centra verticalmente */
}

/* Estilo de la imagen */
.splash-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  /* ← eliminá el align-self: flex-start */
}

/* Animación de puntos suspensivos */
.loading-dots {
  position: absolute;
  /* ← se posiciona respecto al contenedor */
  bottom: 60px;
  /* ← cerca del margen inferior */
  left: 0;
  width: 100%;
  /* ← ocupa todo el ancho */
  text-align: center;
  /* ← centra el texto */
  font-family: 'Press Start 2P', monospace;
  color: #FFD700;
  font-size: 20px;
  height: 24px;
  line-height: 24px;
}

.loading-dots span {
  display: inline-block;
  animation: bounce 1.4s infinite both;
}

.loading-dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-dots span:nth-child(3) {
  animation-delay: 0.4s;
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

@keyframes bounce {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }

  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>