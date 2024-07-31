'use client'
import React from 'react'
import { Button } from './ui/button'
import icon from '../public/icon.png'
import Image from 'next/image'

const Nav = () => {

  const scrollToContact = () =>{
    const contactSection =  document.getElementById('contact')
    contactSection.scrollIntoView({ behavior : 'smooth'})
  }

  return (
   <nav id='nav' className='flex justify-between items-center py-4 border-b'>
    <Image src={icon} alt='icon' className='w-[40px] h-[40px] rounded-sm'/>
    <Button onClick={scrollToContact}>
        contact me
    </Button>
   </nav>
  )
}

export default Nav