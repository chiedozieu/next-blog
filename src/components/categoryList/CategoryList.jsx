 import styles from './categoryList.module.css'
 import Link from 'next/link'
 import Image from 'next/image'
 import style from '/public/style.jpeg'
 import food from '/public/food.jpeg'
 import fashion from '/public/fashion.jpeg'
 import travel from '/public/travel.jpeg'
 import culture from '/public/culture.jpeg'
 import coding from '/public/coding.jpeg'



 
 const CategoryList = () => {
   return (
     <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories}>
          
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
            <Image 
            src={style} 
            alt='' 
            width={32} 
            height={32} 
            className={styles.image}/>
            Style
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.fashion}`}>
            <Image 
            src={fashion} 
            alt='' 
            width={32} 
            height={32} 
            className={styles.image}/>
            Fashion
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.food}`}>
            <Image 
            src={food} 
            alt='' 
            width={32} 
            height={32} 
            className={styles.image}/>
            Food
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.travel}`}>
            <Image 
            src={travel} 
            alt='' 
            width={32} 
            height={32} 
            className={styles.image}/>
            Travel
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.culture}`}>
            <Image 
            src={culture} 
            alt='' 
            width={32} 
            height={32} 
            className={styles.image}/>
            Culture
          </Link>
          <Link href='/blog?cat=style' className={`${styles.category} ${styles.coding}`}>
            <Image 
            src={coding} 
            alt='' 
            width={32} 
            height={32} 
            className={styles.image}/>
            Coding
          </Link>
            
        
        </div>
     </div>
   )
 }
 
 export default CategoryList
 