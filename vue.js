new Vue({
    el:"#eventos",
    data:{
        contador:0,
        x:0,
        y:0
    },
    methods:{
        sumarUno:function(){
            this.contador+=1;        
        },
        restarUno: function(){
            this.contador-=1;
        },
        alerta:function(mensaje){
            alert(mensaje);
        },
        mostrarUbicacion:function(evento){
            this.x = evento.clientX;
            this.y = evento.clientY;
        }
    }
})