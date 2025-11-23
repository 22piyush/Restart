var Product = /** @class */ (function () {
    function Product(name, price, pid) {
        this.inCart = false;
        this.isOrdered = false;
        this.name = name;
        this.price = price;
        this.pId = pid;
    }
    Product.prototype.addToCart = function () {
        this.inCart = true;
    };
    Product.prototype.buyProduct = function () {
        if (this.inCart) {
            return "product ".concat(this.name, " is ordered in ").concat(this.price);
        }
        else {
            return "no product in cart";
        }
    };
    return Product;
}());
var product = new Product('iphone', 150000, 101);
console.log(product.buyProduct());
