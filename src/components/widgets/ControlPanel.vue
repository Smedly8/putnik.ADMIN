<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
const emit = defineEmits(['create'])

const handleClick = () => {
    emit('create')
}
</script>

<template>
    <div class="control-panel">
        <BaseButton @click="handleClick">
            Добавить
        </BaseButton>
    </div>
</template>

<style scoped lang="scss">
.control-panel {
    display: flex;
    margin-bottom: 16px;

}

.points-app {

}
</style>