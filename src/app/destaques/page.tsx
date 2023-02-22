import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <main>
      <h1>Destaques</h1>
      <Link href="/">Home</Link>
    </main>
  )
}
