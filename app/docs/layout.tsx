import React from 'react'

const layout = ({ children }: Readonly<{children : React.ReactNode}>) => {
    return (
      // Side Navbar
      <div>{children}</div>
  )
}

export default layout;