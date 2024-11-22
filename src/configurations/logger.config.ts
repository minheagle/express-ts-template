import winston, { createLogger, format, transports } from "winston";
import profile from "./env.config";

const customLevels = {
  levels: {
    critical: 0,
    error: 1,
    warn: 2,
    http: 3,
    info: 4,
    debug: 5,
  },
  colors: {
    critical: "red",
    error: "red",
    warn: "yellow",
    http: "green",
    info: "white",
    debug: "blue",
  },
};

const customFormatConsole = format.combine(
  format.colorize(),
  format.timestamp(),
  format.printf(({ timestamp, level, message, ...meta }) => {
    let levelUpper = level.toUpperCase();
    console.log(levelUpper);
    let metaString = "";
    if (Object.keys(meta).length > 0) {
      try {
        metaString = JSON.stringify(meta);
      } catch (error) {
        metaString = "Error serializing meta data";
      }
    }
    return `${timestamp} [${level}] ${message} ${metaString}`;
  })
);

const customFormatFile = format.combine(
  format.timestamp(),
  format.printf(({ timestamp, level, message, ...meta }) => {
    let metaString = "";
    if (Object.keys(meta).length > 0) {
      try {
        metaString = JSON.stringify(meta, null, 2);
      } catch (error) {
        metaString = "Error serializing meta data";
      }
    }
    return `${timestamp} ${level} ${message} ${metaString}`;
  }),
  format.json()
);

const customTransports = [
  new transports.Console({
    format: customFormatConsole,
  }),
  new transports.File({
    filename: "logs/app.log",
    format: customFormatFile,
  }),
  new transports.File({
    filename: "logs/error.log",
    level: "error",
    format: customFormatFile,
  }),
];

// Create logger with proper level and transports
const logger = createLogger({
  levels: customLevels.levels,
  level: profile.env === "prod" ? "info" : "debug", // Environment-specific log level
  transports: customTransports,
});

// Add custom colors to the logger
winston.addColors(customLevels.colors);

export default logger;
