import React from 'react'

const page = ({ params }: { params: { category : string } }) => {
  return (
      <div>{ params.category }</div>
  )
}

export default page;