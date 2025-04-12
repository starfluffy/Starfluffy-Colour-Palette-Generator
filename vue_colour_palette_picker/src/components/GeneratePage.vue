<script setup>
import { ref, inject } from "vue";

const url = "http://colormind.io/api/";
const data = inject("data");
const inputName = inject("inputName");
const isGenerated = ref(false);
const http = new XMLHttpRequest();
var palette;

// makes a http request to the api to get the palette
function generatePalette() {
  isGenerated.value = false;
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      palette = JSON.parse(http.responseText).result;
      isGenerated.value = true;
    }
  };
  http.open("POST", url, true);
  http.send(JSON.stringify(data.value));
}

// copies the rgb text to the clipboard and alerts the user
function copyText(colour1, colour2, colour3) {
  const rgbString =
    colour1.toString() + ", " + colour2.toString() + ", " + colour3.toString();
  navigator.clipboard.writeText(rgbString);
  alert("Copied the text: " + rgbString);
}

// sets the input for the api back to the default
function setDefault() {
  data.value = { model: "default" };
  inputName.value = "Random";

  generatePalette();
}

generatePalette();
</script>

<template>
  <!-- display the palette if the api call is finished -->
  <div v-if="isGenerated == true" class="centre">
    <h1>{{ inputName }} Colour Palette</h1>

    <!-- palette has a button for each colour and are all displayed as a flex item -->
    <div class="flex" style="margin-top: 15px">
      <button
        v-for="colour in palette"
        :key="colour"
        class="palette-colour"
        @click="copyText(colour[0], colour[1], colour[2])"
        :style="
          'background-image: linear-gradient(rgb(' +
          colour[0] +
          ',' +
          colour[1] +
          ',' +
          colour[2] +
          ') 0%, rgb(' +
          colour[0] +
          ',' +
          colour[1] +
          ',' +
          colour[2] +
          ') 70%, white 70%);'
        "
      >
        {{ colour[0] }}, {{ colour[1] }}, {{ colour[2] }}
      </button>
    </div>

    <!-- buttons underneath the palette displayed as a flex item -->
    <div class="flex" style="margin-top: 18px">
      <!-- generates another palette based on the same data input -->
      <button class="button-style-1" @click="generatePalette">
        Regenerate
      </button>

      <!-- goes to the page where the user selects a style -->
      <router-link to="/colour-palette-generator/choose-style">
        <button class="button-style-1">Choose a style</button>
      </router-link>

      <!-- button to generate a random colour palette that only shows if the current palette isn't random-->
      <button
        v-if="inputName != 'Random'"
        class="button-style-1"
        @click="setDefault"
      >
        Generate random
      </button>
    </div>
  </div>

  <!-- loading gif that shows while the api call is being made -->
  <img class="centre" v-else src="../assets/loading.gif" />
</template>
