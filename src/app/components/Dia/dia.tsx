import Link from 'next/link'
import styles from './dias.module.css'


export default function Dia() {
  return (
    <div className={styles.main}>
      <div className={styles.days}>
        <Link href={"/eventos/dia1"} className={styles.day}>Dia 1</Link>
        <Link href={"/eventos/dia2"} className={styles.day}>Dia 2</Link>
        <Link href={"/eventos/dia3"} className={styles.day}>Dia 3</Link>
        <Link href={"/eventos/dia4"} className={styles.day}>Dia 4</Link>
        <Link href={"/eventos/dia5"} className={styles.day}>Dia 5</Link>
        <Link href={"/eventos/dia6"} className={styles.day}>Dia 6</Link>
      </div>
    </div>
  )
}