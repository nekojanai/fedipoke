import { ReactDom, Helmet } from "../deps.ts";

export function renderComponent(element: JSX.Element) {
  return ReactDom.renderToString(element);
}

export function renderPage(page: JSX.Element) {
  const pageHtml = ReactDom.renderToString(page);
  const helmet = Helmet.renderStatic();

  return `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/main.css">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        ${pageHtml}
      </body>
    </html>
    `;
}
