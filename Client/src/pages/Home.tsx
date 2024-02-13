import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import ViewHomesSection from '../components/ViewHomesSection'
import Footer from '../components/Footer'
const Home:React.FC= () => {
  return (
    <div>
        <Header/>
        <Body/>
        <ViewHomesSection/>
        <Footer/>
    </div>
  )
}

export default Home