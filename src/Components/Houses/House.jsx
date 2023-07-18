import React from 'react'
import HeartButton from '../Button/HeartButton'
// import { Link } from 'react-router-dom'

const House = ({ item }) => {
  const { name, address, city, bedrooms, bathrooms, roomSize, picture, availabilityDate, rentPerMonth, phoneNumber, description } = item || {}
  return (
    // <Link to={`room/${1}`}>
    <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full border-2 p-3 rounded-md shadow bg-white'>
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
            src={picture && picture || 'https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg'}
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
        <div className='font-light text-neutral-500 flex justify-between'>
          <p>{city}</p>
          <p>{address}</p>
        </div>
        <div className='font-light text-neutral-500 flex justify-between items-center'>
          <p>badrooms:{bedrooms}</p>
          <p>bathrooms:{bathrooms}</p>
        </div>
        <div className='flex flex-row items-center justify-between gap-1'>
          <div className='font-semibold'>$ {rentPerMonth}</div>
          <div className='font-light'>{roomSize}</div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-10 py-2 rounded mt-5  awesome-btn"
        >
          Booking
        </button>
      </div>
    </div>
    // </Link>
  )
}

export default House