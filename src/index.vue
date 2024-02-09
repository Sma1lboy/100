<script setup>
import Home from './Home.vue';

</script>


<template>
    <div class="paper">
        <Home></Home>
    </div>
</template>

<style>
.paper {
    display: grid;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    place-items: center;
    user-select: none;
    justify-content: center;
}
</style>