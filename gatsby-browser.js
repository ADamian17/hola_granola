const React = require("react");
const { RecoilRoot } = require('recoil');
// this is where you add all global config
const GlobalWrapper = require('./src/GlobalWrapper/GlobalWrapper').default;

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <GlobalWrapper {...props}>{element}</GlobalWrapper>
}

exports.wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      {element}
    </RecoilRoot>
  )
}
