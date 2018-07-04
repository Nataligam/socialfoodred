
<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoInicio">
			<Layout>
				<section slot="contentColumn1" >
					<div class="row">
						<div class="col-md-8 offset-md-2">
							<div class="borde p-3 m-2">
								<form class="form-inline">
									<div class="row">
										<div class="col-lg-12 col-md-12 col-sm-12 col-xl-8 ">
											<h4 >¡Crea y comparte tu receta!  </h4>
										</div>
										<div class=" col-lg-12 col-md-12 col-sm-12 col-xl-4">
											<router-link to="/Receta">
												<button class="btn btn-outline-info2 btn-lg" type="submit">Publicar Ahora</button>
											</router-link>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div v-for="(publicacion,index) in publicaciones" v-bind:key="publicacion.id" class="row">
						<div class="col-md-8 offset-md-2">
							<div class="borde p-3 m-2 ">
								<form class="form-inline">
									

									<div class="row">
										<small class="">{{publicacion.fecha}}</small><br>
										<div class="col-md-12 col-sm-12 m-2 centro">
											<div v-bind:id="['demo'+index]" class="carousel slide " data-ride="carousel">

												<!-- Indicators -->
												<ul class="carousel-indicators">
													<li :data-target="`#demo${index}`" data-slide-to="0" class="active"></li>
													<li :data-target="`#demo${index}`" data-slide-to="1"></li>

												</ul>

												<!-- The slideshow -->
												<div class="carousel-inner col-md-12 ">
													<div class="carousel-item active">
														<img  class="img-fluid slaider rounded mx-auto d-block" v-bind:src="publicacion.imagen_receta" alt="Los Angeles">
														
													</div>
													<div class="carousel-item centro">
														<div class="col-md-12">
															<p class="centro"> <span class="recervada">Package</span>&nbsp;&nbsp;Receta;<br><br>
																<span class="recervada">public class </span>&nbsp;&nbsp;{{publicacion.receta.nombre}} {<br><br>
																<span v-for="ingrediente in publicacion.receta.ingredientes" v-bind:key="ingrediente.nombre">
																	<span class="recervada ml-3">private String</span>=&nbsp;"{{ingrediente.nombre}}{{ingrediente.cantidad}} {{ingrediente.unidad}}";<br></span><br>
																	<span v-for="paso in  publicacion.receta.pasos" v-bind:key="paso.nombre">
																		<span class="recervada">public void </span>&nbsp;{{paso.nombre}} (<span v-for="(parametro, index) in paso.ingredientes" v-bind:key="parametro">
																			<span v-if="Object.keys(paso.ingredientes).length-1 > index" > String {{parametro.nombre}}{{parametro.cantidad}} {{parametro.unidad}},  </span>
																			<span v-else> String {{parametro.nombre}}{{parametro.cantidad}} {{parametro.unidad}}</span> </span>) { <br> {{pasos.ingredientes}}
																			//  {{paso.descripcion}} <br>
																		}<br></span>
																	}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
																</p>
															</div>
														</div>
													</div>
							
													<!-- Left and right controls -->
													<a class="carousel-control-prev" :href="`#demo${index}`" data-slide="prev">
														<span class="carousel-control-prev-icon"></span>
													</a>
													<a class="carousel-control-next" :href="`#demo${index}`" data-slide="next">
														<span class="carousel-control-next-icon"></span>
													</a>

												</div>
											</div>

											<div class="col-md-2 col-sm-2">
												<br><button @click="MeGusta(publicacion.id,publicacion.like)" type="button" class="btn btn-outline-primary mb-5"><span class="icon-like"></span> {{publicacion.cantidadLikes}}</button>
												
											</div>
											<div class="col-md-8 col-sm-7 col-xs-12">
											
											<br><button class="btn btn-outline-info2 mb-5" type="button" data-toggle="collapse" :data-target="`#demo2${index}`" aria-expanded="false" aria-controls="collapseExample">
													Comentar
											</button>
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
												<br>
												
											
										</div>


									</form>
								</div>
							</div>
						</div>
						<div class="card border-primary mb-3 w-75" >
							<div class="card-header">
								<div class="row">
									<div class="col">
									
										<img  class="img-fluid  rounded mx-auto d-block" src="https://images-gmi-pmc.edge-generalmills.com/3bd48a86-ffd0-475a-a8bc-091ddd0fae3f.jpg" width="400px;">
									</div>
									<div class="col">
										<img  class="img-fluid  rounded mx-auto d-block" src="https://www.analiticaweb.es/wp-content/uploads/2010/07/ga001ok1.png" width="400px;">
									</div>
								</div>																		
							</div>
							<div class="card-body">
								<div class="row">
									<div class="col">
										<center>
											<button class="btn btn-outline-info2"><span class="icon-like"></span></button>
											<button class="btn btn-outline-info2"><span class="icon-dislike"></span></button>
										</center>	
									</div>
									<div class="col">
										<center>
											<button class="btn btn-outline-info2 mb-3" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
												Comentarios
											</button>
										</center>
									</div>														
								</div>
								
									<div class="col-md-12">
									<div class="collapse" id="collapseExample">
										<div class="card card-body">
											Deliciosa receta.
										</div>
										<div class="card card-body">
											Deliciosa receta.
										</div>
										<div class="card card-body">
											Deliciosa receta.
										</div>
										<div class="card card-body">
											Deliciosa receta.
										</div>
										<div class="card card-body">
											Deliciosa receta.
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
		name:'Inicio',
		data(){
			return {
				id:'',
				publicaciones:[],
				publicaciones2:[],
				ingrdiente:[],
				comentario:'',
				parametros:[],
				pasos:[],
				
				urlBase:'http://81c79b11.ngrok.io'

			}
		},
		mounted: function (){
		this.ListarPublicaciones();		
		},
		methods:{
			toggleMostrar(pos){
				pos=!pos;
			},
			ListarPublicaciones(){
				
			var value= this.getCookie('Autorizacion');
			var config = {
				headers: {'Authorization': value}
			}; 
				axios.get(this.urlBase+'/v1/publicacion/publicas',config,{        
				})
				.then(response =>{
					this.publicaciones=response.data;	
					console.log(response);									
				})
			},
			Boton(){
				console.log(this.parametros);
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

	.divpublicar{
		width: 70% !important;
	}
	.recervada{
  color: blue;
}



	</style>
