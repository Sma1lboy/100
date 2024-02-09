
<script setup>
import { ref } from 'vue'

let section = ref();
console.log(section)
window.addEventListener("scroll", () => {
    let maxHeight = document.documentElement.scrollHeight;
    let value = window.scrollY;
    section.value.style.clipPath = `circle(${value * 1.5}px at left center)`
})

</script>

<template>
    <h2 class="title">Forest</h2>

    <section ref="section">
        <h2 class="inner-title">Forest</h2>
    </section>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    background-color: #222;
    min-height: 200vh;
}


section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: circle(0px at left center);
    z-index: 2;
}

.title {
    position: fixed;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    text-align: center;
    color: #00e5ff;
    z-index: 1;
    font-size: 25vw;

}

.inner-title {
    position: fixed;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    text-align: center;
    color: #00e5ff;
    z-index: 1;
    font-size: 25vw;
    background-image: url("/imgs/001-background.JPG");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>