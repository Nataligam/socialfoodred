
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
			<br>
			<div class="alert alert-danger alert-dismissible" v-if="entro == false">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
			  <center><strong>Usuario o contras  incorrectos</strong></center>
			</div>
			<div class="container mt-5 mb-5">
				<div class="row">
					<div class="col-md-7 col-sm-12  p-4">
						<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img class="d-block w-100" src="../assets/socialfoodnew.jpg" alt="First slide">
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="../assets/socialfoodnew2.jpg" alt="Second slide">
								</div>
							</div>
							<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
						<hr>
						<p class="mt-5 text-justify">Social food es una red social diseñada para aquellos programadores amantes de la cocina que deseen abrir un espacio dentro de su quehacer diario para compartir sus mejores recetas, con un toque de codigo y conocer mas sobre la gastronomia preferida de otros colegas.</p>

					</div>
					<div class="col-md-4 col-sm-12 offset-md-1 borde p-4">
						<h4>¡Registrate, es gratis!</h4>
						<form class="mt-4">
							<div class="form-group">
								<label>Usuario:</label>
								<input type="text" class="form-control" placeholder="Example" v-model='usuario' required>
							</div>
							<div class="form-group">
								<label>Correo:</label>
								<input type="email" class="form-control" placeholder="name@example.com" v-model='correo' required>
							</div>
							<div class="form-group">
								<label>Contraseña:</label>
								<input type="password" class="form-control" placeholder="************" v-model='contrasena' required>
							</div>
							<button class="btn btn-outline-info2 my-2 my-sm-0" type="submit" v-on:click="registrarUsuario">Registrarse</button>
						</form>
						<br>
						<div class="alert alert-success alert-dismissible" v-if="exito == true">
						  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
						  <strong>Registro Exitoso</strong>
						</div>
						<div class="alert alert-danger alert-dismissible" v-if="exito2 == false">
						  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
						  <strong>Ocurrio un error, verificar datos</strong>
						</div>

					</div>

				</div>
			</div>
		</section>

	</DefaultLayout>
</template>

<script >
import DefaultLayout from '@/layout/DefaultLayout'
import axios from 'axios'

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
			password:'',
			exito:'false',
			entro:true,
			exito2:true,
			urlBase:'http://35.188.111.107:8080/socialfood'
		};
	},
	methods:{

		registrarUsuario(){
			console.log('registrar')
			axios.post(this.urlBase+'/v1/usuario',{
				nickname:this.usuario,
				correo:this.correo,
				password:this.contrasena
			})
			.then(response =>{
				if(response.data != -1){
					console.log(response.data);
					this.setCookie('Autorizacion',response.data,1);
					this.exito = true;
				}else{
          this.exito2=false;
					console.log("no registro")
					console.log(response.data)
				}

			})
		},
		login(){
			console.log('login')
			axios.post(this.urlBase+'/v1/usuario/login',{
				correo:this.username,
				password:this.password
			})
			.then(response =>{
				console.log(response.data)
				if(response.data != -1){
					console.log("entro");
					this.setCookie('Autorizacion',response.data,1);
					this.$router.push(
					{
						name:'Inicio',
					}
					)
				}else{
				  this.entro = false;
					console.log("no entro")
					this.$router.push('/')
				}
			})
		},
		setCookie(nombre,valor,exdays){
			var d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			var expires = "expires="+ d.toUTCString();
			document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
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

.btn {
	background: transparent;
	border-color: #ff7043;
	color: #ff7043;
}

.btn-outline-info2 {
	color: #ff7043;
}

.btn-outline-info2:hover {
	color: #fff;
	background-color: #ff7043;
	border-color: #ff7043;
}


.borde{
	border: 1px #ff7043 solid;
}

</style>
