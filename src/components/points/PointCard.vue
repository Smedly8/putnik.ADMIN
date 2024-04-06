<script setup>
    import {pointTypes} from '@/common/constants/index.js'
    import YMapApp from '@/components/YMapApp.vue'
    // import MapApp from '@/components/MapApp.vue'
    const props = defineProps({
        point: {
            type: Object,
        }
    })

    const getPointType = id =>{
    return pointTypes[id]
}
</script>

<template>
    <div class="point-card">
        <img :src="point.img" class="image" alt="">
        <div class="middle">
            <h2 class="middle__title"> {{ point.name }} </h2>
            <p class="middle__type">{{getPointType(point.type)}}</p>
        </div>
        <div class="map">
            <!-- <YMapApp/> -->
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
    }
</style>