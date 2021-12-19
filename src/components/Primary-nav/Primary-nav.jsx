import React, { useState } from 'react';

import NavItem from './NavItem';

import './Primary-nav.styles.scss';

const PrimaryNav = ({ menuItems }) => {
  const [isActive, setIsActive] = useState(false)
  console.log(menuItems.length);
  const menuItemList = menuItems.map(menuItem => {
    return <NavItem
      key={menuItem.label}
      to={menuItem.path}
      label={menuItem.label} />
  });

  return (
    <nav className='nav'>
      <figure className='nav__logo'>
        logo
      </figure>

      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Hidde' : 'Menu'}
      </button>

      <div className={`nav__item-list ${isActive ? 'nav__item-list--active' : ''}`} style={{
        "--rows": menuItems.length,
      }}>
        {menuItemList}

        <button className='nav__cta'>
          try it free
        </button>
      </div>

    </nav>
  );
}

export default PrimaryNav;
