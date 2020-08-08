import * as React from 'react';
import { FilledContext } from 'react-helmet-async';

type Props = {
  children: any;
  helmetContext: Partial<FilledContext>;
};

export const Html = ({ children, helmetContext: { helmet } }: Props) => (
  <html lang="">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {helmet?.base?.toComponent()}
      {helmet?.title?.toComponent()}
      {helmet?.meta?.toComponent()}
      {helmet?.link?.toComponent()}
      {helmet?.script?.toComponent()}
    </head>
    <body>
      <div id="app">{children}</div>
    </body>
  </html>
);