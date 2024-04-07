<script setup>
import { ref } from 'vue'
import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapMarker, YandexMapDefaultFeaturesLayer, YandexMapListener } from 'vue-yandex-maps';

const props = defineProps({
  coords: Object,
})
const emit = defineEmits(['update'])
console.log('@@@', props?.coords, props?.coords?.lat, );

const settings = {
  coordinates: props?.coords?.lat ? [props.coords.lat, props.coords.lon] : [ 38.995637, 45.037683 ] // если нет точки, то ставим по умолчанию на краснодар
}

const settingsMap = {
  location: {
    center: props?.coords?.lat ? [props.coords.lon, props.coords.lat] : [ 38.995637, 45.037683 ],
    zoom: 12,
  }
}
 
const currentCenter = ref({
  lat: 38.995637,
  lon: 45.037683,
})

const handlerUpdateMap = (e) => {
  console.log('@@ e', e);
  currentCenter.value.lon = e.location.center[0] 
  currentCenter.value.lat = e.location.center[1] 
  emit('update', currentCenter.value)
}
</script>

    
<template>
<div class="container">
  <yandexMap :settings="settingsMap" :zoom="20">
    <yandex-map-default-scheme-layer />
    <YandexMapListener :settings="{ onUpdate: handlerUpdateMap }" />
    <YandexMapDefaultFeaturesLayer/>    
    <yandex-map-default-features-layer />
  </yandexMap>
    <div class="geo-tag">
      <img src="/images/icons/marker.svg" alt="">
    </div>
</div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
 .marker{
  width: 10px;
  height: 10px;
  background: red;
  z-index: 10;
 }

 .geo-tag{
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  pointer-events: none;
  & > img {
    width: 100%;
    height: 100%;
  }
 }
</style>
