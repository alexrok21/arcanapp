<template>
   <div class="home-container">
      <div class="cards">
         <img :src="cardBack1" alt="Tarjeta Naranja" class="card card-orange" @click="goToDraw('orange')">
         <img :src="cardBack2" alt="Tarjeta Azul" class="card card-blue" @click="goToDraw('blue')">
         <img :src="cardBack3" alt="Tarjeta Azul Oscuro" class="card card-darkblue" @click="goToDraw('darkblue')">
      </div>
      <div class="text">
         <p>{{ selectedPhrase }}</p>
      </div>
   </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTarotStore } from '@/store/tarot'
import { LocalNotifications } from '@capacitor/local-notifications'

import cardBack1 from '@/assets/images/arcana_1.png'
import cardBack2 from '@/assets/images/arcana_2.png'
import cardBack3 from '@/assets/images/arcana_3.png'

import '@/assets/styles/home.css'

const router = useRouter()
const tarotStore = useTarotStore()

const requestNotificationPermission = async () => {
   const permStatus = await LocalNotifications.requestPermissions()

   if (permStatus.display === 'granted') {
      console.log('Permiso para notificaciones concedido ✅')
   } else {
      console.log('Permiso para notificaciones denegado ❌')
   }
}

const scheduleMorningNotification = async () => {
   const now = new Date()
   const tomorrow = new Date(now)
   tomorrow.setDate(now.getDate() + 1)
   tomorrow.setHours(8, 0, 0, 0) // 8:00 AM

   try {
      await LocalNotifications.schedule({
         notifications: [
            {
               id: 1,
               title: '🌅 ArcanApp',
               body: 'Es momento de revelar tu arcano del día. ¿Qué te dice tu intuición hoy?',
               schedule: {
                  at: tomorrow,
                  repeats: true
               },
               sound: 'default'
            }
         ]
      })
   } catch (err) {
      console.error('Error al programar notificación:', err)
   }

}

const scheduleTestNotification = async () => {
   const now = new Date()
   const inOneMinute = new Date(now.getTime() + 60 * 1000)

   await LocalNotifications.schedule({
      notifications: [
         {
            id: 999, // id distinto para que no choque con la real
            title: '🌅 Arcanapp',
            body: 'Es momento de revelar tu arcano del día. ¿Qué te dice tu intuición hoy?',
            schedule: {
               at: inOneMinute,
               repeats: false
            },
            sound: 'default'
         }
      ]
   })

   console.log('✅ Notificación de prueba programada para:', inOneMinute.toLocaleTimeString())
}


// Frases de intuición
const motivationalPhrases = [
   '¿Qué dice tu intuición hoy?',
   'Escucha tu voz interior',
   'El camino se revela',
   'Confía en tu intuición',
   'Lo que buscas también te busca',
   'El universo habla en silencio',
   'Tu intuición es tu brújula'
]

const selectedPhrase = ref('')

// Selecciona una frase aleatoria
selectedPhrase.value = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)]

const goToDraw = (color) => {
   tarotStore.setSelectedCard(color)
   router.push('/draw')
}

const initNotifications = async () => {
   await requestNotificationPermission()

   const lastScheduled = localStorage.getItem('notificationLastScheduled')
   const today = new Date().toDateString()

   if (lastScheduled !== today) {
      await scheduleMorningNotification()
      localStorage.setItem('notificationLastScheduled', today)
   }
}

onMounted(() => {
   initNotifications()
   // scheduleTestNotification()
})
</script>