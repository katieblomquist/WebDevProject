import { Avatar, Button } from '@mui/material';
import { Outlet, Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Profile } from '../services/entities';
import { UserService } from '../services/user.service';
import { MockUserService } from '../services/mock_user.service';

const userService: UserService = new MockUserService;

export default function ProfileCard(props: {location: string, user: Profile}){

    // implement hooks

    //implement functions
    function buttonType(location: string, user: Profile){
        if (location === "profile"){
            return <Button 
            variant="outlined" 
            onClick={() => {
                userService.deleteUser(user);
              }}>Delete Profile</Button>
        } else if( location === "main"){
            return <Button
            variant="contained"
            ><Link to={`profile`}>Your Profile</Link></Button>
        }
    }
    

    return(

            <Card variant="outlined">
                <Avatar>H</Avatar>
                <p>{props.user.handle}</p>
                <p>{props.user.email}</p>
                <div>
                    {buttonType(props.location, props.user)}
                </div>
            </Card>

    );    
}