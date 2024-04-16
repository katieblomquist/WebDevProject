import { PostList, Post } from "./entities";
import { PostService } from "./post.service";

export class HttpPostService implements PostService{
    async createPost(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async updatePost(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async deletePost(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async favoritePost(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async sharePost(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getAllPosts(): Promise<PostList> {
        throw new Error("Method not implemented.");
    }
    async getPostById(): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    async getPostByUser(id: String): Promise<PostList> {
        throw new Error("Method not implemented.");
    }
    async createComment(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}