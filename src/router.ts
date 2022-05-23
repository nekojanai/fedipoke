import { Route as BrontoRoute, Router } from "../deps.ts";
import { handlers } from "./handler.ts";

export const router = new Router();

type Route = Omit<BrontoRoute, "pattern">;

const routes: Route[] = [
  { path: "/", method: "GET", handler: handlers.root },
  { path: "/css/*", method: "GET", handler: handlers.css },
  { path: "/images/*", method: "GET", handler: handlers.images }
];

routes.forEach((route) =>
  router.addRoute(route.method, route.path, route.handler)
);
