
import { GameModesSection } from '@/components/Games'
import Hero from '@/components/Hero'
import { PaymentSection } from '@/components/Payments'
import { RegulationsSection } from '@/components/Regulations'
import { RulesSection } from '@/components/Rules'
import { FeedbackSection } from '@/components/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <>
    
    <div className='p-4'>

      <Hero />
      <RulesSection />
      <PaymentSection />
      <RegulationsSection />
      <FeedbackSection />
      <GameModesSection />
    </div>
    </>
  )
}

export default Home
