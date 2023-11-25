import CommentsModel from '../Models/Comments.model.js'
export function insertcomment(req, res){
    const { content } = req.body;
    const postId = req.params.id;
    const userId = req.userId;
    const data = CommentsModel.addcomment(userId,postId,content );
    res.status(201).send({ success : true, msg : data});
}

export function getCommentPostById(req, res){
    const postId = req.params.id;
    const data = CommentsModel.getpostcomments(postId);
    res.status(200).send({success : true, msg : data });
}


export function deleteComments(req, res){
    const postId = req.params.id;
    const userId =req.userId;
    const datadeleted = CommentsModel.deletecomment(userId,postId);
    res.status(200).send({success : true, msg : datadeleted})

}

export function updateCommentById(req, res){
    const {content} = req.body; 
    const commentId = req.params.id;
    const UserId = req.userId;
    const updateddata = CommentsModel.updateComment(UserId, commentId, content)
    res.status(200).send({success : true, msg : updateddata})
}