<template>
  <div id="animation">
    <div class="wrap">
      <div></div>
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
    <div class="box">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  #animation{
    width: 100%;
    height: calc(100% - 108px);
    background-color: var(--color-main);
    }
  .wrap{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    }
  .wrap>div{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #222;
    border-right: 3px solid #222;
  }
  .wrap>div:nth-child(1){
    background-image: url(/public/images/grid.jpg);
    background-size: cover;
    background-position: center;
  }
  .wrap>div:nth-child(3){
    background-image: url(/public/images/parallax.jpg);
    background-size: cover;
    background-position: center;
  }
  .wrap>div:nth-child(4){
    border-right: none;
  }
  .wrap>div:nth-child(6){
    background-image: url(/public/images/scrollAnimation.jpg);
    background-size: cover;
    background-position: center;
  }

  .wrap>div:nth-child(8){
    background-image: url(/public/images/progressBar.jpg);
    background-size: cover;
    background-position: center;
    border-right: none;
  }
  .text-box{
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .box-head{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: var(--color-hd2);
    padding: 0 20px;
    border: 3px solid #222;
  }
  .box-content{
    width: 100%;
    height: 120px;
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

  .box{
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  padding-right: 10px;
  background-color: var( --color-box);
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