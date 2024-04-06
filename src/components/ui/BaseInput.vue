<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="input-wrap">
    <input class="input" :placeholder="placeholder" />
    <img src="/images/search-line.svg" class="icon" alt="" />
  </div>
</template>
<style lang="scss" scoped>
.input-wrap {
  width: 100%;
  position: relative;
}

.icon {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  transform: scale(0.5);
}

.input {
  width: 100%;
  height: 45px;
  padding: 0 16px;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  &:focus {
    box-shadow: 0 0 6px 0 $green;
    border-color: $green;
  }
  &::placeholder {
    color: #a1a1a1;
  }
}
</style>
