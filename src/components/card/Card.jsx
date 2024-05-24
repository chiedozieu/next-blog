import styles from './card.module.css'
import Image from 'next/image'
import nature from '/public/nature.jpeg'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src= { nature } alt='' fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>24.05.2024 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href='#'>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </Link>

                <p className={styles.desc}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ullam ex dignissimos facilis quibusdam ipsum assumenda a obcaecati eum quidem velit odio vero ad eligendi, numquam quae, asperiores tempora explicabo exercitationem nemo perspiciatis veniam minima.
                </p>
                <Link href='#' className={styles.link}>Read More</Link>
          </div>

           
    </div>
  )
} 

export default Card
