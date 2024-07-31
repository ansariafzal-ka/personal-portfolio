'use client'

import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io"
import { FaGithub } from "react-icons/fa"
import { FaVoicemail } from "react-icons/fa"
import { MdHome } from "react-icons/md"
import { MdInfo } from "react-icons/md"
import { FaDiagramProject } from "react-icons/fa6"
import { IoIosContact } from "react-icons/io"


const Footer = () => {

    const scrollToNav = () =>{
        const navBar =document.getElementById('nav')
        navBar.scrollIntoView({behavior : 'smooth'})
    }

    const scrollToAbout = () =>{
        const aboutSection =document.getElementById('about')
        aboutSection.scrollIntoView({behavior : 'smooth'})
    }

    const scrollToProjects = () =>{
        const projectSection = document.getElementById('projects')
        projectSection.scrollIntoView({behavior : 'smooth'})
    }

    const scrollToContact = () =>{
        const contactSection =  document.getElementById('contact')
        contactSection.scrollIntoView({ behavior : 'smooth'})
    }


  return (
    <section className='bg-foreground text-background flex flex-col items-start gap-y-4 p-4 mb-6 md:flex-row'>
        <ul className='flex flex-col gap-y-4 w-full border-b py-4 md:border-none'>
            <h1 className='text-xl'>Socials</h1>
            <a href="#" className='flex items-center gap-2'>
                <IoLogoWhatsapp />
                +91 9967132722
            </a>
            <a href="https://github.com/ansariafzal-ka" target='_blank' className='flex items-center gap-2'>
                <FaGithub />
                Github
            </a>
            <a href="#" className='flex items-center gap-2'>
                <FaVoicemail />
                ansariafzalka@gmail.com
            </a>
        </ul>
        <ul className='flex flex-col gap-y-4 w-full'>
            <h1 className='text-xl'>Navigation</h1>
            <li onClick={scrollToNav} className='flex items-center gap-2 cursor-pointer'>
                <MdHome size={20}/>
                Home
            </li>
            <li onClick={scrollToAbout} className='flex items-center gap-2 cursor-pointer'>
                <MdInfo size={20}/>
                About
            </li>
            <li onClick={scrollToProjects} className='flex items-center gap-2 cursor-pointer'>
                <FaDiagramProject size={20}/>
                Projects
            </li>
            <li onClick={scrollToContact} className='flex items-center gap-2 cursor-pointer'>
                <IoIosContact size={20}/>
                Contact
            </li>
        </ul>
    </section>
  )
}

export default Footer