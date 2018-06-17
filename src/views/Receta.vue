
<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoReceta">			
			<Layout>
				<section slot="contentColumn1" >
					<div class="borde divpublicar col-md-12">
					<form class="form-horizontal">
                        <div class="row">
                        <div class="form-group col-md-2">
                            <h3 class="m-3" > Receta</h3>
                        </div>
                        <div class="form-group col-md-8">
                            <input type="nombreReceta" class="m-3 form-control"  placeholder="Mi Receta">
                         </div>
                        <div class="col-md-1">
                             <button class="m-3 btn btn-outline-info2" type="submit" >Publicar</button>
                        </div>
                        </div>
                        <div class="row ">
                            <div class="col-md-8 centro">
                            <img class="img-responsive imgReceta" src="https://www.cocinacaserayfacil.net/wp-content/uploads/2018/02/patatas-bravas-receta.jpg">  
                            </div>
                        
                            <div clas="col-md-1">
                                <button class="m-2 btn btn-outline-info2 btn-md ml-5" type="submit"> <span class="fas fa-plus"></span></button>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                        
                        <div class="col-md-9 centro">
                        <label >Descripccion</label><br>					
                        <textarea class="form-control" rows="5" id="descripcion"></textarea>
                        </div>
                        </div>
                        <br>
                        
                        <div class="borde container">
                            
                            <form action="" class="form-horizontal">
                            <div class="row">
                            <div class="col-md-10">
                            <h3  class="m-2">Ingredientes</h3>
                            </div>
                            <div class="col-md-2  text-right">
                                <button style="" class="m-2 btn btn-outline-info2 btn-md ml-5" type="submit"> <span class="fas fa-plus"></span></button>
                            </div>
                            </div>

                            <div class="row">
                            <div class="col-md-6 col-sm-12 form-group">
                                <label for="nombreIngrediente">Nombre: </label><br>
                                <input class="form-control" type="text" id="nombreIngrediente" name="nombreIngrediente" placeholder="Nombre"/>

                            </div>

                            <div class="col-md-6 col-sm-12  form-group">
                            <label for="cantidadIngrediente">Cantidad: </label>
                            <input class="form-control" id="cantidadIngrediente" name="cantidadIngrediente" type="text" placeholder="Cantidad"/>
                            </div>

                            <div id="listaDeIngredientes" class="p-3 col-md-12 list-group centro ">
                                <a href="#" class="list-group-item active">
                                    Ingredientes
                                </a>
                                <a href="#" class="list-group-item">Carne</a>
                                <a href="#" class="list-group-item">Pollo</a>
                                <a href="#" class="list-group-item">Sal</a>
                                <a href="#" class="list-group-item">Azucar</a>
                                </div> 
                                <br> 

                            </div>   

                            </form>
                        </div>
                        
                        <br>
                        <div class="borde ">
                            <form action="" class="form-horizontals">
                            
                            
                            <div class="row">
                            <div class="col-md-10">
                            <h3  class="p-2 m-2">Metodos</h3>
                            </div>
                            <div clas="col-md-2 text-right">
                                <button style="" class="m-2 btn btn-outline-info2 btn-md ml-5" type="submit"> <span class="fas fa-plus"></span></button>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-md-6 col-sm-12  form-group">
                                <label for="nombreMetodo">Nombre: </label><br>
                                <input class="form-control" type="text" id="nombreMetodo" name="nombreMetodo" placeholder="Nombre"/>

                            </div>

                            <div class="col-md-6 col-sm-12  form-group">
                            <label for="parametroMetodo">Parametros: </label>
                            <input class="form-control" id="parametroMetodo" name="parametroMetodo" type="text" placeholder="Parametros"/>
                            </div>
                            <div class="col-md-12 form-group">
                            <label for="cantidadIngrediente">Descripcion: </label>
                            <textarea class="form-control" rows="2" id="descripcionMetodo"></textarea>
                            </div>
                             <div id="listaDeIngredientes" class="p-3 col-md-12 list-group centro ">
                                <a href="#" class="list-group-item active">
                                    Metodos
                                </a>
                                <a href="#" class="list-group-item">Carne</a>
                                <a href="#" class="list-group-item">Pollo</a>
                                <a href="#" class="list-group-item">Sal</a>
                                <a href="#" class="list-group-item">Azucar</a>
                                </div> 
                                <br> 
                            </div>

                            </form>
                            
                        </div>
                        <br>
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
	name:'Receta',
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
   
    
    margin: 10px;
    margin-top: 50px;
	width: 98%;	
}
.centro{
    margin: auto;
}

.imgReceta{
margin: auto;
width: 100%;
height: 100%;

}




</style>