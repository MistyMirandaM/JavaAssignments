import React from "react";

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", featured: false },
    { id: 2, name: "T-shirt", price: 19.99, category: "Clothing", featured: true },
    { id: 3, name: "Microwave", price: 89.99, category: "Home Essentials", featured: false },
    { id: 4, name: "Smartphone", price: 699.99, category: "Electronics", featured: true },
    { id: 5, name: "Jeans", price: 39.99, category: "Clothing", featured: false }
  ];

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <p key={product.id}>
          {product.name} — ${product.price} — {product.category}
          {product.featured && " ⭐ Featured"}
        </p>
      ))}
    </div>
  );
}

export default ProductList;
