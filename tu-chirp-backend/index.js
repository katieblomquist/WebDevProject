const express = require('express');
const cors = require('cors');
const { getAllPosts } = require('./db');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000

try {

   app.get('/allposts', async(req, res) => {
      res.json(await getAllPosts());
   })

app.listen(port);
} catch(error){
   console.log(error);
}