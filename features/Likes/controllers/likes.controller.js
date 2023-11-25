import LikesModel from '../Models/Likes.model.js';
import { CustomError } from '../../../middlewares/errorHandler.middleware.js';
export function addlike(req, res){
    const postId = req.params.postId;
    const userId = req.userId;
    const data = LikesModel.Togglelikes(userId,postId);
    res.status(201).send({ success : true, msg : data});
}

export function getLikesPostById(req, res){
    const postId = req.params.postId;
    const data = LikesModel.getlikes(postId);
    if(data.length > 0){
        res.status(200).send({success : true, msg : data });
    }else{
        
        throw new CustomError('Likes Not Found',404);
    }
    
}

