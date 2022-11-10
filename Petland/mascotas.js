
var Mascota = [];

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
        
    }

    if (formValido)
    {
        const NuevaMascota={
            Nombre
        }
        Mascota.push(NuevaMascota);
        $('table').append('<tr class="row'+NuevaMascota+'"><td>'+Nombre+'</td>')
    }

};
$(document).ready(function () {
    $('#btnAgregar').click(btnAgregar_click);
})



