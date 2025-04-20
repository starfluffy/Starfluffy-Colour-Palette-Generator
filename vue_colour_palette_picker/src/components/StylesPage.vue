<script setup>
import { inject } from "vue";
const data = inject("data");
const inputGroupName = inject("inputName");

// defining the possible inputs for the api
const temperature = {
  Warm: [
    [255, 94, 77],
    [255, 160, 122],
    [255, 165, 0],
    [255, 193, 7],
    [255, 223, 186],
  ],
  Cool: [
    [54, 162, 235],
    [0, 128, 128],
    [106, 90, 205],
    [72, 209, 204],
    [0, 102, 204],
  ],
};
const sun = {
  Sunrise: [
    [255, 99, 71],
    [255, 165, 0],
    [255, 223, 186],
    [255, 182, 193],
    [135, 206, 235],
  ],
  Sunset: [
    [255, 94, 77],
    [255, 140, 0],
    [255, 195, 0],
    [255, 160, 122],
    [218, 112, 214],
  ],
};
const seasons = {
  Spring: [
    [144, 238, 144],
    [255, 192, 203],
    [255, 255, 224],
    [176, 224, 230],
    [221, 160, 221],
  ],
  Summer: [
    [255, 140, 0],
    [255, 255, 0],
    [0, 191, 255],
    [255, 105, 180],
    [144, 238, 144],
  ],
  Autumn: [
    [255, 87, 34],
    [139, 69, 19],
    [255, 165, 0],
    [184, 134, 11],
    [205, 133, 63],
  ],
  Winter: [
    [176, 224, 230],
    [0, 191, 255],
    [240, 248, 255],
    [105, 105, 105],
    [25, 25, 112],
  ],
  "4 Seasons": [
    [255, 182, 193],
    [255, 215, 0],
    [210, 105, 30],
    [176, 224, 230],
    [34, 139, 34],
  ],
};
const elements = {
  Earth: [
    [139, 69, 19],
    [85, 107, 47],
    [160, 82, 45],
    [107, 142, 35],
    [34, 139, 34],
  ],
  Wind: [
    [176, 224, 230],
    [135, 206, 235],
    [255, 255, 255],
    [192, 192, 192],
    [211, 211, 211],
  ],
  Water: [
    [0, 191, 255],
    [70, 130, 180],
    [25, 25, 112],
    [173, 216, 230],
    [0, 0, 255],
  ],
  Fire: [
    [255, 69, 0],
    [255, 140, 0],
    [255, 215, 0],
    [178, 34, 34],
    [255, 99, 71],
  ],
  Metal: [
    [169, 169, 169],
    [192, 192, 192],
    [211, 211, 211],
    [105, 105, 105],
    [220, 220, 220],
  ],
  Wood: [
    [139, 69, 19],
    [160, 82, 45],
    [222, 184, 135],
    [107, 142, 35],
    [34, 139, 34],
  ],
};
const japanCulture = {
  "Genshin Impact": [
    [190, 180, 150],
    [229, 180, 85],
    [148, 112, 198],
    [112, 173, 128],
    [135, 206, 250],
  ],
  "Shoujo Style": [
    [255, 182, 193],
    [173, 216, 230],
    [255, 239, 213],
    [221, 160, 221],
    [255, 240, 245],
  ],
  "Shounen Style": [
    [255, 69, 0],
    [255, 20, 147],
    [255, 215, 0],
    [0, 0, 255],
    [34, 139, 34],
  ],
  Vocaloid: [
    [0, 255, 255],
    [255, 105, 180],
    [255, 215, 0],
    [138, 43, 226],
    [135, 206, 250],
  ],
  Pokemon: [
    [255, 0, 0],
    [255, 255, 0],
    [0, 0, 255],
    [255, 192, 203],
    [255, 255, 255],
  ],
};
// storing all the input groups to be iterated over in the templatae
const inputGroups = { temperature, sun, seasons, elements, japanCulture };

/**
 *
 * @param {string} name
 * @returns the image url for the button background
 * @description this function takes the name of the image and returns the url for the image. this is used to set the background image of the button.
 */
function getImageUrl(name) {
  return new URL(`../assets/options/${name}.png`, import.meta.url).href;
}

/**
 *
 * @param {string} input
 * @param {string} inputName
 * @description this function sets the data input for the api to the selected style. it also sets the input name to be displayed on the generate page.
 */
function clickOption(input, inputName) {
  data.value = {
    model: "default",
    input: input,
  };

  inputGroupName.value = inputName;
}
</script>

<template>
  <!-- we want to only align this div horizontally -->
  <div class="h-centre" style="margin: 20px 0px 50px 0px">
    <h1 class="flex" style="margin-bottom: 20px; font-size: 40px">
      Choose a Palette Style!
    </h1>

    <!-- iterates over the input groups and creates a div for each "input group" displayed as a flex item -->
    <div
      class="flex"
      v-for="inputGroup in inputGroups"
      :key="inputGroup"
      style="margin-bottom: 40px"
    >
      <!-- creates a button for each input in the input group -->
      <router-link
        v-for="(input, inputName) in inputGroup"
        :key="inputName"
        to="/colour-palette-generator/generate"
      >
        <button
          class="option-button"
          :id="inputName"
          :style="{ backgroundImage: `url(${getImageUrl(inputName)})` }"
          @click="clickOption(input, inputName)"
        >
          {{ inputName }}
        </button>
      </router-link>
    </div>
  </div>
</template>
