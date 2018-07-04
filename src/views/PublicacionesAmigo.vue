<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoPublicacionesAmigo  ">
			<Layout>
				<section slot="contentColumn1" >
					<div class="row">

						<div v-for="(publicacion,index) in publicaciones" v-bind:key="publicacion.id" class="row">
							
							<div class="col-md-8 offset-md-2">
								<div class="borde p-3 m-2 ">
									<div class="card border-primary mb-3 " >
										<div class="card-header">
											<div class="row">
												<div class="col">
													
													<img  class="img-fluid slaider rounded mx-auto d-block" v-bind:src="publicacion.imagen_receta" alt="Los Angeles">
												</div>
												<div class="col">
													
													<p class="centro"> <span class="recervada">Package</span>&nbsp;&nbsp;Receta;<br><br>
														<span class="recervada">public class </span>&nbsp;&nbsp;{{publicacion.receta.nombre}} {<br><br>
														<span v-for="ingrediente in publicacion.receta.ingredientes" v-bind:key="ingrediente.nombre">
															<span class="recervada ml-3">private String</span>=&nbsp;"{{ingrediente.nombre}}{{ingrediente.cantidad}} {{ingrediente.unidad}}";<br></span><br>
															<span v-for="paso in  publicacion.receta.pasos" v-bind:key="paso.nombre">
																<span class="recervada">public void </span>&nbsp;{{paso.nombre}} (<span v-for="(parametro, index) in paso.ingredientes" v-bind:key="parametro">
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
														<center>
															<button @click="MeGusta(publicacion.id,publicacion.like)" type="button" class="btn btn-outline-primary mb-5"><span class="icon-like"></span> {{publicacion.cantidadLikes}}</button>
														</center>	
													</div>
													<div class="col">
														<center>
															<button class="btn btn-outline-info2 mb-5" type="button" data-toggle="collapse" :data-target="`#demo2${index}`" aria-expanded="false" aria-controls="collapseExample">
																Comentar
															</button>
														</center>
													</div>														
												</div>
												
												<div class="col-md-12">
													<div class="collapse" v-bind:id="['demo2'+index]">
														<div v-for="comentario in publicacion.comentarios" v-bind:key="comentario" class="card card-body">
															{{comentario.nickname}}:{{comentario.comentario}}
														</div>
														
														<br>
														<div class="row">
															<div class="col-md-10">
																<input  v-model="comentario" type="text" class="form-control mb-5">
															</div>
															<div class="col-md-2">
																<button @click="Comentar(publicacion.id,comentario)"  type="button" class="btn btn-outline-primary mb-5"><span class="icon-arrow-right"></span></button>
															</div>
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

	/* eslint-disable */
	export default{
		name:'PublicacionesAmigo',
		data(){
			return {
				id:'',
				urlBase:'http://6ff53e3f.ngrok.io',
				publicaciones:[],
				idAmigo:'1'

			}
		},mounted: function (){
			this.leerIdRuta();
			this.ListarPublicacionesSeguidores();
		},
		methods:{
			leerIdRuta(){
				console.log(this.$route.params.idAmigo);
				this.id = this.$route.params.idAmigo;
				console.log(this.id);
			},
			toggleMostrar(pos){
				pos=!pos;
			},
			ListarPublicacionesSeguidores(){
				
				var value= this.getCookie('Autorizacion');
				var config = {
					headers: {'Authorization': value}
				}; 

				console.log(this.id);

				axios.get(this.urlBase+'/v1/publicacion/'+this.id,config,{        
				})
				.then(response =>{
					this.publicaciones=response.data;
					alert("hola que mas ");



				})
			},
			MeGusta(publicacion,like){

				if (like===false){
					var value= this.getCookie('Autorizacion');

					axios.post(this.urlBase+'/v1/like',{
						publicacion_id:publicacion
					},{
						headers: {'Authorization': value}
					})
					.then(response =>{
						console.log(response);
						this.ListarPublicaciones();
						
					})
				}else {
					console.log('no di like');
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
					this.ListarPublicaciones();
					
				})
				
				this.comentario='';
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