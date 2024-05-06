import { Post, PostList, Like, PostComment } from "./entities";

//This is an interface that will be implimented first in the mock services (which connect to mock data) and then to the http services (which connect
// to the API). This will allow us to start dev on front oned without the API being finished and without having to duplicate work. 

export interface PostService{

    //create bookiing call
    createPost(post: Post): Promise<void>;

    //update post call
    updatePost(id: string, content: string): Promise<void>;

    //delete post call
    deletePost(id: string): Promise<void>;

    //favorite post call
    favoritePost(like: Like): Promise<void>;

    //share post call
    sharePost(): Promise<void>;

    //get all posts call
    //should return a PostList
    getAllPosts(): Promise<PostList>;

    //get post by Id call
    //should return a post
    getPostById(id: string): Promise<Post>;

    //get posts by user call
    //should return a PostList
    getPostByUser(id: String): Promise<PostList>;

    //create comment
    createComment(postComment: PostComment): Promise<void>;



}