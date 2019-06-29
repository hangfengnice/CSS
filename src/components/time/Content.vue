<template>
  <div class="container">
    <div class="nav">
      <p class="nav-p">
        <span class='active' :click='addClass'>已设置提醒</span>
        <span :click='addClass'>创建时间</span>
        <span :click='addClass'>最后发言时间</span>
      </p>
      <p class="bgc"></p>
    </div>
    <div class='border'>
      <p class='header'>
        227市场
        <span class="pull-right time">16: 24</span>
      </p>
      <p class="text-left">定价依据和客户判定</p>
      <p class='content'>
<span class='blue'> 我的角色: 经办人</span>
        <span class="pull-right">...</span>
      </p>
    </div>

    <div class='border'>
      <p class='header'>
        新软件
        <span class="pull-right time">13: 34</span>
      </p>
      <p class="text-left">成立体验小组, 测试软件</p>
      <p class='content'>
<span class='yellow'> 我的角色: 交办人</span>
        <span class="pull-right">...</span>
      </p>
    </div>

    <div class='border'>
      <p class='header'>
        2-3-6手提项目
        <span class="pull-right time">09: 24</span>
      </p>
      <p class="text-left">236手提灭火器项目,10月需要提交给需方</p>
      <p class='content'>
<span class='yellow'> 我的角色: 交办人</span>
        <span class="pull-right">...</span>
      </p>
    </div>

    <div class='border'>
      <p class='header'>
        消防资格考试
        <span class="pull-right time">昨天</span>
      </p>
      <p class="text-left">考试纲要 考试时间 考试地点</p>
      <p class='content'>
<span class='blue'> 我的角色: 经办人</span>
        <span class="pull-right">...</span>
      </p>
    </div>

    <div class='border'>
      <p class='header'>
        总裁办招新
        <span class="pull-right time">10-28</span>
      </p>
      <p class="text-left">招新人</p>
      <p class='content'>
<span class='blue'> 我的角色: 经办人</span>
        <span class="pull-right">...</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      flag: false
    }
  },
  methods: {
    addClass(e){
      console.log(e.target)
    }
  }
};
</script>

<style lang='scss' scoped>
.nav p {
  border-top: 2px solid rgb(180, 173, 173);
}
.nav {
  .nav-p {
    display: flex;
    justify-content: space-around;
    padding: 4px 0;
    span:hover{
      color: rgb(53, 68, 199);
      border-bottom: 2px solid rgb(53, 68, 199);
      
    }
    .active{
      color: rgb(53, 68, 199);
      border-bottom: 2px solid rgb(53, 68, 199);
    }

  }
  
}
.bgc {
  height: 8px;
  background: linear-gradient(
    to bottom,
    #ccc 0,
    rgba(204, 204, 204, 0.3) 50%,
    #fff 100%
  );
}
.container p {
  padding: 0;
  margin: 0;
}
.header{
  font-weight: bold;
  font-size: 16px;
  .time{
    font-weight: normal;
    color: rgb(205, 205, 205);
    font-size: 14px;
  }

}
.text-left{
  font-size: 14px;
    color: rgb(205, 205, 205);
}
.yellow{
  color: rgb(245, 210, 55);
}
.blue{
  color: rgb(112, 162, 214);
}
.border{
  padding: 3px;
  border-bottom: 1px solid rgb(240, 234, 234);
}
span.pull-right{
    color: rgb(205, 205, 205);

}

</style>
