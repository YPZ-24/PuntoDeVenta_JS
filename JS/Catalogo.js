let Catalogo = new Array();

Catalogo.push(new Product("Prod1", 10, 11.1));
Catalogo.push(new Product("Prod2", 20, 22.2));
Catalogo.push(new Product("Prod3", 30, 33.3));
Catalogo.push(new Product("Prod4", 40, 44.4));

function addProduct(name, stock, quantity){
    const product = new Product(name, stock, quantity)
    Catalogo.push(product);
    return product;
}

function getExistingProducts(){
    return Catalogo.filter(p => p.exists())
}
