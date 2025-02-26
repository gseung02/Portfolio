<template>
  <div id="home">
    <HeaderBar :showText="false"/>
    <main>
      <div class="text">
        <h1>PORTFOLIO</h1>
        <p>안녕하세요 프론트엔드 개발자 정지승입니다</p>
      </div>
      <div class="imgSlider">
        <div class="slider" :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)' }">
          <img v-for="(image, index) in images" :key="index" :src="baceUrl + image" alt="Slider Image" class="slider-image" />
        </div>
        <button @click="prevSlide" class="prev-button">◀</button>
        <button @click="nextSlide" class="next-button">▶</button>
      </div>
      <div class="btn" @click="openAboutMe">
        <p>▶</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import HeaderBar from './HeaderBar.vue';

const bace = process.env.NODE_ENV === 'production' ? '/Portfolio/':'/';
const baceUrl = ref(bace); 
const images = ref([
  `images/Tesla.jpg`,
  `images/Airbnb.jpg`,
  `images/Netflix.jpg`,
  `images/Momentom.jpg`,
  `images/blog.jpg`,
  `images/Cart.jpg`,
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


const openAboutMe = () => {
  const text = '/aboutme';
  const bace = process.env.NODE_ENV === 'production' ? '/Portfolio/':'/'
  const url = window.location.origin + bace + '#' + text;
  window.open(url, '_blank');
}
</script>

<style scoped>
#home{
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.text{
  text-align: center;
}
.text>h1{
  font-size: 8rem;
}
.text>p{
  margin-top: 30px;
  font-size: 1.5rem;
}

.imgSlider {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 10px 0;
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

.btn{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-hd1);
  border: 3px solid #222;
  padding: 10px 30px;
  border-radius: 10%;
  cursor: pointer;
}
.btn>p{
  font-size: 2rem;
}

/* 반응형 디자인을 위한 미디어 쿼리 */
@media (max-width: 1200px) {
  #home {
    width: 90%;
  }

  .text > h1 {
    font-size: 6rem;
  }

  .text > p {
    font-size: 1.2rem;
  }

  .imgSlider {
    max-width: 600px;
  }

  .btn > p {
    font-size: 1.8rem;
  }
}

@media (max-width: 900px) {
  #home {
    width: 90%;
  }

  .text > h1 {
    font-size: 4rem;
  }

  .text > p {
    font-size: 1rem;
  }

  .imgSlider {
    max-width: 500px;
  }

  .prev-button,
  .next-button{
    padding: 5px;
    font-size: 1.5rem;
  }

  .btn > p {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .text > h1 {
    font-size: 2.5rem;
  }

  .text > p {
    font-size: 0.9rem;
  }

  .imgSlider {
    max-width: 100%;
  }

  .btn > p {
    font-size: 1.5rem;
  }
}
</style>