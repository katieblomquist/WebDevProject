import { useEffect, useState } from "react";
import ProfileCard from "../components/profile_card";
import { PostList, Profile } from "../services/entities";
import { MockPostService } from "../services/mock_post.service";
import { MockUserService } from "../services/mock_user.service";
import { PostService } from "../services/post.service";
import { UserService } from "../services/user.service";
import Post from "../components/post";
import PostCard from "../components/post";

const userService: UserService = new MockUserService;
const postService: PostService = new MockPostService;

export default function Feed(props: {user: Profile}){
    // implement hooks
    const [postList, setList] = useState<PostList>([]);
    const [jsxPostList, setPosts] = useState<JSX.Element[]>([]);
    const [loading, setLoading] = useState(false);

    const profile = props.user;

    //implement functions

    async function listPosts(){
        try {
            setLoading(true);
            const d = await postService.getAllPosts();
            setList(d);
            
        } catch(error){
            console.log(error);
        };
        generatePostList();
        console.log("generated posts"); 
    }

    function generatePostList(){
        let generatedPostList = postList.map((post) => {
            console.log(post);
            if(post.user_id === profile.user_id){
                return <PostCard post={post} poster={true} />
            } else {
                return <PostCard post={post} poster={false} />
            }
        });
        setPosts(generatedPostList); 
        console.log("help");
        setLoading(false);
    }

    useEffect(() => {
        listPosts();
    }, []);

    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <ProfileCard location="main" user={profile} />
            <div id ="posts">
                {jsxPostList}
            </div>
        </div>
    );
}