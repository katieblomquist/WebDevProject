import { useEffect, useState } from "react";
import ProfileCard from "../components/profile_card";
import { PostList, Profile } from "../services/entities";
import { MockPostService } from "../services/mock_post.service";
import { MockUserService } from "../services/mock_user.service";
import { PostService } from "../services/post.service";
import { UserService } from "../services/user.service";
import Post from "../components/post";
import PostCard from "../components/post";
import { Skeleton } from "@mui/material";
import { AirlineSeatReclineExtra } from "@mui/icons-material";
import { HttpPostService } from "../services/http_post.service";

const userService: UserService = new MockUserService;
const postService: PostService = new HttpPostService;

export default function Feed(props: {user: Profile}){
    // implement hooks
    const [postList, setList] = useState<PostList>([]);
    const [loading, setLoading] = useState(false);

    const profile = props.user;

    //implement functions

    async function listPosts(){
        try {
            setLoading(true);
            await postService.getAllPosts().then(d => {
                setList(d);
            });
            
        } catch(error){
            console.log(error);
        };
        setLoading(false);
    }

    useEffect(() => {
        listPosts();
    }, []);

    return(
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
                        if(value.user_id === profile.user_id){
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