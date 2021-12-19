import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PrimaryNav from './Primary-nav';

const PrimaryNavContainer = () => {

  const query = graphql`
  {
    wpMenu(name: {eq: "main-menu"}) {
      menuItems {
        nodes {
          label
          path
        }
      }
    }
  }`;


  const { wpMenu: { menuItems } } = useStaticQuery(query);

  return <PrimaryNav menuItems={menuItems.nodes} />
}

export default PrimaryNavContainer;
