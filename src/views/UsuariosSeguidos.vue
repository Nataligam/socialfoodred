<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoUsuariosSeguidos">
			<Layout>
				<section slot="contentColumn1" >
					<div class="row">
                        
                    <div v-for="usuario in UsuariosSeguidos" v-bind:key="usuario.nombre">
                        <div class="col-md-12 col-sm-12 col-xs-12 borde m-3 p-4">
							
                            <img  class="img-fluid  rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS50Qe1IT1Df3dhW1EJbAyhTH-BuvICovv8y01k_zGDRU180_ya" alt="Los Angeles">
							{{usuario.nickname}} <br>
                            <router-link to="/Receta">
								<button class="btn btn-outline-info2 btn-lg" type="submit">ver publicaciones</button>
						    </router-link>
                            
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
	name:'UsuariosSeguidos',
	data(){
		return {
         id:'',
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
		 pasos:[]

		}
	},mounted: function (){
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
	 ListarPublicaciones(){
		 
		 axios.get('http://1ed39cb8.ngrok.io/v1/publicacion/publicas',{        
			})
			.then(response =>{
      		this.publicaciones=response.data;
					

			  
			  
			})
	 },
	ListarPublicacionesseguidores(){
		 
		 axios.get('http://1ed39cb8.ngrok.io/v1/publicacion/publicas',{        
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