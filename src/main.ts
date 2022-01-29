import { initConfig } from "./config.ts";
import { initLogging } from "./logging.ts";
import { initServer } from "./server.ts";

const loggers = await initLogging();
const config = await initConfig(loggers.get("config")!);
await initServer(config, loggers.get("server")!);
