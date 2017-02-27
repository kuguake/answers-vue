<template>
  <div class="question-box">
    <h2 id="cut">{{ cut }}</h2>
    <p class="guan"><img src="../assets/img/1.png"></p>
    <p><input type="hidden" id="cj">{{myAnswer}}</p>
    <div id="queslist">
      <div class="quespart" v-for="value in items" v-show="$index == 0 ? true : false">
        <div class="ques1 ques">
        <h2>{{questionIndex}}:{{value.question}}</h2>
        <ul class="ops">
          <li><label @click="getQuestionAnswer($event)">{{value.answer1}}<input type="radio" name="{{value.id}}" value="A" class="hide"/></label></li>
          <li><label @click="getQuestionAnswer($event)">{{value.answer2}}<input type="radio" name="{{value.id}}" value="B" class="hide"/></label></li>
          <li><label @click="getQuestionAnswer($event)">{{value.answer3}}<input type="radio" name="{{value.id}}" value="C" class="hide"/></label></li>
        </ul>
        </div>
        <div class="next-btn"><a href="javascript:;" v-on:click="getNextQuestion($event, value)" v-bind:class="{ 'nextque' : isNext, 'isSubmit' : isSubmit }"  class="btn btn_warn" >{{btnText}}</a></div>
      </div>
    </div>
    <div class="bar">
      <dl></dl>
    </div>
    <layer></layer>
  </div>
  
</template>
<script>
import $ from 'webpack-zepto'
import Layer from './Laryer.vue'
export default {
  data () {
    return {
      quetitArry: ['问题一', '问题二', '问题三', '问题四', '问题五', '问题六', '问题七', '问题八', '问题九', '问题十'],
      cutArry: ['开始', '第一关', '第二关', '第三关', '第四关', '第五关'],
      cut: '第一关',
      btnText: '下一题',
      items: '',
      myAnswer: [],
      questionIndex: '',
      isNext: true,
      isSubmit: false,
      cutnumber: 1
    }
  },
  components: {
    Layer
  },
  ready () {
    this.fetchItems('/static/api/que.json')
  },
  methods: {
    getNextQuestion: function (event, inputname) {
      var el = event.currentTarget
      var answerValue = $('input[name="' + inputname.id + '"]:checked').val()
      if (answerValue === undefined || answerValue === '') {
        return false
      }
      if ($(el).hasClass('nextque')) {
        this.items.$remove(inputname)
      } else {
        setTimeout(this.checkAnswer(), 200)
      }
      var arraylength = this.items.length
      var myAnswerlength = this.myAnswer.length
      this.myAnswer.push(answerValue)
      // 题标递进+1
      this.questionIndex = this.quetitArry[myAnswerlength + 1]
      if (arraylength === 1) {
        this.$set('isNext', false)
        this.$set('isSubmit', true)
        this.btnText = '提交'
      }
    },
    getQuestionAnswer: function (event) {
      var el = event.currentTarget
      $('label').removeClass('ops-active')
      $(el).addClass('ops-active')
    },
    showLayer: function () {
      $('.layer').addClass('success-bg')
      $('.layer-box').show()
    },
    checkAnswer: function () {
      this.$http.get('/static/api/check.json?answer=1', {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        emulateJSON: true
      }).then((response) => {
        var data = response.data
        if (data.code === 200) {
          this.showLayer()
        }
      }, (response) => {
        console.log('error')
      })
    },
    fetchItems: function (api) {
      this.$http.get(api, {}, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        emulateJSON: true
      }).then(function (response) {
        var data = response.data
        var questionJSON = data.data
        this.items = questionJSON
        // 默认显示第一题
        this.questionIndex = this.quetitArry[0]
      }, function (response) {
        console.log('error')
      })
    }
  },
  events: {
    'getNextQue': function () {
      this.fetchItems('/static/api/que2.json')
      this.$set('isNext', true)
      this.$set('isSubmit', false)
      this.btnText = '下一题'
      this.myAnswer = []
      this.cutnumber++
      this.cut = this.cutArry[this.cutnumber]
    }
  }
}
</script>
<style lang="less">
.question-box{
  background: url(../assets/img/main-bg.jpg) no-repeat 0 0;
  background-size: cover;
  min-height: 100%;
  padding-bottom: 1.4rem;
  h2{
    text-align: center;
    font-size: 3.0rem;
    padding: 10% 0 5;
  }
  .guan{
    text-align: center;
    img{
      width: 20.4%;
    }
  }
  .ques1{
    h2{
      font-size: 2rem;
      width: 70%;
      margin: 0 auto;
      text-align: left;
      font-weight: normal;
    }
    .ops{
      margin: 0 auto;
      width: 70%;
      li{
        width: 100%;
      }
      label{
        display: block;
        width: 100%;
        border:0;
        line-height: 4rem;
        background-color: #39a47a;
        border-radius: 10px;
        font-size: 1.6rem;
        text-align: center;
        color: #FFF;
        margin-bottom: 2rem;
        &:hover,&:active{
          background-color: #e6595f;
        }
      }
      .ops-active{
          background-color: #e6595f;
      }
    }
  }
  .next-btn{
    .btn_warn{
      width: 50%;
      line-height: 3
    }
  }
  .bar{
    padding-top: 10%;
    display:-moz-box;
    -moz-box-pack:center;
    display:-webkit-box;
    -webkit-box-pack:center;
    dl{
      dt,dd{
        float: left;

      }
      dt{
        width: 1rem;
        height: 1rem;
        display:-webkit-box;
        -webkit-box-align:center;
        padding-top: 0.2rem;
        hr{
          width: 100%;
          height: 1px;
          border: 0;
          border-top: 4px solid #999;
        }
      }
      dd{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: #999;
        color: #FFF;
        line-height: 1.5rem;
        text-align: center;
        font-size: 1rem;
        transition:background  1s;
        -moz-transition:background  1s; 
        -webkit-transition:background  1s; 
        -o-transition:background  1s; 
      }
      .bar-ok{
        background-color: #f23d3a;
      }
    }
  }

}
</style>