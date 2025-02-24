<template>
  <div class="animation">
    <div></div>
    <div>
      <div>
        <div class="text-box">
          <div class="box-head">
            <i class="fa-solid fa-x"></i>
          </div>
          <div class="box-content">
            <p>인터랙티브 웹 구현</p>
            <p>Grid 레이아웃 적용</p>
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <div>
      <div class="text-box">
        <div class="box-head">
          <i class="fa-solid fa-x"></i>
        </div>
        <div class="box-content">
          <p>Prallax 스크롤링</p>
        </div>
      </div>
    </div>
    <div>
      <div class="text-box">
        <div class="box-head">
          <i class="fa-solid fa-x"></i>
        </div>
        <div class="box-content">
          <p>인터랙티브 웹 구현</p>
          <p>스크롤 애니메이션</p>
        </div>
      </div>
    </div>
    <div></div>
    <div>
      <div class="text-box">
        <div class="box-head">
          <i class="fa-solid fa-x"></i>
        </div>
        <div class="box-content">
          <p>프로그래스 바</p>
          <p>애니메이션</p>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .animation{
    height: calc(864px - 70px);
    display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  }
  .animation>div{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #222;
    border-right: 3px solid #222;
  }
  .animation>div:nth-child(1){
    background-image: url(/public/images/grid.jpg);
    background-size: cover;
  }
  .animation>div:nth-child(3){
    background-image: url(/public/images/parallax.jpg);
    background-size: cover;
  }
  .animation>div:nth-child(6){
    background-image: url(/public/images/scrollAnimation.jpg);
    background-size: cover;
  }

  .animation>div:nth-child(8){
    background-image: url(/public/images/progressBar.jpg);
    background-size: cover;
  }
  .text-box{
    width: 300px;
  }
  .box-head{
    height: 40px;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: #FFFDB6;
    padding: 0 20px;
    border: 3px solid #222;
  }
  .box-content{
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background-color: #fff;
    border: 3px solid #222;
    border-top: none;
    padding: 20px;
  }
</style>