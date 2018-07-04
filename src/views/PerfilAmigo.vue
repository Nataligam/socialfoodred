<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoPerfil">
			<Layout>
				<section slot="contentColumn1">
					<div class="row">
						<div class="col-sm-12 col-md-12 col-xl-10 offset-md-3 offset-xl-3">
							<div class="input-group mb-3 w-50">
								<input type="text" v-model="nombreBuscar" class="form-control" placeholder="Ingrese el nombre">
								<div class="input-group-append">
									<button class="btn btn-outline-info2" @click="BuscarAmigo" type="button">Buscar</button>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
					<div class="alert alert-info alert-dismissible col-md-12 col-sm-12 col-xs-12 " v-if="infoAmigo.length == 0">
						<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
						<center><strong>No se encontraron resultados con ese nombre</strong></center>
					</div>
						<div v-for="usuario in infoAmigo" v-bind:key="usuario.nombre">
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

export default{
	name:'PerfilAmigo',
	data(){
		return {
			nombreBuscar:'',
			urlBase:'http://a8b88f32.ngrok.io',
			infoAmigo:[]
		}
	},
	components:{
		DefaultLayout,
		Layout
	},
	mounted: function (){
		this.nombreBuscar=''
	},
	methods:{
		BuscarAmigo(){
			console.log("buscaramigo");
			var value= this.getCookie('Autorizacion');
			var config = {
				headers: {'Authorization': value}
			};
			console.log(value+ "TOKEN QUE SE ENVIA")
			axios.get(this.urlBase+'/v1/usuarios/' + this.nombreBuscar,config,{
			})
			.then(response =>{
				this.infoAmigo=response.data
			})
		},
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
				this.BuscarAmigo();

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
				this.BuscarAmigo();
				console.log('dejo de seguir')

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


	}
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

.dimensiones{
	max-width: 300px;
	min-width: 270px;
}

</style>
