import { PostList, Post, Like, PostComment } from "./entities";
import { PostService } from "./post.service";
import { posts } from "./mock_data";

export class MockPostService implements PostService{
    createPost(post: Post): Promise<void> {
        posts.push(post);
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }
    updatePost(id: number, content: string): Promise<void> {
        posts.forEach(post => {
            if(post.content_id === id){
                post.content = content;
            }
        });
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }
    deletePost(id: number): Promise<void> {
        posts.forEach((post, index) => {
            if(post.content_id === id){
                posts.splice(index, 1);
            }
        });
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }
    favoritePost(like: Like): Promise<void> {
        posts.forEach(post => {
            if(post.content_id === like.content_id){
                post.likes.push(like);
            }
        });
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }
    sharePost(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getAllPosts(): Promise<PostList> {
        return new Promise((resolve) => {
            setTimeout(resolve, 500, [...posts]);
        })
    }
    getPostById(id: number): Promise<Post> {
        let found: Boolean = false;
        let post: Post;
        posts.forEach(post => {
            if(post.content_id === id){
                found = true;
            }
        });
        if(found === true){
            return new Promise((resolve) => {
                    setTimeout(resolve, 500, post);
                })
        } else{
           throw new Error("Post Not Found");  
        }
        
    }
    getPostByUser(id: number): Promise<PostList> {
        let userPosts: PostList = [];
        posts.forEach(post => {
            if(post.user_id === id){
                userPosts.push(post);
            };
        });
        return new Promise((resolve) => {
            setTimeout(resolve, 500, userPosts);
        })
    }
    createComment(postComment: PostComment): Promise<void> {
        posts.forEach(post => {
            if(post.content_id === postComment.parent_id){
                post.comments.push(postComment);
            }
        });
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }

}