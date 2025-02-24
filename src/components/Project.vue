<template>
  <div id="project">
    <HeaderBar/>
    <main>
      <MenuComponent/>
      <Clone/>
    </main>
  </div>
</template>

<script setup>
import Clone from './Clone.vue';
import HeaderBar from './HeaderBar.vue';
import MenuComponent from './MenuComponent.vue';

</script>

<style scoped>
main{
  display: flex;
}
</style>