import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={352}
    height={409}
    viewBox="0 0 352 409"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="65" y="20" rx="0" ry="0" width="219" height="237" />
    <rect x="25" y="280" rx="0" ry="0" width="307" height="47" />
    <rect x="29" y="359" rx="0" ry="0" width="299" height="47" />
  </ContentLoader>
);

export default Skeleton;
