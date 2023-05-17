import SalesInfo from '@/components/SalesInfo'
import React from 'react'

export default function Dashboard() {
  return (
    <div className="grid h-screen xs:grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-6 text-black">
        <h1 className="xs:text-4xl lg:text-5xl">UrbanAvenue</h1>
        <p className="text-justify xs:w-3/4 xs:text-lg lg:w-5/6 lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          repudiandae nulla assumenda nemo ratione voluptates, recusandae totam
          veniam eius aperiam delectus adipisci quas tenetur, accusamus a ad
          ipsum quos dolore?
        </p>
      </div>
      <SalesInfo />
    </div>
  )
}
