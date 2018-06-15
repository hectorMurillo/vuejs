var app = new Vue({
    el:'#app',
    data:{
        titulo:'Lista de tareas',
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
        },
        borrartarea:function(i){
            // this.tareas.remove(i);
            // alert(""+i);
            this.tareas.splice(i,1);
        }
    }
})