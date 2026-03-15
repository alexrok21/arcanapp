<template>
   <div class="draw-root">
      <!-- Todo el contenido, incluyendo el modal -->

      <!-- Botón de volver -->
      <button class="back-button" @click="goBack">
         <img :src="backArrow" alt="Volver" class="back-icon" />
      </button>

      <h1 v-if="showText" :class="{ 'slide-up': !showText }">Revela el arcano...</h1>

      <!-- Carta oculta -->
      <img v-if="!revealed" :src="cardImage[selectedCard]" :class="['card-back', selectedCard]" @click="revealCard" />

      <!-- Carta revelada -->
      <Transition name="flip">
         <div v-if="revealed" key="card-revealed" class="card-front"
            :class="[selectedCard, { rotated: revealedCard.orientation === 'Invertida' }]">
            <img :src="revealedImage" alt="Arcano Revelado" class="card-image" />
         </div>
      </Transition>

      <div v-if="revealed" class="card-info">
         <h2>{{ revealedCard.name }}</h2>
         <p class="orientation">{{ revealedCard.orientation }}</p>
         <div class="meaning-container">{{ meaningText }}</div>

         <!-- Botón aparece solo después del texto con animación -->
         <Transition name="fade-slide-button">
            <div v-if="showMeaning" class="buttons-container">
               <!-- Botón Compartir -->
               <button class="open-share-button" @click="openShareModal">
                  <img src="@/assets/images/button.png" alt="Compartir" class="button-bg" />
                  <span class="button-text">Compartir</span>
               </button>

               <!-- Botón PRÓXIMAMENTE -->
               <button class="coming-soon-button" disabled>
                  <span class="button-bg-text">Interpretación</span>
                  <span class="coming-soon-overlay">PRONTO</span>
               </button>
            </div>
         </Transition>

      </div>

      <!-- Modal de compartir (dentro del mismo raíz) -->
      <Transition name="fade">
         <div v-if="showShareModal" class="share-modal-overlay" @click.self="closeShareModal">
            <div class="share-modal-content">
               <h2 class="share-title">{{ revealedCard.name }}</h2>

               <img :src="revealedImage" alt="Carta compartida" class="share-card"
                  :class="{ rotated: revealedCard.orientation === 'Invertida' }" />

               <p class="share-text">{{ shortMeaning }}</p>

               <div class="share-footer">
                  <span class="app-name">Arcan</span>
                  <span class="app-name app-name-highlight">App</span>
                  <span class="invite-text">¿Qué intuye el universo para ti?</span>
               </div>

               <!-- Botones del modal -->
               <div class="share-actions">
                  <button class="share-button" @click="shareCard">
                     <img src="@/assets/images/button.png" alt="Compartir" class="button-bg" />
                     <span class="button-text">Compartir</span>
                  </button>

                  <button class="share-close" @click="closeShareModal">✕</button>
               </div>

            </div>
         </div>
      </Transition>

   </div>
</template>

<script setup>
import { Share } from '@capacitor/share'
import { Filesystem, Directory } from '@capacitor/filesystem'
import html2canvas from 'html2canvas'
import { Capacitor } from '@capacitor/core'
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useTarotStore } from '@/store/tarot'

import cardBack1 from '@/assets/images/arcana_1.png'
import cardBack2 from '@/assets/images/arcana_2.png'
import cardBack3 from '@/assets/images/arcana_3.png'
import backArrow from '@/assets/images/back-arrow.png'
import '@/assets/styles/draw.css'

const cardImage = {
   orange: cardBack1,
   blue: cardBack2,
   darkblue: cardBack3,
}

const tarotStore = useTarotStore()
const { selectedCard, revealedCard } = storeToRefs(tarotStore)
const router = useRouter()

const showText = ref(true)
const revealed = ref(false)
const revealedImage = ref('')
const meaningText = ref('')
const showMeaning = ref(false)

