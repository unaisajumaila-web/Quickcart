import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductList from "./ProductList";

function CategoryPage() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <h1>{category}</h1>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default CategoryPage;