class Product{
    name:String;
    price:number;
    pId:number;
    inCart = false;
    isOrdered = false;

    constructor(name:String, price:number, pid:number){
        this.name = name;
        this.price = price;
        this.pId = pid;
    }
    addToCart():void{
        this.inCart = true;
    }
    buyProduct():string{
        if(this.inCart){
            return `product ${this.name} is ordered`
        }else{
            return `no product`
        }
    }
}

var product = new Product('Samsung', 100000, 101);

console.log(product.name);
