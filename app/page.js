import { Header } from '@components/Header'
import LatestProjects from '@components/LatestProjects'
import { Platforms } from '@components/Platforms'
import { Services } from '@components/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Platforms />
      <LatestProjects />
      <Services />
    </main>
  )
}
