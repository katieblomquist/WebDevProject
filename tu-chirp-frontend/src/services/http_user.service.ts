import { UserList, User, Profile, Follow } from "./entities";
import { UserService } from "./user.service";

export class HttpUserService implements UserService{
    getFollowees(id: string): Promise<UserList> {
        throw new Error("Method not implemented.");
    }
    async deleteUser(profile: Profile): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async followUser(follow: Follow): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async unfollowUser(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getAllUsers(): Promise<UserList> {
        throw new Error("Method not implemented.");
    }
    async getUserInfo(id: String): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
}