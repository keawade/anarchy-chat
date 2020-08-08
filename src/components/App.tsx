import React from 'react';
import { Helmet } from 'react-helmet-async';

export const App = (): JSX.Element => {
  return (
    <>
      <Helmet title="Anarchy Chat" />
      <div>This is only a test.</div>
    </>
  );
};
