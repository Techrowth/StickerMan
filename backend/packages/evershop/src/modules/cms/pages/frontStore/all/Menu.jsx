import PropTypes from 'prop-types';
import React from 'react';
import './Menu.scss';

export default function Menu({ menu: { items } }) {
  return (
    <div className="main-menu self-center hidden md:block">
      <ul className="nav flex space-x-275 justify-content-center">
      
         
          <li className="nav-item">
            <a className="nav-link " href="/">
            Home
            </a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/products">
            Shop
                          
            </a>
          
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/products">
            Customize
            </a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/products">
            Designers Hub
            </a>
            
          </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export const layout = {
  areaId: 'header',
  sortOrder: 5
};

export const query = `
  query {
    menu {
      items {
        name
        url
      }
    }
}`;
