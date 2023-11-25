
import {logger} from "./logger.middleware.js";
export class CustomError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode || 500;
    }
  }
  
export function errorHandlerMiddleware (err, req, res, next) {
    if (err instanceof CustomError) {
      const logdata = `${new Date().toLocaleString()} ReqURL: ${req.url} error:${err.message}`;
      logger.info(logdata);
      return res.status(err.statusCode).json({
        error: {
          message: err.message,
          code: err.statusCode,
        },
      });
    }else{
        const logdata = `${new Date().toLocaleString()} ReqURL: ${req.url} error: Oops! Something went wrong... Please try again later!`;
        logger.info(logdata);
        res.status(500).send('Oops! Something went wrong... Please try again later!');
    }
  };
  
  