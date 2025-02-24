<template>
  <div class="ui">
    <div></div>
    <div></div>
    <div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.ui{
  height: calc(864px - 70px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
}
.ui>div{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 3px solid #222;
  border-bottom: 3px solid #222;
}
.ui>div:nth-child(1){
  background-image: url(/public/images/x-mas\ market\ 04.jpg);
  background-size: cover;
}
.ui>div:nth-child(2){
  background-image: url(/public/images/cardMenu.jpg);
  background-size: cover;
}
.ui>div:nth-child(3){
  grid-row: span 2;
  grid-column: span 2;
  flex-direction: row !important;
  justify-content: space-around;
}
.ui>div:nth-child(4){
  grid-row: span 2;
  background-image: url(/public/images/campaign.jpg);
  background-size: cover;
}
.ui>div:nth-child(5){
  background-image: url(/public/images/pscard.jpg);
  background-size: cover;
  background-color: #B9FFB6;
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
</style>