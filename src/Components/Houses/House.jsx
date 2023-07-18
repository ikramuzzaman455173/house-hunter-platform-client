import React from 'react'
import HeartButton from '../Button/HeartButton'
// import { Link } from 'react-router-dom'

const House = ({ item }) => {
  const {name,address,city,bedrooms,bathrooms,roomSize,picture,availabilityDate,rentPerMonth,phoneNumber,description} = item||{}
  return (
    // <Link to={`room/${1}`}>
      <div className='col-span-1 cursor-pointer group'>
        <div className='flex flex-col gap-2 w-full'>
          <div
            className='
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
          '
          >
            <img
              className='
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
            '
              src={picture&&picture||'https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg'}
              alt='House Img'
            />
            <div
              className='
            absolute
            top-3
            right-3
          '
            >
              <HeartButton />
            </div>
          </div>
          <div className='font-semibold text-lg'>{name}</div>
          <div className='font-light text-neutral-500'>
          {roomSize}
          </div>
          <div className='flex flex-row items-center gap-1'>
            <div className='font-semibold'>$ {rentPerMonth}</div>
            <div className='font-light'>{phoneNumber}</div>
          </div>
        </div>
      </div>
    // </Link>
  )
}

export default House