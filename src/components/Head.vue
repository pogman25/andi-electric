<template lang="pug">
    header
      .img
        img(src="../assets/logo.png" alt="andi-electric")
        h2 {{ msg }}
      span
        h1 Ремонт сварочных аппаратов
        p Позвоните нам:<br/>+7-950-65-46-565<br/>+7-987-65-43-221<br/><br/>или напишите:<br/>andi-electric@mail.ru
</template>

<script>
export default {
  name: 'vue-head',
  data () {
    return {
      msg: 'Всё сварится - мы поможем!'
    }
  }
}
</script>

<style lang="scss" scoped>

header {
  width: 90%;
  height: 550px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  color: #fff;
  box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.5);
  background: rgba(30, 30, 30, 0.5);
  position: relative;
  margin: 30px auto;

  &:before {
    content: '';
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    right:0;
    background: url('../assets/Lincoln.jpg') no-repeat center center;
    background-size: cover;
    z-index: -1;
  }

  h1 {
      transition: all 1s;
  }

  .img {
    background: rgba(0, 60, 80, 0.9);
    border-radius: 3px;
    padding: 0 10px;
    width: 33%;

    img {
      max-height: 150px;
      min-width: 150px;
    }
  }

  span {
    min-width: 200px;
    width: 33%;
    background: rgba(0, 60, 80, 0.9);
    border-radius: 3px;
    padding: 0 10px;
  }

}

.mainPage header {
    margin: 10px auto;
    height: 250px;
    transition: height 1s;
}

@media screen and (max-width: 950px){
  header {
      .img {
          width: calc(50% - 50px);
      }
      img{
          width: 75%;
      }
      span {
          width: calc(50% - 50px);
      }
  }
}

@media screen and (max-width: 460px) {
    header {
        .img, span {
            width: 90%;
        }
        img{
            width: 75%;
        }
    }
}
</style>
