<script setup>
import BaseInput from '@/components/ui/BaseInput.vue'
import IconButton from '@/components/ui/IconButton.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import { ref } from 'vue'
import { links } from '@/common/data.js'

const isOpenMenu = ref(false)
</script>

<template>
  <div>
    <header class="header">
      <div class="top-row">
        <img src="@/assets/logo.png" class="logo" alt="" />
        <div class="input">
          <BaseInput placeholder="Наушники Apple..." />
        </div>

        <div class="icons">
          <IconButton image="/images/header_icons/2.svg" />
          <IconButton image="/images/header_icons/3.svg" />
          <IconButton image="/images/header_icons/1.svg" />
        </div>

        <div class="menu-button" @click="isOpenMenu = !isOpenMenu">
          <img :src="isOpenMenu ? '/images/icons/cross.svg' : '/images/icons/menu.svg'" alt="" />
        </div>
      </div>

      <div class="menu">
        <a v-for="(link, idx) in links" :key="idx" class="link" href="">{{ link }}</a>
      </div>
      <div class="input-mobile">
        <BaseInput placeholder="Наушники Apple..." />
      </div>
      <MobileMenu :is-show="isOpenMenu" />
    </header>
    <span class="empty"></span>
  </div>
</template>

<style scoped lang="scss">
.empty {
  display: none;
  @include respond-to(tablet) {
    display: block;
    height: $menu-padding-top-full;
  }
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: $width;
  padding-top: 25px;
  background: white;
  @include respond-to(desktop_m) {
    width: $m_width;
  }
  @include respond-to(tablet) {
    width: 100vw;
    padding: 25px 20px 23px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
}

.top-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.logo {
  width: 130px;
  object-fit: contain;
  @include respond-to(tablet) {
    width: 140px;
  }
}

.input {
  width: 784px;
  @include respond-to(desktop_m) {
    width: 600px;
  }
  @include respond-to(tablet) {
    display: none;
  }
}

.icons {
  display: flex;
  align-items: center;
  gap: 46px;
  @include respond-to(tablet) {
    display: none;
  }
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 25px;
  padding: 0 62px 0 74px;
  background: $black;
  border-radius: 10px;
  @include respond-to(desktop_m) {
    padding: 0 40px;
  }
  @include respond-to(tablet) {
    display: none;
  }
}

.link {
  color: $light-gray;
  transition: $base-transition;
  font-size: 16px;
  &:hover {
    color: $green;
  }
}

.menu-button {
  display: none;
  @include respond-to(tablet) {
    width: 48px;
    height: 48px;
    display: block;
  }
}

.input-mobile {
  display: none;
  @include respond-to(tablet) {
    display: block;
    width: 100%;
    margin-top: 28px;
  }
}
</style>
