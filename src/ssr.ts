import {React, ReactDom, Helmet} from "../deps/react.ts";

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
