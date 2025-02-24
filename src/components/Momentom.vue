<template>
  <div id="momentom">
    <div class="contents">
      <div class="img"></div>
      <div class="prodection">
        <div class="pro-box">
          <h3>제작</h3>
          <p>UI 디자인 방식: Figma를 이용한 화면 분석 후, 클론 코딩 진행</p>
          <p>제작에 사용된 스킬: HTML5, CSS3, ES6, OpenWheather API 연동, LocalStorage</p>
          <p>레이아웃 제작 방식: Position을 활용한 구성</p>
          <p>플러그인: Axios를 이용한 API 데이터 요청 및 응답 처리</p>
          <p>제작기간: 2일</p>
          <p>제작 참여율: 100%(개인 프로젝트)</p>
          <p>기획, UI디자인, 개발, 배포까지 전 과정 직접 수행</p>
          <p>배포방식: GitHub</p>
          <p>URL 링크: <a href="https://gseung02.github.io/momentom/">https://gseung02.github.io/momentom/</a></p>
        </div>
      </div>
      <div class="des">
        <div class="des-box">
          <h3>개인 맞춤 대시보드 웹페이지</h3>
          <p>프로젝트 설명: 사용자는 현재시간, 랜덤명언, 날씨정보, 할일목록, 구글검색 기능을 사용할 수 있으며, 로컬 스토리지를 활용한 데이터 저장 및 사용자 맞춤형으로 개발하였습니다.</p>
        </div>
        <div class="icon-box">
          <img src="/public/images/icon-html5.png" alt="html로고이미지">
          <img src="/public/images/icon-css3.png" alt="css로고이미지">
          <img src="/public/images/icon-js.png" alt="js로고이미지">
          <img src="/public/images/icon-react.png" alt="react로고이미지">
          <!-- <img src="/public/images/icon-vue.png" alt="vue로고이미지"> -->
          <img src="/public/images/icon-ps.png" alt="ps로고이미지">
          <!-- <img src="/public/images/icon-ai.png" alt="ai로고이미지"> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
#momentom{
  width: 1280px;
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
  background-color: var(--color-main);
}
.contents{
  height: calc(864px - 110px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
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
  background-image: url(/public/images/Momentom.jpg);
  background-size: cover;
  background-position: center;
}
.prodection{
  grid-row: span 2;
}
.pro-box,
.des-box{
  width: 80%;
}
.pro-box>h3,
.des-box>h3{
  font-size: 2rem;
  margin-bottom: 20px;
}
.pro-box>p,
.des-box>p{
  font-size: 1.2rem;
  word-break: keep-all;
}
.pro-box>p,
.des-box>p{
  line-height: 50px;
}
.icon-box{
  padding-top: 20px;
}
.icon-box>img{
  width: 50px;
  height: 50px;
  padding-right: 10px;
}
</style>