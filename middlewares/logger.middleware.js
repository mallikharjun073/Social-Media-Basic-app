import winston from "winston";

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logger.log' })
  ]
});

export function loggerMiddleware(req, res, next) {
    if(!req.url.includes('sign')){
        const logdata = `${new Date().toLocaleString()} ReqURL: ${req.url} reqBody: ${JSON.stringify(req.body || {})}`;
        logger.info(logdata);
    }
  
  next();
}
