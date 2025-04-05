<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    function goToChoose() {
        router.push('/choose');
    }
</script>

<template>
<div class="welcome">
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
    <h1>Welcome to the Starfluffy Colour Palette Generator</h1>
    <button class="start-button" @click="goToChoose">
        Let's start!
    </button>
    
</div>
</template>

