import { User, UserList } from "./entities";

//This is an interface that will be implimented first in the mock services (which connect to mock data) and then to the http services (which connect
// to the API). This will allow us to start dev on front oned without the API being finished and without having to duplicate work. 

//NOTE: Login is not implemented here. I'm not sure of the best place for it to go. 

export interface UserService{

    //Delete user account call
    //will need to add parameters. Should return void
    deleteUser(): Promise<void>;
    
    //Follow user call
    //will need to have parameters added. Should return void. 
    followUser(): Promise<void>;

    //unfollow user call
    // will need to have parameters added. Should return void. 
    unfollowUser(): Promise<void>;

    //get all users call
    //should return a list of users
    getAllUsers(): Promise<UserList>;

    //get all followees call
    //should return a list of users
    getFollowees(): Promise<UserList>;

    //getUserInfo call
    //returns the the info for the user that is logged in
    getUserInfo(id: String): Promise<User>;

}