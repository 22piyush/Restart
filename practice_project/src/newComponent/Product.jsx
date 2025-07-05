
import './Product.css';
import ProductCard from './ProductCard';

function Product({ item }) {
  return (
    <div className="product-container">
      {item.map((product) => (
        
        <ProductCard
          key={product.id}
          title={product.title}
          date={product.date}
        />

      ))}
    </div>
  );
}



export default Product;
