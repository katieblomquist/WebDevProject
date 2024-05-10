import { UserList, User } from "./entities";
import { UserService } from "./user.service";

export class HttpUserService implements UserService{
    async deleteUser(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async followUser(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async unfollowUser(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getAllUsers(): Promise<UserList> {
        throw new Error("Method not implemented.");
    }
    async getFollowees(): Promise<UserList> {
        throw new Error("Method not implemented.");
    }
    async getUserInfo(id: String): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
}