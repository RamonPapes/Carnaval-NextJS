import styles from './page.module.css';
import { intro } from './data/strings';
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.bloc}>

        <div className={styles.text}>
          <p>{intro}</p>
        </div>

        <div className={styles.images}>
          <div className={styles.image1}>
            <Image 
              src="/images/circuito1.png"
              alt="image 1"
              width={500}
              height={300}
            />
          </div>
          <div className={styles.image2}>
            <Image 
              src="/images/circuito2.png"
              alt="image 2"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

//RAMON ESTEVE AQUI 