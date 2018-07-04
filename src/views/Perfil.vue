<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoPerfil">
			<Layout>
				<section slot="contentColumn1">
					<center><h4 class="mb-5">Datos del perfil de usuario</h4>
						<hr>
					</center>
					<div class=" p-3 ">
						<div class="row">
							<div class="col-md-3 offset-md-2 col-sm-12">
								<center>
									<div class="row">
										<div class="col">
											<img v-bind:src="usuarioFoto" class="img-fluid" width="200px" >
										</div>
									</div>
									<div class="row mt-5">
										<div class="col">
											<button @click="HabilitarCampos" type="submit" class="btn btn-outline-info2 mb-1">Actualizar</button>
											<button  @click="ActualizarPerfil" type="submit" class="btn btn-outline-info2 mb-1">Guardar</button>
										</div>
									</div>
								</center>
							</div>
							<div class="col-md-5 col-sm-12">
								<div class="borde p-3">
									<form >
										<div class="form-group">
											<label >Correo:</label>
											<input type="email" :disabled="isDisabled" class="form-control" v-model="usuarioCorreo"  >
										</div>
										<div class="form-group">
											<label >Usuario:</label>
											<input type="text" :disabled="isDisabled" class="form-control"
											v-model="usuarioNickname">
										</div>
										<div class="form-group">
											<label >Contraseña:</label>
											<input type="password" :disabled="isDisabled" class="form-control"
											v-model="usuarioPassword">
										</div>
										<div class="row">
											<div class="col-md-12 col-sm-12 col-lg-12 col-xl-4">
												<div class="form-group">
													<label for="switch-id">Privacidad</label><br>
													<span class="switch">
														<input type="checkbox" :disabled="isDisabled" class="switch" id="switch-normal" v-model="privacidadUsuario">
														<label for="switch-normal"><span v-if="privacidadUsuario">Publico</span>
															<span v-else>Privado</span></label>
														</span>
													</div>
												</div>
												<div class="col-md-12 col-sm-12 col-lg-12 col-xl-8">
													<label>Seleccionar Imagen de perfil:</label>
													<div class="input-group mb-3">
														<div class="custom-file">
															<input type="file" class="custom-file-input" :disabled="isDisabled" id="fichero">
															<label class="custom-file-label"></label>
														</div>
														<div class="input-group-append">
															<input type="button" @click="cargarImagen" class="input-group-text" value="cargar">
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div v-for="(publicacion,index) in publicaciones"  class="row">

								
						
						<div class="col-md-10 offset-md-1">
							
							<div class="p-3 m-2 ">
								
								<div class="card border-primary mb-3 " >
									<div class="card-header">
										<div class="row">
											<div class="col-xl-6 col-md-12 col-sm-12 mb-3">								
												<img  class="img-fluid slaider rounded mx-auto d-block" v-bind:src="publicacion.imagen_receta">
											</div>
											<div class="col-xl-6 col-md-12 col-sm-12">								
												<p class="centro"> <span class="recervada">Package</span>&nbsp;&nbsp;Receta;<br><br>
													<span class="recervada">public class </span>&nbsp;&nbsp;{{publicacion.receta.nombre}} {<br><br>
													<span v-for="ingrediente in publicacion.receta.ingredientes" >
														<span class="recervada ml-3">private String</span>=&nbsp;"{{ingrediente.nombre}}{{ingrediente.cantidad}} {{ingrediente.unidad}}";<br></span><br>
														<span v-for="paso in  publicacion.receta.pasos" >
															<span class="recervada">public void </span>&nbsp;{{paso.nombre}} (<span v-for="(parametro, index) in paso.ingredientes" >
																<span v-if="Object.keys(paso.ingredientes).length-1 > index" > String {{parametro.nombre}}{{parametro.cantidad}} {{parametro.unidad}},  </span>
																<span v-else> String {{parametro.nombre}}{{parametro.cantidad}} {{parametro.unidad}}</span> </span>) { <br> 
																//  {{paso.descripcion}} <br>
															}<br></span>
														}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
													</p>
													
													
												</div>
											</div>																		
										</div>
										<div class="card-body">
											<div class="row">
												
												
												<div class="col">
													<div class="form-group">
														<span class="switch">
														<input type="checkbox" class="switch"  @click="CambiarPrivacidad(publicacion.id,publicacion.privacidad)" v-bind:id="publicacion.id"   v-bind:name="publicacion.id" v-model="publicacion.privacidad">
														<label v-bind:for="publicacion.id"><span v-if="publicacion.privacidad">Publico</span>
														<span v-else>Privado</span></label>
														</span>
														</div>

												</div>
												<div class="col">
													<button @click="BorrarReceta(publicacion.receta.id)" type="button" class="btn btn-outline-info2">Eliminar</button>
												</div>
								
								
												<div class="col">
													
														<button @click="MeGusta(publicacion.id,publicacion.like)" type="button" class="btn btn-outline-info2"><span class="icon-like"></span> {{publicacion.cantidadLikes}}</button>
													
												</div>
												<div class="col">
													
														<button class="btn btn-outline-info2" type="button" data-toggle="collapse" :data-target="`#demo2${index}`" aria-expanded="false" aria-controls="collapseExample">
															Comentar
														</button>
													
												</div>														
											</div>
											
											<div class="col-md-12 mt-3">
												<div class="collapse" v-bind:id="['demo2'+index]">
													<div v-for="comentario in publicacion.comentarios" class="card card-body">
														{{comentario.nickname}}:{{comentario.comentario}}
													</div>
													
													<br>
													<div class="row">
														<div class="col-md-10">
															<input  v-model="comentario" type="text" class="form-control mb-5">
														</div>
														<div class="col-md-2">
															<button @click="Comentar(publicacion.id,comentario)"  type="button" class="btn btn-outline-info2 mb-5"><span class="icon-arrow-right"></span></button>
														</div>
													</div>
													
												</div>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
				</section>
			</Layout>
		</section>
	</DefaultLayout>
