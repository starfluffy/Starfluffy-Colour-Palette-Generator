<script>
    var url = "http://colormind.io/api/";
    var data = {
        model : "default",
        input : [[44,43,44],[90,83,82],"N","N","N"]
    }

    var http = new XMLHttpRequest();
    var palette;
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            palette = JSON.parse(http.responseText).result;
            console.log(palette);
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
</script>

<template>
    <div>
        <p>generate</p>
    </div>
</template>