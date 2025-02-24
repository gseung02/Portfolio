<template>
  <div class="header">
    <div class="header-content">
      <button @click="goHome">
        <i class="fa-solid fa-house"></i>
      </button>
      <p v-if="showText">PORTFOLIO</p>
      <div class="header-right">
        <i class="fa-solid fa-minus"></i>
        <div class="square"></div>
        <i class="fa-solid fa-x"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps ({
  showText: {
    type: Boolean,
    default: true
  }
});

const router = useRouter();

const goHome = () => {
  router.push('/');
}
</script>

<style scoped>
  h3{
    font-size: 26px;
  }
  .header{
    height: 80px;
    background-color: #B9FFB6;
    border: 3px solid #222;
    border-bottom: none;
  }
  .header-content{
    width: 95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-content>p{
    font-size: 40px;
  }
  button{
    width: 45px;
    height: 45px;
    background-color: #FFFDB6;
    border-radius: 50%;
    border: 3px solid #222;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    cursor: pointer;
  }
  .header-right{
    width: 100px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .header-right>.square{
    width: 15px;
    height: 15px;
    background-color: #fff;
    border: 3px solid #222;
  }
</style>