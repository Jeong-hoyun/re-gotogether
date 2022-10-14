import React,{ useEffect, useState, useRef} from 'react'
import DownArrow from '../NavbarLogo/downArrow'

function ModalBtn() {
  // const outside = useRef()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='ModalBtn inline-block'> 
 
      <button onClick={() => setIsOpen(!isOpen)}>   <DownArrow /> </button>
      {isOpen ? (
        <div className='modal'>
          <div>Modal is open</div>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownNavbar" class="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                </div>
            </div>
          
        </div>
      ): null}
    </div>
  )
}

export default ModalBtn