import { PostList, Post, Like, PostComment } from "./entities";
import { PostService } from "./post.service";

export class HttpPostService implements PostService{
    async createPost(post: Post): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updatePost(id: string, content: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deletePost(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async favoritePost(like: Like): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async sharePost(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getAllPosts(): Promise<PostList> {
        throw new Error("Method not implemented.");
    }
    async getPostById(id: string): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    async getPostByUser(id: String): Promise<PostList> {
        throw new Error("Method not implemented.");
    }
    async createComment(postComment: PostComment): Promise<void> {
        throw new Error("Method not implemented.");
    }

}