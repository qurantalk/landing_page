import Image from 'next/image'
import useWindowDimensions from '../hooks/useWindowDimensions'

export default function Header() {

    const { width: windowWidth } = useWindowDimensions()

    return (
        <header className='container px-4 mx-auto my-4'>
            <div className='flex w-full mt-16 md:mt-0 justify-center md:justify-between items-center'>
                {
                windowWidth <= 625 ?
                <Image src="/fullLogo.svg" alt="facebook" width={128} height={35} /> :
                <Image src="/iconLogo.svg" alt="facebook" width={80} height={80} />
                }
                <ul className='hidden md:grid grid-cols-2 gap-6 justify-items-end text-base'>
                <li className='hover:text-blue-300 hover:font-semibold hover:border-b-2 border-blue-300 cursor-pointer'>Home</li>
                <li className='hover:text-blue-300 hover:font-semibold hover:border-b-2 border-blue-300 cursor-pointer '>Download</li>
                </ul>
            </div>
        </header>
    )
}