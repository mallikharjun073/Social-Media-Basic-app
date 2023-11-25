import express from "express";
import cookieParser from 'cookie-parser';
import swager from 'swagger-ui-express'
import userRouter from "./features/User/user.routes.js";
import postRouter from "./features/Posts/posts.routes.js";
import commentRouter from "./features/Comments/comments.routes.js";
import likesRouter from "./features/Likes/likes.routes.js";
import jwtAuth from "./middlewares/jwtAuth.middleware.js";
import {errorHandlerMiddleware}  from "./middlewares/errorHandler.middleware.js";
import {loggerMiddleware} from "./middlewares/logger.middleware.js";
import  swaggerdoc from './swagger.json' assert{type : 'json'}
const server = express();

server.use(express.json())
server.use(cookieParser())
server.use(loggerMiddleware);
server.use('/api-docs',swager.serve,swager.setup(swaggerdoc))
server.use('/api/likes',jwtAuth,likesRouter);
server.use('/api/comments',jwtAuth,commentRouter);
server.use('/api/posts',jwtAuth,postRouter);
server.use('/api/',userRouter);

server.get('/',(req, res)=>{
    res.end('tested')
});

server.use(errorHandlerMiddleware)
export default server;