import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from './destaques.module.css';
import { title1, texts } from '../data/string-destaques'


export default function Destaques() {
  return (
    <div className={styles.main}>
      <div className={styles.bodyBackground}>
        <h1>Destaques</h1>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h2>{title1}</h2>
            <p>{texts.text1}</p>
          </div>
          <img
            src="/images/destaques-img1.png"
            alt="image 1"
            width={500}
            height={300}
          />
          <div className={styles.text}>
            <p>{texts.text2}</p>
            <p>{texts.text3}</p>
            <p>{texts.text4}</p>
          </div>
          <img
            src="/images/destaques-img2.png"
            alt="image 1"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}
