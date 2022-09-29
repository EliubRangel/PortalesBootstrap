console.log('iniciando script');
var Clientes = [];
var btnAgregar_click = function(){
    alert('Soy el click del boton agregar')
    var nombre = $('#txtNombre').val();
    Clientes.push({
        nombre: nombre
    });
    console.log(Clientes)
};
$(document).ready(function(){
    $('#btnAgregar').click(btnAgregar_click);
})
