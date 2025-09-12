import { IconType } from "react-icons";
import { FaBalanceScale, FaBrush, FaCamera, FaFolder, FaHome, FaHeadset } from "react-icons/fa";
import { FaPhotoFilm, FaWandMagic } from "react-icons/fa6";
import { LuGithub, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";

interface SocialLink {
  name: string;
  href: string;
  label: string;
  icon: IconType;
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
  {
    name: "Axcel-Designs",
    href: "https://github.com/Axcel-Designs",
    label: "GitHub",
    icon: LuGithub,
  },
  {
    name: "excel-acha",
    href: "https://linkedin.com/in/excel-acha",
    label: "LinkedIn",
    icon: LuLinkedin,
  },
  {
    name: "axceldesigns@gmail.com",
    href: "mailto:axceldesigns@gmail.com",
    label: "Email",
    icon: LuMail,
  },
  {
    name: "@axceldesigns",
    href: "https://x.com/axceldesigns",
    label: "X (formerly Twitter)",
    icon: LuTwitter,
  },
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

export const generateData = [
  { name: 'Image', desc: 'Generates images with custom styles', icon: '', new: true },
  { name: 'Video', desc: '', icon: 'Generates Videos with  Runway Luma and more', new: true },
  { name: 'RealTime', desc: 'RealTime AI rendering on a canvas', icon: '', new: true },
  { name: 'Enhancer', desc: 'Upscale and enchance images and videos up to 2k', icon: '', new: false },
  { name: 'Edit', desc: 'Add objects changes styles or', icon: '', new: true },
  { name: 'VideoLipsync', desc: 'Lip sync my video', icon: '', new: true },
  { name: 'Motion Enhancer', desc: 'Transfer motion to images and animate characters', icon: '', new: false },
  { name: 'Train', desc: '', icon: 'Teach Kres ai to recognies your style, produce or characters', new: false },
]