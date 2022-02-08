import { handleMiddlewarePipeline, MiddlewareHandler, serve } from "../deps.ts";
import { Config } from "./config.ts";
import { Logger } from "./logging.ts";
import { router } from "./router.ts";

const routerHandler = (logger: Logger) =>
  router.toHandler({
    errorHandler: (_r, _c, err) => {
      logger.error(err);
      return new Response("internal server error", { status: 500 });
    },
    noMatchHandler: () => new Response("404", { status: 404 }),
  });

const logHandler =
  (logger: Logger): MiddlewareHandler =>
  (req: Request, _, ctx) => {
    logger.info(`${req.method} ${req.url}`);
    return new Response();
  };

export async function initServer(
  config: Config,
  logger: Logger
): Promise<void> {
  logger.info(`Server starting access at: http://localhost:${config.PORT}`);
  await serve(
    handleMiddlewarePipeline([logHandler(logger), routerHandler(logger)]),
    {
      port: config.PORT,
    }
  );
}
