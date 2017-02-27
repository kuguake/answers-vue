<template>
  <div class="layer-box">
    <div class="markbox"></div>
    <div class="layer">
      <a href="javascript:;" @click="closeLayer()" class="layer-close">&nbsp;</a>
      <div class="layerdom">
        <div class="layer-info">
        <p></p>
        <p class="content">闯关成功</p>
        </div>
        <div class="layer-btn-box">
        <a href="javascript:;" class="btn btn_warn">领取红包</a><a href="javascript:;"  @click="getNextCutQuestion()" class="btn btn_warn fl-r next_cut">继续闯关</a>
        </div>';
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'webpack-zepto'
export default {
  name: 'Layer',

  methods: {
    getNextCutQuestion: function () {
      this.$dispatch('getNextQue')
      this.closeLayer()
    },
    closeLayer: function () {
      $('.layer-box').hide()
    }
  }
}
</script>
<style lang="less">
.layer-box{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  top:0;
  left: 0;
  display: none;
  .markbox{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.8;
    z-index: 2;
    background-color: #000;
  }
  .layer{
    width: 230px;
    height: 316px;
    position: absolute;
    left: 50%;
    margin-left: -115px;
    top:50%;
    margin-top: -158px;
    z-index: 3;
    .layer-close{
      position: absolute;
      display: block;
      right: 10px;
      top:10px;
    }
    .layer-info{
      p{
        font-size: 2.2rem;
      }
      .smalltitle{
        font-size: 2rem;
      }
      .content{
        font-size: 3.2rem;
      }
      width: 230px;
      text-align: center;
      height: 83px;
      padding-top: 114px;
      color: #FFF;
    }
    .layer-complate{
      padding-top:72px;
      height: 122px; 
    }
    .layer-btn-box{
      width: 100%;
      padding-top: 45px;
      text-align: center;
      .btn_warn{
        width: 45%;
        line-height: 4rem;
        display: inline-block;
      }
    }
  }
  .error-bg{
    background: url(../assets/img/error-bg.png) no-repeat 0 0;
    background-size: 230px 316px;
  }
  .success-bg{
    background: url(../assets/img/success-bg.png) no-repeat 0 0;
    background-size: 230px 316px;
  }
  .complate-bg{
    background: url(../assets/img/complate-bg.png) no-repeat 0 0;
    background-size: 230px 238px;
  }
}
</style>