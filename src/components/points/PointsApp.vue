<script setup>
import ControlPanel from '@/components/widgets/ControlPanel.vue'
import PointCard from '@/components/points/PointCard.vue'
import PointModal from '@/components/points/PointModal.vue'
import { ref } from 'vue'


const points = ref([
    {
        id: 46547,
        type: 1,
        name: 'Хаб Горячий ключ',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 21241,
        type: 2,
        name: 'Придорожное кафе',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 4353,
        type: 2,
        name: 'Автомойка',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 9257,
        type: 2,
        name: 'Хаб Горячий ключ',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 46547,
        type: 1,
        name: 'Хаб Горячий ключ',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 21241,
        type: 2,
        name: 'Придорожное кафе',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 4353,
        type: 2,
        name: 'Автомойка',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
    {
        id: 9257,
        type: 2,
        name: 'Хаб Горячий ключ',
        lat: 23432.324,
        lon: 34234.433,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'
    },
])

const isOpenModal = ref(false)

const openModal = () => {
    isOpenModal.value = true
}
</script>

<template>
    <div>
        <ControlPanel @create="openModal"/>
        <div class="points-app">
            <PointCard v-for="point in points" :key="point.id" :point="point"/>
        </div>

        <div class="points-app">
        </div>
        <PointModal v-if="isOpenModal"/>
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