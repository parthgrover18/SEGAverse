import React, { useState } from 'react'
import BootUp from './components/BootUp'
import LandingPage from './components/LandingPage'
import Timeline from './components/Timeline'
import Navbar from './components/Navbar'
import Trivia from './components/Trivia'
import Footer from './components/Footer'

function HomePage() {
  const [booted, setBooted] = useState(false)

  return (
    <div>
      {!booted ? (
        <BootUp onComplete={() => setBooted(true)} />
       ) : (
        <>
          <Navbar/>
          <LandingPage />
          <Timeline/>
          <Trivia/>
          <Footer/>
        </>
      //  {/* )} */}
    </div>
  )
}

export default HomePage