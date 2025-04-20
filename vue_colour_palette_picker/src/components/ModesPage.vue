<script setup>
import { inject } from "vue";

const data = inject("data");
const inputName = inject("inputName");

/**
 * @description sets the input for the api back to the default and generates a new palette
 */
function setDefault() {
  data.value = { model: "default" };
  inputName.value = "Random";
}

/**
 *
 * @param {string} name
 * @returns the image url for the button background
 * @description this function takes the name of the image and returns the url for the image. this is used to set the background image of the button.
 */
function getImageUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
</script>

<template>
  <!-- centres the contents and displays them as flex items -->
  <div class="centre flex">
    <!-- button that links to page where user can select a style -->
    <router-link to="/colour-palette-generator/choose-style">
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
    <router-link to="/colour-palette-generator/generate">
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
