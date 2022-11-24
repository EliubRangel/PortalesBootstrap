var Alimento = [];
let MaxId = 0;


const LimpiarCampos = function(){
    console.log('Borrando campos')
    $('#txtMarca').val('')
    $('#txtDescripcion').val('')
    $('#txtPrecio').val('')
    $('#txtAnimal :selected').text()
    $('#txtCodigoBarras').val('')

}
const EliminarFila = function(id){
    console.log('eliminar fila');
    $('.row'+id).remove();
    Alimento = Alimento.filter(x => x.Id !== id);

}
const actualizarFila = function(id){
    const alimento = Alimento.find(x => x.Id == id);
    EliminarFila(id);
    $('#txtMarca').val(alimento.MarcaAlimento);
    $('#txtDescripcion').val(alimento.DescripcionAlimento);
    $('#txtPrecio').val(alimento.precioAlimento);
    $('#txtAnimal').val(alimento.tipoAnimal);
    $('#txtCodigoBarras').val(alimento.codigoBarras);

}

const btnAgregar_click = function(){
    console.log('click del boton agregar')
    const MarcaAlimento = $('#txtMarca').val()
    let formValido = true;
    if(MarcaAlimento.trim() === '')
    {
        $('#txtMarca').addClass('is-invalid')
        formValido=false;
    }
    else{
        $('#txtMarca').removeClass('is-invalid')
    }

    const DescripcionAlimento = $('#txtDescripcion').val()
    if(DescripcionAlimento.trim() === '')
    {
        $('#txtDescripcion').addClass('is-invalid')
        formValido = false;
    }
    else{
        $('#txtDescripcion').removeClass('is-invalid')
    }

    const precioAlimento = $('#txtPrecio').val()
    if(precioAlimento.trim() === ''){
        $('#txtPrecio').addClass('is-invalid')
        formValido= false;
    }
    else{
        $('#txtPrecio').removeClass('is-invalid')
    }

    const tipoAnimal = $('#txtAnimal :selected').text()
    if(tipoAnimal.trim() === ''){
        $('#txtAnimal').addClass('is-invalid')
        formValido = false;
    }
    else{
        $('#txtAnimal').removeClass('is-invalid')
    }

    const codigoBarras = $('#txtCodigoBarras').val()
    if(codigoBarras.trim() === ''){
        $('#txtCodigoBarras').addClass('is-invalid')
        formValido = false;
    }
    else{
        $('#txtCodigoBarras').removeClass('is-invalid')
    }

    if(formValido)
    {
        console.log('form es valido')
        const NuevoAlimento={
            id : MaxId++,
            MarcaAlimento,
            DescripcionAlimento,
            precioAlimento,
            tipoAnimal,
            codigoBarras
        }
        LimpiarCampos();
        Alimento.push(NuevoAlimento);
        console.log('<tr class="row'+NuevoAlimento.id+'" <td>'+MarcaAlimento+'</td><td>'+DescripcionAlimento+'</td><td>'+precioAlimento+'</td><td>'+tipoAnimal+'</td><td>'+codigoBarras+'</td></tr>')
        $('table'). append('<tr class="row'+NuevoAlimento.id+'"> <td>'+MarcaAlimento+'</td><td>'+DescripcionAlimento+'</td><td>'+precioAlimento+'</td><td>'+tipoAnimal+'</td><td>'+codigoBarras+'</td><td><button class="btn btn-danger" onclick="EliminarFila('+NuevoAlimento.id+')"> <i class="bi bi-trash3"></i>Eliminar</button></td><td><button class="btn btn-info" onclick="actualizarFila('+NuevoAlimento.id+')"><i class="bi bi-reply"></i>Actualizar</button></td></tr>');
    }
};
$(document).ready(function () {
    console.log('documen ready')
    $('#btnAgregar').click(btnAgregar_click)
});