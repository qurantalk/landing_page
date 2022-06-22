import Image from 'next/image'
import { sectionOneData } from '../config/config'

export default function SectionOne({ classes }) {
  return (
    <section className={`grid grid-cols-1 md:grid-cols-12 items-center px-8 ${classes}`}>
      <div className='md:col-span-5'>
        <Image src="/Illustrations-2.svg" alt="illustration" width={708} height={628} />
      </div>
      <div className='md:col-span-7 text-center md:text-right'>
        <h3 className='text-base md:text-4xl mb-2 font-bold text-primary'>
          {sectionOneData.heading}
        </h3>
        <p className='ml-auto text-sm md:text-2xl max-w-760'>
          {sectionOneData.text}
        </p>
      </div>
    </section>
  )
}