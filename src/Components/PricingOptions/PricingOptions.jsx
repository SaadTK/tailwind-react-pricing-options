import React, { use } from 'react'
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
//   console.log(pricingData)
    return (
    <>
    <div className="card-con">
     <h1 className='text-5xl'>Get Our Membership</h1>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
        {
            pricingData.map(pricing => <DaisyPricingCard pricing={pricing} key={pricing.id}></DaisyPricingCard>)
        }
        {/* {
            pricingData.map(pricing => <PricingCard pricing={pricing} key={pricing.id}></PricingCard>)
        } */}
    </div>
    </div>
    
    </>
  )
}

export default PricingOptions