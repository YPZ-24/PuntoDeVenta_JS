document.getElementById("form__product__register").addEventListener('submit', onSubmit)

function onSubmit(e){
    const name = document.getElementById('name').value;
    const stock = document.getElementById('stock').value;
    const quantity = document.getElementById('cost').value;

    const product = addProduct(name, stock, quantity);
    alert(`Producto Registrado...! \n ${product.name}`)
    e.preventDefault();
    e.target.reset();
    addProductRow(product);
}

function addProductRow(product){
    const listProductsBody = document.getElementById("list__products__body");
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    let txt = document.createTextNode('X');
    cell.appendChild(txt);
    row.appendChild(cell);
    for(p in product){
        let cell = document.createElement('td');
        let txt = document.createTextNode(product[p]);
        cell.appendChild(txt);
        row.appendChild(cell);
    }
    listProductsBody.appendChild(row);
}