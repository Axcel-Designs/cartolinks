import { IconType } from "react-icons";
import { FaBalanceScale, FaBrush, FaCamera, FaFolder, FaHome, FaHeadset, FaImage, FaVideo, FaEdit, FaMicrophone, FaMagic, FaTrain } from "react-icons/fa";
import { FaPhotoFilm, FaWandMagic } from "react-icons/fa6";
import { LuGithub, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";
import { MdTransferWithinAStation } from "react-icons/md";
import { GiHeavyTimer } from "react-icons/gi";

interface SocialLink {
  name: string;
  href: string;
  label: string;
  icon: IconType;
}
interface GenerateType {
  name: string;
  icon: IconType;
  desc: string;
  color: string;
  isNew: boolean
}

interface NavLink {
  name: string;
  href: string;
  icon: IconType;
}

export const navItems: NavLink[] = [
  { href: "/gallery", name: "Gallery", icon: FaPhotoFilm },
  { href: "/support", name: "Support", icon: FaHeadset },

];

export const socialsData: SocialLink[] = [
  { name: "Axcel-Designs", href: "https://github.com/Axcel-Designs",label: "GitHub",icon: LuGithub,},
  {name: "excel-acha",href: "https://linkedin.com/in/excel-acha",label: "LinkedIn", icon: LuLinkedin, },
  {name: "axceldesigns@gmail.com",href: "mailto:axceldesigns@gmail.com",label: "Email",icon: LuMail,},
  { name: "@axceldesigns", href: "https://x.com/axceldesigns",label: "X (formerly Twitter)",icon: LuTwitter,},
];

export const navLinks: NavLink[] = [
  { name: "Home", href: "/", icon: FaHome },
  { name: "Gallery", href: "/gallery", icon: FaPhotoFilm },
  { name: "Camera", href: "/camera", icon: FaCamera },
  { name: "Brush", href: "/brush", icon: FaBrush },
  { name: "Magicwand", href: "/magicwand", icon: FaWandMagic },
  { name: "Balance", href: "/balance", icon: FaBalanceScale },
  { name: "Folder", href: "/folder", icon: FaFolder },
];

export const generateData: GenerateType[] = [
  {
    name: 'Image',
    icon: FaImage,
    desc: 'Generates images with custom styles in flux and ideogram.',
    isNew: true,
    color: 'bg-linear-to-b bg-pink-600 to-gray-100 text-white'
  },
  {
    name: 'Video',
    icon: FaVideo,
    desc: 'Generates Videos with Halius pics, Runway Luma and more.',
    isNew: true,
    color: 'bg-linear-to-b bg-red-600 to-gray-100 text-white'
  },
  {
    name: 'RealTime',
    icon: GiHeavyTimer,
    desc: 'RealTime AI rendering on a canvas. Instant feedback loops.',
    isNew: true,
    color: 'bg-linear-to-b bg-green-600 to-gray-100 text-white'
  },
  {
    name: 'Enhancer',
    icon: FaMagic,
    desc: 'Upscale and enchance images and videos up to 22k.',
    isNew: false,
    color: 'bg-linear-to-b bg-purple-600 to-gray-100 text-white'
  },
  {
    name: 'Edit',
    icon: FaEdit,
    desc: 'Add objects, changes styles or expand photos and generators.',
    isNew: true,
    color: 'bg-linear-to-b from-blue-600 to-gray-100 text-white'
  },
  {
    name: 'VideoLipsync',
    icon: FaMicrophone,
    desc: 'Lip sync any video to any audio.',
    isNew: true,
    color: 'bg-linear-to-b bg-yellow-600 to-gray-100 text-white'
  },
  {
    name: 'Motion Transfer',
    icon: MdTransferWithinAStation,
    desc: 'Transfer motion to images and animate characters.',
    isNew: false,
    color: 'bg-linear-to-b bg-indigo-600 to-gray-100 text-white'
  },
  {
    name: 'Train',
    icon: FaTrain,
    desc: 'Teach Kres ai to replicate your style, products or characters.',
    isNew: false,
    color: 'bg-linear-to-b bg-emerald-600 to-gray-100 text-white'
  },
]
