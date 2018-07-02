<template>
	<div class="default">
		<nav class="navbar navbar-expand-lg navbar-light bg-nav2 justify-content-between ">			
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>				
			<div>
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav">
						<li class="nav-item ">
							<router-link to="/Inicio">
								<a class="nav-link" href="#"><span class="icon-home"></span></a>
							</router-link>
						</li>						
						<li class="nav-item">
							<router-link to="/UsuariosSeguidos">
								<a class="nav-link" href="#"><span class="icon-people"></span></a>
							</router-link>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#"><span class="icon-bell"></span></a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<span class="icon-settings"></span>
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<router-link to="/Perfil">		
									<a class="dropdown-item" href="#"><span class="icon-user"></span> Perfil</a>
								</router-link>						
								<a class="dropdown-item" href="#"><span class="icon-wrench"></span> Configuraciones</a>
								<a class="dropdown-item" href="#" v-on:click="logout"><span class="icon-power"></span> Salir</a>
							</div>
						</li>
					</ul>
				</div>
			</div>		 
			<a class="navbar-brand"></a>
			<form class="form-inline">				
				<input class="form-control mr-sm-2" v-model="nombreBuscar" type="search" placeholder="Buscar" aria-label="Buscar">
				
				<button class="btn btn-outline-info2" @click="enviarNombre" type="submit"><span class="icon-magnifier"></span></button>
				
			</form>
		</nav>
		<div class="row mt-5 mb-5 ">
			<div class="col">
				<main class="main-section">
					<slot name="contentColumn1"></slot>									
				</main>
			</div>
		</div>			
	</div>	
</template>

<script >
import axios from 'axios'
export default{
	name:'Layout',
	data(){
		return {
			nombreBuscar:'',
			urlBase:'http://f5b62ead.ngrok.io',
			hola:'hola que mas',
			infoAmigo:[]
		};
	},
	components:{
	},
	methods:{
		logout(){
			console.log('cerrarlogin')
			axios.post(this.urlBase+'/v1/usuario/cerrarSession',{
			})
			.then(response =>{
				console.log(response);
				if(response.data == true){
					this.$router.push('/')
				}
			})
		},
		enviarNombre(){	
			this.infoAmigo=null
			console.log("buscaramigo");			 
			axios.get(this.urlBase+'/v1/usuarios/' + this.nombreBuscar,{
			})
			.then(response =>{
				this.infoAmigo=response.data				
				this.$router.push({
					name:'PerfilAmigo',		
				}			
				)
			})									
		},
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


.bg-nav2{
	background: #f7f7f9!important;
	box-shadow: 2px 2px 5px #999;	
}

.btn{
	background: transparent;
}

.row{
	margin-left: 0px;
	margin-right: 0px;
}

.bg-conectados{
	background: #f7f7f9;
	padding: 0px;
}


</style>