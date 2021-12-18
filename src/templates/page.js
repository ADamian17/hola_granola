import * as React from "react";
import BaseLayout from '../components/BaseLayout/BaseLayout';

const TeamplatePage = ({pageContext}) => {
  return (
    <BaseLayout title={pageContext.title}>
      
      <h1>{pageContext.title}</h1>
    </BaseLayout>
  )
}

export default TeamplatePage;
