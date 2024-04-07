<script setup>
  import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <div id="main">
    <SideBar/>
    <div class="main-container">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/styles/reset.scss';
#main {
  display: flex;
  align-items: center;
  background: $background;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
}

.main-container {
    box-shadow: $shadow;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin: auto 30px auto 0;
    border-radius: 16px;
    padding: 30px;
    overflow-y: auto;
}
</style>
