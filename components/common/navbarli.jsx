import React from 'react';
import Link from 'next/link';
import navMenus from "../../json/navbar.content.json";
const Navbarli = ({setDisplay,display,Logo,name}) => {
    return (
        <li onMouseLeave={() => setDisplay(false)}>
              <Link href="/" >
                <a
                  className="block border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
                  onMouseEnter={() => setDisplay(true)}
                >
                  <Logo />
                  {name}
                </a>
             </Link>
              {display && (
                <div className="absolute z-10 top-30  bg-white rounded-md">
                  <ul className="py-1 text-sm">
                    {navMenus.curations.map((curation) => {
                      return (
                        <li key={`${curation.text} ${Math.random()* 20}`} className="hover:bg-logo-color animate-fade-in-down">
                          <Link href={curation.link}>
                            <a
                              id={curation.id}
                              className="flex px-4 py-2 bg-gray"
                            >
                              {curation.text}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
    );
}

export default Navbarli;
