import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReactStars from 'react-rating-stars-component'
import Slider from 'react-slick'
import useWindowDimensions from '../hooks/useWindowDimensions'

export default function ReviewSection({ classes }) {

  const { width: windowWidth } = useWindowDimensions()

  return (
    <section className={`container py-14 mx-auto ${classes}`}>

      <div className='grid grid-cols-1 md:grid-cols-12 px-8 mb-12'>
        <div className='col-span-7 text-center md:text-left'>
          <h3 className='text-base md:text-2xl mb-2 font-bold text-primary'>
            5 star reviews on Playstore &amp; iOS!
          </h3>
          <p className='text-sm md:text-base max-w-760 mr-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>

      <Slider {...{
        dots: false,
        centerPadding: windowWidth > 1024 ? 50 : 0,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: windowWidth > 1024 ? 1.6 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true
      }}>
        {[
          {
            review: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua”",
            rating: 4,
            name: 'Ali'
          },
          {
            review: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua”",
            rating: 4.5,
            name: 'Saad'
          },
          {
            review: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua”",
            rating: 5,
            name: 'Hashir'
          }
        ].map((review, i) => {
          return (
            <div key={i} className='px-8 py-8 italic bg-primary/[.06] shadow rounded-lg cursor-grab active:cursor-grabbing'>
              <p className='text-sm md:text-xl'>{review.review}</p>
              <div className='flex justify-between mt-4'>
                <ReactStars
                  count={5}
                  size={24}
                  isHalf={true}
                  value={review.rating}
                  activeColor="#ffd700"
                />
                <span className='text-right text-base md:text-2xl'>- {review.name}</span>
              </div>
            </div>
          )
        })}
      </Slider>
    </section>
  )
}