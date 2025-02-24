<template>
  <div id="clone">
    <HeaderBar/>
    <main>
      <MenuComponent/>
      <div>
        <ul class="category">
          <li @click="showComponent('Tesla')"><p>Tesla</p></li>
          <li @click="showComponent('Airbnb')"><p>Airbnb</p></li>
          <li @click="showComponent('Netflix')"><p>Netflix</p></li>
          <li @click="showComponent('Momentom')"><p>Momentom</p></li>
      </ul>
      <div class="components">
        <Tesla v-if="selectedComponent === 'Tesla'"/>
        <Airbnb v-if="selectedComponent === 'Airbnb'"/>
        <Netflix v-if="selectedComponent === 'Netflix'"/>
        <Momentom v-if="selectedComponent === 'Momentom'"/>
      </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderBar from './HeaderBar.vue';
import MenuComponent from './MenuComponent.vue';
import Tesla from './Tesla.vue';
import Airbnb from './Airbnb.vue';
import Netflix from './Netflix.vue';
import Momentom from './Momentom.vue';

const selectedComponent = ref('Tesla'); //선택된 컴포넌트

const showComponent = (component) => {
  selectedComponent.value = component;
}

</script>

<style scoped>
main{
  display: flex;
}
main>div{
  width: calc(100% - 250px);
}
.category{
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid #222;
  border-bottom: 3px solid #222;
}
.category>li{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
  border-right: 3px solid #222;
  cursor: pointer;
}
.category>li:hover{
  background-color: #FFFDB6;
}
.category>li>p{
  font-size: 24px;
}
</style>