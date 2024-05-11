import { Avatar, Card, Menu, MenuItem } from "@mui/material";
import { Post } from "../services/entities";
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from "react";

export default function PostCard(props: { post: Post, poster: boolean, deletePost: (id: number) => void }) {

    // implement hooks
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        props.deletePost(props.post.id);
        setAnchorEl(null);
    };

    const options = [
        'Edit',
        'Delete'
    ];
    const ITEM_HEIGHT = 48;

    let initial = props.post.handle.charAt(0).toUpperCase();

    function CardContent(poster: boolean) {
        if (poster === true) {
            return <div style={{display:'flex', flexDirection:'row', height:'150px', minWidth: '500px', padding: '20px', margin: '20px'}}>
                <Avatar>{initial}</Avatar>
                <div style={{margin:'0 0 0 2em', flexGrow:'1'}}>
                    <h3 style={{margin:'0'}}>{props.post.handle}</h3>
                    <p>{props.post.date_created}</p>
                    <p>{props.post.content}</p>
                </div>
                <button
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    style={{textAlign:'center', height: '4em'}}
                    onClick={handleClick}
                >
                    <p>...</p>
                </button>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>


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