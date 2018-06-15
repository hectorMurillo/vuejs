// var app = new Vue({
//     el : '.vue',
//     data:{
//         mensaje: 'Aprende Vue.js  Facilmente',
//         src:'https://vuejs.org/images/logo.png'
//     },
//     methods:{        
//         mostrarMensaje:function(){
//             return this.mensaje.toString();
//         }
//     }    
// });
// var app1 = new Vue({
//     el:'.h1',
//     data:{
//         mensajeh1:'El mensaje es h1'
//     }
// })


var app = new Vue({
    el:'#vm',
    data:{
        mensaje:'Este es el mensaje.'
    },
    beforeCreate:function(){
        console.log("Se esta llamando el beforeCreate");
    },
    created:function(){
        console.log("Se esta llamando el created");        
    },
    beforeMount: function(){
        console.log("Se esta llamando el beforeMount");        
    },
    mounted:function(){
        console.log("Se esta llamando el Mounted");        
    },
    beforeUpdate:function(){
        console.log("Se esta llamando el beforeUpdate");        
    },
    updated:function(){
        console.log("Se esta llamando el update");        
    },
    beforeDestroy:function(){
        console.log("Se esta llamando el beforeDestroy");        
    },
    destroyed:function(){
        console.log("Se esta llamando el destroyed");        
    },
    methods:{
        destruir:function(){
            this.$destroy();
        }
    }
})