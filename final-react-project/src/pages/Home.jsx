import React, { useState, useEffect } from 'react'
import Product from '../components/Product'

function Home() {

  const API_Url = "https://fakestoreapi.com/products"

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true) // loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true) // start loading
        const response = await fetch(API_Url)
        const data = await response.json()
        setPosts(data) // store data
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false) // stop loading
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div>
        
        {loading ? (<h2>Loading...</h2> ) :
          posts.length > 0 ?  (
            <div style={{ margin: '0 auto',boxSizing: 'border-box',display:'flex',gap:'20px', flexWrap:'wrap',justifyContent:'center',padding:'35px 20px'}}>
                {posts.map((post) => (
                  <Product key={post.id} post = {post}/>
                ))}
            </div>
          ) : <div><p>NO Data Found</p></div>
        }
      </div>
    </>
  )
}

export default Home