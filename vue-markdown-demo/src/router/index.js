import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// Vue.component('Markdown', () => import('@/components/markdown.md'))
const Markdown = () => import('@/components/markdown.md')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/md',
      name: 'Markdown',
      component: Markdown
    }
  ]
})
