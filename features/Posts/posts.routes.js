import  express  from "express";
import { addpost, deletePost, getAllPosts, getPostById, userPosts,updatePostById } from "./controllers/Posts.controller.js";
import Fileupload from "../../middlewares/fileupload.middleware.js";
const postRouter = express.Router();

postRouter.get('/all',getAllPosts);

postRouter.get('/:id', getPostById);

postRouter.get('/',userPosts);
postRouter.post('/',Fileupload.single('imageUrl'), addpost);
postRouter.delete('/:id',deletePost);
postRouter.put('/:id',Fileupload.single("imageUrl"), updatePostById);


export default postRouter;