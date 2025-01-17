import dotenv from "dotenv";
dotenv.config();
// Redis connection names
const CONN_DEFAULT = "conn:default";
const CONN_PUBLISHER = "conn:publisher";
const CONN_SUBSCRIBER = "conn:subscriber";
const CONN_KV_STORE = "conn:kvstore";
const CONN_BULLMQ = "conn:bullmq";

// worker and queue events
const EVENT_COMPLETED = "completed";
const EVENT_FAILED = "failed";
const EVENT_ERROR = "error";

// queue jobs
const JOB_FLUSH = "job:flush";

// REDIS config
const redisConfig = {
  connection: {
    CONN_BULLMQ,
    CONN_DEFAULT,
    CONN_PUBLISHER,
    CONN_SUBSCRIBER,
    CONN_KV_STORE,
  },
  event: {
    EVENT_COMPLETED,
    EVENT_ERROR,
    EVENT_FAILED,
  },
  job: {
    JOB_FLUSH,
  },
} as const;

enum errors {
  ROOM_ID_NOT_FOUND,
  TOKEN_NOT_FOUND,
  USER_NOT_FOUND,
  UNEXPECTED_ERROR_OCCURRED,
}

const env = {
  FRONTEND_URL: process.env.FRONTEND_URL!,
  REDIS_URL: process.env.REDIS_URL!,
  MONGODB_URL: process.env.MONGODB_URL!,
  SERVICE_NAME: process.env.SERVICE_NAME!,
  SIGNOZ_TOKEN: process.env.SIGNOZ_TOKEN!,
  NODE_ENV: process.env.NODE_ENV!,
  PORT: process.env.PORT!,
  SIGNOZ_ENDPOINT: process.env.SIGNOZ_ENDPOINT!,
};

const errorMessage = new Map<number, string>();
errorMessage.set(errors.ROOM_ID_NOT_FOUND, "Room ID Not Found");
errorMessage.set(errors.TOKEN_NOT_FOUND, "Token Not Found");
errorMessage.set(errors.USER_NOT_FOUND, "User Not Found");
errorMessage.set(errors.UNEXPECTED_ERROR_OCCURRED, "Unexpected Error Occurred");

export { redisConfig, errors, errorMessage, env };
