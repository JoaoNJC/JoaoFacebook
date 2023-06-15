import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
      <h1>Header</h1>

      {/* Left  */}
      <div>
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed" />
        <div>
          <SearchIcon className='h-6' />

          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>


      {/* Center  */}

      {/* Right   */}
    </div>
  )
}

export default Header