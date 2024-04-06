<script setup>
import {ref} from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

</script>
<template>
    <div class="sidebar">
        <RouterLink 
            v-for="route in router.options.routes.filter(el => el.sideBar)" 
            :key="route.path" 
            class="link" 
            :to="route.path"
        >
            <img :src="'/images/icons/geo.svg'" alt="">
            <p>{{ route.name }}</p>
            
        </RouterLink>
        <!-- <div v-for="link in links" class="link">
            {{  }}    
        </div>     -->
    </div>    
</template>

<style scoped lang="scss">
    .sidebar {
        width: 200px;
        height: 100%;
        background: $background;
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
    .link {
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:hover{
            filter: brightness(80%);
        }
        & > p {
            font-size: 16px;
            color: $primary;
            text-align: left;
            transition: $base-transition;
        }
        & > img {
            width: 20px;
            height: 20px;
            margin-bottom: 8px;
            fill: $primary;
            color: $primary;
        }
    }
    .icon{

    }
</style>