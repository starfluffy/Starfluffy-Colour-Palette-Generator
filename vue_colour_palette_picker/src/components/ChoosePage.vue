<script setup>
import { inject } from "vue";

const data = inject("data");
const inputName = inject("inputName");

function setDefault() {
  data.value = { model: "default" };
  inputName.value = "Random";
}

function getImageUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
</script>

<template>
  <!-- centres the contents and displays them as flex items -->
  <div class="centre flex">
    <router-link to="options" append>
      <button
        class="choose-button"
        @click="setDefault"
        :style="{
          backgroundImage: `url(${getImageUrl('choose-colours.png')})`,
        }"
      >
        Let me fine-tune my palette!
      </button>
    </router-link>

    <router-link to="generate" append>
      <button
        class="choose-button"
        @click="setDefault"
        :style="{
          backgroundImage: `url(${getImageUrl('random-colours.png')})`,
        }"
      >
        Just give me a random colour palette!
      </button>
    </router-link>
  </div>
</template>
