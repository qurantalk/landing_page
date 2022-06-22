import Image from 'next/image'
import { downloadSectionData } from '../config/config'

export default function DownloadSection({ classes }) {
  return (
    <section id='section-download' className={`grid grid-cols-1 md:grid-cols-12 items-center px-8 ${classes}`}>
      <div className='col-span-7 order-2 text-center md:text-left'>
        <h3 className='hidden md:block text-4xl mb-2 font-bold text-primary'>
          {downloadSectionData.heading}
        </h3>
        <p className='text-sm md:text-2xl max-w-760 mr-auto'>
          {downloadSectionData.text}
        </p>
        <div className='flex justify-center md:justify-start gap-4 mt-4'>
          <a href="#">
            <Image src="/badge.png" alt="google play store" width={135} height={43} />
          </a>
          <a href="#">
            <Image src="/badge-1.png" alt="apply play store" width={135} height={43} />
          </a>
        </div>
      </div>
      <div className='col-span-5 order-1 md:order-3'>
        <h3 className='block md:hidden text-base mb-2 font-bold text-primary mt-8 text-center'>
          Download QuranTalk on Android &amp; iOS
        </h3>
        <Image src="/image 1.png" alt="illustration" width={708} height={628} />
      </div>
    </section>
  )
}