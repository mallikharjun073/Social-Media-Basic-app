import  express  from "express";
import { deleteComments, getCommentPostById, insertcomment, updateCommentById } from "./controllers/comments.controller.js";

const commentRouter = express.Router();



commentRouter.get('/:id',getCommentPostById);
commentRouter.post('/:id', insertcomment);

commentRouter.delete('/:id',deleteComments);
commentRouter.put('/:id',updateCommentById);


export default commentRouter;