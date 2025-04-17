'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Header from '@/components/Header/Header'
import HeroSection from '@/components/Sections/HeroSection'
import RecipesSection from '@/components/Sections/RecipesSection'
import AboutSection from '@/components/Sections/AboutSection'

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.replace('/grandmas-recipes')
    }
  }, [session, router])

  return (
    <>
      {!session && (
        <main className='w-full flex flex-col items-center justify-center'>
          <Header />
          <HeroSection />
          <RecipesSection/>
          <AboutSection/>
        </main>
      )}
    </>
  )
}
