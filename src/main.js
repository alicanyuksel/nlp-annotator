import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import nerAnnotation from './components/nerAnnotation.vue'
import questionAnswerAnnotation from './components/questionAnswerAnnotation.vue'
import homePage from './components/homePage.vue'

import { store } from "./store/index.js";

Vue.use(VueRouter)

const routes = [
    { path: "/", component: homePage },
    { path: "/ner", component: nerAnnotation },
    { path: "/question-answer", component: questionAnswerAnnotation }
  ]

const router = new VueRouter({
  mode: "history",
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')