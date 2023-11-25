# Social Media API
The Social Media API is a RESTful API designed for managing posts, comments, and likes. It provides endpoints to interact with posts, including creating, updating, deleting, and retrieving posts. Additionally, the API supports commenting on posts and liking posts.

Endpoints
Posts
Get All Posts

URL: /posts/all
Method: GET
Description: Retrieve all posts.
Get Post by ID

URL: /posts/{id}
Method: GET
Description: Retrieve a specific post by its ID.
Get Posts by User

URL: /posts
Method: GET
Description: Retrieve posts associated with a specific user.
Add New Post

URL: /posts
Method: POST
Description: Add a new post. Requires a user ID, caption, and an optional image file.
Delete Post by ID

URL: /posts/{id}
Method: DELETE
Description: Delete a specific post by its ID.
Update Post by ID

URL: /posts/{id}
Method: PUT
Description: Update a specific post by its ID. Requires a user ID, caption, and an optional image file.
Comments
Get Comment by ID

URL: /comments/{id}
Method: GET
Description: Retrieve a specific comment by its ID.
Add Comment to Post

URL: /comments/{id}
Method: POST
Description: Add a new comment to a specific post. Requires a user ID and comment content.
Delete Comment by ID

URL: /comments/{id}
Method: DELETE
Description: Delete a specific comment by its ID.
Update Comment by ID

URL: /comments/{id}
Method: PUT
Description: Update a specific comment by its ID. Requires a user ID and updated comment content.
Likes
Get Likes for Post

URL: /likes/{postId}
Method: GET
Description: Retrieve likes for a specific post.
Toggle Like for Post

URL: /likes/toggle/{postId}
Method: GET
Description: Toggle a like for a specific post.
Usage
Start the server.
Use the provided endpoints to interact with the API.
Dependencies
Express.js
File Upload Middleware
Models
PostsModel
The PostsModel class is responsible for managing posts.

Properties

id: Unique identifier for the post.
userId: ID of the user who created the post.
caption: Caption of the post.
imageUrl: URL of the post image.
Methods

addPost(userId, caption, imageUrl): Add a new post.
getPosts(): Retrieve all posts.
getPosts(postId): Retrieve a specific post by ID.
getPostsByUserId(userId): Retrieve posts by a specific user.
deletePost(userId, postId): Delete a specific post.
updatePost(postId, userId, caption, filename): Update a specific post.
