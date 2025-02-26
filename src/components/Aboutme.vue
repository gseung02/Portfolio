<template>
  <div id="aboutme">
    <HeaderBar/>
    <main>
      <MenuComponent/>
      <div class="grid">
        <div class="skill">
          <div class="skill-box">
            <div class="skill-header">
              <p>스킬</p>
            </div>
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
        </div>
        <div></div>
        <div class="text">
          <div class="text-box">
            <div class="box-header">
              <p>소개</p>
              <i class="fa-solid fa-x"></i>
            </div>
            <div class="box-content">
              <p>이름: 정지승</p>
              <p>이메일: asdf1324@naver.com</p>
              <p>핸드폰: 010 0000 0000</p>
            </div>
          </div>
          <div class="text-box">
            <div class="box-header">
              <p>학력</p>
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
#aboutme{
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
}


.grid{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.grid>div{
  border-right: 3px solid #222;
  border-bottom: 3px solid #222;
}
.grid>div:nth-child(2){
  border-right: none;
  background-image: url(/images/img02.jpg);
  background-size: cover;
  background-position: center;
}
.grid>div:nth-child(3){
  grid-column: span 2;
  border: none;
}

.skill{
  display: flex;
  justify-content: center;
  align-items: center;
}
.skill-box{
  width: 50%;
}
.skill-header>p{
  font-size: 1.3rem;
}
.skill-name{
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left,
.right{
  line-height: 30px;
}
.skill-icon{
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
}
.skill-icon>div>img{
  width: 50px;
  height: 50px;
}


.text{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.text-box{
  width: 35%;
  height: 50%;
  border: 3px solid #222;
  background-color: #fff;
}
.box-header{
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 3px solid #222;
  background-color: var(--color-hd2);
}
.box-header>p{
  font-size: 1.2rem;
}
.box-content{ 
  width: 80%;
  height: calc(100% - 33px);
  margin: 15px auto;
  text-align: left;
  line-height: 25px;
}

/*** 반응형 */
@media (max-width:1200px) {
    main{
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width:900px) {
    
  }

  @media (max-width:768px) {
    
  }
</style>