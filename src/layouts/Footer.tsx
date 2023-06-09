import React, { useContext } from 'react'
import '../../src/layouts/footer.scss'
import DarkModeButton from '../components/DarkModeButton/DarkModeButton'
import { DarkModeContext } from '../contexts/DarkModeContext/DarkModeContext';

const Footer: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`footer ${darkMode ? "dark" : ""} `}>
        <p>André Costa, 2023 </p>
        <DarkModeButton />
    </div>
  )
}

export default Footer