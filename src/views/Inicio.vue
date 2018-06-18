
<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoInicio">			
			<Layout>
				<section slot="contentColumn1" >
					<div class="row">
						<div class="col-md-6 offset-md-3">
							<div class="borde p-3 ">
								<form class="form-inline">
									<div class="row">
										<div class="col-lg-8 col-md-12 col-sm-12 ">
											<h4 >¡Crea y comparte tu receta!</h4>
										</div>
										<div class=" col-lg-4 col-md-12 col-sm-12">
											<router-link to="/Receta">
												<button class="btn btn-outline-info2 btn-lg" type="submit">Publicar Ahora</button>						
											</router-link>
										</div>
									</div>								
								</form>	
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
	width: 70% !important;	
}



</style>