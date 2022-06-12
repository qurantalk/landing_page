import Image from 'next/image'

export default function SectionOne({ classes }) {
  return (
    <section className={`grid grid-cols-1 md:grid-cols-12 items-center px-8 ${classes}`}>
      <div className='md:col-span-5'>
        <Image src="/Illustrations-2.svg" alt="illustration" width={708} height={628} />
      </div>
      <div className='md:col-span-7 text-center md:text-right'>
        <h3 className='text-base md:text-2xl mb-2 font-bold text-primary'>
          Connect with the Quran on another level
        </h3>
        <p className='ml-auto text-sm md:text-base max-w-760'>
          As the world progresses in today's age and time, we find ourselves with us no time to ground ourselves and our emotions. QuranTalk enables you to connect with the Holy Quran using your emotions
        </p>
      </div>
    </section>
  )
}