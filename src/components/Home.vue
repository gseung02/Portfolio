<template>
  <div id="home">
    <HeaderBar :showText="false"/>
    <main >
      <div class="hello">
        <h2>Hello!</h2>
      </div>
      <div class="img">
        <img src="/public/images/img01.png" alt="일러스트1이미지">
      </div>
      <div class="year">
        <h2>2024</h2>
        <h2>~</h2>
        <h2>2025</h2>
      </div>
    <div class="down" @click="openAboutMe">
      <h1>PORTFOLIO</h1>
      <p>>></p>
    </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import HeaderBar from './HeaderBar.vue';

const router = useRouter();

const openAboutMe = () => {
  const resolved = router.resolve('/aboutme');
  const url = window.location.origin + resolved.href; //전체 경로를 가져옴(/#/)
  window.open(url, '_blank');
}
</script>

<style scoped>
main{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
}
.hello,
.img,
.year{
  border-top: 3px solid #222;
  border-right: 3px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hello{
  border-left: 3px solid #222;
}
.hello>h2{
  font-size: 9rem;
}
.img>img{
  width: 400px;
  height: 400px;
}
.year{
  display: flex;
  flex-direction: column;
  background-color: #FFFDB6;
}
.year>h2{
  font-size: 6rem;
}
.down{
  grid-column: span 3;
  background-color: #B9FFB6;
  border: 3px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7rem;
  cursor: pointer;
  position: relative;
}
.down>p{
  position: absolute;
  top: 10px;
  right: 30px;
}
</style>