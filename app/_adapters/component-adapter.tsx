import React from 'react'

const ComponentAdapter = ({children , height} : {children : React.ReactNode , height : string}) => {
  return (
    <div style={{height : height}} className='flex flex-col justify-center items-center'>
        {children}
    </div>
  )
}

export default ComponentAdapter;