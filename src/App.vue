<template>
  <div id="app">
    <router-view v-if="isMobile" name="mobile"></router-view>
    <router-view v-else name="desktop"></router-view>
    <router-view/>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';


const isMobile = ref(false);

const mobileSize = () => {
  isMobile.value = window.innerWidth <= 768;
}

onMounted(() => {
  mobileSize();
  window.addEventListener('resize', mobileSize);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', mobileSize); 
});
</script>

<style scoped>
#app{
  width: 100%;
  height: 100%;
}
</style>