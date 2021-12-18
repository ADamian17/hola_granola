import React from 'react';

import NavItem from './NavItem';

const PrimaryNav = ({ menuItems }) => {
  console.log(menuItems);
  const menuItemList = menuItems.map(menuItem => <NavItem key={menuItem.label} to={menuItem.path} label={menuItem.label} />);

  return (
    <nav>
      {menuItemList}
    </nav>
  );
}

export default PrimaryNav;
