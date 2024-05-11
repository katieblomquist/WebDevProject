import { Avatar, Card, Menu, MenuItem } from "@mui/material";
import { Post } from "../services/entities";
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from "react";

export default function PostCard(props: { post: Post, poster: boolean }) {

    // implement hooks
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //implement functions

    let initial = props.post.handle.charAt(0).toUpperCase();

    function CardContent(poster: boolean) {
        if (poster === true) {
            return <div style={{display:'flex', flexDirection:'row', height:'150px', padding: '20px', margin: '20px'}}>
                <Avatar>{initial}</Avatar>
                <div style={{margin:'0 0 0 2em'}}>
                    <h3 style={{margin:'0'}}>{props.post.handle}</h3>
                    <p>{props.post.date_created}</p>
                    <p>{props.post.content}</p>
                </div>
                {/* <div>
                    <MoreHorizIcon onClick={handleClick} />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        TO DO: set these so they update through the parent
                        <MenuItem onClick={handleClose}>Edit Post</MenuItem>
                        <MenuItem onClick={handleClose}>Delete Post</MenuItem>
                    </Menu>
                </div> */}


            </div>
        } else {
            return <div style={{display:'flex', flexDirection:'row', height:'150px', padding: '20px', margin: '20px'}}>
                <Avatar>{initial}</Avatar>
                <div style={{margin:'0 0 0 2em'}}>
                    <h3 style={{margin:'0'}}>{props.post.handle}</h3>
                    <p>{props.post.date_created}</p>
                    <p>{props.post.content}</p>
                </div>

            </div>
        }
    }

    return (

        <Card variant="outlined" style={{margin:'0 0 1em 0'}}>
            {CardContent(props.poster)}
        </Card>

    );
}