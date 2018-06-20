
<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoReceta">			
			<Layout>
				<section slot="contentColumn1" >
                    <div class="borde col-md-8 offset-md-2 col-sm-12">
                        <center><h4 class="mt-4 mb-5">Crear y Compartir Receta:</h4></center>
                        <div class="row">
                            <div class="col-md-12 offset-md-1 col-sm-12">
                             <form class="w-75 ">
                              <div class="form-group">                            
                                <input v-model="titulo" type="text" class="form-control" placeholder="Ingrese el nombre de la receta">                        
                            </div>
                            <label>Seleccione las imagenes:</label>
                            <div class="input-group mb-3">                            
                              <div class="custom-file">
                                <input type="file" class="custom-file-input">
                                <label class="custom-file-label"></label>
                            </div>
                            <div class="input-group-append">
                                <span class="input-group-text">Cargar</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label >Nombre de la categoria:</label>                            
                            <input type="text" class="form-control" placeholder="Postre, Plato Fuerte,  Entrada">                        
                        </div>
                        <div class="form-group">
                            <h5>Ingredientes:</h5>
                            <div class="borde p-3">
                                <div class="row">
                                    <div class="col-5">
                                      <label>Nombre:</label>
                                      <input v-model="nombreing" type="text" class="form-control" placeholder="Nombre del ingrediente">
                                  </div>
                                  <div class="col-3">
                                     <label>Cantidad:</label>
                                     <input v-model="cantidading" type="number" class="form-control" placeholder="100">
                                 </div>
                                  <div class="col-2">
                                     <label>Unidad:</label>
                                     <input v-model="unidading" type="text" class="form-control" placeholder="g">
                                 </div>
                                 <div class="col-2">
                                    <label>Añadir:</label>
                                     <button v-on:click="agregarIng" class="btn btn-outline-info2" type="submit"><span class="icon-plus"></span></button>
                                 </div>
                             </div>
                             <!--Lista de ingredientes-->
                             <div class="mt-3">
                                 <ul class="list-group">
                                  <label>Ingredientes agregados:</label>                                  
                                  <li class="list-group-item">Ingrediente 1<button class="btn btn-outline-danger btnIzq"><span class="icon-close"></span></button></li>
                                  <li class="list-group-item">Ingrediente 2<button class="btn btn-outline-danger btnIzq"><span class="icon-close"></span></button></li>                     
                              </ul>
                          </div>
                          <!--Lista de ingredientes-->                               
                      </div>
                  </div>
                  <div class="form-group">
                    <h5>Pasos:</h5>
                    <div class="borde p-3">
                        <div class="row">
                            <div class="col-5">
                                <label >Nombre:</label>
                                <input  v-model="nombrepaso" type="text" class="form-control" placeholder="Nombre del paso">
                            </div>
                            <div class="col-5">
                                <label >Descripción:</label>
                                <textarea  v-model="descripcionpaso" class="form-control" rows="1"></textarea>
                            </div>
                            <div class="col-2">
                                <label>Añadir:</label>
                             <button class="btn btn-outline-info2" type="submit"><span class="icon-plus"></span></button>
                         </div>                        
                     </div>
                     <!--Lista de pasos-->
                     <div class="mt-3">
                         <ul class="list-group">
                          <label>Pasos agregados:</label>                                  
                          <li class="list-group-item">Paso1<button class="btn btn-outline-danger btnIzq"><span class="icon-close"></span></button></li>
                          <li class="list-group-item">Paso2<button class="btn btn-outline-danger btnIzq"><span class="icon-close"></span></button></li>                     
                      </ul>
                  </div>
                  <!--Lista de pasos--> 
              </div>
          </div>
          <button type="submit" class="btn btn-outline-info2 mb-5 btnIzq">VER RECETA</button>     
      </form>
  </div>
</div>
<input v-model="message" placeholder="edit me">
							<p>Message is: {{ message }}</p>
							

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

            ingredientes:[],
            titulo,
            nombreing,
            cantidading,
            unidading,
            nombrepaso,
            descripcionpaso


		}
    },
    methods:{
		 agregarIng(){
         this.ingredientes.push({nombre:this.nombreing, cantidad:this.cantidading,unidad:this.unidading});
         this.nombreing='';
         this.cantidading='';
         this.unidad='';
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

.btnIzq{
    float: right;
}



</style>