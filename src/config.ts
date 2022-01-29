import { dotenv } from "../deps/deno-dotenv.ts";
import { generateKeyPair } from "./crypto.ts";
import { Logger } from "./logging.ts";

const DOTENV_FILENAME = ".env";
const PRIVATEKEY_FILENAME = "privatekey.txt";
const PUBLICKEY_FILENAME = "publickey.txt";

const LOG_INIT_CONFIG = "Initializing config...";
const LOG_MISSING_IN_DOTENV =
  "Please fill in DOMAIN, USERNAME and PORT in your .env file and restart.";
const LOG_MISSING_DOTENV_FILE =
  "No .env file found, created one, please fill out the missing fields and restart.";
const LOG_MISSING_KEYS = "No keyfiles found, creating new keyfiles...";
const LOG_SUCCESS = "Config successfully initialized.";

export interface Config {
  DOMAIN: string;
  USERNAME: string;
  PORT: number;
  PRIVATEKEY_FILE: string;
  PUBLICKEY_FILE: string;
}

export async function initConfig(logger: Logger): Promise<Config> {
  function log(msg: string) {
    logger.info(msg);
  }

  const env = dotenv.config();
  log(LOG_INIT_CONFIG);

  let fileNotFound = false;
  try {
    await Deno.readFile(DOTENV_FILENAME);
  } catch (_) {
    fileNotFound = true;
  }

  if (fileNotFound) {
    log(LOG_MISSING_DOTENV_FILE);
    await Deno.writeTextFile(DOTENV_FILENAME, "DOMAIN=\n");
    await Deno.writeTextFile(DOTENV_FILENAME, "USERNAME=\n", { append: true });
    await Deno.writeTextFile(DOTENV_FILENAME, "PORT=\n", { append: true });
    return Promise.reject(LOG_MISSING_DOTENV_FILE);
  }

  if (!env.DOMAIN || !env.USERNAME || !env.PORT) {
    log(LOG_MISSING_IN_DOTENV);
    return Promise.reject(LOG_MISSING_IN_DOTENV);
  }

  let privateKey, publicKey: string;
  if (!env.PRIVATEKEY_FILE || !env.PUBLICKEY_FILE) {
    log(LOG_MISSING_KEYS);
    const keyPair = await generateKeyPair();
    privateKey = keyPair.privateKey;
    publicKey = keyPair.publicKey;
    await Deno.writeTextFile(PRIVATEKEY_FILENAME, privateKey);
    await Deno.writeTextFile(PUBLICKEY_FILENAME, publicKey);
    await Deno.writeTextFile(
      DOTENV_FILENAME,
      `PRIVATEKEY_FILE=${PRIVATEKEY_FILENAME}\n`,
      {
        append: true,
      }
    );
    await Deno.writeTextFile(
      DOTENV_FILENAME,
      `PUBLICKEY_FILE=${PUBLICKEY_FILENAME}\n`,
      {
        append: true,
      }
    );
  } else {
    privateKey = await Deno.readTextFile(env.PRIVATEKEY_FILE);
    publicKey = await Deno.readTextFile(env.PUBLICKEY_FILE);
  }

  log(LOG_SUCCESS);
  return {
    DOMAIN: env.DOMAIN,
    USERNAME: env.USERNAME,
    PORT: Number.parseInt(env.PORT),
    PRIVATEKEY_FILE: privateKey,
    PUBLICKEY_FILE: publicKey,
  };
}
