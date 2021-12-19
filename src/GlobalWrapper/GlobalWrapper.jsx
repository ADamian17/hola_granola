import React from 'react';

import '../sass/main.scss';

const RootElementWrapper = ({ children, ...rest }) => {
  console.log({ rest });
  return <div id="my-app">{children}</div>
}

export default RootElementWrapper;
