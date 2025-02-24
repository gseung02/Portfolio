<template>
  <nav id="menu">
    <ul>
      <li class="main-menu">
        <p @click="goAboutMe">About Me</p>
      </li>
      <li class="main-menu">
        <p @click="goProject">Project</p>
        <ul class="sub-menu">
          <li @click="goProject">Clone Website Publishing</li>
          <li @click="goWebsite">Website Publishing</li>
          <li @click="goPracical">Pracical Publishing</li>
        </ul>
      </li>
    </ul>
</nav>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goProject = () => {
  router.push('/clone');
}
const goAboutMe = () => {
  router.push('/aboutme');
}
const goWebsite = () => {
  router.push('/website');
}
const goPracical = () => {
  router.push('/pracical');
}
</script>

<style scoped>
  nav{
    width: 250px;
    height: 864px;
    background-color: #FFFDB6;
    border: 3px solid #222;
  }
  .main-menu{
    width: 250px;
    height: 100px;
    border-bottom: 3px solid #222;
    cursor: pointer;
  }
  .main-menu:hover{
    background-color: #fff;
  }
  .main-menu>p{
    font-size: 32px;
    text-align: center;
    line-height: 100px;
    margin: 0;
  }
  .main-menu:nth-child(2):hover .sub-menu{
    display: block;
  }
  .sub-menu{
    display: none;
    width: 200px;
    margin: 0 auto;
  }
  .sub-menu>li{
    width: 200px;
    height: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 3px solid #222;
    
    font-size: 18px;
    cursor: pointer;
  }
  .sub-menu>li:hover{
    background-color: #FFFDB6;
  }
  .sub-menu>li:nth-child(2),
  .sub-menu>li:nth-child(3){
    border-top: none;
  }
</style>