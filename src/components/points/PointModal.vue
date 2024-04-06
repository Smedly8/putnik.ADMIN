<script>
// import BaseInput from '@/components/ui/BaseInput.vue'
import {defineEmits} from 'vue'

const emit = defineEmits(['close'])

</script>

<template>
    <div class="back" @click.stop="emit('close')">
        <div class="modal">
            <h2 class="title">Создать локацию</h2>
            <BaseInput/>
            <BaseInput/>
            <BaseInput/>
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
    }

    .title{
        font-size: 16px;
        margin-bottom: 32px;
    }
</style>