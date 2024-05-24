 import Image from 'next/image'
import styles from './menu.module.css'
 import Link from 'next/link'
 import nature1 from '/public/nature1.jpeg'

 const Menu = () => {
   return (
     <div className={styles.container}>
       <h2 className={styles.subtitle}>What's hot</h2>
       <h1 className={styles.title}>Most Popular</h1>
       <div className={styles.items}>
       <Link href='#' className={styles.item}>
            
            <div className={styles.textContainer}>
              <span className={` ${styles.category} ${styles.travel} `}>Travel
              </span>
              <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date }> -  23.05.24</span>
              </div>
            </div>
       </Link>
       <Link href='#' className={styles.item}>
            
            <div className={styles.textContainer}>
              <span className={` ${styles.category} ${styles.culture} `}>Culture
              </span>
              <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date }> -  23.05.24</span>
              </div>
            </div>
       </Link>
       <Link href='#' className={styles.item}>
           
            <div className={styles.textContainer}>
              <span className={` ${styles.category} ${styles.food} `}>Food
              </span>
              <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date }> -  23.05.24</span>
              </div>
            </div>
       </Link>
       <Link href='#' className={styles.item}>
           
            <div className={styles.textContainer}>
              <span className={` ${styles.category} ${styles.fashion} `}>Fashion
              </span>
              <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date }> -  23.05.24</span>
              </div>
            </div>
       </Link>
       </div>    
       
       <h2 className={styles.subtitle}>Discover by topic </h2>
       <h1 className={styles.title}>Categories</h1>

       <div className={styles.categoryList}>
        <Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.style}`}>Style</Link>
       </div>
       <div className={styles.categoryList}>
        <Link href='/blog' className={`${styles.categoryItem} ${styles.fashion}`}>Fashion</Link>
       </div>
       <div className={styles.categoryList}>
        <Link href='/blog?' className={`${styles.categoryItem} ${styles.food}`}>Food</Link>
       </div>
       <div className={styles.categoryList}>
        <Link href='/blog?' className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
       </div>
       <div className={styles.categoryList}>
        <Link href='/blog?' className={`${styles.categoryItem} ${styles.culture}`}>Culture</Link>
       </div>
       <div className={styles.categoryList}>
        <Link href='/blog?' className={`${styles.categoryItem} ${styles.coding}`}>Coding</Link>
       </div>



       <h2 className={styles.subtitle}>Chosen by the editor</h2>
       <h1 className={styles.title}>Editors Pick</h1>
       <div className={styles.items}>
       <Link href='#' className={styles.item}>
            <div className={styles.imageContainer}>
              <Image src={nature1} alt='' className={styles.image} fill/>
            </div>
            <div className={styles.textContainer}>
              <span className={` ${styles.category} ${styles.travel} `}>Travel
              </span>
              <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date }> -  23.05.24</span>
              </div>
            </div>
       </Link>
       <Link href='#' className={styles.item}>
            <div className={styles.imageContainer}>
              <Image src={nature1} alt='' className={styles.image} fill/>
            </div>
            <div className={styles.textContainer}>
              <span className={` ${styles.category} ${styles.culture} `}>Culture
              </span>
              <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date }> -  23.05.24</span>
              </div>
            </div>
       </Link>
       <Link href='#' className={styles.item}>
            <div className={styles.imageContainer}>
              <Image src={nature1} alt='' className={styles.image} fill/>
            </div>
            <div className={styles.textContainer}>
              <span className={` ${styles.category} ${styles.food} `}>Food
              </span>
              <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date }> -  23.05.24</span>
              </div>
            </div>
       </Link>
       <Link href='#' className={styles.item}>
            <div className={styles.imageContainer}>
              <Image src={nature1} alt='' className={styles.image} fill/>
            </div>
            <div className={styles.textContainer}>
              <span className={` ${styles.category} ${styles.fashion} `}>Fashion
              </span>
              <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date }> -  23.05.24</span>
              </div>
            </div>
       </Link>
       </div>
   
     </div>
   )
 }
 
 export default Menu
  