import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6"

const ProjectCard = ({title, src, link}) => {
  return (
    <div className='px-8 py-4 flex flex-col gap-y-4 mb-10 border'>
        <h1 className='font-medium text-background'>{title}</h1>
        <Image
            className='rounded-md'
            src={src}
            alt='project-img'
        />
        <a 
          href={link}
          target='_blank' 
          className='text-background font-bold flex justify-between items-center w-[130px] p-2 px-4 border rounded-md cursor-pointer hover:text-blue-600 hover:border-blue-600 duration-75'>
          Go to site
          <FaArrowRight/>
        </a>
    </div>
  )
}

export default ProjectCard