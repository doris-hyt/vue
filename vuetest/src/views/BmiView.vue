<!-- 在新建立的專案裡面一定要有script template -->
<script>
export default {
  // 資料
  data() {
    return {
      peopleheight: 0,
      peopleweight: 0,
      bmi: -1,
    }
  },
  //方法
  methods: {
    calculatebmi() {
      console.log('有點到');
      this.peopleheight = this.peopleheight / 100;
      this.bmi = (this.peopleweight / (this.peopleheight ** 2)).toFixed(2);
      console.log(this.bmi)
    },
    clearbmi(){
      this.peopleheight=0;
      this.peopleweight=0;
      this.bmi = -1;
    }
  }
}
</script>
<template>
  <div class="calculator">
    <form class="form-style">
      <h2>BMI 計算機</h2>
      <label for="height" class="label-style">
        <span>請輸入身高(cm)</span>
        <input type="text" id="height" v-model="peopleheight">
      </label>
      <label for="height" class="label-style">
        <span>請輸入體重(kg)</span>
        <input type="text" id="weight" v-model="peopleweight">
      </label>
      <div class="btn-section">
        <button type="button" class="bmi_btn" @click="calculatebmi">計算BMI値</button>
        <button type="button" class="bmi_btn" @click="clearbmi">清除</button>
      </div>
    </form>
    <div class="bmi_section">
      <span>你的BMI値是:</span>
      <span class="bmi_show">{{ bmi }}</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>BMI數值</th>
          <th>健康狀況</th>
        </tr>
      </thead>
      <tbody>
        <!-- 3元判斷式 -->
        <!-- condition ? exprIfTrue : exprIfFalse -->
        <!-- condition ->判斷條件 -->
        <!-- exprIfTrue -->
        <!-- exprIfFalse -->

        <tr v-if="0 <= bmi && bmi < 18.5">
          <!-- <td :class=" 0 <= bmi && bmi < 18.5?"blue":"" ">BMI < 18.5</td> -->
          <!-- <td class="blue">「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！</td> -->

          <td class="blue">BMI < 18.5</td>
          <td class="blue">「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！</td>
        </tr>
        <tr v-else>
          <td>BMI < 18.5</td>
          <td>「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！</td>
        </tr>
        <tr v-if="18.5 <= bmi && bmi < 24">
          <td class="green01">18.5 ≤ BMI < 24</td>
          <td class="green01">恭喜！「健康體重」，要繼續保持！</td>
        </tr>
        <tr v-else>
          <td>18.5 ≤ BMI < 24</td>
          <td>恭喜！「健康體重」，要繼續保持！</td>
        </tr>
        <tr v-if="24 <= bmi && bmi < 27">
          <td class="orange">24 ≤ BMI < 27</td>
          <td class="orange">「體重過重」了，要小心囉，趕快力行「健康體重管理」！</td>
        </tr>
        <tr v-else>
          <td>24 ≤ BMI < 27</td>
          <td>「體重過重」了，要小心囉，趕快力行「健康體重管理」！</td>
        </tr>
        <tr v-if="27 <= bmi">
          <td class="red">BMI ≥ 27</td>
          <td class="red">啊～「肥胖」，需要立刻力行「健康體重管理」囉！</td>
        </tr>
        <tr v-else>
          <td>BMI ≥ 27</td>
          <td>啊～「肥胖」，需要立刻力行「健康體重管理」囉！</td>
        </tr>
      </tbody>
    </table>

  </div>

  <!-- *for和if不能共同使用 -->
  <!-- v-modal 值會連動-->
  <!-- <input type="text" :value="name" @input="event =>name=event.target.value"> -->
  <input type="text" v-model="name">
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
* {
  margin: 0px
}
.form-style {
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: aqua;
  padding: 15px;
  margin-bottom: 10px
}

.form-style h2 {
  text-align: center;
  margin-bottom: 10px;
}

.label-style {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px
}

table,
th,
td {
  border: 1px solid;
  border-collapse: collapse;
  padding: 5px;
  width: auto;
}

table th {
  background-color: cornflowerblue;
}

.bmi_btn {
  width: 100px;
  align-self: center;
  background-color: darkslateblue;
  color: antiquewhite;
  font-weight: bold;
  border: 0px;
  border-radius: 25px;
}

.bmi_section {
  margin: 10px 0px;
}

.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.bmi_section {
  width: 300px;
}

.btn-section {
  display: flex;
  justify-content:space-around
}

.blue {
  background-color: #6A6AFF
}

.green01 {
  background-color: #7bd1ad
}

.orange {
  background-color: #F75000;
}

.red {
  background-color: #EA0000
}
</style>
