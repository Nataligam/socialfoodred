<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoUsuariosSeguidos">
			<Layout>
				<section slot="contentColumn1" >
					<div class="row">

						<div v-for="usuario in UsuariosSeguidos" v-bind:key="usuario.nombre">
							<div class="col-md-12 col-sm-12 col-xs-12  p-4 m-3">
							<div class="card border-primary mb-3" style="max-width: 18rem;">
								
							 <div class="card-header">
								 <img  class="img-fluid  rounded mx-auto d-block" v-bind:src="usuario.imagen_usuario" width="100px;">
							 </div>
							<div class="card-body">
								<h5 class="card-title">{{usuario.nickname}}</h5>
								<p class="card-text"></p>
								<button @click="enviarIdAmigo(usuario.id)" class="btn btn-outline-info2 btn-sm" type="submit">ver publicaciones</button>								
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
	name:'UsuariosSeguidos',
	data(){
		return {
			id:'',
			urlBase:'http://81c79b11.ngrok.io',
			UsuariosSeguidos:[],
			publicaciones:[],
			publicaciones2:[],
			ingrdiente:[],
			pasos:[],
			idAmigo:''

}
},mounted: function (){
	this.ListarPublicaciones();
},
methods:{
	enviarIdAmigo(id){

		this.idAmigo=id;
		this.$router.push(
		{
			name:'PublicacionesAmigo',
			params:{idAmigo:id}
		}
		)
		
	},
	
	ListarPublicaciones(){

		var value= this.getCookie('Autorizacion');
			var config = {
				headers: {'Authorization': value}
			};
		axios.get(this.urlBase+'/v1/usuario/seguidos',config,{        
		})
		.then(response =>{
			this.UsuariosSeguidos=response.data;
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

..btn-outline-info2 {
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