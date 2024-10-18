import React from 'react'

function About() {
  return (
    <div className='flex flex-col mx-auto items-center max-w-2xl text-center'>
      <div className='flex gap-2 text-5xl font-bold text-slate-700 items-center'>
        <p>We love</p>
        <p className='bg-blue-500 text-white p-4 rounded-lg'>comfy</p>
      </div>
      <p className='mt-4 text-lg text-slate-600 mb-56   '>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam
        blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis
        ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos
        minima sit porro, ratione aspernatur!
      </p>
    </div>
  )
}

export default About
