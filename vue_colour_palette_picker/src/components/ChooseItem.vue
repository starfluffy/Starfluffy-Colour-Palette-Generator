<script setup>
import { defineProps, inject } from "vue";

const props = defineProps({ text: String, path: String, background: String });
const { text, path, background } = props;

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
  <div class="choose-item">
    <router-link :to="path" append>
      <button
        class="choose-button"
        ref="buttonRef"
        @click="setDefault"
        :style="{ backgroundImage: `url(${getImageUrl(background)})` }"
      >
        {{ text }}
      </button>
    </router-link>
  </div>
</template>
