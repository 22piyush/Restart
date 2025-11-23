class Product {

    name:string;
    price:number;
    pId:number
    inCart = false;
    isOrdered = false;

    constructor(name:string, price:number, pid:number){

        this.name = name;
        this.price = price;
        this.pId = pid
    }

    addToCart():void{
        this.inCart = true;
    }

    buyProduct(){

        if(this.inCart){
            return `product ${this.name} is ordered in ${this.price}`
        }else{
            return `no product in cart`
        }
    }
}

var product = new Product('iphone',150000,101);

console.log(product.buyProduct());
