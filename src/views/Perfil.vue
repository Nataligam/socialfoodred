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
							<div class="col-md-3 offset-md-2 col-sm-12 mt-5">
								<center>
									<div class="row">
										<div class="col">
											<img v-bind:src="usuarioFoto" height="200px;">
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
											<input type="text" :disabled="isDisabled" class="form-control"
											v-model="usuarioPassword">
										</div>
										<div class="row">
											<div class="col-md-12 col-sm-12 col-lg-12 col-xl-4">
												<div class="form-group">
													<label for="switch-id">Privacidad</label><br>
													<span class="switch">
														<input type="checkbox" :disabled="isDisabled" class="switch" id="switch-normal" v-model="privacidadUsuario">
														<label for="switch-normal"><span v-if="privacidadUsuario">Privado</span>
															<span v-else>Publico</span></label>
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
					</div>
				</section>
			</Layout>
		</section>
	</DefaultLayout>
</template>
<script >
import DefaultLayout from '@/layout/DefaultLayout'
import Layout from '@/layout/Layout'



export default{
	name:'Perfil',
	data(){
		return {
			usuarioCorreo:'',
			usuarioNickname:'',
			imagenUsuario:'',
			usuarioPassword:'',
			usuarioFoto:'',
			privacidadUsuario:false,
			isDisabled: true,
			urlBase:'http://7c2e187f.ngrok.io'

		}
	},
	components:{
		DefaultLayout,
		Layout,
	},
	mounted: function (){
		this.CargarPerfil();
	},
	methods:{
		CargarPerfil(){

			axios.get(this.urlBase+'/v1/usuario/3',{

			})
			.then(response =>{
				this.usuarioCorreo=response.data.correo;
				this.usuarioNickname=response.data.nickname;
				this.usuarioPassword=response.data.password;
				this.privacidadUsuario=response.data.privacidad;
				this.usuarioFoto= response.data.imagen_usuario;				
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
	},
	components:{
		DefaultLayout,
		Layout
	},

}
</script>

<style>
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



</style>
