<script setup>

    import { ref } from 'vue';
    var url = "http://colormind.io/api/";
    var data = {
        model : "default",
        input : [[44,43,44],[90,83,82],"N","N","N"]
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
    <div class="choose">
        <button 
            v-if="isGenerated==true" v-for="colour in palette" :key="colour" 
            :style="'background-color: rgb('+colour[0]+', '+colour[1]+', '+colour[2]+');'"
        >
            {{ colour[0] }}, {{ colour[1] }}, {{ colour[2] }}
        </button>

        <p v-else>Generating</p>

    </div>
</template>