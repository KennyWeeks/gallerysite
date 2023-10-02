import Image from 'next/image'
import Landing from "./components/landing"
import Gallery from "./components/gallery"

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] overflow-hidden">
      <Landing/>
      <Gallery/>
    </main>
  )
}
