import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Inicio from '@/views/Inicio'
import Perfil from '@/views/Perfil'
import Receta from '@/views/Receta'
import PerfilAmigo from '@/views/PerfilAmigo'
import UsuariosSeguidos from '@/views/UsuariosSeguidos'
import UsuariosSeguidores from '@/views/UsuariosSeguidores'
import PublicacionesAmigo from '@/views/PublicacionesAmigo'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path:'/',
		name:'Home',
		component: Home
	},
	{
		path:'/inicio',
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
	},
	{
		path:'/PerfilAmigo/',
		name:'PerfilAmigo',
		component: PerfilAmigo,	
		props: true
	},
	{
		path:'/UsuariosSeguidos',
		name:'UsuariosSeguidos',
		component: UsuariosSeguidos,
	},
	{
		path:'/UsuariosSeguidores',
		name:'UsuariosSeguidores',
		component: UsuariosSeguidores,
	},
	{
		path:'/PublicacionesAmigo/:idAmigo',
		name:'PublicacionesAmigo',
		component: PublicacionesAmigo,
	},

	]
})
