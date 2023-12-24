
import Link from 'next/link';
export default function Home() {
  return (
    <main >
      <h1 className="text-3xl font-mono ">Netflix Clone</h1>
      <Link href={'/test'}>open page</Link>
    </main>
  )
}
