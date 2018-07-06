<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoUsuariosSeguidores">
			<Layout>
				<section slot="contentColumn1" >
					<center><h4>Usuarios Seguidores</h4></center>
					<hr>
					<div class="row">
					<div class="alert alert-info alert-dismissible col-md-12 col-sm-12 col-xs-12 " v-if="usuariosSeguidores.length == 0">
						<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
						<center><strong>No sigues a nadie por el momento</strong></center>
					</div>
						<div v-for="usuario in usuariosSeguidores" v-bind:key="usuario.nombre">
							<div class="col-md-12 col-sm-12 col-xs-12  p-4 m-3">
								<div class="card border-primary mb-3" style="max-width: 18rem;">
									<div class="card-header">
										<img  class="img-fluid  rounded mx-auto d-block" v-bind:src="usuario.imagen_usuario" width="100px;">
									</div>
									<div class="card-body">
										<h6 class="card-title">{{usuario.nickname}}</h6>
										<p class="card-text"><small>Correo: {{usuario.correo}}</small></p>
									</div>
									<div class="card-footer">
										<div class="row">
											<div class="col-6">
												<button @click="enviarIdAmigo(usuario.id)" class="btn btn-outline-info2 btn-sm" type="submit"><span class="icon-grid"></span> Ver</button>
											</div>
											<div class="col-6">
												<div v-if="usuario.siguiendo==false">
													<button @click="seguir(usuario.id)" class="btn btn-outline-info2 btn-sm"><span class="icon-user-follow"></span> Seguir</button>
												</div>
												<div v-if="usuario.siguiendo==true">
													<button @click="noSeguir(usuario.id)" class="btn btn-outline-info2 btn-sm"><span class="icon-user-unfollow"></span> No seguir</button>
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

/* eslint-disable */
export default{
	name:'UsuariosSeguidores',
	data(){
		return {
			id:'',
			urlBase:'http://35.239.220.4:8080/socialfood',
			usuariosSeguidores:[],
			idAmigo:''

		}
	},mounted: function (){
		this.ListarUsuariosSeguidores();

	},
	methods:{
		enviarIdAmigo(id){
			this.idAmigo=id;
			this.$router.push({
				name:'PublicacionesAmigo',
				params:{idAmigo:id}
			})
		},
		seguir(id){
			var value= this.getCookie('Autorizacion');
			var config = {
				headers: {'Authorization': value}
			};
			console.log(value+ "TOKEN QUE SE ENVIA")
			axios.post(this.urlBase+'/v1/usuario/seguir',{
				id_amigo:id
			},{
				headers: {'Authorization': value}
			})
			.then(response =>{
				this.ListarUsuariosSeguidores();

			})
		},
		noSeguir(id){
			var value= this.getCookie('Autorizacion');
			const headers = {
				'Authorization': value
			}
			const data = {
				id_amigo: id
			}
			axios.delete(this.urlBase+'/v1/usuario/seguir',{headers,data}
				)
			.then(response =>{
				this.ListarUsuariosSeguidores();
				console.log('dejo de seguir')

			})

		},
		ListarUsuariosSeguidores(){
			var value= this.getCookie('Autorizacion');
			var config = {
				headers: {'Authorization': value}
			};
			console.log(value+ "TOKEN QUE SE ENVIA")
			axios.get(this.urlBase+'/v1/usuario/seguidores', config,{
			})
			.then(response =>{
				console.log(response.data)
				this.usuariosSeguidores=response.data;
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
.recervada{
	color: blue;
}

.centro{
	margin: auto;

}
.slaider{
	width: 100%;
	max-height: 400px;
}


.borde{
	border: 1px #ff7043 solid;
}

.divpublicar{

	width: 70% !important;
}



</style>
