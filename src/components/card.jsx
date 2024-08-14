import React from 'react'

const Card = ({icon, title, summary, link}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='pop border-2 border-red-300 justify-center items-start text-stone-200 rounded-md text-left flex flex-col gap-5 px-5 w-[16rem] h-[18rem] flex-shrink-0'>
        <div className='w-8 h-8 overflow-hidden'>{icon}</div>
        <h1 className='font-semibold uppercase'>{title}</h1>
        <p className='h-24 text-xs'>{summary}</p>
    </a>
  )
}

export default Card

/**
 *  * Vacay
 *  A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world
 */