import PostsModel from '../Models/Posts.model.js'
export function addpost(req, res){
    const { caption } = req.body;
    const filename = req.file.filename;
    const userId = req.userId;
    const data = PostsModel.addPost(userId,caption, filename);
    res.status(201).send({ success : true, msg : data});
}

export function getPostById(req, res){
    const postId = req.params.id;
    const data = PostsModel.getposts(postId);
    res.status(200).send({success : true, msg : data });
}

export function getAllPosts(req, res){
    const allposts = PostsModel.getPosts();
    res.status(200).send({success : true, msg : allposts });
}

export function userPosts(req, res){
    const UserId = req.UserId;
    const userposts = PostsModel.getPostsByUserId(UserId);
    res.status(200).send({success : true, msg : userposts})
}

export function deletePost(req, res){
    const postId = req.params.id;
    const userId =req.userId;
    const datadeleted = PostsModel.deletepost(userId,postId);
    res.status(200).send({success : true, msg : datadeleted})

}

export function updatePostById(req, res){
    const {caption} = req.body;
    const filename = req.file.filename;
    const postId = req.params.id;
    const UserId = req.userId;
    const updateddata = PostsModel.updatePost(postId, UserId, caption, filename)
    res.status(200).send({success : true, msg : updateddata})
}