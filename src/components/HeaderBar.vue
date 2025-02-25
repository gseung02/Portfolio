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
  .header{
    height: 60px;
    background-color: var(--color-hd1);
    border: 3px solid #222;
    border-bottom: none;
    -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
    box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
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
    background-color: var(--color-main);
    border-radius: 50%;
    border: 2px solid #222;
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
    width: 12px;
    height: 12px;
    background-color: var(--color-hd1);
    border: 2px solid #222;
  }
</style>