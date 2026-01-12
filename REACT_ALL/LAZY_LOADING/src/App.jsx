import React, { useState,Suspense, lazy } from 'react'
// import Post from './Post'

const Post = lazy(()=> import('./Post'))

function App() {

    const [showPost, setShowPost] = useState(false);

  return (
    <div>

        <button onClick={() => setShowPost(true)}>Show Post</button>
        {showPost && (
            <Suspense fallback={<p>Loading Post....</p>}>
                <Post/>
            </Suspense>
        )}
    </div>
  )
}

export default App