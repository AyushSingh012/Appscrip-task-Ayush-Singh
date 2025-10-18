'use client';
import { useEffect, useState } from 'react';
import './ProductGrid.css';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <section className="product-grid">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </section>
  );
}
