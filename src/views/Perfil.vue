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
											<img src="../assets/avatar.png" width="200">
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
										<label>Seleccionar Imagen de perfil:</label>
										<div class="input-group mb-3">                            
											<div class="custom-file">
												<input type="file" class="custom-file-input" :disabled="isDisabled">
												<label class="custom-file-label"></label>
											</div>											
										</div>
									</form>
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
			usuarioPassword:'',
			isDisabled: true,			
		}
	},
	components:{
		DefaultLayout,
		Layout
	},
	mounted: function (){
		this.CargarPerfil();
	},
	methods:{
		CargarPerfil(){					
			axios.get('http://bb6c93af.ngrok.io/v1/usuario/1',{        
			})
			.then(response =>{
				this.usuarioCorreo=response.data.correo;
				this.usuarioNickname=response.data.nickname;
				this.usuarioPassword=response.data.password;				
				
			})
		},
		ActualizarPerfil(){						
			axios.put('http://bb6c93af.ngrok.io/v1/usuario',{
				nickname: this.usuarioNickname,
				correo: this.usuarioCorreo,
				password: this.usuarioPassword

			})			
			.then(response =>{
				console.log(response);
			})
			
		},
		HabilitarCampos(){
			this.isDisabled=false
		}
	}
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



</style>
