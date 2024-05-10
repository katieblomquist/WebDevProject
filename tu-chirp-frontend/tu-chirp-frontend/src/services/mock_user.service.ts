import { UserList, User } from "./entities";
import { UserService } from "./user.service";

export class MockUserService implements UserService{
    deleteUser(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    followUser(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    unfollowUser(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getAllUsers(): Promise<UserList> {
        throw new Error("Method not implemented.");
    }
    getFollowees(): Promise<UserList> {
        throw new Error("Method not implemented.");
    }
    getUserInfo(id: String): Promise<User> {
        throw new Error("Method not implemented.");
    }

}