const revealCard = () => {
   if (revealed.value) return

   showText.value = false
   showMeaning.value = false

   // Espera un momento antes de revelar la carta
   setTimeout(() => {
      tarotStore.revealCard()
      revealed.value = true
      revealedImage.value = revealedCard.value?.image || ''

      // Limpiamos el texto antes de mostrarlo
      meaningText.value = ''

      // Mostramos el texto del significado con un pequeño retraso
      setTimeout(() => {
         meaningText.value = revealedCard.value?.meaning || ''

         // Después de 2 segundos, activamos showMeaning para mostrar el botón
         setTimeout(() => {
            showMeaning.value = true
         }, 2000)
      }, 100) // retraso mínimo para que el texto aparezca primero
   }, 1000) // retraso antes de revelar la carta
}

// Modal
const showShareModal = ref(false)
const shortMeaning = ref('')

const openShareModal = () => {
   if (!revealedCard.value) return
   shortMeaning.value = revealedCard.value.shortMeaning
   showShareModal.value = true
}

const closeShareModal = () => {
   showShareModal.value = false
}

// Compartir usando html2canvas + Capacitor Share
const shareCard = async () => {
   const modalEl = document.querySelector('.share-modal-content')
   if (!modalEl) return

   // 1️⃣ Oculta temporalmente los botones de acción
   const shareActions = modalEl.querySelector('.share-actions')
   const originalDisplay = shareActions ? shareActions.style.display : ''
   if (shareActions) {
      shareActions.style.display = 'none'
   }

   try {
      // 2️⃣ Captura la imagen SIN los botones
      const canvas = await html2canvas(modalEl, {
         backgroundColor: '#000000', // Fondo negro
         scale: 2 // Mejor resolución
      })

      // 3️⃣ Convierte a blob
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'))
      const base64Data = await blobToBase64(blob)

      // 4️⃣ Guarda el archivo
      const fileName = `arcano_${revealedCard.value.name}.png`
      const savedFile = await Filesystem.writeFile({
         path: fileName,
         data: base64Data,
         directory: Directory.Cache,
      })

      // 5️⃣ Comparte la imagen
      await Share.share({
         title: `Mi arcano: ${revealedCard.value.name}`,
         text: shortMeaning.value,
         url: savedFile.uri,
      })
   } finally {
      // 6️⃣ RESTAURA los botones (aunque haya error)
      if (shareActions) {
         shareActions.style.display = originalDisplay
      }
   }
}

// Helper para convertir Blob a base64
function blobToBase64(blob) {
   return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result.split(',')[1])
      reader.onerror = reject
      reader.readAsDataURL(blob)
   })
}

const goBack = () => {
   router.push('/home')
}
</script>

<style>
.share-actions {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   margin-top: 1.5rem;
}

/* Botón con imagen de fondo */
.share-button {
   display: flex;
   align-items: center;
   justify-content: center;
   background-image: url('@/assets/images/button.png');
   background-size: 100% 100%;
   background-position: center;
   background-repeat: no-repeat;
   background-color: transparent;
   border: none;
   width: 150px;
   height: 40px;
   padding: 0;
   margin: 0;
   cursor: pointer;
   position: relative;
   overflow: hidden;
   font-family: 'Press Start 2P', monospace;
   font-size: 14px;
   color: white;
   text-shadow:
      2px 2px 0px #000,
      -1px -1px 0px #000,
      1px -1px 0px #000,
      -1px 1px 0px #000,
      1px 1px 0px #000;
   letter-spacing: 1px;
}

/* Hover: efecto al pasar el mouse */
.share-button:hover {
   transform: scale(1.03);
   box-shadow: 0 0 15px rgba(255, 223, 0, 0.6);
}

/* Active: cuando se presiona */
.share-button:active {
   transform: scale(0.98);
}

/* Botón de cerrar */
.share-close {
   background: none;
   border: none;
   font-size: 1.5rem;
   color: white;
   cursor: pointer;
   transition: transform 0.2s ease;
}

.share-close:hover {
   transform: scale(1.2);
}
</style>