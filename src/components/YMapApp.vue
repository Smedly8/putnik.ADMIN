<script setup>
import { ref } from 'vue'
import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapMarker } from 'vue-yandex-maps';

const settings = {
  coordinates: [37.917644, 55.955819]
}

const settingsMap = {
  location: {
    center: [37.617644, 55.755819],
    zoom: 9
  }
}
</script>

    
<template>
  <yandexMap :settings="settingsMap" :zoom="10">
    <yandex-map-default-scheme-layer />
    <YandexMapMarker :settings="settings" marker-id="2123" hint-content="some hint" >
      <div class="marker"></div>
    </YandexMapMarker>
    <!-- <YandexMapDefaultSchemeLayer /> -->
    <yandex-map-default-features-layer />
  </yandexMap>
</template>

<style scoped lang="scss">
 .marker{
  width: 10px;
  height: 10px;
  background: red;
  z-index: 10;
 }
</style>
