<template>
	<div class="index">
    <div class="go"><a href="javascript:;" class="btn btn_write" v-link="{path: '/question'}">开始闯关</a></div>
    <div class="hd-info">
      <h2>温馨提示：</h2>
      <p>1.活动时间：8月18日-8月25日；</p>
      <p>2.活动全员可参与；</p>
      <p>3.每闯过一关都可选择继续闯关，或结束闯关领取当前关数红包，闯关失败没有红包。</p>
    </div>
  </div>
</template>
<style lang="less" src="../assets/question.less"></style>
<style lang="less">
.index{
  background: url(../assets/img/index-bg.jpg) no-repeat 0 0;
  background-size: cover;
  min-height: 100%;
  padding-bottom: 1.4rem;
  .go{
    padding: 76.5% 1.5rem 0;
    .btn_write{
      line-height: 3;
      width: 65%;
      &:active,&:hover{
        text-decoration: none;
      }
    }
  }
  .hd-info{
    color:#FFF;
    padding: 53% 1.5rem 0;
    font-size: 1.2rem;
    h2{
      font-size: 1.4rem;
    }
    p{
      line-height: 1.6
    }
  }
}
</style>