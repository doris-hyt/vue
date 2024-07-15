<!-- 在新建立的專案裡面一定要有script template -->
<script>
export default {
  // 資料
  data() {
    return {
      disc1: 0,
      disc2: 0,
      disc3: 0,
      item: "",
      array: [],
    }
  },
  //方法
  methods: {
    play() {
      for (let i = 1; i < 21; i++) {
        this.disc1 = Math.floor(Math.random() * 6) + 1
        this.disc2 = Math.floor(Math.random() * 6) + 1
        this.disc3 = Math.floor(Math.random() * 6) + 1;
        if (this.disc1 == this.disc2 && this.disc2 == this.disc3) {
          this.item = `當擲出第${i}次時,因為擲出${this.disc1},${this.disc2},${this.disc3}三個數字一樣，遊戲提前結束!!`
          console.log(this.item);
          this.array.push(this.item);
          break
        } else {
          this.item = `第${i}次:` + this.disc1 + ',' + this.disc2 + ',' + this.disc3 ;
          console.log(this.item)
          this.array.push(this.item)
        }
      }
    },
    clear(){
      this.array=[]
    }
  }
}
</script>
<template>
  <div class="container">
    <div class="btn-section">
      <button class="btn" type="button" @click="play">擲骰子</button>
      <button class="btn" type="button" @click="clear">清除</button>
    </div>
    <div class="show">
      <div v-for="item in array">{{ item }}</div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.container{
   min-height: 100vh;
   display:flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;

}
.btn-section{
  width:80%;
  height:40px;
  margin:0px auto 30px;
  display:flex;
  justify-content: space-evenly;
}
.btn{
  width:100px;
  background-color: rgb(31, 31, 138);
  height:40px;
  color:white;
  --bs-btn-hover-border-color:rgb(119, 119, 228)
  
}
.btn:hover{
  background-color: rgb(128, 128, 197)

}
.show{
  height:500px;
}
</style>
