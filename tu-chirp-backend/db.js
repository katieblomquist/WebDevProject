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

//I tested all of the sql using the sql editor in neon, havent called the functions though, they should work.
async function getAllPosts(){
    const result = await sql`SELECT * FROM post`;
    return result;
}

async function getAllPostsHandles(){ //New function i added just so it could be used for the post components.
  const result = await sql `SELECT "post".*, "user".handle
  From "post"
  Inner join "user" ON "post".user_id = "user".id`;
  return result;
}

async function getPostById(id){
  const result = await sql`SELECT * FROM post where id = ${id}`;
  return result;
}
//Parent-id is supposed to be nullable but isnt in the sql, i dont know the postgres command to change that though. Easy fix though,
//either have a dummy post that we use as the default parent id, or change the table. For now i have it set to automatically reference the 1st post.
async function createPost({user_id, date_created, content, was_modified, modified_at, is_deleted}){ 
  const result = await sql`INSERT INTO post (parent_id, is_post, user_id, date_created, content, was_modified, modified_at, is_deleted) VALUES (1 true ${user_id}
      ${date_created} ${content} ${was_modified} ${modified_at} ${is_deleted})`
    return result;
} //the tables are declared as non-iso formatted dates (yyyy-mm-dd), ive no clue how to get js to format the dates like that, so either a. we change the tables to have dates
//declared as timestamptz as they were before, and format the date.now() to be iso like was done in the supabase version of the api, or we somehow format date.now to be 
//yyyy-mm-dd, which idk how to do. Ill let it be your call, this will also apply to the createComment() function as well.

async function updatePost(id, content){
  const result = await sql`UPDATE post SET content = ${content} where id = ${id}`;
  return result;
}

async function deletePost(id){
  const result = await sql`UPDATE post SET is_deleted = true where id = ${id}`;
  return result;
}

async function favoritePost(id,cid){
  const result = await sql `INSERT INTO like (user_id, content_id) VALUES (${id}, ${cid})`;
  return result;
}

async function getPostByUser(id){
  const result = await sql`SELECT * FROM post where user_id = ${id}`;
  return result;
}

async function createComment({parent_id,user_id, date_created, content, was_modified, modified_at, is_deleted}){ 
  const result = await sql`INSERT INTO post (parent_id, is_post, user_id, date_created, content, was_modified, modified_at, is_deleted) VALUES (${parent_id} false ${user_id}
      ${date_created} ${content} ${was_modified} ${modified_at} ${is_deleted})`;
    return result;
} 

async function getUserInfo(id){
  const result = await sql`Select * from user where id = ${id}`
  return result;
}
module.exports= {getAllPosts, getAllPostsHandles, getPostById, updatePost, deletePost, favoritePost, getPostByUser, createComment, getUserInfo};