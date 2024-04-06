<script setup>
import ControlPanel from '@/components/widgets/ControlPanel.vue'
import PointCard from '@/components/points/PointCard.vue'
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
])
</script>

<template>
    <div>
        <ControlPanel/>
        <div class="points-app">
            <PointCard v-for="point in points" :key="point.id" :point="point"/>
        </div>

        <div class="points-app">
        </div>
    </div>
</template>

<style scoped lang="scss">

.points-app {
    display: flex;
    flex-direction: column;
    gap: 20px;
}




.title{
    font-size: 16px;
}


</style>