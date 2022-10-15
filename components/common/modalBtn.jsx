import React,{useState} from 'react'
import DownArrow from '../NavbarLogo/downArrow'
import { navMenus } from 'config/navMenus'


function ModalBtn({ menus, group }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='ModalBtn inline-block'> 

      {/* <button>  <DownArrow/> </button> 왜 아래꺼가 하나하나 클릭이 안되는지 알아보자 */}
      <button onClick={() => setIsOpen(!isOpen)}> 
        <DownArrow/>
         </button>

      {isOpen ? (
        <div className='modal'>

          <div>
                        {/* <!-- Dropdown menu --> */}
                <div id="dropdownNavbar" className=" w-44 font-normal rounded divide-y">
              
          {/* {menus && ( */}
          {menus?.length > 0 && (
            <ul className="py-1 text-sm "> 
          
                  착한 사람 눈에만 보이는 목록들

              {menus.map((menu) => ( 
                <li key={menu.id}>
                    <a href="#" id="첫번째 목록" className="block py-2 px-4 bg-gray">{menu.text}</a>
                </li>
                ))}

              </ul>

                )}

          {/* {group && ( */}
          {group?.length > 0 && (
            <ul className="py-1 text-sm "> 
          
                  two coloumns plz
              {group.map((group) => ( 
                <li key={group.id}>
                    <a href={group.link} id="첫번째 목록" className="block py-2 px-4 bg-gray">{group.text}</a>
                </li>
                ))}

              </ul>

              )}


            </div>
          </div>
        </div>
      ): null}
    </div>
  )
}

export default ModalBtn
