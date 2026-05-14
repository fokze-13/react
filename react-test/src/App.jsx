import React, { useState } from 'react';
import './index.css';

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Premium Wireless Headphones',
    category: 'Audio',
    price: 299.00,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Minimalist Smartwatch',
    category: 'Wearables',
    price: 199.00,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Ergonomic Mechanical Keyboard',
    category: 'Accessories',
    price: 149.00,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Ultra-Slim Tablet',
    category: 'Electronics',
    price: 499.00,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800'
  }
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <a href="#" className="logo">Lumina</a>
        <ul className="nav-links">
          <li><a href="#">Shop</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <button className="cart-btn">Cart ({cartCount})</button>
      </nav>

      <main>
        <section className="hero">
          <h1>Elevate Your Everyday</h1>
          <p>Discover our curated collection of premium tech and lifestyle products designed to seamlessly integrate into your beautiful life.</p>
          <button className="btn-primary">Shop New Arrivals</button>
        </section>

        <section className="products-container">
          <h2 className="section-title">Trending Now</h2>
          <div className="product-grid">
            {MOCK_PRODUCTS.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.title} className="product-img" loading="lazy" />
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-title">{product.title}</h3>
                  <div className="product-price">${product.price.toFixed(2)}</div>
                  <button onClick={handleAddToCart} className="btn-secondary">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Lumina Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
