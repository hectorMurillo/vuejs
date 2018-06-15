Vue.component('titulo',{
    template:'<h2>{{titulo}}</h2>',
    data:function(){    
        return {titulo:'Lista de tareas'}
    }
});

var data = {        
        tareas:[
            {
                texto:'Aprender Vuejs',
                terminada:false
            },
            {
                texto:'Aprender Angular 2',
                terminada:false
            },
            {
                texto:'Aprender Ionic 2',
                terminada:false
            }
        ],
        nuevaTarea:''
    };    

Vue.component('nueva-tarea',{
    template:`<div class="input-group">
                    <input  type="text" placeholder="Escribe una nueva tarea" 
                            v-model="nuevaTarea" class="form-control"
                            v-on:keydown.enter="agregarTarea()">
                    <span class="input-group-append">
                        <button type="button" class="btn btn-primary" v-on:click="agregarTarea()">Agregar</button>
                    </span>
               </div>`,
    data:function(){
        return data;
    },
    methods:{
        agregarTarea:function(){
            var text = this.nuevaTarea.trim();
            if(text){
                this.tareas.push({
                    texto: text,
                    terminada:false
                })
            }
            this.nuevaTarea = '';
        }
    }
});

Vue.component('lista-de-tareas',{
    template:`<ul class="list-group">
                <li v-for="(tarea,index) in tareas" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
                    {{tarea.texto}}                
                    <span class="float-right">
                            <button type="button" class="btn btn-success btn-sm" 
                                    style="font-size: 16px; font-weight: bold" v-on:click="tarea.terminada = !tarea.terminada">
                                    <b>✓</b>
                            </button>
                            <button type="button" class="btn btn-danger btn-sm" 
                                    style="font-size: 16px; font-weight: bold" v-on:click="borrartarea(index)">
                                    <b>&times;</b>
                            </button>            
                    </span>
                </li>            
            </ul>`,
    data:function(){
        return data;
    },
    methods:{
        borrartarea:function(i){            
            this.tareas.splice(i,1);
        }
    }
});
    

var app = new Vue({
    el:'#app', 
    data:data    
})