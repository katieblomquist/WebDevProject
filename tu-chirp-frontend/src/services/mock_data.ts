export let users = [{user_id:1, handle: "@mrbeefkins"}, {user_id:2, handle: "@hugomsu"}, {user_id:3, handle: "@h_zidan"}, {user_id:4, handle: "@jacktaormino"}, {user_id:5, handle: "@notshadowz"}, {user_id:6, handle: "@purpledtf"}, {user_id:7, handle: "@princess.katelyn"}];
export let profile = {user_id: 7, username: "princess.katelyn", handle: "@princess.katelyn", email: "katelyn.blomquist@gmail.com", date_created: "December 17, 2021 04:28:00", bio: "I'm literally just typing to have typed something here, so here I am typing. WOOOOOOOOOOOOO", email_notifications: true, is_public: true};
export let follows = [{follower_id: 7, followee_id: 1}, {follower_id: 7, followee_id: 2}, {follower_id: 7, followee_id: 3}];
export let posts = [{content_id: 1, user_handle: "@mrbeefkins", is_post: true, user_id: 1, date_created: "December 29, 2021 04:28:00", content: "It's almost the end of the year and I'm still tip typing away. What a wonderful and exciting life I lead.", comments: [], likes: []}, 
{content_id: 2, is_post: true, user_id: 1, user_handle: "@mrbeefkins", date_created: "December 17, 2021 04:28:00", content: "I'm typing on a computer. Just typing on a computer. What a wonderful feeling, I'm typing again!", comments: [{content_id: 3, parent_id: 2, content: "This is such a rip off of Singin in the Rain"}], likes: [{like_id: 1, user_id:4, content_id: 3}, {like_id: 2, user_id:6, content_id: 3}]}, 
{content_id: 4, is_post: true, user_id: 7, user_handle: "@princess.katelyn", date_created: "December 12, 2021 04:28:00", content: "We are farmers. bum bum bum bum bum bum bum!", comments: [], likes: [{like_id: 1, user_id:4, content_id: 4}, {like_id: 2, user_id:6, content_id: 4}]}];
