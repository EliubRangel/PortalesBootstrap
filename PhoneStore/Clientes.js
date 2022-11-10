console.log('iniciando script');
var Clientes = [];
let maxId = 0;

const LimpiarCampos = function(){
    $('#txtNombre').val('')
    $('#txtApellidos').val('')
    $('#txtDomicilio').val('')
    $('#txtFecha').val('')
    $('#chkResistencia').prop('checked',false)
}
    


const btnAgregar_click = function(){
    const Nombre = $('#txtNombre').val();
    let formValido = true;
    if(Nombre.trim() === ''){
        $('#txtNombre').addClass('is-invalid')
        formValido = false;
    }
    else
    {
        $('#txtNombre').removeClass('is-invalid')
    }
    
    const Apellidos = $('#txtApellidos').val();
    if(Apellidos.trim() === ''){
        $('#txtApellidos').addClass('is-invalid')
        formValido = false;
    }
    else{
        $('#txtApellidos').removeClass('is-invalid')
    }
    var RequiereFactura = $('input[type="checkbox"]').is(":checked");
    var Direccion = $('#txtDomicilio').val();
    if(Direccion.trim() ===''){
        $('#txtDomicilio').addClass('is-invalid')
        formValido = false;
    }
    else{
        $('#txtDomicilio').removeClass('is-invalid')
    }
    
    var FechaNacimiento= $('#txtFecha').val();
    if(FechaNacimiento.trim() === ''){
        $('#txtFecha').addClass('is-invalid')
        formValido = false;
    }
   else{
    $('#txtFecha').removeClass('is-invalid')
   }
    


    if(formValido){
        const nuevoCliente = {
            Id : maxId++,
            Nombre,
            Apellidos,
            RequiereFactura,    
            Direccion,
            FechaNacimiento
        };
        LimpiarCampos();
        Clientes.push(nuevoCliente);
        $('table').append('<tr class="row'+nuevoCliente.Id+'"><td>'+Nombre+'</td><td>'+Apellidos+'</td><td>'+Direccion+'</td><td>'+FechaNacimiento+'</td><td>'+RequiereFactura+'</td></tr>');
    }

};
$(document).ready(function(){
    $('#btnAgregar').click(btnAgregar_click);
})
