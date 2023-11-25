export default class PostsModel{
    constructor(id,userId,caption,imageUrl){
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
    }
    static PostDB = [];
    static addPost(userId, caption, imageUrl){
        const datatoInsert  = new PostsModel(this.PostDB.length+1, userId, caption, imageUrl);
        this.PostDB.push(datatoInsert);
        return datatoInsert;
    }

    static getposts(){
        return this.PostDB;
    }

    static getposts(postId){
        const post  = this.PostDB.find((posts) => posts.id == postId);
        if(post){
            return post;
        }else{
            throw new Error(500,'Post not found')
        }
    }
    static  getPosts() {
        return this.PostDB;
    }

    static getPostsByUserId(UserId){
        const posts = this.PostDB.filter((post) => post.UserId == UserId);
        return posts;
    }

    static deletepost(userId, postId){
        const delteIndex = this.PostDB.findIndex((post) => post.id == postId && post.userId == userId);
        if(delteIndex >= 0){
            return this.PostDB.splice(delteIndex, 1)
        }else{
            throw new Error(500, 'Post Delete Not applicable')
        }
    }

    static updatePost(postId,userId, caption, filename){
        let isupdated = false;
        let updateddata = null;
        for(let i = 0; i < this.PostDB.length; i++){
            if(this.PostDB[i].id == postId && this.PostDB[i].userId == userId){
                this.PostDB[i].caption = caption;
                this.PostDB[i].imageUrl = filename;
                isupdated = true;
                updateddata = this.PostDB[i]
                break;
            }
        }

        if(isupdated){
            return updateddata;
        }else{
            throw new Error(500, 'update not processed')
        }
    }
}