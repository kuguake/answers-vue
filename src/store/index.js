import Vue from 'vue'
import { EventEmitter } from 'events'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const store = new EventEmitter()
const ajax = new VueResource()

export default store

store.fetchItems = function (api) {
  this.$http.get(api, {}, {
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    emulateJSON: true
  }).then(function (response) {
    var data = response.data
    console.log(data)
    var questionJSON = data.data
    this.items = questionJSON
    // 默认显示第一题
    this.questionIndex = this.quetitArry[0]
  }, function (response) {
    console.log('error')
  })
}
