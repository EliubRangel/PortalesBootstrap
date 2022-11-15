
var Mascota = [];
let MaxId = 1; 
const LimpiarCampos = function(){
   $('#txtNombre').val('')
   $('#txtDueno').val('')
   $('#txtEdad').val('')
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
        $('table').append('<tr class="row'+NuevaMascota.Id+'"><td>'+Nombre+'</td><td>'+Dueno+'</td><td>'+Edad+'</td></tr>');
    }

};
$(document).ready(function () {
    $('#btnAgregar').click(btnAgregar_click);
})



