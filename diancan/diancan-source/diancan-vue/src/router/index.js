import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import FoodList from '@/pages/FoodList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
		  path: '/Login',
		  name: 'Login',
		  component: Login
		},
		{
		  path: '/FoodList',
		  name: 'FoodList',
		  component: FoodList
		}
  ]
})
