import Image from 'next/image'

export default function Footer() {

    return (
        <footer className='relative container px-4 mx-auto md:mb-16 overflow-hidden'>
        <div className='flex w-full flex-col md:flex-row items-start md:items-center md:justify-between md:border-b pb-8 md:pb-4'>
          <h3 className='md:hidden text-base md:text-xl border-b-2 border-black mb-2 pb-1 pr-4'>QURANTALK</h3>
          <ul className='grid md:grid-cols-3 mb-8 md:mb-0 gap-2 md:gap-6 text-xs'>
            <li><a href="#">About us</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>

          <h3 className='md:hidden text-base md:text-xl border-b-2 border-black mb-2 pb-1 pr-4'>LEGAL</h3>
          <ul className='md:hidden grid mb-8 gap-2 text-xs'>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>

          <h3 className='md:hidden text-base border-b-2 border-black mb-4 pb-1 pr-4'>FOLLOW US</h3>
          <div className='grid grid-cols-4 gap-6 md:gap-4'>
            <Image src="/FaceBook.svg" alt="facebook" width={24} height={24} />
            <Image src="/twitter-black.svg" alt="twitter" width={24} height={24} />
            <Image src="/Vimeo.svg" alt="vimeo" width={24} height={24} />
            <Image src="/youtube.svg" alt="youtube" width={24} height={24} />
          </div>
        </div>
        <div className='md:hidden absolute bottom-0 right-0'>
            <Image src="/footer-image.svg" className='transform translate-x-20' alt="youtube" width={248} height={273} />
        </div>
        <div className='hidden md:flex w-full justify-between pt-4 text-xs'>
          <p className='text-gray-400'>
            © 2022 QuranTalk. All rights reserved.
            </p>
          <ul className='grid grid-cols-2 gap-6 justify-items-end'>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div> 
      </footer>
    )
}