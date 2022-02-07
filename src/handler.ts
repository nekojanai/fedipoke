import { ConnInfo } from "../deps/server.ts";
import { ParameterContext } from "../deps/brotoroutus.ts";
import { MiddlewareContext } from "../deps/waggon.ts";
import { body, html, pipe, toResponse } from "../deps/please-respond.ts";
import { renderPage } from "./ssr.ts";
import { index } from "./pages/index.tsx";
import { serveFile } from "../deps/staticsaurus.ts";

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
  public: (req, conn, ctx) => serveFile(req),
};
