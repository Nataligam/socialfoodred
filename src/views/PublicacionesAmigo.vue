<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoPublicacionesAmigo  ">
			<Layout>
				<section slot="contentColumn1" >
					<div class="row">

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
													<img  class="img-fluid slaider rounded mx-auto d-block" src="http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/07/istock89179523small.jpg" alt="Los Angeles">
													<div class="carousel-caption d-none d-md-block">
														
														<p>Aqui pos iria la descipccion de la la receta</p>
													</div>
												</div>
												<div class="carousel-item centro">
													<div class="col-md-12">
													<p class="centro"> <span class="recervada">Package</span>&nbsp;&nbsp;Receta;<br><br>
													<span class="recervada">public class </span>&nbsp;&nbsp;{{publicacion.receta.nombre}} {<br><br>
													<span v-for="ingrediente in publicacion.receta.ingredientes" v-bind:key="ingrediente.nombre">
													<span class="recervada ml-3">private String</span>=&nbsp;"{{ingrediente.nombre}}{{ingrediente.cantidad}} {{ingrediente.unidad}}";<br></span><br>
													<span v-for="paso in  publicacion.receta.pasos" v-bind:key="paso.nombre">
													<span class="recervada">public void </span>&nbsp;{{paso.nombre}} (<span v-for="(parametro, index) in pasos.ingredientes" v-bind:key="parametro">
													<span v-if="Object.keys(parametros).length-1 > index" > String {{parametro.nombre}}{{parametro.cantidad}} {{parametro.unidad}},  </span>
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
										<br><button type="button" class="btn btn-outline-primary mb-5"><span class="icon-like"></span> {{publicacion.cantidadLikes}}</button>
									</div>
										<div class="col-md-8 col-sm-7 col-xs-12">
											<br>
										<input   type="text" class="form-control mb-5"> <button type="button" class="btn btn-outline-primary mb-5"><span class="icon-arrow-right"></span></button>
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

/* eslint-disable */
export default{
	name:'PublicacionesAmigo',
	data(){
		return {
			id:'',
			urlBase:'http://7c2e187f.ngrok.io',
			UsuariosSeguidos:[{
				id:'1',
				nickname:'pedro',
				correo:'pedrolop90@hotmail.com',
				password:'12345',
				imagen_usuario:'url de la imagen',
				privacidad:'true'
			},
			{ id:'2',
			nickname:'Gabriel',
			correo:'pedrolop90@hotmail.com',
			password:'12345',
			imagen_usuario:'url de la imagen',
			privacidad:'true'
		},
		{ id:'3',
		nickname:'Juan',
		correo:'pedrolop90@hotmail.com',
		password:'12345',
		imagen_usuario:'url de la imagen',
		privacidad:'true'
	},
	{ id:'4',
	nickname:'Juan',
	correo:'pedrolop90@hotmail.com',
	password:'12345',
	imagen_usuario:'url de la imagen',
	privacidad:'true'
},
{
	nickname:'Juan',
	correo:'pedrolop90@hotmail.com',
	password:'12345',
	imagen_usuario:'url de la imagen',
	privacidad:'true'
},{
	nickname:'Juan',
	correo:'pedrolop90@hotmail.com',
	password:'12345',
	imagen_usuario:'url de la imagen',
	privacidad:'true'
}
,{
	nickname:'Juan',
	correo:'pedrolop90@hotmail.com',
	password:'12345',
	imagen_usuario:'url de la imagen',
	privacidad:'true'
}
],
publicaciones:[],
publicaciones2:[],
ingrdiente:[],
pasos:[],
idAmigo:'1'

}
},mounted: function (){
    this.leerIdRuta();
	this.ListarPublicaciones();
},
methods:{
	leerIdRuta(){
	 console.log("inicio");
	  this.id = this.$route.params.id;
		console.log(this.id);
	 },
	toggleMostrar(pos){
		pos=!pos;
	},
	ListarPublicacionesseguidores(){

		axios.get(this.urlBase+'/v1/publicacion/'+this.id,{        
		})
		.then(response =>{
			this.publicaciones=response.data;
			alert("hola que mas ");



		})
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
	color: #48dbfb;
	background-color: transparent;
	background-image: none;
	border-color: #48dbfb;
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

.btn-outline-info2:hover {
	color: #fff;
	background-color: #48dbfb;
	border-color: #48dbfb;
}

.borde{
	border: 2px #48dbfb solid;
}

.divpublicar{
	
	width: 70% !important;
}



</style>