import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useTarotStore } from '@/store/tarot';
import { LocalNotifications } from '@capacitor/local-notifications';
import cardBack1 from '@/assets/images/arcana_1.png';
import cardBack2 from '@/assets/images/arcana_2.png';
import cardBack3 from '@/assets/images/arcana_3.png';
import '@/assets/styles/home.css';
const router = useRouter();
const tarotStore = useTarotStore();
const requestNotificationPermission = async () => {
    const permStatus = await LocalNotifications.requestPermissions();
    if (permStatus.display === 'granted') {
        console.log('Permiso para notificaciones concedido ✅');
    }
    else {
        console.log('Permiso para notificaciones denegado ❌');
    }
};
const scheduleMorningNotification = async () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(8, 0, 0, 0); // 8:00 AM
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
        });
    }
    catch (err) {
        console.error('Error al programar notificación:', err);
    }
};
const scheduleTestNotification = async () => {
    const now = new Date();
    const inOneMinute = new Date(now.getTime() + 60 * 1000);
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
    });
    console.log('✅ Notificación de prueba programada para:', inOneMinute.toLocaleTimeString());
};
// Frases de intuición
const motivationalPhrases = [
    '¿Qué dice tu intuición hoy?',
    'Escucha tu voz interior',
    'El camino se revela',
    'Confía en tu intuición',
    'Lo que buscas también te busca',
    'El universo habla en silencio',
    'Tu intuición es tu brújula'
];
const selectedPhrase = ref('');
// Selecciona una frase aleatoria
selectedPhrase.value = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
const goToDraw = (color) => {
    tarotStore.setSelectedCard(color);
    router.push('/draw');
};
const initNotifications = async () => {
    await requestNotificationPermission();
    const lastScheduled = localStorage.getItem('notificationLastScheduled');
    const today = new Date().toDateString();
    if (lastScheduled !== today) {
        await scheduleMorningNotification();
        localStorage.setItem('notificationLastScheduled', today);
    }
};
onMounted(() => {
    initNotifications();
    // scheduleTestNotification()
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "home-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "cards" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.goToDraw('orange');
        } },
    src: (__VLS_ctx.cardBack1),
    alt: "Tarjeta Naranja",
    ...{ class: "card card-orange" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.goToDraw('blue');
        } },
    src: (__VLS_ctx.cardBack2),
    alt: "Tarjeta Azul",
    ...{ class: "card card-blue" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.goToDraw('darkblue');
        } },
    src: (__VLS_ctx.cardBack3),
    alt: "Tarjeta Azul Oscuro",
    ...{ class: "card card-darkblue" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.selectedPhrase);
/** @type {__VLS_StyleScopedClasses['home-container']} */ ;
/** @type {__VLS_StyleScopedClasses['cards']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-orange']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-blue']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-darkblue']} */ ;
/** @type {__VLS_StyleScopedClasses['text']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            cardBack1: cardBack1,
            cardBack2: cardBack2,
            cardBack3: cardBack3,
            selectedPhrase: selectedPhrase,
            goToDraw: goToDraw,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
