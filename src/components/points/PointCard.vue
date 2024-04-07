<script setup>
    import { ref } from 'vue'
    import {pointTypes} from '@/common/constants/index.js'
    import YMapApp from '@/components/YMapApp.vue'
    // import MapApp from '@/components/MapApp.vue'
    const props = defineProps({
        point: {
            type: Object,
        }
    })

    const getPointType = en => {
        console.log('@@', en, pointTypes);
        return pointTypes.find(el => el.en === en)?.ru || pointTypes[0].ru
    }
    const coords = ref({lat: props.point.lat, lon: props.point.lon})
</script>

<template>
    <div class="point-card">
        <img :src="point.pictureUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhEY1Ssylhag6kP0SDkEUobLkknYMl1oJYJDq-4Q4FQ&s'" class="image" alt="">
        <div class="middle">
            <h2 class="middle__title"> {{ point.name }} </h2>
            <p class="middle__type">{{getPointType(point.type)}}</p>
        </div>
        <div class="map">
            <YMapApp :coords="coords"/>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .point-card {
        background: white;
        box-shadow: $shadow;
        border-radius: 8px;
        padding: 8px;
        display: flex;
    }

    .image {
        border-radius: 8px;
        object-fit: cover;
        width: 210px;
        height: 140px;
    }

    .middle{
        display: flex;
        flex-direction: column;
        padding: 6px 24px;
        width: 400px;
        &__title{
            font-size: 20px;
        }

        &__type{
            font-size: 16px;
            margin-top: 16px;
        }
    }

    .map{
        width: 400px;
        pointer-events: none;
    }
</style>