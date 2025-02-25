<template>
  <div id="website">
    <HeaderBar/>
    <main>
      <MenuComponent/>
      <div class="wrap">
        <ul class="category">
          <li @click="showComponent('Blog')"><p>coffee 블로그형 웹사이트</p></li>
          <li @click="showComponent('QuizApp')"><p>모바일 상식 퀴즈 App</p></li>
          <li @click="showComponent('Cart')"><p>Vue3 쇼핑몰</p></li>
        </ul>
        <div class="components">
          <Blog v-if="selectedComponent === 'Blog'"/>
          <QuizApp v-if="selectedComponent === 'QuizApp'"/>
          <Cart v-if="selectedComponent === 'Cart'"/>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderBar from './HeaderBar.vue';
import MenuComponent from './MenuComponent.vue';
import Blog from './Blog.vue';
import QuizApp from './QuizApp.vue';
import Cart from './Cart.vue';

const selectedComponent = ref('Blog'); //선택된 컴포넌트

const showComponent = (component) => {
  selectedComponent.value = component;
}
</script>

<style scoped>
#website{
  width: 80%;
  height: 90%;
}
main{
  height: calc(100% - 60px);
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  background-color: var(--color-main);
  border: 3px solid #222;
  display: flex;
}

.wrap{
  width: 100%;
  height: 100%;
}
.category{
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
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
.category>li:nth-last-child(1){
  border-right: none;
}
.category>li:hover{
  background-color: var(--color-hd2);
}
.category>li>p{
  font-size: 1.5rem;
}
.components{
  width: 100%;
  height: 100%;
}
</style>