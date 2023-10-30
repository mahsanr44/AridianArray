import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section>
                <div className=' mt-16'>
                    <div className=' flex flex-col   justify-center items-center '>
                        <div className='lg:space-y-3 flex justify-center items-center flex-col'>
                            <p className=' text-blue-950 font-sans font-bold'>Aridian Array Software Society</p>
                            <h1 className='font-extrabold text-5xl md:text-7xl px-0.5 uppercase font-serif'>Coming Soon</h1>
                        </div>
                        <div className='my-24'>
                            <Image src={'/assets/aass-cover.png'} alt={'Hero '} width={850} height={850} />
                        </div>
                    </div>
                </div>
        </section>

    )
}

export default Hero