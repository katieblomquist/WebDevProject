import { Avatar, Card, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Post } from "../services/entities";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";
import { Link } from "react-router-dom";

//TO DO: Style the dropdown button

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
    const options = [
        { title: 'Edit', link: '/edit' },
        { title: 'Delete', link: '/delete' }
    ];
    const ITEM_HEIGHT = 48;

    //implement functions

    let initial = props.post.user_handle.charAt(1).toUpperCase();

    function CardContent(poster: boolean) {
        if (poster === true) {
            return <div style={{ display: 'flex', flexDirection: 'row', height: '150px', padding: '20px', margin: '20px' }}>
                <Avatar>{initial}</Avatar>
                <div style={{ margin: '0 0 0 2em', flexGrow: '1' }}>
                    <h3 style={{ margin: '0' }}>{props.post.user_handle}</h3>
                    <p>{props.post.date_created}</p>
                    <p>{props.post.content}</p>
                </div>
                <button
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    style={{ textAlign: 'center' }}
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
                        <MenuItem component={Link} to={option.link} key={option.title} onClick={handleClose}>
                            <Typography textAlign="center">{option.title}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        } else {
            return <div style={{ display: 'flex', flexDirection: 'row', height: '150px', padding: '20px', margin: '20px' }}>
                <Avatar>{initial}</Avatar>
                <div style={{ margin: '0 0 0 2em' }}>
                    <h3 style={{ margin: '0' }}>{props.post.user_handle}</h3>
                    <p>{props.post.date_created}</p>
                    <p>{props.post.content}</p>
                </div>

            </div>
        }
    }

    return (

        <Card variant="outlined" style={{ margin: '0 0 1em 0' }}>
            {CardContent(props.poster)}
        </Card>

    );
}