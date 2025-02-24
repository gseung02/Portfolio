<template>
  <div id="pracical">
    <HeaderBar/>
    <main>
      <MenuComponent/>
      <div>
        <ul class="category">
          <li @click ="showComponent('Ui')"><p>UI/UX</p></li>
          <li @click ="showComponent('Animation')"><p>Animation</p></li>
          <li @click ="showComponent('Java')"><p>JavaScript</p></li>
        </ul>
        <div class="components">
          <Ui v-if="selectedComponent === 'Ui'"/>
          <Animation v-if="selectedComponent === 'Animation'"/>
          <Java v-if="selectedComponent === 'Java'"/>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderBar from './HeaderBar.vue';
import MenuComponent from './MenuComponent.vue';
import Ui from './Ui.vue';
import Animation from './Animation.vue';
import Java from './Java.vue';


const selectedComponent = ref('Ui'); //선택된 컴포넌트

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