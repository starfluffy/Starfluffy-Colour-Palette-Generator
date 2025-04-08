<script setup>
    import { defineProps } from 'vue';

    defineProps( { text: String, path: String, background: String } );
</script>

<template>
    <div class="choose-item">
        <router-link :to="'/colour-picker/' + path">
            <button class="choose-button" 
                style="background-image: linear-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0) 65%, rgba(255,255,255,1) 65%), url('../assets/test.png');"
            >
                {{ text }}
            </button>
        </router-link>       
    </div>
</template>
