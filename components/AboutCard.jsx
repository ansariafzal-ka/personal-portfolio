import React from 'react'

const AboutCard = ({title, description, Icon}) => {
  return (
    <div className='flex flex-col gap-y-2 text-center p-4 border rounded-md shadow-md md:py-12 md:w-full md:h-[250px]'>
        <Icon className='mx-auto' size={25}/>
        <h1 className='font-bold text-xl'>
            {title}
        </h1>
        <p className='text-sm font-medium md:text-lg lg:text-sm'>{description}</p>
    </div>
  )
}

export default AboutCard