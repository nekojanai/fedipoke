import { initConfig } from "./config.ts";
import { initLogging } from "./logging.ts";

const loggers = await initLogging();
const config = await initConfig(loggers.get("config")!);
console.log(config);
