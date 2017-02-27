<template>
  <section class="nav-head clearfix">
      <img src="../assets/images/redcard.jpg">
  </section> 
  <section class="member-body">
      <div class="form-box">
          <ul>
              <li v-link="{path: '/integrate'}"><i><img src="../assets/images/jifen-icon.png"></i>我的积分<span class="fen"><span>{{jf}}</span>分</span><em class="df-mod-arrow right"></em></li>
              <li v-link="{path: '/message'}"><i><img src="../assets/images/xinxi-icon.png"></i>我的信息<span class="perfect">完善</span><em class="df-mod-arrow right"></em></li>
          </ul>
          <ul>
              <li v-link="{path: '/vipinfo'}"><i><img src="../assets/images/vip-icon.png"></i>会员说明<em class="df-mod-arrow right"></em></li>
              <li v-link="{path: '/contactus'}"><i><img src="../assets/images/tel-icon.png"></i>联系我们<em class="df-mod-arrow right"></em></li>
          </ul>
      </div>
  </section> 

</template>
<script>
export default {
  data () {
    return {
      jf: '300'
    }
  }
}
</script>
<style lang="less" src="../assets/global.less"></style>
<style>
.member-body{height:auto; margin-top: 27px;}
.member-body .form-box{ background-color: #f5f5f5;}
.member-body .form-box ul{
  background-color: #FFFFFF;
  margin-bottom:32px;
}
.member-body .form-box ul li{
  border-top:1px solid #efeff0;
  height:40px;
  line-height: 40px;
  color:#646464;
  font-size: 15px;
  padding-left: 20px;
}
.member-body .form-box ul li i{
  position: relative;
  top:13px;
  display: inline-block;
  margin-right: 12px;
}
.member-body .form-box ul li em{
  height: 10px;
  width: 10px;
  float: right;
  margin-right:20px;
  top:16px;
  border-color: #c1c0c5;
}
.member-body .form-box ul li .fen{
  position: absolute;
  right: 40px;
  color: #000000;
}
.member-body .form-box ul li .perfect{
  position: absolute;
  right: 40px;
  color: #c1c0c5;
}
.member-body .form-box ul li .fen span{
  color: #FF0000;
}
.member-body .form-box ul li i img{
  width:17px;
}
</style>