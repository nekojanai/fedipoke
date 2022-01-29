import {
  Logger,
  getLogger,
  setup,
  handlers,
  LoggerConfig,
} from "../deps/log.ts";
export { Logger } from "../deps/log.ts";

const loggerNames = ["config", "server"];

const defaultLoggerConfig: LoggerConfig = {
  level: "INFO",
  handlers: ["console"],
};

interface Loggers {
  [name: string]: LoggerConfig;
}

function createLoggers(names: string[]): Loggers {
  const loggers: Loggers = {};
  names.forEach((name) => {
    loggers[name] = defaultLoggerConfig;
  });
  return loggers;
}

function createLoggersMap(names: string[]): Map<string, Logger> {
  const map = new Map<string, Logger>();
  names.forEach((name) => map.set(name, getLogger(name)));
  return map;
}

export async function initLogging(): Promise<Map<string, Logger>> {
  await setup({
    handlers: {
      console: new handlers.ConsoleHandler("INFO", {
        formatter: "{datetime} [{loggerName}]: {msg}",
      }),
    },
    loggers: createLoggers(loggerNames),
  });
  return createLoggersMap(loggerNames);
}
