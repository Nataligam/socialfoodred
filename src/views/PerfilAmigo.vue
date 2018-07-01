<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoPerfil">	
			<Layout>
				<section slot="contentColumn1">					
					
					<div class="row">
						
						<div v-for="(item,index) in infoAmigo">
							<div class="col-md-12 col-sm-12 col-xs-12  p-4 m-4">
								<div class="card border-primary mb-3" style="max-width: 18rem;">
									<div class="card-header">
										<img  class="img-fluid  rounded mx-auto d-block" :src="item.imagen_usuario" width="100px;">
									</div>
									<div class="card-body">
										<h5 class="card-title">{{item.nickname}}</h5>
										<small class="card-text">Correo: {{item.correo}}</small>
										<hr>
										<small class="card-text">Seguidores: {{item.seguidores}}</small>
										<hr>
										<small class="card-text">Seguidos: {{item.seguidos}}</small>
										<hr>
										<button type="button" class="btn btn-outline btn-sm">Publicaciones</button>			
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
	name:'PerfilAmigo',
	data(){
		return {
			nombreBuscar:'',
			infoAmigo:[],
			urlBase:'http://7c2e187f.ngrok.io'		
		}
	},
	components:{
		DefaultLayout,
		Layout
	},
	mounted: function (){
		this.leerNombreAmigo();
		this.buscar();
		this.nombreBuscar=''
	},
	methods:{
		buscar(){
			console.log("buscaramigo");			 
			axios.get(this.urlBase+'/v1/usuarios/' + this.nombreBuscar,{
			})
			.then(response =>{
		this.infoAmigo=response.data


			})
		},
		leerNombreAmigo(){			
			this.nombreBuscar = this.$route.params.nomamigo;			
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

.color{
	color: #ff9600;	
}

.size{
	font-size: 20px;
}

</style>
