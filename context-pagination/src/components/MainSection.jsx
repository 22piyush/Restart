import React, { useContext } from 'react'
import { FadeLoader } from 'react-spinners'
import { AppContext } from '../context/AppContext'
import Card from './Card';

const override = {

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
    
};

function MainSection() {

  const {posts ,loading} = useContext(AppContext)

  return (
    <>
        <div>
            <div style={{ height: "calc(100vh - 100px)", overflow: "auto", scrollbarWidth:'thin' }}>
                {loading ? (
                <FadeLoader cssOverride={override} loading={loading} />
                ) : posts.length === 0 ? (
                <div>
                    <p>No Post Found</p>
                </div>
                ) : (
                    posts.map((post) => <Card key={post.id} post={post} />)
                )}
            </div>
        </div>
    </>
  )
}

export default MainSection
