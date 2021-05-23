import Products from "./Products";

function ProductFeed({ products }) {
  return (
    <div>
      {products.map(({ id, title, description, price, category, image }) => (
        <Products
          key={id}
          id={id}
          title={title}
          description={description}
          price={price}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
