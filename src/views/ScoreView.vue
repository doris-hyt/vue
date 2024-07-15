<!-- 在新建立的專案裡面一定要有script template -->
<script>
export default {
  // 資料
  data() {
    return {
      chinese: 0,
      math: 0,
      english: 0,
      pro1: 0,
      pro2: 0,
      result01: 0,
      result02: 0,
      result03: '',
      result04: ''
    }
  },
  //方法
  methods: {
    calcscore() {
      console.log('有點到');
      this.result01 = ((this.chinese + this.math + this.english + this.pro1 + this.pro2) / 5).toFixed(2);
      this.result02 = ((this.chinese * 0.4 + this.math * 0.6 + this.english * 0.4 + this.pro1 * 1.2 + this.pro2 * 0.8) / 5).toFixed(2);
      if (this.result02 >= 60) {
        this.result03 = '及格';
      } else {
        this.result03 = '不及格';
      }
      
      if (this.result02 >= 90) {
        console.log('A')
        this.result04 = 'A';
      } else if (this.result02 >= 80) {
        console.log('B')
        this.result04 = 'B';
      } else if (this.result02 >= 70) {
        console.log('C')
        this.result04 = 'C';
      } else if (this.result02 >= 60) {
        console.log('D');
        this.result04= 'D';
      } else {
        console.log('E');
        this.result04 = 'E';
      }
    }
  }
}
</script>
<template>
  <div class="calculator">
    <form class="form-style">
      <h2>成績計算機</h2>
      <label for="chinese" class="label-style"><span>請輸入國文成績</span>
        <input type="number" v-model="chinese">
      </label>

      <label for="english" class="label-style">
        <span>請輸入英文成績</span>
        <input type="number" v-model="english">
      </label>
      <label for="math" class="label-style">
        <span>請輸入數學成績</span>
        <input type="number" v-model="math">
      </label>

      <label for="pro1" class="label-style">
        <span>請輸入專業一成績</span>
        <input type="number" v-model="pro1">
      </label>

      <label for="pro2" class="label-style">
        <span>請輸入專業二成績</span>
        <input type="number" v-model="pro2">
      </label>
      <button class="score_btn" @click="calcscore" type="button">查詢成績</button>
    </form>
    <div class="score-list">
      <div>
        <span>原始平均成績:</span>
        <span class="result01">{{ result01 }}</span>
      </div>
      <div>
        <span>加權後的平均成績:</span>
        <span class="result02">{{ result02 }}</span>
      </div>
      <div>
        <span>成績是否有及格:</span>
        <span class="result03">{{ result03 }}</span>
      </div>
      <div>
        <span>平均成績等級:</span>
        <span class="result04">{{ result04 }}</span>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0px
}

.form-style {
  width: 330px;
  display: flex;
  flex-direction: column;
  background-color: rgb(138, 222, 233);
  padding: 10px;
  margin-bottom: 10px
}

h2 {
  margin: 0 auto 10px;
  color: darkblue
}

.label-style {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px
}

.score_btn {
  width: 200px;
  align-self: center;
  background-color: rgb(40, 73, 219);
  color: white
}

.score-list div {
  width: 350px;
  margin-bottom: 10px
}

.calculator {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
