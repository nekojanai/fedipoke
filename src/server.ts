import { serve } from "../deps/server.ts";
import { Config } from "./config.ts";
import { Logger } from "./logging.ts";

export async function initServer(
  config: Config,
  logger: Logger
): Promise<void> {
  function log(msg: string) {
    logger.info(msg);
  }
  log(`Server starting access at: http://localhost:${config.PORT}`);
  await serve(
    () =>
      new Response(
        `
      <h1>uwu</h1>
      <h2>*pokes you*</h2>
      <p>A federated poking service.</p>
      `,
        {
          headers: { "content-type": "text/html; charset=utf8" },
        }
      ),
    {
      port: config.PORT,
    }
  );
}
