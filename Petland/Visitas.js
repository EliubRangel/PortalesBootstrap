var Visitas = [];
let MaxId = 0;


const LimpiarCampos = function(){
    console.log('Borrando campos')
    $('#txtMascota').val('')
    $('#txtFecha').val('')
    $('#txtRazon').val('')
    }
const EliminarFila = function(id){
    console.log('eliminar fila');
    $('.row'+id).remove();
    Visitas = Visitas.filter(x => x.id !== id);

}
const actualizarFila = function(id){
    const visitas = Visitas.find(x => x.id == id);
    EliminarFila(id);
    $('#txtMascota').val(visitas.Mascota);
    $('#txtFecha').val(visitas.FechaConsulta);
    $('#txtRazon').val(visitas.RazonConsulta);
 }

const btnAgregar_click = function(){
    console.log('click del boton agregar')
    const Mascota = $('#txtMascota').val()
    let formValido = true;
    if(Mascota.trim() === '')
    {
        $('#txtMascota').addClass('is-invalid')
        formValido=false;
    }
    else{
        $('#txtMascota').removeClass('is-invalid')
    }

    const FechaConsulta = $('#txtFecha').val()
    if(FechaConsulta.trim() === '')
    {
        $('#txtFecha').addClass('is-invalid')
        formValido = false;
    }
    else{
        $('#txtFecha').removeClass('is-invalid')
    }

    const RazonConsulta = $('#txtRazon').val()
    if(RazonConsulta.trim() === ''){
        $('#txtRazon').addClass('is-invalid')
        formValido= false;
    }
    else{
        $('#txtRazon').removeClass('is-invalid')
    }

     if(formValido)
    {
        console.log('form es valido')
        const NuevaVisita={
            id : MaxId++,
            Mascota,
            FechaConsulta,
            RazonConsulta
        }
        LimpiarCampos();
        Visitas.push(NuevaVisita);
        console.log('<tr class="row'+NuevaVisita.id+'" <td>'+Mascota+'</td><td>'+FechaConsulta+'</td><td>'+RazonConsulta+'</td></tr>')
        $('table'). append('<tr class="row'+NuevaVisita.id+'"> <td>'+Mascota+'</td><td>'+FechaConsulta+'</td><td>'+RazonConsulta+'</td><td><button class="btn btn-danger" onclick="EliminarFila('+NuevaVisita.id+')"> <i class="bi bi-trash3"></i>Eliminar</button></td><td><button class="btn btn-info" onclick="actualizarFila('+NuevaVisita.id+')"><i class="bi bi-reply"></i>Actualizar</button></td></tr>');
    }
};
$(document).ready(function () {
    console.log('documen ready')
    $('#btnAgregar').click(btnAgregar_click)
});