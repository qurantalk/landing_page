import Image from 'next/image'

export default function SectionThree({classes}) {
    return (
      <section className={`grid grid-cols-1 md:grid-cols-12 items-center px-8 mb-12 ${classes}`}> 
        <div className='col-span-5 order-1'>
          <Image src="/Illustrations.svg" alt="illustration" width={708} height={628} />
        </div>
        <div className='col-span-7 text-center md:text-right order-2 md:order-3'>
          <h3 className='text-base md:text-2xl mb-2 font-bold text-blue-300'>
            Never stay out of touch with your salah
          </h3>
          <p className='text-sm md:text-base max-w-760'>
            As the world progresses in today's age and time, we find ourselves with us no time to ground ourselves and our emotions. QuranTalk enables you to connect with the Holy Quran using your emotions 
          </p>
        </div>
      </section>
    )
}