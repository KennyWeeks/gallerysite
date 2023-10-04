'use client'
import Image from 'next/image'
import Landing from "./components/landing"
import Gallery from "./components/gallery"
import GalleryContextProvider from './context/contextprovider'
import Data from "./data/db"

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] overflow-hidden">
      <GalleryContextProvider>
        <Landing DataObject={Data}/> {/* Somehow need to get the gallery info from the landing to the actual gallery*/}
        <Gallery Data={Data}/>
      </GalleryContextProvider>
    </main>
  )
}
