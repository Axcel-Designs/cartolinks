import Image from "next/image";
import img from '../../public/krea.png'

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-col sm:flex-row items-center justify-between bg-gray-800 text-gray-100 p-4">
      <div className="flex items-center space-x-2 mb-4 sm:mb-0">
        <Image src={img} width={50} height={50} alt="kea image"/>
        <span className="font-bold text-lg">Krea AI</span>
      </div>
      <p className="text-xs">curated by <span className="font-semibold text-2xl">Mobbin</span></p>
    </footer>
  )
}
