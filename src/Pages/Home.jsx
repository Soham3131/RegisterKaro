import React from 'react'
import Navbar from '../Components/Navbar'
import TopBanner from '../Components/TopBanner'
import HeroComponent from "../Components/HeroComponent"
import Services from '../Components/Services'
import About from "../Components/About"
import ChooseUs from "../Components/ChooseUs"
import VideoInstructions from "../Components/VideoInstructions"
import Clients from '../Components/Clients'
import Options from "../Components/Options"
import Blogs from "../Components/Blogs"
import Reviews from "../Components/Reviews"
import Faq from "../Components/Faq"
import Numbers from "../Components/Numbers"
import Footer from "../Components/Footer"
const Home = () => {
   
  return (

    <div>
      <Navbar/>
      <TopBanner/>
      <HeroComponent/>
      <Services/>
      <About/>
      <ChooseUs/>
      <VideoInstructions/>
      <Clients/>
      <Options/>
      <Blogs/>
      <Reviews/>
      <Faq/>
      <Numbers/>
      <Footer/>
    </div>
  )
}

export default Home
