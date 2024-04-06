<template>
  <button class="button">
    <slot/>
  </button>
</template>
<style scoped lang="scss">
.button {
  padding: 12px 24px;
  background-color: $primary;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: $base-transition;
  cursor: pointer;
  color: white;
  &:hover {
    // box-shadow: 0 0 10px $shadow;
    background: $primary-dark;
  }
}
</style>
