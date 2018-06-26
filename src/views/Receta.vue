
<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoReceta">			
			<Layout>
				<section slot="contentColumn1" >
          <div class="borde col-md-8 offset-md-2 col-sm-12">
            <center><h4 class="mt-4 mb-5">Crear y Compartir Receta:</h4></center>
            <div class="row">
              <div class="col-md-10 offset-md-1 col-sm-12">
               <form >
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
                    <li v-for="(ingrediente, index) in ingredientes" v-bind:key="ingrediente.nombre" class="list-group-item">
                      {{ingrediente.nombre }} {{ingrediente.cantidad }} {{ingrediente.unidad}}
                      <button @click="eliminarIng(index)" class="btn btn-outline-danger btnIzq"><span class="icon-close"></span></button>
                    </li>
                  </ul>
                </div>
                <!--Lista de ingredientes-->                               
              </div>
            </div>
            <div class="form-group">
              <h5>Pasos:</h5>
              <div class="borde p-3">
                <div class="row ">
                  <div class="form-group col-12">
                    <label >Nombre:</label>
                    <input  v-model="nombrepaso" type="text" class="form-control" placeholder="Nombre del paso">
                  </div>
                  <div class=" form-group col-12">
                    <label >Ingredientes:</label>
                    <select v-model="parametros" multiple class="form-control">
                      <option v-for="ingrediente in ingredientes" v-bind:key="ingrediente.nombre" >{{ingrediente.nombre }} {{ingrediente.cantidad }} {{ingrediente.unidad}}</option>

                    </select>
                  </div>
                  <div class="form-group col-10">
                    <label >Descripción:</label>
                    <textarea  v-model="descripcionpaso" class="form-control" rows="2"></textarea>
                  </div>
                  <div class="col-2">
                    <label>Añadir:</label>
                    <button class="btn btn-outline-info2" type="submit" v-on:click="agregarpasos"><span class="icon-plus"></span></button>
                  </div>                        
                </div>
                <!--Lista de pasos-->
                <div class="mt-3">
                 <ul class="list-group">
                  <label>Pasos agregados:</label>                                  
                  <li v-for="(paso, index) in pasos" v-bind:key="paso.nombre" class="list-group-item">
                    {{paso.nombre }} 
                    <button @click="eliminarpaso(index)" class="btn btn-outline-danger btnIzq"><span class="icon-close"></span></button>
                  </li>
                </ul>
              </div>
              <!--Lista de pasos--> 
            </div>
          </div>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-outline-info2 mb-5 btnIzq" data-toggle="modal" data-target="#exampleModal">
            Vista previa
          </button>

          <!-- Modal plantilla para crear la img de la receta -->
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Mi receta</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                 <div class="row">
                  <p> <span class="recervada">Package</span>&nbsp;&nbsp;&nbsp;Receta;<br><br>
                    <span class="recervada">public class </span>&nbsp;&nbsp; {{titulo}} {<br><br>
                    <span v-for="ingrediente in ingredientes" v-bind:key="ingrediente.nombre">
                      <span class="recervada ml-3">private String</span>=&nbsp;"{{ingrediente.nombre}}  {{ingrediente.cantidad}}  {{ingrediente.unidad}}";<br></span><br>
                      <span v-for="paso in pasos" v-bind:key="paso.nombre">
                        <span class="recervada">public void </span>&nbsp;{{paso.nombre}} (<span v-for="(parametro, index) in paso.parametro" v-bind:key="parametro">
                          <span v-if="Object.keys(parametros).length-1 > index" > String {{parametro}}, </span>
                          <span v-else> String {{parametro}} </span> </span>) { <br>
                          //  {{paso.descripcion}} <br>
                        }<br></span>
                      }
                    </p>
                  </div>   
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-info2 mb-5 btnIzq" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-outline-info2 mb-5 btnIzq">Publicar</button>
                </div>
              </div>
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
	name:'Receta',
	data(){
		return {
      ingredientes:[],
      pasos:[],
      titulo:'',
      selected:'',
      nombreing:'',
      cantidading:'',
      unidading:'',
      nombrepaso:'',
      parametros:'',
      descripcionpaso:''

    }
  },
  methods:{
   agregarIng(){

    this.ingredientes.push({nombre:this.nombreing, cantidad:this.cantidading, unidad:this.unidading});
    this.nombreing='';
    this.cantidading='';
    this.unidading='';
  },
  agregarpasos(){
    console.log(this.ingredientes)
    this.pasos.push({nombre:this.nombrepaso, parametro:this.parametros, descripcion:this.descripcionpaso});
    this.nombrepaso='';
    this.descripcionpaso='';

  },
  eliminarIng(index){

   this.ingredientes.splice(index,1);

 },
 eliminarpaso(index){

   this.pasos.splice(index,1);

 },
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

.recervada{
  color: blue;
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