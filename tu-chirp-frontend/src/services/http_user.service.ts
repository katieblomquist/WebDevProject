import { UserList, User, Profile, Follow } from "./entities";
import { UserService } from "./user.service";

export class HttpUserService implements UserService{
    getFollowees(id: number): Promise<UserList> {
        throw new Error("Method not implemented.");
    }
    async deleteUser(profile: Profile): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async followUser(follow: Follow): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async unfollowUser(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getAllUsers(): Promise<UserList> {
        throw new Error("Method not implemented.");
    }
    async getUserInfo(id: number): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
}