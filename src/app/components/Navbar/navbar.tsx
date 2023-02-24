import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Image
      src="/navBG.png"
      alt="nav background"
      fill
      />
      <div className={styles.logo}>
        <Image 
          src="/carnavaLogo.png"
          alt="carnaval logo"
          width={300}
          height={210}
        />
      </div>
      
      <div className={styles.buttons}>
        <Link className={styles.button} href={"/"}>Home</Link>
        <Link className={styles.button} href={"/destaques"}>Destaques</Link>
        <Link className={styles.button} href={"/eventos/dia1"}>Eventos</Link>
        <Link className={styles.button} href={"/outros"}>Outros</Link>
      </div>
      
    </div>
  )
}