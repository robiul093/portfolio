import React from 'react'
import img1 from '../../../public/skills/logo_dark.svg'
import Image from 'next/image'

export default function SkillCard() {
  return (
    <div>
      <div className='w-44 h-4w-44 bg-[#1b24587d] text-white text-center p-5 rounded-2xl
      hover:scale-110 transition-all'>
                <Image src={img1} alt="" width={80} height={80} className='mx-auto mb-5' />
                <h2 className='text-2xl'>React</h2>
            </div>
    </div>
  )
}
