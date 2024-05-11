const express = require('express');
const cors = require('cors');
const { getAllPosts, getAllPostsHandles, getPostById, updatePost, deletePost, favoritePost, getPostByUser, createComment, getUserInfo, createPost } = require('./db');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000

try {

   app.get('/allposts', async(req, res) => {
      res.json(await getAllPosts());
   });

   app.get('/postbyid', async(req, res) => {
      let id = req.query.id;
      res.json(await getPostById(id));
   });

   app.post('/newpost', async(req, res) => {
      let user_id = req.query.user_id;
      let content = req.query.content;
      res.json(await createPost(user_id, content));
   });
   
   app.patch('/updatepost', async(req, res) => {
      let post_id = req.query.post_id;
      let content = req.query.content;
      res.json(await updatePost(post_id, content));
   });

   app.patch('/deletepost', async(req, res) => {
      let id = req.query.id;
      res.json(await deletePost(id));
   });

   app.post('/favorite', async(req, res) => {
      let user_id = req.query.user_id;
      let content_id = req.query.content_id;
      res.json(await favoritePost(user_id, content_id));
   });

   app.get('/postbyuser', async(req, res) => {
      let user_id = req.query.user_id;
      res.json(await getPostByUser(user_id));
   });

   app.post('/newcomment', async(req, res) => {
      let parent_id = req.query.parent_id;
      let user_id = req.query.user_id;
      let content = req.query.content;
      res.json(await createComment(parent_id, user_id, content));
   });

   app.get('/userinfo', async(req, res) => {
      let id = req.query.id;
      res.json(await getUserInfo(id));
   })

app.listen(port);
} catch(error){
   console.log(error);
}