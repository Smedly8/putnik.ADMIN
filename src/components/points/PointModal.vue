<script setup>
import { ref, watch } from 'vue'
import {pointTypes} from '@/common/constants/index.js'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import YMapApp from '@/components/YMapApp.vue'
const emit = defineEmits(['close', 'create'])



const close = () => {
    emit('close')
}

const optionTypes = ref([])


pointTypes.forEach((el, idx) => {
    optionTypes.value.push({
        id: idx,
        name: el.ru
    })
}) 

const createHandler = () => {
    userData.value.type = pointTypes[typeActiveIdx.value].en
    emit('create', userData.value)
}

const userData = ref({
    name: '',
    type: '',
    pictureUrl: '',
    lat: 38.995637,
    lon: 45.037683,
})

const typeActiveIdx = ref([0]) // 

const handlerMapUpdate = (coords) => {
    console.log('@@ handlerMapUpdate', coords);
    userData.value.lat = coords.lat
    userData.value.lon = coords.lon
}

</script>

<template>
    <div class="back" @click="close">
        <div class="modal" @click.stop>
            <h2 class="title">Создать локацию</h2>
            <BaseInput v-model="userData.name"  title="Название"/>
            <BaseSelect v-model="typeActiveIdx" :optionsList="optionTypes" title="Тип локации"/>
            <BaseInput v-model="userData.pictureUrl" title="Ссылка на изображение"/>
            <p>Долгота: {{userData.lon}}</p>
            <br>
            <p>Широта: {{userData.lat}} </p>
            <br>
            <div class="map">
                <YMapApp @update="handlerMapUpdate"/>
            </div>
            <BaseButton @click="createHandler">Создать</BaseButton>
        </div>
    </div>
</template>
<style scoped>
    .back {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #00000059;
        backdrop-filter: blur(8px);
    }

    .modal {
        width: 600px;
        padding: 16px;
        border-radius: 8px;
        background: white;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .title{
        font-size: 16px;
        margin-bottom: 32px;
    }

    .map{
        width: 100%;
        height: 240px;
    }
</style>