import { log } from "../deps/log.ts";
export type Logger = log.Logger;

const loggerNames = ["config"];

const defaultLoggerConfig: log.LoggerConfig = {
  level: "INFO",
  handlers: ["console"],
};

interface Loggers {
  [name: string]: log.LoggerConfig;
}

function createLoggers(names: string[]): Loggers {
  const loggers: Loggers = {};
  names.forEach((name) => {
    loggers[name] = defaultLoggerConfig;
  });
  return loggers;
}

function createLoggersMap(names: string[]): Map<string, log.Logger> {
  const map = new Map<string, log.Logger>();
  names.forEach((name) => map.set(name, log.getLogger(name)));
  return map;
}

export async function initLogging(): Promise<Map<string, log.Logger>> {
  await log.setup({
    handlers: {
      console: new log.handlers.ConsoleHandler("INFO", {
        formatter: "{datetime} {loggerName} {msg}",
      }),
    },
    loggers: createLoggers(loggerNames),
  });
  return createLoggersMap(loggerNames);
}
