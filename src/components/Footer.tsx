import Link from "next/link";
import { socialsData } from "../utils/data";

export default function Footer() {
  return (
    <footer className="border-t text-gray-400">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ACHA K. EXCEL. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          {socialsData.map(({ href, label, icon }) => (
          <Link
            key={label}
            href={href}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className="p-2 rounded-md transition-colors hover:bg-gray-400 hover:text-black"
          >
            {icon}
            <span className="sr-only">{'label'}</span>
          </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
