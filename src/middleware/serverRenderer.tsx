import * as React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import { HelmetProvider, FilledContext } from 'react-helmet-async';
import { App } from '../components/App';
import { Html } from '../components/Html';

const helmetContext: FilledContext = {} as FilledContext;

export const serverRenderer = () => (
  req: express.Request,
  res: express.Response
) => {
  return res.send(
    '<!doctype html>' +
      renderToString(
        <Html helmetContext={helmetContext}>
          <HelmetProvider context={helmetContext}>
            <App />
          </HelmetProvider>
        </Html>
      )
  );
};
