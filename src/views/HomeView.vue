<script>
export default {
  // 資料
  data() {
    return {
      num: 0,
      name: 'Nero',
      id: 'A123456789',
      array: ['a', 'b', 'c', 2],
      bool: true,
      inputType: 'text',
      changeColor: "",
      showDiv: true,
      array01: ['0','0','0','0','1','1','1']
    }
  },
  //方法
  methods: {
    plus(item) {
      console.log(item)
      //要操控變數
      console.log('有點到我');
      console.log(this.name)
      //只要跨不同的東西面都要加this
      //只要是裡面要拿其他的東西(方法要去拿變數的話)，前面要加this
      this.num = this.num + 5
      console.log(this.name)
    },
    showhide() {
      if (this.inputType == 'text') {
        this.inputType = 'password'
      } else {
        this.inputType = 'text'
      }
      console.log('有點擊到')
    },
    switchColor() {
      console.log('有點到')
      if (this.changeColor == "red") {
        this.changeColor = ""
      } else {
        this.changeColor = "red"
      }
    }

  }

}
</script>

<!-- <script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script> -->

<template>
  <main>
    <!-- 放變數(2個花括號放變數名稱) -->
    {{ name }}
    {{ id }}
    {{ array }}
    {{ bool }}
    <!--v-on-->
    <!-- 監聽事件，裡面可以放運算式或方法 -->
    <!-- 寫法上可以改成 v-on:click => @click -->
    <button type="button" v-on:click="num++">{{ num }}</button>
    <button type="button" @click="plus('aaa')">{{ num }}</button>
    <!--v-bind ->要操控的網頁元素(屬性的值)-->
    <!-- v-bind綁定任一屬性 -->
    <!-- 1.使用方法1 v-bind:屬性名稱-->
    <!-- v-bind另一種寫法 v-bind => :class(去掉前面的v-bind)-->
    <input type="password">
    <!-- 原本的字串會顯示出來 -->
    <input v-bind:type="inputType" name="" id="">
    <button type="button" v-on:click="showhide">顯示/隱藏</button>
    <!-- 1.按鈕綁點擊事件
    2.寫方法修改
    3.更改input的type -->
    <!-- 要先將屬性css寫好，並用變數宣告，放入v-bind:class -->
    <div class="box" v-bind:class="changeColor" v-on:click="switchColor"></div>
    <!-- JS IF 判斷式 -->
    <!-- IF -->
    <div v-if="num == 1" class="box"></div>
    <div v-else-if="num == 2" class="box"></div>
    <div v-else class="box red"></div>
    <!-- if如果要加elseif，if要連起來，中間不能加任何東西 -->


    <!-- vue for迴圈 -->
     <div v-for="item in array01" :key="item.text">
      <div v-if="item==0">{{ item }}</div>
     </div>

    <!-- <TheWelcome /> -->
    Monday
  </main>
</template>
<style scope>
.box {
  width: 100px;
  height: 100px;
  background-color: blue
}

.red {
  background-color: red
}
</style>
