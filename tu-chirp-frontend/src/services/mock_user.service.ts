import { UserList, User, Profile, Follow } from "./entities";
import { UserService } from "./user.service";
import { users, profile, follows } from "./mock_data";

export class MockUserService implements UserService{
    getFollowees(id: number): Promise<UserList> {
        let followees: UserList = [];
        follows.forEach(follow => {
            users.forEach(user => {
                if(user.user_id === follow.followee_id){
                    followees.push(user);
                }
            });
        });
        return new Promise((resolve) => {
            setTimeout(resolve, 500, followees);
        })
    }
    deleteUser(profile: Profile): Promise<void> {
        let params = {user_id: profile.user_id, handle: profile.handle};
        let index = users.indexOf(params);
        users.splice(index, 1);
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }
    followUser(follow: Follow): Promise<void> {
        follows.push(follow);
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }
    unfollowUser(id: number): Promise<void> {
        follows.forEach((follow, index) => {
            if(follow.followee_id === id){
                follows.splice(index, 1);
            }
        });
        return new Promise<void>((resolve) => { setTimeout(resolve, 500,) });
    }
    getAllUsers(): Promise<UserList> {
        return new Promise((resolve) => {
            setTimeout(resolve, 500, [...users]);
        })
    }
    getUserInfo(id: number): Promise<User> {
        let foundUser: User;
        users.forEach(user => {
            if(user.user_id === id){
                foundUser = user;
            }
        });
        return new Promise((resolve) => {
            setTimeout(resolve, 500, foundUser);
        })
    }

}