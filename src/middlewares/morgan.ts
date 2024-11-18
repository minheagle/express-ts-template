import morgan from "morgan";

const successHandler = morgan("dev", {
  skip: (req, res) => res.statusCode >= 400,
  //   stream: { write: (message) => logger.info(message.trim()) },
});

const errorHandler = morgan("dev", {
  skip: (req, res) => res.statusCode < 400,
  //   stream: { write: (message) => logger.error(message.trim()) },
});

export default { successHandler, errorHandler };
