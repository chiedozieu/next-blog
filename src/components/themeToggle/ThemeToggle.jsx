'use client'

import styles from './themeToggle.module.css'
import Image from 'next/image'
import moon from '/public/moon.png'
import sun from '/public/sun.png'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const{ toggle, theme } = useContext(ThemeContext)
  
  
  return (
    <div className={styles.container} onClick={toggle}>
      
        <Image src={moon} alt="moon" width={14} height={14}/>
        <div 
        className={styles.ball}
        style={theme==='dark' ? {left: 1, background:'#0f172a'} : {right: 1, background: 'white'}}></div>
        <Image src={sun} alt="sun" width={15} height={15}/>
      
    </div>
  )
}

export default ThemeToggle