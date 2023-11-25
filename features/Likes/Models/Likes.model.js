export default class LikesModel{
    constructor(id,userId,postId){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
    }
    static LikesDB = [];
    static Togglelikes(userId, postId){
        const isLiked = this.LikesDB.findIndex((likes) => likes.userId == userId && likes.postId == postId)
        if(isLiked >= 0){
            const deletedlike = this.LikesDB.splice(isLiked,1)
            return deletedlike;
        }else{
            const datatoInsert  = new LikesModel(this.LikesDB.length+1, userId, postId);
            this.LikesDB.push(datatoInsert);
            return datatoInsert;
        }
       
    }
    static getlikes(postId){
        const likes = this.LikesDB.filter((like) => like.postId == postId);
        return likes;
    }
}