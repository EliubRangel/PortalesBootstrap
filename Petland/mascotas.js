
var Mascota = [];
let MaxId = 1; 
const LimpiarCampos = function(){
   $('#txtNombre').val('')
   $('#txtDueno').val('')
   $('#txtEdad').val('')
}

const EliminarFila = function(id){
    console.log('Eliminando fila');
    $('.row'+id).remove();
    // encontrar la posicion en la que se encuentra
    Mascota = Mascota.filter(x => x.Id !== id);
}

const actualizarFila = function(id){
    const mascota = Mascota.find(x => x.Id == id);
    EliminarFila(id);
    $('#txtNombre').val(mascota.Nombre);
    $('#txtDueno').val(mascota.Dueno);
    $('#txtEdad').val(mascota.Edad);
}

const btnAgregar_click = function () {
    const Nombre = $('#txtNombre').val();
    let formValido = true;
    if (Nombre.trim() === '') {
        $('#txtNombre').addClass('is-invalid')
        formValido = false;
    }
    else {
        $('#txtNombre').removeClass('is-invalid')
    }

    const Dueno = $('#txtDueno').val();
    if (Dueno.trim() === ''){
        $('#txtDueno').addClass('is-invalid')
        formValido = false;
    }
    else{
        $('#txtDueno').removeClass('is-invalid')
    }

    const Edad = $('#txtEdad').val();
    if(Edad.trim() === ''){
     $('#txtEdad').addClass('is-invalid')
     formValido = false;   
    }                   
    else{
        $('#txtEdad').removeClass('is-invalid')
    }


    if (formValido)
    {
        const NuevaMascota={
            Id : MaxId++,
            Nombre,
            Dueno,
            Edad
        }
        LimpiarCampos();
        Mascota.push(NuevaMascota);
        $('table').append('<tr class="row'+NuevaMascota.Id+'"><td>'+Nombre+'</td><td>'+Dueno+'</td><td>'+Edad+'</td><td><button class="btn btn-danger" onclick="EliminarFila('+NuevaMascota.Id+')"> <i class="bi bi-trash3"></i>Eliminar</button></td><td><button class="btn btn-info" onclick="actualizarFila('+NuevaMascota.Id+')"><i class="bi bi-reply"></i>Actualizar</button></td></tr>');
    }

};
$(document).ready(function () {
    $('#btnAgregar').click(btnAgregar_click);
})



