import type { NextPage } from 'next'

import { pairLength } from '../services/pairToken.service';

const Home: NextPage = () => {

  //  bankService.pairLength()
  pairLength()
  return (
    <div >
      hi
    </div>
  )
}

export default Home
