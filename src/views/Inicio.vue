
<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoInicio">
			<Layout>
				<section slot="contentColumn1" >
					<div class="row">
						<div class="col-md-6 offset-md-3">
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
														<span class="recervada ml-3">private String</span>=&nbsp;"{{ingrediente.nombre}}&nbsp;{{ingrediente.cantidad}} &nbsp;{{ingrediente.medida}}";<br></span><br>
														<span v-for="paso in  publicacion.receta.pasos" >
															<span class="recervada">public void </span>&nbsp;{{paso.nombre}} (<span v-for="(parametro, index) in paso.ingredientes" >
																<span v-if="Object.keys(paso.ingredientes).length-1 > index" > String {{parametro.nombre_ing}}&nbsp;{{parametro.cantidad}} &nbsp;{{parametro.medida}},  </span>
																<span v-else> String {{parametro.nombre}}&nbsp;{{parametro.cantidad}} &nbsp;{{parametro.medida}}</span> </span>) { <br> 
																//  {{paso.descripcion}} <br>
															}<br></span>
														}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
													</p>
													
													
												</div>
											</div>																		
										</div>
										<div class="card-body">
											<div class="row">
												<div class="col-xl-6 col-md-6 col-6">
													<center>
														<button @click="MeGusta(publicacion.id,publicacion.like)" type="button" class="btn btn-outline-info2"><span class="fas fa-utensils"></span> {{publicacion.cantidadLikes}}</button>
													</center>	
												</div>
												<div class="col-xl-6 col-md-6 col-6">
													<center>
														<button class="btn btn-outline-info2" type="button" data-toggle="collapse" :data-target="`#demo2${index}`" aria-expanded="false" aria-controls="collapseExample">
															Comentar
														</button>
													</center>
												</div>														
											</div>
											
											<div class="col-md-12 mt-3">
												<div class="collapse" v-bind:id="['demo2'+index]">
													<div v-for="comentario in publicacion.comentarios" class="card card-body">
														{{comentario.nickname}}&nbsp;:&nbsp;{{comentario.comentario}}
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

	/* eslint-disable */
	export default{
		name:'Inicio',
		data(){
			return {
				id:'',
				publicaciones:[],
				
				comentario:'',
				
				urlBase:'http://35.188.111.107:8080/socialfood',

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
			
			MeGusta(publicacion,like){
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
						this.ListarPublicaciones();

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
							this.ListarPublicaciones();

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

	.pru{
		background:rgb(247, 211, 88);
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
