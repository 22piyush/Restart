"use client"

import { useEffect, useState } from "react"

const Views =() => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    const fetchPost = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const data = await res.json();
      setPosts(data);
    }

    fetchPost();

  },[])

  return (
    <div>
      {
        posts.map(({ id, title, body }) => (
          <div key={id}>
            {id} - {title}
            <div>{body}</div>
            <hr></hr>
          </div>
        ))
      }
    </div>
  )

}

export default Views