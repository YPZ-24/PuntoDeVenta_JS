document.addEventListener("DOMContentLoaded", fillProductsSelect);
document.getElementById("product").addEventListener("change", fillCost);
document.getElementById("form__product__add").addEventListener('submit', onSubmit)

const availableProducts = getExistingProducts();
const orders = new Array();
let productIndex = null;

function fillProductsSelect(){
    const select  = document.getElementById("product");
    for(p of availableProducts){
        const option = document.createElement("option");
        const txt = document.createTextNode(p.name);
        option.appendChild(txt);
        select.appendChild(option);
    }
}

function fillCost(e){
    let i = e.target.selectedIndex;
    if(i===0){
        productIndex = null;
    }else{
        productIndex = i - 1;
    }
    const costField = document.getElementById("cost");
    const cost = availableProducts[productIndex].cost;
    costField.value = cost;
}

function onSubmit(e){
    const quantity = document.getElementById('quantity').value;
    e.preventDefault();
    e.target.reset();
    const order = addOrder(availableProducts[productIndex], quantity);
    productIndex = null;
    addOrderRow(order.getOrder());
    fillFooter();
}

function addOrder(product, quantity){
    const order = new Order(product, quantity);
    orders.push(order);
    return order;
}

function fillFooter(){
    let subtotal = 0;
    for(o of orders){
        subtotal += o.getTotal();
    }
    let IVA = subtotal * 0.16;
    let total = subtotal + IVA;

    document.getElementById("subtotal").innerHTML = subtotal.toFixed(2)
    document.getElementById("total").innerHTML = total.toFixed(2)
    document.getElementById("iva").innerHTML = IVA.toFixed(2)
}

function addOrderRow(order){
    const listProductsBody = document.getElementById("list__products__body");
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    let txt = document.createTextNode('X');
    cell.appendChild(txt);
    row.appendChild(cell);
    for(o in order){
        console.log(o);
        let cell = document.createElement('td');
        let txt = document.createTextNode(order[o]);
        cell.appendChild(txt);
        row.appendChild(cell);
    }
    listProductsBody.appendChild(row);
}