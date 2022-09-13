
/*
Lista de productos
1 - Celular Oneplus 7 pro - Precio - 10500 - 
 */
var p1 = { codigoBarras:1, descripcion: 'Celular Oneplus 7 pro', precio:10500 };
var p2= { codigoBarras:2, descripcion:'Funda', precio:100};
console.log(p1);
var products = [
    p1, p2, 
    {codigoBarras:3, descripcion:'Cargador iPhone', precio:800},
    {codigoBarras:4, descripcion:'cable usb tipo c', precio:200}
];

$(document).ready(function(){ // espera a que el Dom se cargue
    console.log('DOM loaded!');
    $('#btnAgregar').click(function(){ // callback
        // Get select value
        var selectedProductId = $('#selectProduct option:selected').val();// el selector apunta al elemento option seleccionado y que sea hijo del id selectedproduct
        //el metodo val regresa el value del option arrojado por el selector
        // el valor regresado se guarda en la variable selectedproducid
        console.log('Producto seleccionado' + selectedProductId);
        var selectedProduct = null;
        for(var i = 0; i < products.length; i++){
            if(products[i].codigoBarras == selectedProductId){
                selectedProduct = products[i];
            }
        }
        
        if($(".row"+selectedProduct.codigoBarras).length == 0){
            selectedProduct.cantidad=1;
            selectedProduct.total=selectedProduct.cantidad*selectedProduct.precio;
            $('table').append('<tr class="row'+selectedProduct.codigoBarras+'"><td>'+selectedProduct.codigoBarras+'</td><td>'+selectedProduct.descripcion+'</td><td>'+selectedProduct.precio+'</td><td class="cnt">'+selectedProduct.cantidad+'</td><td class="total">'+selectedProduct.total+'</td></tr>');
        }
        else{
            selectedProduct.cantidad++;
            // selectedProduct.cantidad = selectedProduct.cantidad + 1; es otra forma de acumular
            selectedProduct.total=selectedProduct.cantidad*selectedProduct.precio;
            $('.row'+selectedProduct.codigoBarras+' .cnt').text(selectedProduct.cantidad);
            $('.row'+selectedProduct.codigoBarras+' .total').text(selectedProduct.total);
        }
    })
});