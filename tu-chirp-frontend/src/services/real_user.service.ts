import { UserList, User, Profile, Follow } from "./entities";
import { UserService } from "./user.service";
import { users, profile, follows } from "./mock_data";
import { createClient } from '@supabase/supabase-js';
import { Database } from './supabase.ts';

const supabaseUrl = 'https://mqezghvdjvzgqzycomzs.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZXpnaHZkanZ6Z3F6eWNvbXpzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTIxOTM0NywiZXhwIjoyMDMwNzk1MzQ3fQ.CR3bLreIDSMPUDEVW2Z5iOjjwIzGMPZT8iM4LbghlcY";
const supabase = createClient<Database>(supabaseUrl, supabaseKey) //idk if passing the key in like this is a good idea but w/e



export class RealUserService implements UserService{
    getFollowees(id: string): Promise<UserList> {
        return new Promise((resolve) => {
            setTimeout(resolve, 500, followees);
        })
    }
    deleteUser(profile: Profile): Promise<void> {
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }
    followUser(follow: Follow): Promise<void> {
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }
    unfollowUser(id: string): Promise<void> {
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }
    getAllUsers(): Promise<UserList> {
        return new Promise((resolve) => {
            setTimeout(resolve, 500, [...users]);
        })
    }
    async getUserInfo(id: Number): Promise<User> { //Requires checking who is logged in, idk how to do that. 
        const {data, error} = await supabase
            .from("User")
            .select("*")
            .eq("user_id", id)
        return new Promise((resolve) => {
            setTimeout(resolve, 500, data);
        })
    }


    async getHandle(id: Number): Promise<String> {
        const {data:handle, error } = await supabase
            .from("User")
            .select('handle')
            .eq('user_id', id)
        return new Promise((resolve) => {
            setTimeout(resolve, 500, handle);
        })
    }
}