<template>
  <nav class="navbar navbar-default navbar-fixed-bottom">
    <div class="container">
      <router-link to='/job'>
        <p>
          <i class="footer_color iconfont icon-shandian"></i>
        </p>工作
      </router-link>

      <router-link to='/role'>
        <p>˝
          <i class="footer_color iconfont icon-jiaoseguanli"></i>
        </p>角色
      </router-link>

      <router-link to='thing'>
        <p>
          <i class="footer_color iconfont icon-ring"></i>
        </p>事项
      </router-link>
      <router-link to='/workmate'>
        <p>
          <i class="footer_color iconfont icon-tongshi"></i>
        </p>同事
      </router-link>
      <router-link to='/time'>
       <p><i class="footer_color iconfont icon-rili"></i></p> 
        日历
      </router-link>
    </div>
    <!-- <div class="row">
          <div class="footer_color col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">工作</div>
          <div class="footer_color col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">角色</div>
          <div class="footer_color col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">事项圈</div>
          <div class="footer_color col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5">同事</div>
          <router-link class="footer_color col-xs-1-5 col-sm-1-5 col-md-1-5 col-lg-1-5 rili" to='/time' tag='div'>日历</router-link>
         
    </div>-->
  </nav>
  <!-- <mt-tabbar >
  <router-link to='/'  id="tab1">
<p><i class="footer_color iconfont icon-shandian"></i></p>
    工作
  </router-link>
  <router-link to='/'  id="tab2">
<p><i class="footer_color iconfont icon-jiaoseguanli"></i></p>
    角色
  </router-link>
  <router-link to='/'  id="tab3">
<p><i class="footer_color iconfont icon-ring"></i></p>
    事项
  </router-link>
  <router-link to='/'  id="tab4">
<p><i class="footer_color iconfont icon-tongshi"></i></p>
    同事
  </router-link>
  <router-link to='/time'  id="tab5">
<p><i class="footer_color iconfont icon-rili"></i></p>
    日历
  </router-link>
  </mt-tabbar>-->
</template>

<script>

export default {};
</script>

<style lang="scss" scoped>
  .container{
    padding: 0 ;
    display: flex;
    justify-content: space-between;
    a{

      padding-top: 3px;
      padding-bottom: 3px;
      color: #ccc;

      text-decoration: none;

    }
    a:hover,a:active{
      color: rgb(25, 77, 182)
    }
    
    
  p{
    text-align: center;
    margin: 0;


  }
  }
</style>
