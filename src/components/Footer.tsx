import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-black flex justify-center items-center gap-2 py-2'>
        <p className='text-white/50 font-light'> @2025 Sooraj P,</p>
        <p className='text-white font-light'>crafted with love 💓</p>
    </div>
  )
}

export default Footer