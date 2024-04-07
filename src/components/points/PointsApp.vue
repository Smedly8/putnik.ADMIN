<script setup>
import ControlPanel from '@/components/widgets/ControlPanel.vue'
import PointCard from '@/components/points/PointCard.vue'
import PointModal from '@/components/points/PointModal.vue'
import { ref } from 'vue'
import { getLocations, postLocation, deleteLocation } from '@/api/locations.js'

const isOpenModal = ref(false)
const loading = ref(true)


const locations = ref(null)

const updateLocations = () => {
    loading.value = true
    getLocations()
    .then(res => {
        console.log('@@ getLocations', res.data)
        locations.value = res.data
        loading.value = false
    })
    .catch(err => {
        console.error(err)
    })

}
updateLocations()

const defineEmits = {
    
}
const points = ref([
    {
        id: 46547,
        type: 'hub',
        name: 'Хаб Горячий ключ',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 21241,
        type: 'resort',
        name: 'Придорожное кафе',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 4353,
        type: 'pitstop',
        name: 'Автомойка',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 9257,
        type: 'attraction',
        name: 'Хаб Горячий ключ',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 46547,
        type: 'attraction',
        name: 'Хаб Горячий ключ',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 21241,
        type: 'attraction',
        name: 'Придорожное кафе',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 4353,
        type: 'attraction',
        name: 'Автомойка',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 9257,
        type: 'attraction',
        name: 'Хаб Горячий ключ',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
])




const openModal = () => {
    isOpenModal.value = true
}

const closeModal = () => {
    isOpenModal.value = false
}


const createHandler = (payload) => {
    console.log('@@ createHandler', payload);
    loading.value = true
    postLocation(payload)
    .then(() => {
        closeModal()
        updateLocations()
    })
}
</script>

<template>
    <div v-if="!loading">
        <ControlPanel @create="openModal"/>
        <div class="points-app">
            <PointCard v-for="point in locations" :key="point.id" :point="point"/>
        </div>

        <div class="points-app">
        </div>
        <PointModal 
            v-if="isOpenModal" 
            @create="createHandler"
            @close="closeModal"
        />
    </div>
</template>

<style scoped lang="scss">

.points-app {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
}




.title{
    font-size: 16px;
}


</style>