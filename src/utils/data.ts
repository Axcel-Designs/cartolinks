import React from "react";
import { FaBalanceScale, FaBrush, FaCamera, FaFolder, FaHome } from "react-icons/fa";
import { FaPhotoFilm, FaWandMagic } from "react-icons/fa6";
import { LuGithub, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";

interface SocialLink {
  name: string;
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface NavigationLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const socialsData: SocialLink[] = [
  {
    name: "Axcel-Designs",
    href: "https://github.com/Axcel-Designs",
    label: "GitHub",
    icon: <LuGithub className="h-5 w-5" />,
  },
  {
    name: "excel-acha",
    href: "https://linkedin.com/in/excel-acha",
    label: "LinkedIn",
    icon: <LuLinkedin className="h-5 w-5" />,
  },
  {
    name: "axceldesigns@gmail.com",
    href: "mailto:axceldesigns@gmail.com",
    label: "Email",
    icon: <LuMail className="h-5 w-5" />,
  },
  {
    name: "@axceldesigns",
    href: "https://x.com/axceldesigns",
    label: "X (formerly Twitter)",
    icon: <LuTwitter className="h-5 w-5" />,
  },
];

export const navigationLinks: NavigationLink[] = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "Gallery", href: "/gallery", icon: <FaPhotoFilm /> },
  { name: "Camera", href: "/camera", icon: <FaCamera /> },
  { name: "Brush", href: "/brush", icon: <FaBrush /> },
  { name: "Magicwand", href: "/magicwand", icon: <FaWandMagic /> },
  { name: "Balance", href: "/balance", icon: <FaBalanceScale /> },
  { name: "Folder", href: "/folder",icon: <FaFolder /> },
];