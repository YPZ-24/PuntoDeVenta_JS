class Order{

    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
    }

    getTotal(){
        return this.product.cost * this.quantity;
    }

    getOrder(){
        return{
            name : this.product.name,
            cost : this.product.cost,
            quantity : this.quantity,
            total : this.getTotal()
        }
    }

}