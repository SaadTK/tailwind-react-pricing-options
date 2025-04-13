import React from 'react'
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
  console.log(pricing)

  const {name, price, desc, features} = pricing;
    return (
    <>
    <div className='flex flex-col border bg-emerald-400 rounded-2xl p-4'>
    {/* card header  */}
    <div >
       <h1 className='text-7xl'>{name}</h1>
       <h4 className='text-xl'>{price}</h4>
    {/* card body  */}
    <div className='bg-green-600 p-4 rounded-2xl mt-10 flex-1'>
        <h2 >{desc}</h2>
        {
            features.map((feature, index) => <PricingFeatures key={index} feature={feature}></PricingFeatures>)
        }
    </div>
    </div>
    <button className='btn w-full mt-4'>Subscribe</button>
    </div>
    </>
  )
}

export default PricingCard