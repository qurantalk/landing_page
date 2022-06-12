import Image from 'next/image'

export default function DownloadSection({ classes }) {
  return (
    <section id='section-download' className={`grid grid-cols-1 md:grid-cols-12 items-center px-8 ${classes}`}>
      <div className='col-span-7 order-2 text-center md:text-left'>
        <h3 className='hidden md:block text-2xl mb-2 font-bold text-primary'>
          Download QuranTalk on Android &amp; iOS
        </h3>
        <p className='text-sm md:text-base max-w-760 mr-auto'>
          With a community of over 1500 users, QuranTalk helps you navigate your emotional states via the verses of the Holy Quran and enables you to ground your emotions better.
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