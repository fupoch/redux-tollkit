import React, { useEffect, useState } from 'react';
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';


export default function PostContainer () {
  const [limit, setLimit] = useState(100)
  const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)
  const [createPost, {}] = postAPI.useCreatePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletepostMutation()

 
  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }
  const handleRemove = (post: IPost) => {
    deletePost(post)
  }
  const handleUpdate = (post: IPost) => {
    updatePost(post)
    
}
  return (
    <div className='post__list'>
      <button onClick={handleCreate}>Add new post</button>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Oops.. error! </h1>}
      {posts && posts.map(post => (
        <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
      ))}
    </div>
  );
}
