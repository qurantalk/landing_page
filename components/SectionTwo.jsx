import Image from 'next/image'
import { sectionTwoData } from '../config/config'

export default function SectionTwo({ classes }) {
  return (
    <section className={`grid grid-cols-1 md:grid-cols-12 items-center px-8 ${classes}`}>
      <div className='col-span-7 order-2 text-center md:text-left'>
        <h3 className='text-base md:text-4xl mb-2 font-bold text-primary'>
          {sectionTwoData.heading}
        </h3>
        <p className='text-sm md:text-2xl max-w-760 mr-auto'>
          {sectionTwoData.text}
        </p>
      </div>
      <div className='col-span-5 order-1 md:order-3'>
        <Image src="/Illustrations-1.svg" alt="illustration" width={708} height={628} />
      </div>
    </section>
  )
}