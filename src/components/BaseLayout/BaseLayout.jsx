import * as React from "react";
import { Helmet } from "react-helmet"

import PrimaryNavContainer from "../Primary-nav";

import './BaseLayout.scss';

const Layout = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hola Granola - {title}</title>
      </Helmet>

      <PrimaryNavContainer />

      <main>
        {children}
      </main>
    </>
  )
}

export default Layout;
