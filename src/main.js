import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import $ from 'webpack-zepto'

import App from './components/App.vue'
import QuestionIndex from './components/QuestionIndex.vue'
import Question from './components/Question.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use($)

var router = new VueRouter()

router.map({
  'index': {
    component: QuestionIndex
  },
  'question': {
    component: Question
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/index'
})

router.start(App, '#app')
