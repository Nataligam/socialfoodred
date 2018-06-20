
<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoHome">
			<nav class="navbar navbar-light bg-nav2 justify-content-between">
				<a class="navbar-brand"></a>
				<form class="form-inline">
					<input class="form-control mr-sm-2" type="text" placeholder="Usuario">
					<input class="form-control mr-sm-2" type="text" placeholder="Contraseña">

						<button class="btn btn-outline-info2 my-2 my-sm-0" type="submit" v-on:click="validar">Iniciar Sesión</button>

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
								<input type="text" class="form-control" placeholder="Example">
							</div>
							<div class="form-group">
								<label>Correo:</label>
								<input type="email" class="form-control" placeholder="name@example.com">
							</div>
							<div class="form-group">
								<label>Contraseña:</label>
								<input type="password" class="form-control" placeholder="************">
							</div>
							<button class="btn btn-outline-info2 my-2 my-sm-0" type="submit">Registrarse</button>
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
       usuario:[]
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
			 axios.put('http://fd755025.ngrok.io/v1/usuario/6',{

				nickname:'benito camelas',
				correo:'benito.gmail.com',
				password:'memo1234'

			 })
			 .then(response =>{
				console.log(response);
			 })
		 },
		 ingresar(){
		     //esto es otra manera de hacer la peticion
				 console.log("memo22");
				  var urlServer= 'http://fd755025.ngrok.io/v1/usuario/1';
					var configAxios={
					url:urlServer,
					method:'get',
					responseType:'json',
					headers:{
						'content-type':'application/json'
						}
					};
					axios.
					request(configAxios).
					then(function(response){
						console.log(response);
					})
					.catch(function (error) {
				    console.log(error);
			  	});
		 },
		 registrarUsuario(){
		 console.log('registrar')
				 var urlServer= 'http://fd755025.ngrok.io/v1/usuario';
				 var configAxios={
					 url:urlServer,
					 method:'post',
					 responseType:'json',
					 headers:{
					 'Content-Type':'application/json'
			 	 	}
		 		}
				axios.
				request(configAxios,{

					 nickname:'pedro',
					 correo:'pedrolop90.gmail.com',
					 password:'12345'

				}).
				then(function(response){
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		 },
		 registrarReceta(){
		 console.log('registrar')
				 var urlServer= 'http://fd755025.ngrok.io/v1/receta';
				 var configAxios={
					 url:urlServer,
					 method:'post',
					 responseType:'json',
					 headers:{
					 'content-type':'application/json'
			 	 	}
		 		}
				axios.
				request(configAxios,{
					 nombre:'memoreceta'
				}).
				then(function(response){
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		 }

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