</template>
<script >
import DefaultLayout from '@/layout/DefaultLayout'
import Layout from '@/layout/Layout'
import axios from 'axios'



export default{

	name:'Perfil',
	data(){
		return {
			usuarioCorreo:'',
			comentario:'',
			usuarioNickname:'',
			imagenUsuario:'',
			usuarioPassword:'',
			usuarioFoto:'',
			publicaciones:[],
			privacidadUsuario:false,
			isDisabled: true,
			urlBase:'http://35.188.111.107:8080/socialfood'

		}
	},
	components:{
		DefaultLayout,
		Layout,
	},
	mounted: function (){
		this.CargarPerfil();	
		this.ListarPublicacionesMias();	
	},
	notifications: {
		Error: {
			message: 'Error al cargar información',
			type: 'error'
		}
	},
	methods:{
		CargarPerfil(){
			var self = this;
			var value= this.getCookie('Autorizacion');
			var config = {
				headers: {'Authorization': value}
			};
			axios.get(this.urlBase+'/v1/usuario',config,{
			})
			.then(response =>{	
				
				this.usuarioCorreo=response.data.correo;
				this.usuarioNickname=response.data.nickname;
				this.usuarioPassword=response.data.password;
				this.privacidadUsuario=response.data.privacidad;
				this.usuarioFoto= response.data.imagen_usuario;				
			})
			.catch(function (error) {				
				
				
			})
		},
		cargarImagen(){
			var self = this;
			var fichero;
			var storageRef;
			var foto = '';

			storageRef = firebase.storage().ref();
			fichero = document.getElementById("fichero");
			var img = fichero.files[0];
			console.log(img);
			var uploadTask = storageRef.child("perfil/" + img.name).put(img);			
			uploadTask.on('state_changed',
				function(snapshot){
				}, function(error) {
				}, function() {
					uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
						console.log('File available at', downloadURL);
						foto = downloadURL;
						self.usuarioFoto = foto;
					});

				});
		},
		ActualizarPerfil(){

			axios.put(this.urlBase+'/v1/usuario/',{
				nickname: this.usuarioNickname,
				correo: this.usuarioCorreo,
				password: this.usuarioPassword,
				privacidad:this.privacidadUsuario,
				imagen_usuario:this.usuarioFoto

			})
			.then(response =>{
				console.log(response);
			})
		},
		HabilitarCampos(){
			this.isDisabled=false
		},
		ListarPublicacionesMias(){
				
				var value= this.getCookie('Autorizacion');
				var config = {
					headers: {'Authorization': value}
				}; 

				

				axios.get(this.urlBase+'/v1/publicacion',config,{        
				})
				.then(response =>{
					this.publicaciones=response.data;
					



				})
			},MeGusta(publicacion,like,idLike){
				console.log(publicacion);
				var value= this.getCookie('Autorizacion');
				if (like===false){
				
				axios.post(this.urlBase+'/v1/like',{
					publicacion_id:publicacion
				},{
					headers: {'Authorization': value}
				})
				.then(response =>{
					console.log(response);
					this.ListarPublicacionesMias();
				
    		})
				}else {
					console.log(publicacion);
					axios.delete(this.urlBase+'/v1/like/'+publicacion,{
						headers: {'Authorization': value}
					})
					.then(response =>{
						console.log(response);
					
					if (response.data==true){
						console.log("Elimino");
						this.ListarPublicacionesMias();
						
					}else {
						console.log(response);
					}
					
					})
					
				}
				
			},
			Comentar(id,comentario){
				
				var value= this.getCookie('Autorizacion');
				axios.post(this.urlBase+'/v1/comentario',{
					
					comentario:comentario,
					publicacion_id:id

				},{
					headers: {'Authorization': value}
				})
				.then(response =>{
					console.log(response);
					this.ListarPublicacionesMias();
					
				})
				
				this.comentario='';
			},
			BorrarReceta(id){

					console.log(id);
   
				axios.delete(this.urlBase+'/v1/publicacion/'+id)
				.then(response =>{
					console.log(response);
					
					if (response.data==true){
					console.log("Elimino");
					this.ListarPublicacionesMias();
					}
					
				})
				
				
				
				},
				CambiarPrivacidad(id,pri){
					
					console.log(pri);
					axios.put(this.urlBase+'/v1/publicacion/privacidad',{
						id:id
					})
					.then(response =>{
						console.log(response);
						this.ListarPublicacionesMias();

					})

				},

		getCookie(nombre) {
			var name = nombre + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for(var i = 0; i <ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}
	},
	components:{
		DefaultLayout,
		Layout
	},

}
</script>

