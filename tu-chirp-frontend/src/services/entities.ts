export type User = {user_id: number, handle: string};
export type UserList = User[];
export type Profile = {user_id: number, username: string, handle: string, email: string, date_created: string, bio: string, email_notifications: boolean, is_public: boolean};
export type Follow = {follower_id: number, followee_id: number};
export type FollowList = Follow[];
export type Post = {content_id: number, is_post: boolean, user_id: number, date_created: string, content: string, comments: PostComment[], likes: Like[], user_handle: string};
export type PostList = Post[];
export type Like = {like_id: number, user_id: number, content_id: number};
export type PostComment = {content_id: number, parent_id: number, content: string};

