import DownloadApp from '@/components/downloadapp'
import { Feature } from '@/components/features'
import Hero from '@/components/hero'
import NavbarPage from '@/components/navbar'
import Pricing from '@/components/pricing'
import Image from 'next/image'

export default function Home() {
  return (
  <>
  <Hero/>
  <Feature/>
  <Pricing/>
  
  <DownloadApp/>
  </>
  )
}
