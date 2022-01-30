import { Route as BrontoRoute, Router } from "../deps/brotoroutus.ts";
import { handlers } from "./handler.ts";

export const router = new Router();

type Route = Omit<BrontoRoute, "pattern">;

const routes: Route[] = [
  { path: "/", method: "GET", handler: handlers.root },
  { path: "/public", method: "GET", handler: handlers.public },
  { path: "/hello/:name", method: "GET", handler: handlers.hello },
];

routes.forEach((route) =>
  router.addRoute(route.method, route.path, route.handler)
);
