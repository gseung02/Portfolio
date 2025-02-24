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
            <p>비밀번호 입력 및</p>
            <p>로그인 버튼 인터렉션</p>
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
          <p>기념일 계산기</p>
        </div>
      </div>
    </div>
    <div>
      <div class="text-box">
        <div class="box-head">
          <i class="fa-solid fa-x"></i>
        </div>
        <div class="box-content">
          <p>이미지 캐러셀 구현</p>
          <p>무한 루프</p>
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
          <p>Vue3에서 Chart.js 적용</p>
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
    width: 1280px;
    -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
    box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 1);
    background-color: var(--color-main);
    height: calc(864px - 110px);
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
    background-image: url(/public/images/Netflix02.jpg);
    background-size: cover;
    background-position: center;
  }
  .animation>div:nth-child(3){
    background-image: url(/public/images/datecalc.jpg);
    background-size: cover;
    background-position: center;
  }
  .animation>div:nth-child(6){
    background-image: url(/public/images/scroll.jpg);
    background-size: cover;
  }

  .animation>div:nth-child(8){
    background-image: url(/public/images/chart.jpg);
    background-size: cover;
    background-position: center;
  }
  .text-box{
    width: 300px;
  }
  .box-head{
    height: 40px;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: var(--color-hd2);
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