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
  #menu{
    width: 250px;
    height: 100%;
    background-color: #fff;
    border-right: 3px solid #222;
    }
  .main-menu{
    width: 250px;
    height: 100px;
    border-bottom: 3px solid #222;
    cursor: pointer;
  }
  .main-menu:hover{
    background-color: var(--color-menu);
  }
  .main-menu:nth-child(2){
    position: relative;
  }
  .main-menu>p{
    font-size: 32px;
    text-align: center;
    line-height: 100px;
  }
  .sub-menu{
    width: 70%;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-58%);
  }
  .sub-menu>li{
    width: 200px;
    height: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #222;
    border-top: none;
    font-size: 1.1rem;
    cursor: pointer;
  }
  .sub-menu>li:hover{
    background-color: var(--color-menu);
  }
  

  /*** 반응형 */
  @media (max-width:1200px) {
    #menu{
      width: 100%;
      height: 40px;
      display: flex;
      border-right: none;
      z-index: 2;
    }
    #menu>ul{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .main-menu{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .main-menu:nth-child(1){
      border-right: 3px solid #222;
    }
    .main-menu:nth-child(2){
      position: relative;
    }
    .main-menu:hover>.sub-menu{
      display: block;
    }
    .main-menu>p{
      font-size: 1.3rem;
    }
    .sub-menu{
      display: none;
      background-color: #fff;
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width:900px) {
    .main-menu>li{
      font-size: 1.2rem;
    }
    .sub-menu>li{
      font-size: 1rem;
    }
  }

  @media (max-width:768px) {
  }
</style>