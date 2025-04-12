<script setup>
    import { ref, inject } from 'vue';
    
    const url = "http://colormind.io/api/";
    const data = inject('data');
    const inputName = inject('inputName');
    const isGenerated = ref(false);

    const http = new XMLHttpRequest();
    var palette;

    function generatePalette() {
        isGenerated.value = false;
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                palette = JSON.parse(http.responseText).result;
                isGenerated.value = true;
            }
        }
        http.open("POST", url, true);
        http.send(JSON.stringify(data.value));
    }

    function copyText(colour1, colour2, colour3) {
        const rgbString = colour1.toString() + ", " + colour2.toString() + ", " + colour3.toString();
        navigator.clipboard.writeText(rgbString);
        alert("Copied the text: " + rgbString);
    }

    generatePalette();
</script>

<template>
    <div v-if="isGenerated == true" class="centre">
        <h1>{{inputName}} Colour Palette</h1>
        <div class="flex" style="margin-top: 15px;">
            <button v-for="colour in palette" :key="colour" class="palette-colour"
                @click="copyText(colour[0], colour[1], colour[2])"
                :style="'background-image: linear-gradient(rgb('+colour[0]+','+colour[1]+','+colour[2]+') 0%, rgb('+colour[0]+','+colour[1]+','+colour[2]+') 70%, white 70%);'">
                {{ colour[0] }}, {{ colour[1] }}, {{ colour[2] }}
            </button>
        </div>
        <button class="button-style-1" @click="generatePalette" style="margin-top: 18px;">
            Regenerate
        </button>
    </div>
    <img  class="centre flex" v-else src="../assets/loading.gif"/>
</template>