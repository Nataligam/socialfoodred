
<template>
	<DefaultLayout>
		<section slot="content" class="ContenidoReceta">
			<Layout>
				<section slot="contentColumn1" >
          <div class="bordeSombra p-5 col-md-8 offset-md-2 col-sm-12">
            <center><h4>Crear y Compartir Receta:</h4></center>
            <div class="row mt-5">
              <div class="col-md-10 offset-md-1 col-sm-12">
               <form >
                <div class="form-group">
                  <input v-model="titulo" type="text" class="form-control" placeholder="Ingrese el nombre de la receta">
                  
                </div>
                <label>Seleccione las imagenes:</label>
                <div class="input-group mb-3">
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="fichero">
                    <label class="custom-file-label"></label>
                  </div>
                  <div class="input-group-append">
                   <input type="button" @click="subirImagen" class="input-group-text" value="cargar">

                 </div>
               </div>
               <div class="form-group">
                <label >Nombre de la categoria:</label>
                <select v-model="selectCategoria" class="form-control">
                  <option v-bind:value="categoria.id" v-for="categoria in categorias" v-bind:key="categoria.id" >{{categoria.nombre}}</option>
                </select>
              </div>
              <div class="form-group">
                <h5>Ingredientes:</h5>
                <div class="borde p-3">
                  <div class="row">
                    <div class="col-5">
                      <label>Nombre:</label>
                      <input v-model="nombreing" type="text" class="form-control" placeholder="Nombre del ingrediente">
                    </div>
                    <div class="col">
                     <label>Cantidad:</label>
                     <input v-model="cantidading" type="number" class="form-control" placeholder="100">
                   </div>
                   <div class="col">
                     <label>Unidad:</label>
                     <input v-model="unidading" type="text" class="form-control" placeholder="g">
                   </div>
                   <div class="col">
                    <label>Añadir:</label><br>
                    <button v-on:click="regIngredientes" class="btn btn-outline-info2" type="submit"><span class="icon-plus"></span></button>
                  </div>
                </div>
                <!--Lista de ingredientes-->
                <div class="mt-3">
                 <ul class="list-group">
                  <label>Ingredientes agregados:</label>
                  <li v-for="(ingrediente, index) in ingredientes" v-bind:key="ingrediente.id" class="list-group-item">
                    {{ingrediente.nombre }} {{ingrediente.cantidad }} {{ingrediente.medida}} 
                    <button @click="modificarIng(ingrediente.id,ingrediente.nombre,ingrediente.cantidad,ingrediente.medida,index)" class="btn btn-outline-primary btnIzq ml-2"><span class="icon-note"></span></button>
                    <button @click="eliminarIng(index,ingrediente.id)" class="btn btn-outline-danger btnIzq"><span class="icon-close"></span></button>
                  </li>
                </ul>
              </div>

              <!--Lista de ingredientes-->
            </div>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-append">
             <input type="button" @click="agregarReceta" class="input-group-text" value="cargar">

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
                  <option v-for="ingrediente in ingredientes" v-bind:key="ingrediente.nombre" v-bind:value="{id_ingrediente:ingrediente.id,medida:ingrediente.medida,cantidad:ingrediente.cantidad}">{{ingrediente.nombre }} {{ingrediente.cantidad }} {{ingrediente.medida}}</option>

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
                <button @click="modificarpaso(paso.id,paso.nombre,paso.descripcion,index)" class="btn btn-outline-primary btnIzq ml-2"><span class="icon-note"></span></button>
                <button @click="eliminarpaso(index,paso.id)" class="btn btn-outline-danger btnIzq"><span class="icon-close"></span></button>
              </li>
            </ul>
          </div>
          <!--Lista de pasos-->
        </div>
      </div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-outline-info2 mb-5 btnIzq ml-2" data-toggle="modal" data-target="#exampleModal">
        Vista previa
      </button>
      <router-link to="/Inicio">
        <button type="button" class="btn btn-outline-info2 mb-5 btnIzq ml-2">Guardar</button>
      </router-link>
      <router-link to="/Inicio">
        <button @click="BorrarReceta()" type="button" class="btn btn-outline-info2 mb-5 btnIzq">Rechazar</button>
      </router-link>

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
                    <span class="recervada">public void </span>&nbsp;{{paso.nombre}} (<span v-for="(parametro, index) in paso.ingredientes" v-bind:key="parametro">
                      <span v-if="Object.keys(paso.ingredientes).length-1 > index" > String {{parametro.nombre}}&nbsp;{{parametro.cantidad}}&nbsp;{{parametro.medida}}, </span>
                      <span v-else> String {{parametro.nombre}}&nbsp;{{parametro.cantidad}}&nbsp;{{parametro.medida}} </span> </span>) { <br>
                      //  {{paso.descripcion}} <br>
                    }<br></span>
                  }
                </p>
              </div>
            </div>
            <div class="modal-footer">
              
              <button type="button" class="btn btn-outline-info2" data-dismiss="modal">Cerrar</button>
              
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
import axios from 'axios'

