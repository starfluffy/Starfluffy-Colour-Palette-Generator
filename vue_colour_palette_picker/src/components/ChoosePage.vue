<script setup>
import { inject } from "vue";

const data = inject("data");
const inputName = inject("inputName");

// sets the input for the api back to the default
function setDefault() {
  data.value = { model: "default" };
  inputName.value = "Random";
}

// imports the images from the assets folder and returns the url for the image
function getImageUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
</script>

<template>
  <!-- centres the contents and displays them as flex items -->
  <div class="centre flex">
    <!-- button that links to page where user can select a style -->
    <router-link to="options" append>
      <button
        class="choose-button"
        @click="setDefault"
        :style="{
          backgroundImage: `url(${getImageUrl('choose-colours.png')})`,
        }"
      >
        Let me choose a style for my colour palette!
      </button>
    </router-link>

    <!-- button that links to the colour palette generated page with a random palete generated -->
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
