<script setup>
    import { defineProps } from 'vue';

    defineProps( { text: String, path: String } );
</script>

<template>
    <div class="choose-item">
        <router-link :to="'/colour-picker/' + path">
            <button>{{ text }}</button>
        </router-link>       
    </div>
</template>
