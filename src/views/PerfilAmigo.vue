<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoPerfil">	
			<Layout>
				<section slot="contentColumn1">
					<div class="row ">
						<div class="col-md-8 offset-md-2">
							<div class="row borde mb-3" v-for="(item,index) in infoAmigo">
								<div class="col-lg-3 col-md-4 col-sm-12">
									<center>
										<div class="card mb-4 mt-2"  style="width: 200px;">
											<img class="card-img-top" src="../assets/avatar.png" alt="Card image cap">
											<div class="card-body">
												<p class="card-text size">{{item.nickname}}</p>				
											</div>
										</div>
									</center>
								</div>
								<div class="col-lg-7 col-md-7 offset-md-1 col-sm-12">
									<div class=" p-3 mb-3 mt-3">
										<p class="size"><span class="icon-envelope-open color"></span> Correo Electrónico: {{item.correo}}</p>
										<hr>
										<p class="size"><span class="icon-user-following color"></span> Seguidores: {{item.seguidores}}</p>
										<hr>
										<p class="size"><span class="icon-user-follow color"></span> Seguidos: {{item.seguidos}}</p>
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
				console.log(response.data);
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
