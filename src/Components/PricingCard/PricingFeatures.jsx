import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const PricingFeatures = ({feature}) => {
  return (
    <>
     <div>
        <p className='flex mt-4 gap-2'> 
            <CircleCheckBig></CircleCheckBig> {feature}
        </p>
        </div>   
    </>
  )
}

export default PricingFeatures