/* eslint-disable */
export default{
	name:'Receta',
	data(){
		return {
      ingredientes:[],
      ingredientesPasos:[],
      pasos:[],
      categorias:[ ],
      titulo:'',
      selected:'',
      nombreing:'',
      cantidading:'',
      unidading:'',
      nombrepaso:'',
      parametros:[],
      selectCategoria:'',
      descripcionpaso:'',
      recetaFoto:'',
      idReceta:'',
      actualizarIng:'0',
      urlBase:'http://a8b88f32.ngrok.io'

    }
  },
  mounted: function (){
    this.cargarCategorias();
    
  },
  methods:{
    cargarCategorias(){ 
     
      axios.get(this.urlBase+'/v1/categoria',{
      })
      .then(response =>{
        this.categorias=response.data;

      })

    },
    regIngredientes(){
      if(this.idReceta==='') {
        this.agregarReceta();
      }else {
        this.agregarIng();
      }
    },
    agregarReceta(){
      console.log(this.ingredientes);
      
      var lista = [];
      var value= this.getCookie('Autorizacion');
      
      var config = {
        headers: {'Authorization': value}
      };
      lista.push({
        nombre:this.nombreing,
        cantidad:this.cantidading,
        medida:this.unidading
      });
      
      axios.post(this.urlBase+'/v1/receta',{
        
       nombre:this.titulo,
       imagen_receta:this.recetaFoto,
       id_categoria:this.selectCategoria,
       
       ingredientes:lista

     },{
      headers: {'Authorization': value}
    })
      .then(response =>{
        console.log(response);
        this.idReceta=response.data.id;
        this.ingredientes=response.data.ingredientes;
        this.ingredientesPasos=response.data.ingredientes;
        this.nombreing='';
        this.cantidading='';
        this.unidading='';
        
      })
    },
    agregarIng(){

      
      console.log(this.recetaFoto);
      var lista = [];
      var value= this.getCookie('Autorizacion');
      console.log(value);
      var config = {
        headers: {'Authorization': value}
      };
      lista.push({
        nombre:this.nombreing,
        cantidad:this.cantidading,
        medida:this.unidading
      });
      
      console.log(value+ "TOKEN QUE SE ENVIA")
      axios.post(this.urlBase+'/v1/ingrediente',{
        
       id:this.idReceta,
       ingredientes:lista

     },{
      headers: {'Authorization': value}
    })
      .then(response =>{
        console.log(response);
        
        this.ingredientes.push(response.data);
        tis.nombreing='';
        this.cantidading=' ';
        this.unidading=' ';
        
      })
      
    },
    agregarpasos(){
      console.log(this.idReceta)
      
      var value= this.getCookie('Autorizacion');
      console.log(value);
      var config = {
        headers: {'Authorization': value}
      };
      var lista = [];
      lista.push({
        nombre:this.nombrepaso,
        descripcion:this.descripcionpaso,
        ingredientes:this.parametros
      });

      console.log(lista);
      
      console.log(value+ "TOKEN QUE SE ENVIA")
      axios.post(this.urlBase+'/v1/paso',{
        
        id:this.idReceta,
        pasos:lista,

      },{
        headers: {'Authorization': value}
      })
      .then(response =>{
       console.log(response);
       
       this.pasos.push(response.data);
       this.nombrepaso='';
       this.descripcionpaso='';
       
     })
      


    },
    eliminarIng(index,id){
      
      console.log(id);
      
      axios.delete(this.urlBase+'/v1/ingrediente/'+id)
      .then(response =>{
        console.log(response);
        
        if (response.data==true){
          console.log("Elimino");
          this.ingredientes.splice(index,1);
        }
        
      })

    },
    modificarIng(id,nombre, cantidad, unidad, index){

     this.nombreing=nombre;
     this.cantidading=cantidad;
     this.unidading=unidad;
     this.eliminarIng(index,id);
   },
   eliminarpaso(index,id){
    
     console.log(id);
     this.pasos.splice(index,1);
     axios.delete(this.urlBase+'/v1/paso/'+id)
     .then(response =>{
      console.log(response);
      
      if (response.data==true){
        console.log("Elimino");
      }
      
    })

   },
   modificarpaso(id,nombrepaso,descripcionpaso,index){

    alert(nombrepaso);
    this.nombrepaso=nombrepaso;
    this.descripcionpaso=descripcionpaso;
    this.eliminarpaso(index,id);

  },
  subirImagen(){
   var self = this;
   var fichero;
   var storageRef;

   storageRef = firebase.storage().ref();
   
   fichero = document.getElementById("fichero");

   var img = fichero.files[0];

   var uploadTask = storageRef.child("imagenes/" + img.name).put(img);

   uploadTask.on('state_changed',
    function(snapshot){
    }, function(error) {
    }, function() {
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        self.recetaFoto = downloadURL;
      });
    });
 },
 BorrarReceta(){
   
   
  axios.delete(this.urlBase+'/v1/publicacion/'+this.idReceta)
  .then(response =>{
    console.log(response);
    
    if (response.data==true){
      console.log("Elimino");
    }
    
  })
  
  
  
},
getCookie(nombre) {
 var name = nombre + "=";
 var decodedCookie = decodeURIComponent(document.cookie);
 var ca = decodedCookie.split(';');
 for(var i = 0; i <ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) == ' ') {
   c = c.substring(1);
 }
 if (c.indexOf(name) == 0) {
   return c.substring(name.length, c.length);
 }
}
return "";
}
},
components:{
  DefaultLayout,
  Layout

},
}
</script>


<style>
.btn {
  background: transparent;
  border-color: #ff7043;
  color: #ff7043;
}

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

.bordeSombra{
  box-shadow: 3px 3px 15px #999;
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
