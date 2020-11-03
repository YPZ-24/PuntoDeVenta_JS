class Product{
    
    constructor(name, stock, cost){
        this.name = name;
        this.stock = stock;
        this.cost = cost;
    }

    exists(){
        return this.stock === 0 ? false : true; 
    }

}