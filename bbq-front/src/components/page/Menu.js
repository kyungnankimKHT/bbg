import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../assets/css/ProductList.css';
import HorizontalMenu from '../layout/HorizontalMenu';

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('신메뉴');

  useEffect(() => {
    if (selectedCategory === '신메뉴') {
      axios.get('http://localhost:9090/api/products')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the products!', error);
        });
    } else {
      setProducts([]);
    }
  }, [selectedCategory]);

  return (
    <div className="product-list">
      <HorizontalMenu setSelectedCategory={setSelectedCategory} />
      <h2>{selectedCategory} <span>Total {products.length}</span></h2>
      <div className="menu-grid">
        {products.length > 0 ? (
          products.map(product => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`} 
              className="menu-item"
            >
              <img src={require(`../../assets/images/menu/${product.image}`)} alt={product.name} className="menu-item-image" />
              <div className="menu-item-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>{product.priceM}원</strong>
              </div>
            </Link>
          ))
        ) : (
          <p>해당 카테고리에는 제품이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
