import { Post, PostList } from "./entities";

//This is an interface that will be implimented first in the mock services (which connect to mock data) and then to the http services (which connect
// to the API). This will allow us to start dev on front oned without the API being finished and without having to duplicate work. 

export interface PostService{

    //create bookiing call
    //will need to have parameters added. Should return void
    createPost(): Promise<void>;

    //update post call
    //will need to have parameters added. Should return void
    updatePost(): Promise<void>;

    //delete post call
    //will need to have parameters added. Should return void
    deletePost(): Promise<void>;

    //favorite post call
    //will need to have parameters added. Should return void
    favoritePost(): Promise<void>;

    //share post call
    //will need to have parameters added. Should return void
    sharePost(): Promise<void>;

    //get all posts call
    //should return a PostList
    getAllPosts(): Promise<PostList>;

    //get post by Id call
    //should return a post
    getPostById(): Promise<Post>;

    //get posts by user call
    //should return a PostList
    getPostByUser(id: String): Promise<PostList>;

    //create comment
    //Will need to have parameters added. should return void
    createComment(): Promise<void>;



}