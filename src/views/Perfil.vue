<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoPerfil">	
			<Layout>
				<section slot="contentColumn1">
					<div class=" p-3 m-5">
						<div class="row">
							<div class="col">
								<center>
									<img src="../assets/avatar.png" width="200">
								</center>
							</div>
							<div class="col">
								<div class="borde p-3">
									<form>
										<div class="form-group">
											<label >Correo:</label>
											<input type="email" class="form-control">	
										</div>
										<div class="form-group">
											<label >Usuario:</label>
											<input type="text" class="form-control">	
										</div>
										<div class="form-group">
											<label >Contraseña:</label>
											<input type="password" class="form-control">
										</div>
										<center>
										<button type="submit" class="btn btn-outline-info2">Actualizar</button>
										</center>										
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

export default{
	name:'Perfil',
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
