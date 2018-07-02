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
										<div class="row">
											<div class="col">
												<small class="card-text"><span class="icon-user-following"></span> Seguidores: {{item.seguidores}}</small>
											</div>
											<div class="col">
												<small class="card-text"><span class="icon-user-follow"></span> Seguidos: {{item.seguidos}}</small>
											</div>
										</div>												
										<hr>
										<button type="button" class="btn btn-outline-info2 btn-sm">Publicaciones</button>	
										<p>hola</p>					
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
			urlBase:'http://f5b62ead.ngrok.io',	
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

	}
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

</style>
