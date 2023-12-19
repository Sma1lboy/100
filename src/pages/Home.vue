
<script setup>
import { works } from '../works.js';

const avaliableWorks = works.filter(work => !work.draft)

</script>

<template>
    <div  class="centered index-page">
        <h1 class="font-mono mb-2 text-lg font-bold mb-4">100 days</h1>
        <pre class="grid gap-x-4 gap-y-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <RouterLink v-for="work in avaliableWorks" :key="work.id" :to='`/${work.no}`' class="link block mr"><span class="mr-2 opacity-50">{{work.no}}</span><b style="font-weight: normal;">{{work.name}}</b></RouterLink>
        </pre>
        <h1 class="font-mono mb-2 mt-8">
            <a href="https://sbirl.com" class="link" target="_blank">@sma1lboy</a>
            <span class="mx-1">.</span>
            <a href="https://github.com/sma1lboy" class="link" target="_blank">github</a>
            <span class="mx-1">.</span>
            <a href="https://sbirl.com" class="link" target="_blank">blog</a>
        </h1>
    </div>  
</template>

<style>

.grid { 
    display: grid;
}
.centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -90%);
}
.index-page{
    max-height: 100%;
    padding: 60px 40px 30px;
    overflow: auto;
    width: 100%;
}


.link {
    --tw-text-opacity: 1;
    color: rgba(156,163,175,var(--tw-text-opacity));
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition-property: background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,filter,backdrop-filter;
    -o-transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,transform,-webkit-transform,filter,backdrop-filter;
    -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
    -o-transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    -webkit-transition-duration: .15s;
    -o-transition-duration: .15s;
    transition-duration: .15s;
}
@media (min-width: 768px) {
    .index-page{
        width: auto;
    }
}


</style>