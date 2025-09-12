"use client";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import useShow from "@/hooks/showHook";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  return navItems.map((item, i) => (
    <Link href={item.href} key={i}>
      {item.label}
    </Link>
  ));
}

export default function Header() {
  const { isShow, tggleActive } = useShow();

  return (
    <>
      <section className="shadow/20 shadow-gray-600 sticky top-0">
        <header className="flex justify-between items-center py-2 px-2">
          <div>
            
          </div>
          <div></div>
          <nav className="hidden md:flex justify-around gap-3 p-4">
            <Navbar />
          </nav>
          <nav
            onClick={tggleActive}
            className="md:hidden flex gap-3 p-4 text-2xl hover:bg-gray-100 rounded-xl"
          >
            {isShow ? <FaTimes /> : <FaBars />}
          </nav>
        </header>
        {isShow && (
          <nav
            onClick={tggleActive}
            className="flex flex-col justify-center gap-3 p-4 transition"
          >
            <Navbar />
          </nav>
        )}
      </section>
    </>
  );
}
