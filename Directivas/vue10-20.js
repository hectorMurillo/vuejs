new Vue({
    el:"#vm",
    data:{
        imagen:'https://cdne.ojo.pe/thumbs/uploads/img/2018/05/16/imagen-de-mario-sin-bigote-deja-en-shock-a-muchos--256300-jpg_700x0.jpg',
        texto:'Mario',
        textoHTML:'<strong> Este es un texto en negritas </strong>',
        mostrar:true,
        mostrarConCss:false,
        paises:['México','España','Colombia'],
        empleado:{
            nombre:"Héctor",
            apellido:"Murillo",
            edad:20,
            escolaridad:"media"
        }
    }
})