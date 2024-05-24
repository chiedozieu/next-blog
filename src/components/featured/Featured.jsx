 import styles from './featured.module.css'
 import Image from 'next/image'
 import beach from '/public/beach.jpeg'
 
 const Featured = () => {
   return (
     <div className={styles.container}>
       <p className={styles.title}>
         <b>Shape Your World! </b> Top Stories, Breaking News...
       </p>
       <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src={beach} alt='' className={styles.Image} priority={2} />
          </div>
          <div className={styles.textContainer}>
              <h1 className={styles.postTitle}>Your News, Your Way. Breaking News, Headlines, and More</h1>
              <p className={styles.postDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti explicabo ut dicta quae facere impedit mollitia eos, fuga assumenda, a perspiciatis. Fugit voluptatum sequi suscipit quas, explicabo magnam rerum.
              </p>
              <button className={styles.button}>Read More</button>
          </div>
       </div>
     </div>
   )
 }
 
 export default Featured
  