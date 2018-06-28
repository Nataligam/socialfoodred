<template>
	<DefaultLayout>
			<Layout>
				<section slot="contentColumn1">
					<center><h4 class="mb-5">Datos del perfil de usuario</h4>
						<hr>
					</center>
					<div class=" p-3 ">
							<div class="col-md-3 offset-md-2 col-sm-12 mt-5">
								<center>
									<div class="row">
										<div class="col">
										</div>
									<div class="row mt-5">
										<div class="col">
											<button @click="HabilitarCampos" type="submit" class="btn btn-outline-info2 mb-1">Actualizar</button>
											<button  @click="ActualizarPerfil" type="submit" class="btn btn-outline-info2 mb-1">Guardar</button>
								</center>
							</div>
							<div class="col-md-5 col-sm-12">
								<div class="borde p-3">
									<form >
										<div class="form-group">
											<label >Correo:</label>
										</div>
										<div class="form-group">
											<label >Usuario:</label>
										</div>
										<div class="form-group">
											<label >Contraseña:</label>
											v-model="usuarioPassword">
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
			privacidad:'',
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
			})
			.then(response =>{
				this.usuarioCorreo=response.data.correo;
				this.usuarioNickname=response.data.nickname;
				this.usuarioPassword=response.data.password;
			})
		},

		},
		HabilitarCampos(){
			this.isDisabled=false
	}
