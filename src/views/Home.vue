
<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoHome">
			<nav class="navbar navbar-light bg-nav2 justify-content-between">
				<a class="navbar-brand"></a>
				<form class="form-inline">
					<input class="form-control mr-sm-2" type="text" placeholder="Usuario" v-model='username'>
					<input class="form-control mr-sm-2" type="password" placeholder="Contraseña" v-model='password'>

					<button class="btn btn-outline-info2 my-2 my-sm-0" type="submit" v-on:click="login">Iniciar Sesión</button>

				</form>
			</nav>
			<div class="container mt-5 mb-5">
				<div class="row">
					<div class="col-md-7 col-sm-12  p-4">
						<img src="../assets/socialfoodnew.jpg" class="img-fluid" width="100%">
						<hr>
						<p class="mt-5 text-justify">Social food es una red social diseñada para aquellos programadores amantes de la cocina que deseen abrir un espacio dentro de su quehacer diario para compartir sus mejores recetas, con un toque de codigo y conocer mas sobre la gastronomia preferida de otros colegas.</p>

					</div>
					<div class="col-md-4 col-sm-12 offset-md-1 borde p-4">
						<h4>¡Registrate, es gratis!</h4>
						<form class="mt-4">
							<div class="form-group">
								<label>Usuario:</label>
								<input type="text" class="form-control" placeholder="Example" v-model='usuario'>
							</div>
							<div class="form-group">
								<label>Correo:</label>
								<input type="email" class="form-control" placeholder="name@example.com" v-model='correo'>
							</div>
							<div class="form-group">
								<label>Contraseña:</label>
								<input type="password" class="form-control" placeholder="************" v-model='contrasena'>
							</div>
							<button class="btn btn-outline-info2 my-2 my-sm-0" type="submit" v-on:click="registrarUsuario">Registrarse</button>							
						</form>

					</div>
				</div>
			</div>
		</section>

	</DefaultLayout>
</template>

<script >
import DefaultLayout from '@/layout/DefaultLayout'

/* eslint-disable */
export default{
	name:'Home',
	data(){		
		return {
			usuario:[],
			usuario:'',
			correo:'',
			contrasena:'',
			username:'',
			password:''			
		};
	},
	methods:{
		validar(){
			console.log("memo");
			axios.get('http://fd755025.ngrok.io/v1/usuario/1',{

			})
			.then(response =>{
				console.log(response);
			})
		},
		save(){
			console.log("memosave");
			axios.post('http://fd755025.ngrok.io/v1/usuario',{

				nickname:'pedro',
				correo:'pedrolop90789.gmail.com',
				password:'12345'

			})
			.then(response =>{
				console.log(response);
			})
		},
		actualizar(){
			console.log("memoedit");
			console.log(this.usuario)
			axios.put('http://fd755025.ngrok.io/v1/usuario/6',{

				nickname:'benito camelas',
				correo:'benito.gmail.com',
				password:'memo1234'

			})
			.then(response =>{
				console.log(response);
			})
		},
		 // METODOS QUE SI SIRVEN PARA EL MODELO USUARIO
		 registrarUsuario(){
		 	console.log('registrar')
		 	axios.post('http://baab64d5.ngrok.io/v1/usuario',{

		 		nickname:this.usuario,
		 		correo:this.correo,
		 		password:this.contrasena

		 	})
		 	.then(response =>{
		 		console.log(response);
		 	})
		 },
		login(){
		 console.log('login')
			 axios.post('http://baab64d5.ngrok.io/v1/usuario/login',{
			 correo:this.username,
			 password:this.password
			})
			.then(response =>{
			 console.log(response);
			 console.log(response.data)
			 var idsesion = response.data;
			 if(response.data > 0){
			  console.log("entro");
				this.$router.push(
						{
						name:'Inicio',
						params:{id:idsesion}
						}
				)
			 }else{
			   console.log("no entro")
				 this.$router.push('/')
			 }
			})
		 },
		  buscarAmigo(){
		  console.log("buscaramigo");
			 var buscar = 'pedro'
			axios.get('http://baab64d5.ngrok.io/v1/usuarios/' + buscar,{
			})
			.then(response =>{
			 console.log(response);
			})
		},

		 // ACA TERMINA USUARIO
		},
		components:{
			DefaultLayout,

		},
	}
	</script>


	<style>

	.bg-nav2{
		background: #f7f7f9!important;
		box-shadow: 2px 2px 5px #999;
	}

	.btn-outline-info2 {
		color: #48dbfb;
		background-color: transparent;
		background-image: none;
		border-color: #48dbfb;
	}

	.btn-outline-info2:hover {
		color: #fff;
		background-color: #48dbfb;
		border-color: #48dbfb;
	}

	.borde{
		border: 2px #48dbfb solid;
	}

	</style>
