import { useEffect, useState } from "react";
import ProfileCard from "../components/profile_card";
import { PostList, Profile } from "../services/entities";
import { MockPostService } from "../services/mock_post.service";
import { MockUserService } from "../services/mock_user.service";
import { PostService } from "../services/post.service";
import { UserService } from "../services/user.service";
import Post from "../components/post";
import PostCard from "../components/post";
import { Button, Card, Skeleton } from "@mui/material";
import { AirlineSeatReclineExtra } from "@mui/icons-material";
import { HttpPostService } from "../services/http_post.service";
import { Outlet, Link } from "react-router-dom";

const userService: UserService = new MockUserService;
const postService: PostService = new HttpPostService;

export default function Feed(props: { user: Profile, isPublic: boolean }) {
    // implement hooks
    const [postList, setList] = useState<PostList>([]);
    const [loading, setLoading] = useState(false);

    const profile = props.user;

    //implement functions

    async function listPosts() {
        try {
            setLoading(true);
            await postService.getAllPosts().then(d => {
                setList(d);
            });

        } catch (error) {
            console.log(error);
        };
        setLoading(false);
    }

    useEffect(() => {
        listPosts();
    }, []);

    if (props.isPublic) {
        return (
            <>
                {loading ? (
                    <>
                        <Skeleton animation="wave" variant="rounded" width={300} height={300} sx={{ margin: 1 }} />
                    </>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Card variant="outlined" style={{ display: 'flex', flexDirection: 'column', height: '200px', width: '200px', justifyContent: 'center', alignItems: 'center', padding: '20px', margin: '0 20px' }}>
                            <h3>Login to make a post!</h3>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: '#F5BE41'}}
                            ><Link to={"/login"} style={{ color: 'black' }}>Login</Link></Button>
                        </Card>
                        <div id="posts">
                            {postList.map((value) => {
                                if (value.user_id === profile.user_id) {
                                    return <PostCard post={value} poster={true} />
                                } else {
                                    return <PostCard post={value} poster={false} />
                                }
                            })}
                        </div>
                    </div>
                )
                }
            </>
        )
    } else {
        return (
        <>
            {loading ? (
                <>
                    <Skeleton animation="wave" variant="rounded" width={300} height={300} sx={{ margin: 1 }} />
                </>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <ProfileCard location="main" user={profile} />
                    <div id="posts">
                        {postList.map((value) => {
                            if (value.user_id === profile.user_id) {
                                return <PostCard post={value} poster={true} />
                            } else {
                                return <PostCard post={value} poster={false} />
                            }
                        })}
                    </div>
                </div>
            )
            }
        </>
    );
    }
    
}