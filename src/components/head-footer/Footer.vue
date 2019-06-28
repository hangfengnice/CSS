<template>
  <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container">
        <div class="row">
          <div class="col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">
            <i class="footer_color iconfont icon-shandian"></i>
          </div>
          <div class="col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">
            <i class="footer_color iconfont icon-jiaoseguanli"></i>
          </div>
          <div class="col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">
            <i class="footer_color iconfont icon-ring"></i>
          </div>
          <div class="col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">
            <i class="footer_color iconfont icon-tongshi"></i>
          </div>
          <div class="col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">
            <i class="footer_color iconfont icon-rili"></i>
          </div>
        </div>
        <div class="row">
          <div class="footer_color col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">工作</div>
          <div class="footer_color col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">角色</div>
          <div class="footer_color col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">事项圈</div>
          <div class="footer_color col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">同事</div>
          <div class="footer_color col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">日历</div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
[data-v-4b379492]{
  text-align: center;
}
.footer_color{
  color: rgb(182, 182, 182);
  text-align: center;
}
.row:nth-child(1){
  padding-top: 4px;
}
.row{
  margin-bottom: 5px;
}
.icon-rili{
color: rgb(46, 46, 235);
}
.col-xs-1-5,.col-sm-1-5,.col-md-1-5,.col-lg-1-5 {
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
}

.col-xs-1-5 {
  width: 20%;
  float: left;
}

@media (min-width: 768px) {
  .col-sm-1-5 {
    width: 20%;
    float: left;
  }
}

@media (min-width: 992px) {
  .col-md-1-5 {
    width: 20%;
    float: left;
  }
}

@media (min-width: 1200px) {
  .col-lg-1-5 {
    width: 20%;
    float: left;
  }
}

</style>
