import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import article_detail from '@/pages/article_detail'
import interest from '@/pages/interest'
import article from '@/pages/article'
import postarticle from '@/pages/post_article'
import test from '@/pages/test'
import interest_detail from '@/pages/interest_detail'
import post_interest from '@/pages/post_interest'
import wenda from '@/pages/wenda'
import post_question from '@/pages/post_question'
import wenda_detail from '@/pages/wenda_detail'
import activity from '@/pages/activity'
import activity_detail from '@/pages/activity_detail'
import xianzhi from '@/pages/xianzhi'
import my_detail from '@/pages/my_detail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/article_detail',
      name: 'article_detail',
      component: article_detail
    },{
      path: '/interest',
      name: 'interest',
      component: interest
    }
    ,{
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/post_article',
      name: 'postarticle',
      component: postarticle
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/interest_detail',
      name: 'interest_detail',
      component: interest_detail
    },
    {
      path: '/post_interest',
      name: 'post_interest',
      component: post_interest
    },
    {
      path: '/wenda',
      name: 'wenda',
      component: wenda
    },
    {
      path: '/post_question',
      name: 'post_question',
      component: post_question
    },
    {
      path: '/wenda_detail',
      name: 'wenda_detail',
      component: wenda_detail
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/activity_detail',
      name: 'activity_detail',
      component: activity_detail
    },
    {
      path: '/xianzhi',
      name: 'xianzhi',
      component: xianzhi
    },
    {
      path: '/my_detail',
      name: 'my_detail',
      component: my_detail
    },
  ]
})
