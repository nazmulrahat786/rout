
import { Suspense } from 'react'
import './App.css'
import axios from 'axios'

import NavBar from './cmp/NavBar/NavBar'
import PriceingOption from './cmp/PriceingOption/PriceingOption'
import RC from './RC/RC'
import DaisyNab from './cmp/DaisyNab/DaisyNab'
import MC from './cmp/MC/MC'


const priceingpromise = fetch('priceing.json').then(res => res.json())
const marksPromise = axios.get('mark.json')



function App() {

  return (
    < >
    <header>
    <NavBar></NavBar>
    {/* <DaisyNab></DaisyNab> */}
    </header>

     <main>
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
      <PriceingOption priceingpromise={priceingpromise}></PriceingOption>
      </Suspense>
      
 
 

<RC></RC>

<Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
  
<MC marksPromise={marksPromise}></MC>
</Suspense>



     </main>
    
   
    </>
  )
}

export default App
