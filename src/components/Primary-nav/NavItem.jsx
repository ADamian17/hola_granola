import React from 'react';
import { Link } from 'gatsby';

const NavItem = ({ label, ...rest }) => {
  return <Link {...rest}>{label}</Link>
}

export default NavItem;
