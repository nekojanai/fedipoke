import { initConfig } from "./src/config.ts";
import { initLogging } from "./src/logging.ts";
import { initServer } from "./src/server.ts";

const loggers = await initLogging();
const config = await initConfig(loggers.get("config")!);
await initServer(config, loggers.get("server")!);
