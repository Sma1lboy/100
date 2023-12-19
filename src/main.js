import 'virtual:windi-devtools'
import 'virtual:windi.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './main.css'
const app = createApp(App);

import routes from '~pages'
console.log(routes)
const router = createRouter({
    

    history: createWebHistory(),
    routes

})
app.use(router)

app.mount('#app')