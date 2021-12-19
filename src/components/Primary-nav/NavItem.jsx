import React, { useState } from 'react';

import { Link } from 'gatsby';

const NavItem = ({ label, ...rest }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="nav__item">
      <div className="nav__item--trigger">
        <Link {...rest}>{label}</Link>
        <button onClick={() => setIsActive(!isActive)}>icon</button>
      </div>

      <div className={`sub-nav ${isActive ? 'sub-nav--active' : ''}`}>
        <ul>
          <li>itmes-1</li>
          <li>itmes-2</li>
          <li>itmes-3</li>
          <li>itmes-4</li>
        </ul>
      </div>
    </div>
  )
}

export default NavItem;
