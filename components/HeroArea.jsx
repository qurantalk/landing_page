import Image from 'next/image'

export default function HeroArea({ classes }) {
  return (
    <section id='section-hero' className={`bg-vector-wave bg-center bg-no-repeat bg-contain ${classes}`}>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-12 items-center px-8 '>
        <div className='md:col-span-7 text-center md:text-left order-2'>
          <h3 className='text-base md:text-xl max-w-760'>
            <strong>QuranTalk is your companion</strong> in helping you ground yourself in the words of the Holy Scripture.
          </h3>
          <button className='mt-4 rounded-full text-white font-bold shadow-sm bg-primary px-6 py-1'>Learn More</button>
        </div>
        <div className='md:col-span-5 order-1 md:order-3'>
          <Image src="/Illustrations-3.svg" alt="illustration" width={708} height={628} />
        </div>
      </div>
    </section>
  )
}