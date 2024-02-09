
<script setup>
import { onMounted, ref } from 'vue'


const multiple = 25;
const mouseOverContainer = document.getElementsByTagName("body")[0];
const element = ref(null);

console.log(element);

function transformElement(x, y) {
    const box = element.value.getBoundingClientRect();
    const calcX = -(y - box.y - (box.height / 2)) / multiple;
    const calcY = (x - box.x - (box.width / 2)) / multiple;
    let angle = Math.floor(getMouseAngle((y - box.y - (box.height / 2)), (x - box.x - (box.width / 2))));

    element.value.style.transform = "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
    element.value.style.setProperty("--angle", `${-angle}deg`);
}

function getMouseAngle(x, y) {
    const radians = Math.atan2(y, x);
    let angle = radians * (180 / Math.PI);

    if (angle < 0) {
        angle += 360;
    }

    return angle;
}

mouseOverContainer.addEventListener('mousemove', (e) => {
    window.requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
    });
});

mouseOverContainer.addEventListener('mouseleave', (e) => {
    window.requestAnimationFrame(function () {
        element.value.style.transform = "rotateX(0) rotateY(0)";
    });
});
</script>

<template>
    <div ref="element" id="element"></div>
    <div ref="title" id="title">
        <h1>万物皆虚，万事皆允</h1>
    </div>
</template>

<style>
body {
    width: 100vw;
    height: 100vh;
    /*图片url*/
    background: url(39e01c50a9b355cccd8286d4b25a0b8.png);
    background-size: cover;
    /*display: flex;*/
    transform-style: preserve-3d;
    perspective: 500px;
    cursor: pointer;
}


h1 {
    font-weight: 600;
    font-size: min(3.5vw, 22px);
    margin: 0;
    color: hsla(0, 0%, 37%, 0.246);
}

#element {
    width: 800px;
    height: 500px;
    backdrop-filter: blur(15px);
    background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5));
    box-shadow: 0 20px 40px 1px rgba(0, 0, 0, 0.12);
    transition: all .2s;
    margin: auto;
    transform-style: preserve-3d;
    border-radius: 20px;
    position: relative;
    top: 180px;
}

#title {
    text-align: center;
    margin: auto;
    text-shadow: 0 2px 40px #000;
    letter-spacing: -.02em;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;

    position: relative;
    top: 250px;
}
</style>