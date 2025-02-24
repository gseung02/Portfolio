<template>
  <div id="aboutme">
    <HeaderBar/>
    <main>
      <MenuComponent/>
      <div class="content">
        <div class="skill">
          <div class="skill-box">
            <h3>스킬</h3>
            <div class="skill-name">
              <div class="left">
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript</p>
              </div>
              <div class="right">
                <p>React</p>
                <p>Vue3</p>
                <p>Ps & Ai</p>
              </div>
            </div>
          </div>
          <div class="skill-icon">
            <div><img src="/public/images/icon-html5.png" alt="html로고이미지"></div>
            <div><img src="/public/images/icon-css3.png" alt="css로고이미지"></div>
            <div><img src="/public/images/icon-js.png" alt="js로고이미지"></div>
            <div><img src="/public/images/icon-react.png" alt="react로고이미지"></div>
            <div><img src="/public/images/icon-vue.png" alt="vue로고이미지"></div>
            <div><img src="/public/images/icon-ps.png" alt="ps로고이미지"></div>
            <div><img src="/public/images/icon-ai.png" alt="ai로고이미지"></div>
          </div>
        </div>
          <div class="img">
            <img src="/public/images/img02.png" alt="일러스트이미지2">
          </div>
          <div class="text">
            <div class="text-box">
              <div class="box-head">
                <h3>소개</h3>
                <i class="fa-solid fa-x"></i>
              </div>
              <div class="box-content">
                <p>이름: 정지승</p>
                <p>이메일: asdf1324@naver.com</p>
                <p>핸드폰: 010 0000 0000</p>
              </div>
            </div>
            <div class="text-box">
              <div class="box-head">
                <h3>학력</h3>
                <i class="fa-solid fa-x"></i>
              </div>
              <div class="box-content">
                <p>MBC 아카데미 리액트 웹퍼블리싱 프론트 엔드 과정 수료</p>
              </div>
            </div>
          </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import HeaderBar from './HeaderBar.vue';
import MenuComponent from './MenuComponent.vue';
</script>

<style scoped>
  main{
    display: flex;
  }
  .content{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
    width: calc(1960px - 250px);
    height: 100%;
  }
  .skill,
  .img{
    border: 3px solid #222;
    border-left: none;
  }
  .skill-box{
    width: 500px;
    margin: 20px auto;
  }
  .skill>.skill-box>h3{
    margin-bottom: 30px;
  }
  .skill-name{
    display: flex;
  }
  .left,
  .right{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
  .left>p,
  .right>p{
    width: 300px;
    font-size: 24px;
  }
  .skill-icon{
    width: 650px;
    height: 200px;
    margin-top: 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row: 1fr 1fr;
  }
  .skill-icon>div,
  .skill-icon>div>img{
    width: 80px;
    height: 80px;
  }
  .img{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img>img{
    width: 400px;
    height: 400px;
  }
  .text{
    grid-column: span 2;
    border-right: 3px solid #222;
    border-bottom: 3px solid #222;
    background-color: #B9FFB6;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .text-box{
    width: 500px;
  }
  .box-head{
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFDB6;
    padding: 0 20px;
    border: 3px solid #222;
  }
  .box-content{
    height: 250px;
    background-color: #fff;
    border: 3px solid #222;
    border-top: none;
    padding: 20px;
  }
  .box-content>p{
    line-height: 30px;
  }
</style>