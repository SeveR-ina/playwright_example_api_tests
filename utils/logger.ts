import { createLogger, transports, format } from "winston";

// Define the log file location
const logFile = "test-logs.log";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [new transports.Console(), new transports.File({ filename: logFile })],
});

export default logger;
