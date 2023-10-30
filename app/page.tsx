import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/widgets/Hero'
import Pictures from '@/components/widgets/Pictures'

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <Hero />
        <h2 className='text-3xl font-serif pt-10 pb-5 underline font-extrabold'>Our Recent Events</h2>

        <div className='grid lg:grid-cols-2 gap-8 pb-10 px-4'>
          <Pictures img={'/assets/aass1.JPG'} />
          <Pictures img={'/assets/aass2.JPG'} />
          <Pictures img={'/assets/aass3.JPG'} />
          <Pictures img={'/assets/aass4.JPG'} />
          <Pictures img={'/assets/aass5.jpeg'} />
          <Pictures img={'/assets/aass6.jpeg'} />
        </div>
      </div>
      <Footer />

    </>
  )
}
