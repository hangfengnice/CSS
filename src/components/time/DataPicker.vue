<template>
  <div v-click-outside>
    <div class="container container1 text-center" >
    <input type="text" :value="formatDate" @focus="focus" @blur="blur">
    <span class='pull-right' >今天</span>
    </div>
    <div class=" pannel">
      <div class="pannel-nav">
        <!-- <span>&lt;</span> -->
        <span @click='prevMonth'>&lt;&lt;</span>
        <span>{{time.year}} - {{time.month + 1}}</span>

        <span @click='nextMonth'>&gt;&gt;</span>
        <!-- <span>&gt;</span> -->
      </div>
      <div class="pannel-content">
        <div class="days">
          <span v-for="j in 7" :key="`_`+j" class="cell-data">{{weekday[j -1]}}</span>
          <div v-for=" i in 6" :key="i">
            <!-- 判断是否是当前月 当日 改变样式 -->
            <span
            @click='chooseDate(visibledays[(i-1)*7 + (j-1)])'
              v-for="j in 7"
              :key="j"
              class="cell cell-days"
              :class="[
            {notCurrentMonth:!isCurrentMonth(visibledays[(i-1)*7 + (j-1)]),
            today: isToday(visibledays[(i-1)*7 + (j-1)]),
            select: isSelect(visibledays[(i-1)*7 + (j-1)])}]"
            >{{visibledays[(i-1)*7 + (j-1)].getDate()}}</span>
          </div>
        </div>
      </div>
      <div class="pannel-footer"><i class="footer_color iconfont icon-icon_xiangshang_"></i></div>
    <Content></Content>

    </div>
  </div>

</template>

<script>
import * as utils from "../../util";
import Content from './Content'

export default {
  components:{
    Content
  },
  directives: {
    clickOutside: {
      bind(el, bindings, vnode) {
        let handler = e => {
          if (el.contains(e.target)) {
            if (!vnode.context.isVisible) {
              vnode.context.focus();
            }
          } else {
            if (vnode.context.isVisible) {
              vnode.context.blur();
            }
          }
        };
        el.handler = handler;
        document.addEventListener("click", handler);
      },
      unbind(el) {
        document.removeEventListener("click", el.handler);
      }
    }
  },
  data() {
    let {year, month} = utils.getYearMonthDay(new Date())
    return {
      weekday: ["日", "一", "二", "三", "四", "五", "六"],
      time: {year, month},
      value: new Date(),
      isVisible: false
    };
  },
  methods: {
    focus() {
      this.isVisible = true;
    },
    blur() {
      this.isVisible = false;
    },
    isCurrentMonth(date) {
      let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year,this.time.month,1));
      let { year: y, month: m } = utils.getYearMonthDay(date);
      return year === y && month === m;
    },
    isToday(date) {
      let { year, month, day } = utils.getYearMonthDay(new Date());
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date);
      return year === y && month === m && day === d;
    },
    chooseDate(date){
      this.time = utils.getYearMonthDay(date)
      this.value = date
    },
    isSelect(date){
      let { year, month, day } = utils.getYearMonthDay(this.value);
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date);
      return year === y && month === m && day === d;
    },
    prevMonth(){
      let d = utils.getDate(this.time.year, this.time.month,1)
      d.setMonth(d.getMonth()-1)
      this.time = utils.getYearMonthDay(d)      
    },
    nextMonth(){
let d = utils.getDate(this.time.year, this.time.month,1)
      d.setMonth(d.getMonth()+1)
      this.time = utils.getYearMonthDay(d) 
    }
  },
  mounted() {
    this.visibledays;
  },
  computed: {
    visibledays() {
      let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year,this.time.month,1));
      let currentFirstDay = utils.getDate(year, month, 1);
      // 获取当前是周几
      let week = currentFirstDay.getDay();

      let startDay = currentFirstDay - week * 60 * 60 * 1000 * 24;
      let arr = [];

      for (let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24));
      }
      return arr;
    },
    formatDate() {
      let { year, month, day } = utils.getYearMonthDay( this.value);
      return `${year}-${month + 1}-${day}`;
    }
  }
};
</script>

<style lang='scss' scoped>

.container1 {

  margin-top: 21px;
  background-color: #000;
  color: #fff;
  input{
    background-color: #000;
    border: none;
    outline: none;
    text-align: center;
    margin-left: 20px;
  }
}
.pannel{
  // overflow: hidden;
  position: absolue;
  background-color: #fff;
  color: #000;
  .pannel-nav {
    display: flex;
    justify-content: space-around;
    height: 30px;
    span {
      cursor: pointer;
      user-select: none;
    }
  }
  .pannel-content {
    padding:0 20px;
    .cell , .cell-data{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 14%;
      height: 46px;
      font-weight: bold;
    }
    .cell:hover , .select{
      border-radius: 50%;
      background-color: rgb(86, 136, 235);
      box-sizing: border-box;
    }
  }
  .pannel-footer {
    height: 30px;
    text-align: center;
    line-height: 30xp;
    color: rgb(86, 136, 235);
  }
  .notCurrentMonth {
    // color: gray;
    opacity: 0;
  }
  .today {
    background-color: rgb(86, 136, 235);
    border-radius: 50%;
  }
  .cell-data{
    color: rgb(196, 196, 196)
  }
}

</style>
