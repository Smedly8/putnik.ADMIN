<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>
<template>
  <img :src="image" class="image" alt="" />
</template>
<style scoped lang="scss">
.image {
  width: 32px;
  height: 32px;
  object-fit: contain;
  @include respond-to(mobile) {
    width: 36px;
    height: 36px;
  }
}
</style>
