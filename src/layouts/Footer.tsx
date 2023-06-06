import React from 'react'
import '../../src/layouts/footer.scss'
import DarkModeButton from '../components/DarkModeButton/DarkModeButton'

const Footer: React.FC = () => {
  return (
    <div className='footer'>
        <p>André Costa</p>
        <DarkModeButton />
    </div>
  )
}

export default Footer