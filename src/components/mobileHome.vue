<template>
  <div id="mobileHome">
    <header>
      <button @click="goHome">
        <i class="fa-solid fa-house"></i>
      </button>
      <h1>PORTFOLIO</h1>
      <div class="header-right">
        <i class="fa-solid fa-minus"></i>
        <div class="square"></div>
        <i class="fa-solid fa-x"></i>
      </div>
    </header>
  </div>
</template>

<script setup>

</script>

<style scoped>
  header{
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #B9FFB6;
    border: 3px solid #222;
  }
  button{
    width: 35px;
    height: 35px;
    background-color: #FFFDB6;
    border-radius: 50%;
    border: 3px solid #222;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    cursor: pointer;
  }
  button>i{
    font-size: 1rem;
  }
  .header-right{
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .header-right>.square{
    width: 10px;
    height: 10px;
    background-color: #fff;
    border: 3px solid #222;
  }
</style>