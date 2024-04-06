import { createApp } from 'vue'
import router from '@/router/router.js'
import { createYmaps } from 'vue-yandex-maps';
// import YmapPlugin from 'vue-yandex-maps'
import App from './App.vue'
// import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/styles.css";
const yandexMapKey = '3e4fa7ea-043e-4477-9583-0e69dbed46dc'

const Ymaps = createYmaps({
    apikey: yandexMapKey,
})

createApp(App)
.use(Ymaps)
.use(router)
.mount('#app')