import { PostList, Post, Like, PostComment } from "./entities";
import { PostService } from "./post.service";
import { posts } from "./mock_data";
import { createClient } from '@supabase/supabase-js';
import { Database } from './supabase.ts';

const supabaseUrl = 'https://mqezghvdjvzgqzycomzs.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZXpnaHZkanZ6Z3F6eWNvbXpzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTIxOTM0NywiZXhwIjoyMDMwNzk1MzQ3fQ.CR3bLreIDSMPUDEVW2Z5iOjjwIzGMPZT8iM4LbghlcY";
const supabase = createClient<Database>(supabaseUrl, supabaseKey) //idk if passing the key in like this is a good idea but w/e

export class RealPostService implements PostService{
    async createPost(post: Post): Promise<void> { //Should work
        const { error } = await supabase
            .from("Post")
            .insert({parent_id: null, is_post: true, user_id: post.user_id, date_created: this.getDate(),
                 content: post.content, was_modified: false, modified_at: null, is_deleted: false}) //Contentid isnt updated as thats generated automatically in SQL
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }

    async updatePost(id: number, content: string): Promise<void> { //Should work
        const { error } = await supabase
            .from("Post")
            .update({content: content}) //Left side is table column, right side is new value
            .eq('content_id', id) //Filters based on content_id
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }

    async deletePost(id: number): Promise<void> {
        const { error } = await supabase
            .from("Post")
            .update({is_deleted: true}) 
            .eq('content_id',id)
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }

    async favoritePost(like: Like): Promise<void> {
        const { error } = await supabase
        .from("Like")
        .insert({ content_id: like.content_id, user_id: like.user_id }) 
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }

    sharePost(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async getAllPosts(): Promise<PostList> { //Dont think it returns the array in the way you originally wanted it to, you likely have to modify some code on the front end.
       
        const {data: Post,error} = await supabase
            .from("Post")
            .select("*")
        return new Promise((resolve) => {
            setTimeout(resolve, 500, Post);
        })
    }

    async getPostById(id: number): Promise<Post> {
        const {data: Post, error} = await supabase
            .from("Post")
            .select("*")
            .eq('content_id',id)
        if(error){
            throw new Error(error.toString());  
        } else{
            return new Promise((resolve) => {
                setTimeout(resolve, 500, Post);
            })
        }
        
    }

    async getPostByUser(id: number): Promise<PostList> {
        const {data: Post, error} = await supabase
            .from("Post")
            .select("*")
            .eq("user_id", id)
        return new Promise((resolve) => {
            setTimeout(resolve, 500, Post);
        })
    }

    async createComment(postComment: PostComment): Promise<void> {
        const { error } = await supabase
            .from("Post")
            .insert({parent_id: postComment.parent_id, is_post: false, user_id: postComment.user_id, date_created: this.getDate(),
                    content: postComment.content, was_modified: false, modified_at: null, is_deleted: false}) //Contentid isnt updated as thats generated automatically in SQL
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }

    getDate(){ //helper function because timestamps are a pain
        return new Date().toISOString()
    }

}