<script setup>

    import { ref } from 'vue';
    var url = "http://colormind.io/api/";
    var data = {
        model : "default"
    }

    var isGenerated = ref(false);

    var http = new XMLHttpRequest();
    var palette;
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            palette = JSON.parse(http.responseText).result;
            console.log(palette);
            isGenerated.value = true;
            console.log(isGenerated.value);
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
</script>

<template>
    <div class="centre-flex">
        <button 
            v-if="isGenerated==true" v-for="colour in palette" :key="colour" class="palette-colour"
            :style="'background-image: linear-gradient(rgb('+colour[0]+','+colour[1]+','+colour[2]+') 0%, rgb('+colour[0]+','+colour[1]+','+colour[2]+') 70%, white 70%);'"
        >
            {{ colour[0] }}, {{ colour[1] }}, {{ colour[2] }}
        </button>

        <p v-else>Generating</p>

    </div>
</template>