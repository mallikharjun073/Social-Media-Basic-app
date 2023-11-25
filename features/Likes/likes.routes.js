import  express  from "express";
import { addlike, getLikesPostById } from "./controllers/likes.controller.js";

const likesRouter = express.Router();

likesRouter.get('/:postId',getLikesPostById);

likesRouter.get('/toggle/:postId',addlike
);


export default likesRouter;