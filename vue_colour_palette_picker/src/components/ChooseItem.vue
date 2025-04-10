<script setup>
    import { defineProps, onMounted, ref } from 'vue';

    const props = defineProps( { text: String, path: String, background: String } );
    const { text, path, background } = props;

    const buttonRef = ref(null);

    const setBackground = () => {
        if (buttonRef.value) {
            const backgroundImg = new URL(`../assets/${background}`, import.meta.url).href;
            buttonRef.value.style.backgroundImage = `url(${backgroundImg})`;
            buttonRef.value.style.backgroundSize = 'auto 65%';
            buttonRef.value.style.backgroundPosition = "center 31px";
            buttonRef.value.style.backgroundRepeat = "no-repeat";
        }
    };

    onMounted(() => {
        setBackground();
    });
</script>

<template>
    <div class="choose-item">
        <router-link :to="'/colour-picker/' + path">
            <button class="choose-button" ref="buttonRef">
                {{ text }}
            </button>
        </router-link>       
    </div>
</template>
