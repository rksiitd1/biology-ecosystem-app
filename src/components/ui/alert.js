import React from 'react';

export const Alert = ({ children, ...props }) => (
  <div role="alert" {...props}>{children}</div>
);

export const AlertTitle = ({ children, ...props }) => (
  <h5 {...props}>{children}</h5>
);

export const AlertDescription = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);