import React from 'react'
import styles from './style';
import { Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer, Hero, Navbar, GetStarted } from './components'

 const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`big-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
        </div>
      </div>

      <div className={`big-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>
        <feedbackCard/>
        </div>
      </div>

    </div>
  )
}

export default App;