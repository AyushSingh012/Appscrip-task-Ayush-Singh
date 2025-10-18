'use client';
import { useEffect, useState } from 'react';
import './ProductGrid.css';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="product-grid">
      {products.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <p>${item.price}</p>
        </div>
      ))}
    </section>
  );
}
