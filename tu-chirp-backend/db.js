// app.js
const postgres = require('postgres');
require('dotenv').config();


let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

async function getAllPosts(){
    const result = await sql `SELECT post.*, users.handle FROM post INNER JOIN users ON post.user_id = users.id WHERE post.is_deleted = false`;
    return result;
}

async function getPostById(id){
  const result = await sql`SELECT * FROM post WHERE id = ${id} AND is_deleted = false`;
  return result;
}

async function createPost(user_id, content){ 
  const result = await sql`INSERT INTO post (is_post, user_id, date_created, content, was_modified, is_deleted) VALUES (true, ${user_id}, CURRENT_DATE, ${content}, false, false)`
    return result;
} 

async function updatePost(id, content){
  const result = await sql`UPDATE post SET content = ${content}, was_modified = true, modified_at = CURRENT_DATE WHERE id = ${id}`;
  return result;
}

async function deletePost(id){
  const result = await sql`UPDATE post SET is_deleted = true, was_modified = true, modified_at = CURRENT_DATE WHERE id = ${id}`;
  return result;
}

async function favoritePost(user_id, content_id){
  const result = await sql `INSERT INTO likes (user_id, content_id) VALUES (${user_id}, ${content_id})`;
  return result;
}

async function getPostByUser(user_id){
  const result = await sql`SELECT * FROM post where user_id = ${user_id} AND is_deleted = false`;
  return result;
}

async function createComment(parent_id, user_id, content){ 
  const result = await sql`INSERT INTO post (parent_id, is_post, user_id, date_created, content, was_modified, is_deleted) VALUES (${parent_id}, false, ${user_id}, CURRENT_DATE, ${content}, false, false)`;
    return result;
} 

async function getUserInfo(id){
  const result = await sql`Select * from users where id = ${id}`
  return result;
}
module.exports= {getAllPosts, getPostById, createPost, updatePost, deletePost, favoritePost, getPostByUser, createComment, getUserInfo};