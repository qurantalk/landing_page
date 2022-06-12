import Image from 'next/image'

export default function SectionTwo({ classes }) {
  return (
    <section className={`grid grid-cols-1 md:grid-cols-12 items-center px-8 ${classes}`}>
      <div className='col-span-7 order-2 text-center md:text-left'>
        <h3 className='text-base md:text-2xl mb-2 font-bold text-primary'>
          Let gratitude heal you like no other
        </h3>
        <p className='text-sm md:text-base max-w-760 mr-auto'>
          As the world progresses in today's age and time, we find ourselves with us no time to ground ourselves and our emotions. QuranTalk enables you to connect with the Holy Quran using your emotions
        </p>
      </div>
      <div className='col-span-5 order-1 md:order-3'>
        <Image src="/Illustrations-1.svg" alt="illustration" width={708} height={628} />
      </div>
    </section>
  )
}