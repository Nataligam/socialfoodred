
<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoInicio">			
			<Layout>
				<section slot="contentColumn1" >
					<div class="borde p-3 m-5 divpublicar">
					<form class="form-inline">								
						<h4 class="ml-5">¡Crea y comparte tu receta!</h4>
						<router-link to="/Receta">
						<button class="btn btn-outline-info2 btn-lg ml-5" type="submit">Publicar Ahora</button>							
						</router-link>
					</form>	
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
	name:'Inicio',
	data(){
		return {

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

.btn-outline-info2:hover {
	color: #fff;
	background-color: #48dbfb;
	border-color: #48dbfb;
}

.borde{
	border: 2px #48dbfb solid;
}

.divpublicar{
	width: 70%;	
}



</style>