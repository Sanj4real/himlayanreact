import TopHeader from "./TopHeader";
import { AiFillHome } from "react-icons/ai";
import { FaPlaneDeparture, FaMountain } from "react-icons/fa";
import { GrBlog } from "react-icons/gr"
import { GiRoad } from 'react-icons/gi'
import { FcAbout } from 'react-icons/fc'
import Link from "next/link";

function Header() {
  const MENULIST = [
    {
      name: "Home",
      icon: <AiFillHome />,
      path: "/",
    },
    {
      name: "Trek",
      icon: <FaPlaneDeparture />,
      path: "/trek",
    },
    {
      name: "Climbing",
      icon: <FaMountain />,
      path: "/climb",
    },
    {
      name: "Blog",
      icon: <GrBlog />,
      path: "/blog",
    },
    {
      name: "Treks",
      icon: <GiRoad />,
      path: "/trek",
    },
    {
      name: "About us",
      icon: <FcAbout />,
      path: "/about",
    },
  ];
  return (
    <>
      <TopHeader />
      <div className="container">
        <div className='flex items-center justify-between'>
          <Link href="/">
            <a>
              <img
                src="/logo/logo.png"
                alt="site-logo"
                className="h-16 w-auto object-contain"
              />
            </a>
          </Link>
          <div>
            <ul>
              {MENULIST.map((item, index) => {
                return(
                <li key={index} item={item} className="mr-10 inline-block text-primaryBlack hover:text-primaryGreen">
                  <Link href={item.path}>
                    <a className="flex items-center font-semibold text-base  capitalize  ">
                      <div className='mr-1 '>{item.icon}</div>
                      {item.name}
                    </a>
                  </Link>
                </li>)
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
