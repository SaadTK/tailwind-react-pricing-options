
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart'

const pricingPromise = fetch('pricingData.json').then(res=>res.json())

function App() {

  
  return (

<>
<header>

<Navbar></Navbar>
</header>

{/* <DaisyNav></DaisyNav> */}

<main>
  <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
    <PricingOptions pricingPromise={pricingPromise}> </PricingOptions>
  
  </Suspense>


<ResultsChart></ResultsChart>
</main>





    </>
  )
}

export default App
