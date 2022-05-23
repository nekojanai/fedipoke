import { ConnInfo } from "../deps.ts";
import { ParameterContext } from "../deps.ts";
import { MiddlewareContext } from "../deps.ts";
import { body, html, pipe, toResponse } from "../deps.ts";
import { serveFile } from "../deps.ts";

import { renderPage } from "./ssr.ts";
import { index } from "./pages/index.tsx";

interface RouteContext extends MiddlewareContext, ParameterContext {}

export type RouteHandler = (
  request: Request,
  connInfo: ConnInfo,
  ctx?: RouteContext
) => Response | Promise<Response>;

interface Handlers {
  [name: string]: RouteHandler;
}

export const handlers: Handlers = {
  root: () => toResponse(pipe([html, body(renderPage(index()))])),
  css: (req) => serveFile(req, {
    servePath: "./src/css/",
    allowedExtensions: [".css"]
  }),
  images: (req) => serveFile(req, {
    servePath: "./src/images/",
    allowedExtensions: [".jpg",".png",".svg"]
  }),
};
