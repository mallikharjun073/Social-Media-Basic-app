import Postmodel from './../../Posts/Models/Posts.model.js'
export default class CommentsModel{
    constructor(id,userId,postId,content){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }
    static CommentDB = [];
    static addcomment(userId, postId, content){
        const posts = Postmodel.PostDB;
        const findpost = posts.findIndex((post) => post.id == postId);
        if(findpost >= 0){
            const datatoInsert  = new CommentsModel(this.CommentDB.length + 1, userId, postId, content);
            this.CommentDB.push(datatoInsert);
            return datatoInsert;
        }else{
            throw new Error('post not found');
        }

    }
    static getComments(){
        return this.CommentDB;
    }

    static getpostcomments(postId){
        const comments = this.CommentDB.filter((comment) => comment.postId == postId);
        if(comments){
            return comments;
        }
        throw new Error('Post Not Found')
    }

    static deletecomment(userId, commentId){
        const deleteIndex = this.CommentDB.findIndex((comment) => { 
            return comment.id == commentId && comment.userId == userId
        } )

        if(deleteIndex >= 0){
            return this.CommentDB.splice(deleteIndex,1);
        }else{
            throw new Error('Comment Not Found');
        }
    }

    static updateComment(userId, commentId, content){
        let isupdated = false;
        let updateddata = null;
        for(let i = 0; i < this.CommentDB.length; i++){
            if(this.CommentDB[i].id == commentId && this.CommentDB[i].userId == userId){
                this.CommentDB[i].content = content;
            }
            isupdated= true;
            updateddata = this.CommentDB[i];
            break;
        }
        if(isupdated){
            return updateddata;
        }else{
            throw new Error('Something went wrong');
        }
    }
}