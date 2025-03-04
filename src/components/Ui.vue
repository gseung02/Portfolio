<template>
  <div id="ui">
    <div class="wrap">
      <div class="imgSlider">
        <div class="slider" :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)' }">
          <img v-for="(image, index) in images" :key="index" :src="baceUrl + image" alt="Slider Image" class="slider-image" />
        </div>
        <!-- <button @click="prevSlide" class="prev-button">◀</button>
        <button @click="nextSlide" class="next-button">▶</button> -->
      </div>
      <div class="phone">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const bace = process.env.NODE_ENV === 'production' ? '/Portfolio/':'/';
const baceUrl = ref(bace); 
const images = ref([
  'images/x-masMarket.jpg',
  'images/cardMenu.jpg',
  'images/campaign.jpg',
  'images/pscard.jpg',
]);

const currentIndex = ref(0); // 현재 이미지 인덱스

// 페이지 로드 후 자동 슬라이드 전환
onMounted(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 2000);

  // 컴포넌트가 언마운트될 때 interval을 정리
  onBeforeUnmount(() => {
    clearInterval(interval);
  });
});


// 이전 슬라이드로 이동
const prevSlide = () => {
  currentIndex.value = (currentIndex.value === 0) ? images.value.length - 1 : currentIndex.value - 1;
};

// 다음 슬라이드로 이동
const nextSlide = () => {
  currentIndex.value = (currentIndex.value === images.value.length - 1) ? 0 : currentIndex.value + 1;
};

</script>

<style scoped>
#ui{
  width: 100%;
  height: calc(100% - 58px);
  background-color: var(--color-main);
}
.wrap{
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 3px solid #222;
}
.imgSlider,
.phone{
  flex: 1;
  height: 100%;
}
.imgSlider {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 70px;
  overflow: hidden;
}
.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.slider-image {
  width: 100%;
  height: auto;
}
.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 2rem;
}
.prev-button {
  left: 10px;
}
.next-button {
  right: 10px;
}

.phone{
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-left: 3px solid #222;
}
.left,
.right{
  width: 270px;
  height: 550px;
  border: 5px solid #222;
  border-radius: 10px;
}
.left{
  background-image: url(/public/images/instagram.jpg);
  background-size: cover;
}
.right{
  background-image: url(/public/images/coffee.jpg);
  background-size: cover;
}
.box{
  height: 48px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  padding-right: 10px;
  background-color: var( --color-box);
  border-right: 3px solid #222;
  border-bottom: 3px solid #222;
}
.circle{
  width: 20px;
  height: 20px;
  border: 2px solid #222;
  border-radius: 50%;
}
.circle:nth-child(1){
  background-color: var(--color-bg);
}
.circle:nth-child(2){
  background-color: var(--color-menu);
}
.circle:nth-child(3){
  background-color: var(--color-hd2);
}
</style>