import React from 'react';
import { Link } from 'react-router-dom'

const Nav = ({ location }) => {
  const path = location.pathname
  return (
    <div style={{ marginBottom: 20, marginTop: 10 }}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          {
            path === '/' ? (
              <span className="nav-link active">Home</span>
            ) : (
              <Link to="/" className="nav-link">Home</Link>
            )
          }
        </li>

        <li className="nav-item">
          {
            path === '/products' ? (
              <span className="nav-link active">Products</span>
            ) : (
                <Link to="/products" className="nav-link">Products</Link>
              )
          }
        </li>
      </ul>

    </div>
  )
}

export default Nav;
