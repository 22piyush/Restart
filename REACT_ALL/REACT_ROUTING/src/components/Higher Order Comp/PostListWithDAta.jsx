import React from 'react'
import WithData from './WithData'
import PostList from './PostList'


const PostListWithData = WithData(PostList, 'https://jsonplaceholder.typicode.com/todos')

export default PostListWithData;