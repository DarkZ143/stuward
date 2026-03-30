import { AtlasSection } from '@/components/Atlas'
import { AtlasFeedback } from '@/components/AtlasFeedback'
import { AtlasRules } from '@/components/AtlasRules'
import React from 'react'

const AtlasGames = () => {
  return (
    <div className='p-2'>
      <AtlasSection />
      <AtlasRules />
      <AtlasFeedback />

    </div>
  )
}

export default AtlasGames
