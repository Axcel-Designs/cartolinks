"use client";
import Link from "next/link";
import { FaAngleDown, FaBars, FaBell, FaCircle, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import useShow from "@/hooks/showHook";
import { navItems, navLinks } from "@/utils/data";
import { usePathname } from "next/navigation";
import krea from '../../public/kreawhite.png'
import Image from "next/image";
import { useEffect, useState } from "react";


function Navbar() {
  return navItems.map(({ href, name, icon }, i) => {
    const Icon = icon
    return (
      <Link href={href} key={i} className="flex items-center gap-2 bg-gray-200 w-fit py-1 px-2 rounded-lg">
        <Icon />
        {name}
      </Link>
    )
  })
}
function Menu() {
  const path = usePathname();
  return navLinks.map(({ icon, name, href }) => {
    const Icon = icon
    return (
      <Link href={href} key={name} className={`${href === path ? "bg-white dark:bg-gray-800" : ""} py-2 px-4 rounded-xl`}>
        <Icon />
      </Link>
    )
  })

}

export default function Header() {
  const { isShow, tggleActive } = useShow();
  const [dark, setDark] = useState<boolean>(false)

  function tggleDark() {
    setDark(!dark)
  }
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <section className="sticky top-0 bg-white/95 z-50 dark:bg-gray-700/90 dark:text-gray-100">
        <header className="flex justify-between items-center py-2 px-2">
          <div className="flex items-center">
            <nav
              onClick={tggleActive}
              className="lg:hidden flex gap-2 p-3 text-2xl hover:bg-gray-100 rounded-xl cursor-pointer"
            >
              {isShow ? <FaTimes /> : <FaBars />}
            </nav>
            <div className="max-lg:hidden flex">
              <Image src={krea} alt="krea logo" width={30} />
            </div>
            <div>
              <div className="w-fit py-1 px-2 rounded-lg max-lg:hidden flex items-center gap-1 justify-center">
                <FaCircle className="text-xl text-red-300" />
                <p>Hellooooo</p>
                <FaAngleDown />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex gap-2 bg-gray-200 dark:bg-gray-500 p-2 rounded-xl">
            <Menu />
          </div>
          <nav className="flex justify-end items-center gap-2 p-4 text-black">
            <Navbar />
            <div className="bg-gray-200 w-fit py-1 px-2 rounded-lg cursor-pointer">
              <FaBell className="text-xl" />
            </div>
            <div onClick={tggleDark} className="bg-gray-200 w-fit py-1 px-2 rounded-lg cursor-pointer">
              {!dark ?
                <FaMoon className="text-xl" />
                :
                <FaSun className="text-xl" />
              }
            </div>
            <div className="bg-gray-200 w-fit py-1 px-2 rounded-lg cursor-pointer">
              <FaCircle className="text-xl text-red-300" />
            </div>
          </nav>
          {/* <nav
            onClick={tggleActive}
            className="lg:hidden flex gap-3 p-4 text-2xl hover:bg-gray-100 rounded-xl"
          >
            {isShow ? <FaTimes /> : <FaBars />}
          </nav> */}
        </header>
        {isShow && (
          <nav
            onClick={tggleActive}
            className="hidden fixed top-15 max-lg:flex flex-col w-fit justify-start items-center gap-2 transition bg-gray-200 dark:bg-gray-500 p-[6px] rounded-2xl h-screen"
          >
            <Menu />
            <div>
              <Image src={krea} alt="krea logo" width={30} />
            </div>
          </nav>
        )}
      </section >
    </>
  );
}
