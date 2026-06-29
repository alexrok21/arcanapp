import { ref, onMounted } from 'vue';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import splashImage from '@/assets/splash/splash.png'; // ✅ Tu imagen personalizada
const showSplash = ref(true);
onMounted(async () => {
    // ✅ Espera 2 segundos (suficiente para experiencia suave sin molestar)
    await new Promise(resolve => setTimeout(resolve, 2000));
    // ✅ Oculta splash nativo (si existe) de forma segura
    if (Capacitor.isNativePlatform()) {
        try {
            await SplashScreen.hide({ fadeOutDuration: 300 });
        }
        catch (e) {
            console.warn('SplashScreen.hide error (ignorado):', e);
            // Fallback silencioso
            SplashScreen.hide().catch(() => { });
        }
    }
    // ✅ Oculta splash en Vue
    showSplash.value = false;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['loading-dots']} */ ;
/** @type {__VLS_StyleScopedClasses['loading-dots']} */ ;
/** @type {__VLS_StyleScopedClasses['loading-dots']} */ ;
// CSS variable injection 
// CSS variable injection end 
if (__VLS_ctx.showSplash) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "splash-overlay" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "splash-image-container" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.splashImage),
        alt: "Arcanapp",
        ...{ class: "splash-image" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "loading-dots" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
}
const __VLS_0 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
{
    const { default: __VLS_thisSlot } = __VLS_3.slots;
    const [{ Component }] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_4 = {}.Transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        name: "fade-slide",
        mode: "out-in",
    }));
    const __VLS_6 = __VLS_5({
        name: "fade-slide",
        mode: "out-in",
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_7.slots.default;
    if (!__VLS_ctx.showSplash) {
        const __VLS_8 = ((Component));
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
        const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
    }
    var __VLS_7;
    __VLS_3.slots['' /* empty slot name completion */];
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['splash-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['splash-image-container']} */ ;
/** @type {__VLS_StyleScopedClasses['splash-image']} */ ;
/** @type {__VLS_StyleScopedClasses['loading-dots']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            splashImage: splashImage,
            showSplash: showSplash,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
