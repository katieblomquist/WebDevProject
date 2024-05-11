import { useState, useEffect } from "react";
import PostCard from "../components/post";
import ProfileCard from "../components/profile_card";
import { PostList, Profile } from "../services/entities";
import { MockUserService } from "../services/mock_user.service";
import { PostService } from "../services/post.service";
import { UserService } from "../services/user.service";
import { Skeleton } from "@mui/material";
import { HttpPostService } from "../services/http_post.service";

const userService: UserService = new MockUserService;
const postService: PostService = new HttpPostService;

export default function ProfilePage(props: { user: Profile }) {

    const [postList, setList] = useState<PostList>([]);
    const [loading, setLoading] = useState(false);

    const profile = props.user;

    async function listPosts(){
        try {
            setLoading(true);
            await postService.getPostByUser(profile.user_id).then(d => {
                setList(d);
            });
            
        } catch(error){
            console.log(error);
        };
        setLoading(false);
    }

    async function deletePost(id: number){
        await postService.deletePost(id);
        listPosts();
    }

    useEffect(() => {
        listPosts();
    }, []);

    return (
        <>
        {loading ? (
            <>
                <Skeleton animation="wave" variant="rounded" width={300} height={300} sx={{ margin: 1 }} />
            </>
        ) : (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ProfileCard location="profile" user={profile} />
                <div id="posts">
                    {postList.map((value) => {
                        if(value.user_id == profile.user_id){
                            return <PostCard post={value} poster={true} deletePost={deletePost}/>
                        } else {
                            return <PostCard post={value} poster={false} deletePost={deletePost}/>
                        }
                    })}
                </div>
            </div>
        )
        }
        </>
    );
}