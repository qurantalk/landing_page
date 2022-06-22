import Image from 'next/image'
import { sectionThreeData } from './../config/config';

export default function SectionThree({ classes }) {
  return (
    <section className={`grid grid-cols-1 md:grid-cols-12 items-center px-8 mb-12 ${classes}`}>
      <div className='col-span-5 order-1'>
        <Image src="/Illustrations.svg" alt="illustration" width={708} height={628} />
      </div>
      <div className='col-span-7 text-center md:text-right order-2 md:order-3'>
        <h3 className='text-base md:text-4xl mb-2 font-bold text-primary'>
          {sectionThreeData.heading}
        </h3>
        <p className='text-sm md:text-2xl max-w-760 ml-auto'>
          {sectionThreeData.text}
        </p>
      </div>
    </section>
  )
}