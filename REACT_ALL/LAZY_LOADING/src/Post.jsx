import React, { useEffect, useState } from 'react'

function Post() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            setPosts(data);
        }   
       
       fetchPosts()
    }, []);

  return (
    <div>
        {posts.map((item) => (
            <li key={item.id}>
                <h3>{item.title}</h3>
            </li>
        ))}
    </div>
  )
}

export default Post