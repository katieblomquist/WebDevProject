import { PostList, Post } from "./entities";
import { PostService } from "./post.service";

export class MockPostService implements PostService{
    createPost(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updatePost(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deletePost(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    favoritePost(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    sharePost(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getAllPosts(): Promise<PostList> {
        throw new Error("Method not implemented.");
    }
    getPostById(): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    getPostByUser(id: String): Promise<PostList> {
        throw new Error("Method not implemented.");
    }
    createComment(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}