import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Inicio from '@/views/Inicio'
import Perfil from '@/views/Perfil'
import Receta from '@/views/Receta'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path:'/',
		name:'Home',
		component: Home
	},
	{
		path:'/inicio/:id',
		name:'Inicio',
		component: Inicio,
	},
	{
		path:'/perfil',
		name:'Perfil',
		component: Perfil,
	},
	{
		path:'/Receta',
		name:'Receta',
		component: Receta,
	}
	]
})
