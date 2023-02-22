import Link from 'next/link'
import Nav from './components/Navbar/navbar'


export default function Home() {
  return (
    <main className="">
      <h1>Home</h1>
      <Link href="/dia1">dia1</Link>
      <Link href="/dia2">dia2</Link>
      <Link href="/dia3">dia3</Link>
      <Link href="/dia4">dia4</Link>
      <Link href="/dia5">dia5</Link>
      <Link href="/dia6">dia6</Link>
      <Link href="/destaques">Destaques</Link>
    </main>
  )
}

//RAMON ESTEVE AQUI 