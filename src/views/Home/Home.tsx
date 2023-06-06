import React from 'react'
import background from '../../assets/img/dev-white.png'
import '../../views/Home/home.scss'

const Home: React.FC = () => {
  return (
    <div>
    <img className='background-image' src={background} alt="background"/>
    </div>
    
  )
}

export default Home