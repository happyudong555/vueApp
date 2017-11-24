import Vue from 'vue'
import Router from 'vue-router'
import indexContent from '../components/indexContent'
import page1 from '../components/page1'
import page2 from '../components/page2'
import page3 from '../components/page3'
import aboutus from '../components/aboutus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: indexContent
    },
    {
      path: '/page1',
      component: page1
    },
    {
      path: '/page2',
      component: page2
    },
    {
      path: '/page3',
      component: page3
    },
    {
      path: '/aboutus',
      component: aboutus
    }
  ]
})
