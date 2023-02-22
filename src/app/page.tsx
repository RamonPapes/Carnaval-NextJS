import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <h1>Home</h1>
      <Link href="/page1">Dashboard</Link>
    </main>
  )
}