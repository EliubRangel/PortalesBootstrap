console.log('iniciando script');
var Clientes = [];
let maxId = 0;
const btnAgregar_click = function(){
    const Nombre = $('#txtNombre').val();
    let formValido = true;
    if(Nombre.trim() === ''){
        alert('Nombre requerido')
        formValido = false;
    }
    
    const Apellidos = $('#txtApellidos').val();
    if(Apellidos.trim() === ''){
        alert('Apellidos requeridos');
        formValido = false;
    }
    var RequiereFactura = $('input[type="checkbox"]').is(":checked");
    var Direccion = $('#txtPrecio').val();
    var FechaNacimiento= $('#txtFecha').val();


    if(formValido){
        const nuevoCliente = {
            Id : maxId++,
            Nombre,
            Apellidos,
            RequiereFactura,    
            Direccion,
            FechaNacimiento
        };
        Clientes.push(nuevoCliente);
        $('table').append('<tr class="row'+nuevoCliente.Id+'"><td>'+Nombre+'</td><td>'+Apellidos+'</td><td>'+Direccion+'</td><td>'+FechaNacimiento+'</td><td>'+RequiereFactura+'</td></tr>');
    }

};
$(document).ready(function(){
    $('#btnAgregar').click(btnAgregar_click);
})
