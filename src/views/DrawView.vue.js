import { Share } from '@capacitor/share';
import { Filesystem, Directory } from '@capacitor/filesystem';
import html2canvas from 'html2canvas';
import { Capacitor } from '@capacitor/core';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useTarotStore } from '@/store/tarot';
import cardBack1 from '@/assets/images/arcana_1.png';
import cardBack2 from '@/assets/images/arcana_2.png';
import cardBack3 from '@/assets/images/arcana_3.png';
import backArrow from '@/assets/images/back-arrow.png';
import '@/assets/styles/draw.css';
const cardImage = {
    orange: cardBack1,
    blue: cardBack2,
    darkblue: cardBack3,
};
const tarotStore = useTarotStore();
const { selectedCard, revealedCard } = storeToRefs(tarotStore);
const router = useRouter();
const showText = ref(true);
const revealed = ref(false);
const revealedImage = ref('');
const meaningText = ref('');
const showMeaning = ref(false);
const revealCard = () => {
    if (revealed.value)
        return;
    showText.value = false;
    showMeaning.value = false;
    // Espera un momento antes de revelar la carta
    setTimeout(() => {
        tarotStore.revealCard();
        revealed.value = true;
        revealedImage.value = revealedCard.value?.image || '';
        // Limpiamos el texto antes de mostrarlo
        meaningText.value = '';
        // Mostramos el texto del significado con un pequeño retraso
        setTimeout(() => {
            meaningText.value = revealedCard.value?.meaning || '';
            // Después de 2 segundos, activamos showMeaning para mostrar el botón
            setTimeout(() => {
                showMeaning.value = true;
            }, 2000);
        }, 100); // retraso mínimo para que el texto aparezca primero
    }, 1000); // retraso antes de revelar la carta
};
// Modal
const showShareModal = ref(false);
const shortMeaning = ref('');
const openShareModal = () => {
    if (!revealedCard.value)
        return;
    shortMeaning.value = revealedCard.value.shortMeaning;
    showShareModal.value = true;
};
const closeShareModal = () => {
    showShareModal.value = false;
};
// Compartir usando html2canvas + Capacitor Share
const shareCard = async () => {
    const modalEl = document.querySelector('.share-modal-content');
    if (!modalEl)
        return;
    // 1️⃣ Oculta temporalmente los botones de acción
    const shareActions = modalEl.querySelector('.share-actions');
    const originalDisplay = shareActions ? shareActions.style.display : '';
    if (shareActions) {
        shareActions.style.display = 'none';
    }
    try {
        // 2️⃣ Captura la imagen SIN los botones
        const canvas = await html2canvas(modalEl, {
            backgroundColor: '#000000', // Fondo negro
            scale: 2 // Mejor resolución
        });
        // 3️⃣ Convierte a blob
        const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
        const base64Data = await blobToBase64(blob);
        // 4️⃣ Guarda el archivo
        const fileName = `arcano_${revealedCard.value.name}.png`;
        const savedFile = await Filesystem.writeFile({
            path: fileName,
            data: base64Data,
            directory: Directory.Cache,
        });
        // 5️⃣ Comparte la imagen
        await Share.share({
            title: `Mi arcano: ${revealedCard.value.name}`,
            text: shortMeaning.value,
            url: savedFile.uri,
        });
    }
    finally {
        // 6️⃣ RESTAURA los botones (aunque haya error)
        if (shareActions) {
            shareActions.style.display = originalDisplay;
        }
    }
};
// Helper para convertir Blob a base64
function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}
const goBack = () => {
    router.push('/home');
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "draw-root" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.goBack) },
    ...{ class: "back-button" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.backArrow),
    alt: "Volver",
    ...{ class: "back-icon" },
});
if (__VLS_ctx.showText) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ({ 'slide-up': !__VLS_ctx.showText }) },
    });
}
if (!__VLS_ctx.revealed) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ onClick: (__VLS_ctx.revealCard) },
        src: (__VLS_ctx.cardImage[__VLS_ctx.selectedCard]),
        ...{ class: (['card-back', __VLS_ctx.selectedCard]) },
    });
}
const __VLS_0 = {}.Transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "flip",
}));
const __VLS_2 = __VLS_1({
    name: "flip",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
if (__VLS_ctx.revealed) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: "card-revealed",
        ...{ class: "card-front" },
        ...{ class: ([__VLS_ctx.selectedCard, { rotated: __VLS_ctx.revealedCard.orientation === 'Invertida' }]) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.revealedImage),
        alt: "Arcano Revelado",
        ...{ class: "card-image" },
    });
}
var __VLS_3;
if (__VLS_ctx.revealed) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "card-info" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.revealedCard.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "orientation" },
    });
    (__VLS_ctx.revealedCard.orientation);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "meaning-container" },
    });
    (__VLS_ctx.meaningText);
    const __VLS_4 = {}.Transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        name: "fade-slide-button",
    }));
    const __VLS_6 = __VLS_5({
        name: "fade-slide-button",
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_7.slots.default;
    if (__VLS_ctx.showMeaning) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "buttons-container" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.openShareModal) },
            ...{ class: "open-share-button" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: "@/assets/images/button.png",
            alt: "Compartir",
            ...{ class: "button-bg" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "button-text" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ class: "coming-soon-button" },
            disabled: true,
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "button-bg-text" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "coming-soon-overlay" },
        });
    }
    var __VLS_7;
}
const __VLS_8 = {}.Transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    name: "fade",
}));
const __VLS_10 = __VLS_9({
    name: "fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
if (__VLS_ctx.showShareModal) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (__VLS_ctx.closeShareModal) },
        ...{ class: "share-modal-overlay" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "share-modal-content" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: "share-title" },
    });
    (__VLS_ctx.revealedCard.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.revealedImage),
        alt: "Carta compartida",
        ...{ class: "share-card" },
        ...{ class: ({ rotated: __VLS_ctx.revealedCard.orientation === 'Invertida' }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "share-text" },
    });
    (__VLS_ctx.shortMeaning);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "share-footer" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "app-name" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "app-name app-name-highlight" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "invite-text" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "share-actions" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.shareCard) },
        ...{ class: "share-button" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: "@/assets/images/button.png",
        alt: "Compartir",
        ...{ class: "button-bg" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "button-text" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.closeShareModal) },
        ...{ class: "share-close" },
    });
}
var __VLS_11;
/** @type {__VLS_StyleScopedClasses['draw-root']} */ ;
/** @type {__VLS_StyleScopedClasses['back-button']} */ ;
/** @type {__VLS_StyleScopedClasses['back-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['slide-up']} */ ;
/** @type {__VLS_StyleScopedClasses['card-back']} */ ;
/** @type {__VLS_StyleScopedClasses['card-front']} */ ;
/** @type {__VLS_StyleScopedClasses['rotated']} */ ;
/** @type {__VLS_StyleScopedClasses['card-image']} */ ;
/** @type {__VLS_StyleScopedClasses['card-info']} */ ;
/** @type {__VLS_StyleScopedClasses['orientation']} */ ;
/** @type {__VLS_StyleScopedClasses['meaning-container']} */ ;
/** @type {__VLS_StyleScopedClasses['buttons-container']} */ ;
/** @type {__VLS_StyleScopedClasses['open-share-button']} */ ;
/** @type {__VLS_StyleScopedClasses['button-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['button-text']} */ ;
/** @type {__VLS_StyleScopedClasses['coming-soon-button']} */ ;
/** @type {__VLS_StyleScopedClasses['button-bg-text']} */ ;
/** @type {__VLS_StyleScopedClasses['coming-soon-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['share-modal-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['share-modal-content']} */ ;
/** @type {__VLS_StyleScopedClasses['share-title']} */ ;
/** @type {__VLS_StyleScopedClasses['share-card']} */ ;
/** @type {__VLS_StyleScopedClasses['rotated']} */ ;
/** @type {__VLS_StyleScopedClasses['share-text']} */ ;
/** @type {__VLS_StyleScopedClasses['share-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['app-name']} */ ;
/** @type {__VLS_StyleScopedClasses['app-name']} */ ;
/** @type {__VLS_StyleScopedClasses['app-name-highlight']} */ ;
/** @type {__VLS_StyleScopedClasses['invite-text']} */ ;
/** @type {__VLS_StyleScopedClasses['share-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['share-button']} */ ;
/** @type {__VLS_StyleScopedClasses['button-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['button-text']} */ ;
/** @type {__VLS_StyleScopedClasses['share-close']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            backArrow: backArrow,
            cardImage: cardImage,
            selectedCard: selectedCard,
            revealedCard: revealedCard,
            showText: showText,
            revealed: revealed,
            revealedImage: revealedImage,
            meaningText: meaningText,
            showMeaning: showMeaning,
            revealCard: revealCard,
            showShareModal: showShareModal,
            shortMeaning: shortMeaning,
            openShareModal: openShareModal,
            closeShareModal: closeShareModal,
            shareCard: shareCard,
            goBack: goBack,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
