
<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoHome">
			<nav class="navbar navbar-light bg-nav2 justify-content-between">
				<a class="navbar-brand"></a>
				<form class="form-inline">
					<input class="form-control mr-sm-2" type="text" placeholder="Usuario">
					<input class="form-control mr-sm-2" type="text" placeholder="Contraseña">
					<button class="btn btn-outline-info2 my-2 my-sm-0" type="submit">Iniciar Sesión</button>
				</form>
			</nav>
			<div class="container mt-5 mb-5">
				<div class="row">
					<div class="col columna1 p-4">
						<img src="../assets/bannerSocialFood.jpg" class="mr-5" height="218" width="656">
						<hr class="mr-5">
						<p class="mt-5 text-justify mr-5">Social food es una red social diseñada para aquellos programadores amantes de la cocina que deseen abrir un espacio dentro de su quehacer diario para compartir sus mejores recetas, con un toque de codigo y conocer mas sobre la gastronomia preferida de otros colegas.</p>
					</div>
					<div class="col columna2 p-4">
						<h4>¡Registrate, es gratis!</h4>
						<form class="mt-4">
							<div class="form-group">
								<label>Usuario:</label>
								<input type="text" class="form-control" placeholder="Example">
							</div>
							<div class="form-group">
								<label>Correo:</label>
								<input type="email" class="form-control" placeholder="name@example.com">
							</div>
							<div class="form-group">
								<label>Contraseña:</label>
								<input type="password" class="form-control" placeholder="************">
							</div>
							<button class="btn btn-outline-info2 my-2 my-sm-0" type="submit">Registrarse</button>
						</form>
					</div>
				</div>
			</div>
		</section>

	</DefaultLayout>
</template>

<script >
import DefaultLayout from '@/layout/DefaultLayout'

/* eslint-disable */
export default{
	name:'Home',
	data(){
		return {

		};
	},
	components:{
		DefaultLayout,

	},
}
</script>


<style>

.bg-nav2{
	background: #f7f7f9!important;
	box-shadow: 2px 2px 5px #999;
}

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

.columna2{
	border: 2px #48dbfb solid;
}

</style>