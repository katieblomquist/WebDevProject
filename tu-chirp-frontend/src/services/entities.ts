export type User = {user_id: string, handle: string};
export type UserList = User[];
export type Profile = {user_id: string, username: string, handle: string, email: string, date_created: Date, bio: string, email_notifications: boolean, is_public: string};
export type Follow = {follower_id: string, followee_id: string};
export type FollowList = Follow[];
export type Post = {content_id: string, is_post: boolean, user_id: string, date_created: string, content: string, comments: PostComment[], likes: Like[]};
export type PostList = Post[];
export type Like = {like_id: string, user_id: string, content_id: string};
export type PostComment = {content_id: string, parent_id: string, content: string};