<style>

.btn {
	background: transparent;
	border-color: #ff7043;
	color: #ff7043;
}
.btn-outline-info2 {
	color: #ff7043;
	background-color: transparent;
	background-image: none;
	border-color:#ff7043;
}

.btn-outline-info2:hover {
	color: #fff;
	background-color: #ff7043;
	border-color: #ff7043;
}
.borde{
	border: 1px #ff7043 solid;
}
.switch {
	font-size: 1rem;
	position: relative;
}
.switch input {
	position: absolute;
	height: 1px;
	width: 1px;
	background: none;
	border: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	overflow: hidden;
	padding: 0;
}
.switch input + label {
	position: relative;
	min-width: calc(calc(2.375rem * .8) * 2);
	border-radius: calc(2.375rem * .8);
	height: calc(2.375rem * .8);
	line-height: calc(2.375rem * .8);
	display: inline-block;
	cursor: pointer;
	outline: none;
	user-select: none;
	vertical-align: middle;
	text-indent: calc(calc(calc(2.375rem * .8) * 2) + .5rem);
}
.switch input + label::before,
.switch input + label::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: calc(calc(2.375rem * .8) * 2);
	bottom: 0;
	display: block;
}
.switch input + label::before {
	right: 0;
	background-color: #dee2e6;
	border-radius: calc(2.375rem * .8);
	transition: 0.2s all;
}
.switch input + label::after {
	top: 2px;
	left: 2px;
	width: calc(calc(2.375rem * .8) - calc(2px * 2));
	height: calc(calc(2.375rem * .8) - calc(2px * 2));
	border-radius: 50%;
	background-color: white;
	transition: 0.2s all;
}
.switch input:checked + label::before {
	background-color: #08d;
}
.switch input:checked + label::after {
	margin-left: calc(2.375rem * .8);
}
.switch input:focus + label::before {
	outline: none;
	box-shadow: 0 0 0 0.2rem rgba(0, 136, 221, 0.25);
}
.switch input:disabled + label {
	color: #868e96;
	cursor: not-allowed;
}
.switch input:disabled + label::before {
	background-color: #e9ecef;
}
.recervada{
		color: blue;
	}




</style>
