<template>
  <div id="tesla">
    <div class="contents">
      <div class="img"></div>
      <div class="prodection">
        <div class="pro-box">
          <h3>제작</h3>
          <p>UI 디자인 방식: Figma를 이용한 화면 분석 후, 클론 코딩 진행</p>
          <p>제작에 사용된 스킬: HTML5, CSS3</p>
          <p>레이아웃 제작 방식: Flexbox를 활용한 구성</p>
          <p>플러그인: FontAsome, Google Font</p>
          <p>제작기간: 2일</p>
          <p>제작 참여율: 100%(개인 프로젝트)</p>
          <p>기획, UI디자인, 개발, 배포까지 전 과정 직접 수행</p>
          <p>배포방식: GitHub</p>
          <p>URL 링크: <a href="https://gseung02.github.io/TESLA/index.html">https://gseung02.github.io/TESLA/index.html</a></p>
        </div>
      </div>
      <div class="des">
        <div class="des-box">
          <h3>HTML5 & CSS3 웹 표준 기반 구현</h3>
          <p>프로젝트 설명: 실제 Tesla 웹사이트 레이아웃과 애니메이션을 반영하여 반응형 디자인, 웹 표준 및 접근성 준수를 중심으로 개발하였습니다.</p>
        </div>
        <div class="icon-box">
          <img src="/public/images/icon-html5.png" alt="html로고이미지">
          <img src="/public/images/icon-css3.png" alt="css로고이미지">
          <!-- <img src="/public/images/icon-js.png" alt="js로고이미지">
          <img src="/public/images/icon-react.png" alt="react로고이미지">
          <img src="/public/images/icon-vue.png" alt="vue로고이미지">
          <img src="/public/images/icon-ps.png" alt="ps로고이미지">
          <img src="/public/images/icon-ai.png" alt="ai로고이미지"> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
#tesla{
  width: 100%;
  height: calc(100% - 60px);
  background-color: var(--color-main);
}
.contents{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.contents>div{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 3px solid #222;
  border-bottom: 3px solid #222;
}
.img{
  background-image: url(/public/images/Tesla.jpg);
  background-size: cover;
  background-position: center;
}
.contents>div:nth-child(2){
  grid-row: span 2;
  border-right: none;
}
.pro-box,
.des-box{
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
}
.pro-box>h3,
.des-box>h3{
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.pro-box>p,
.des-box>p{
  font-size: 1rem;
  word-break: keep-all;
}
.des-box>p{
  line-height: 30px;
}
.icon-box{
  margin-top: 20px;
}
.icon-box>img{
  width: 50px;
  height: 50px;
  padding-right: 10px;
}
/*** 반응형 */
@media (max-width:1200px) {
    #tesla{
      height: auto;
    }
    .contents{
      display: contents;
    }
  }

  @media (max-width:900px) {
    
  }

  @media (max-width:768px) {
    
  }
</style>