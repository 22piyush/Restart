import React, { useContext, useEffect } from 'react'
import "./App.css"
import Footer from './components/Footer'
import Header from './components/Header'
import MainSection from './components/MainSection'
import { AppContext } from './context/AppContext'
function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[])

  return (
    <div>
      <Header/>
      <MainSection/>
      <Footer/>
    </div>
  )
}

export default App