import { FaBalanceScale, FaBrush, FaCamera, FaFolder, FaHome, FaHeadset, FaImage, FaVideo, FaEdit, FaMicrophone, FaMagic, FaTrain } from "react-icons/fa";
import { FaPhotoFilm, FaWandMagic } from "react-icons/fa6";
import { MdTransferWithinAStation } from "react-icons/md";
import { GiHeavyTimer } from "react-icons/gi";
import { CarouselType, GenerateType, NavLink } from "@/types/dataTypes";
import wan from '@/assets/wan.png'
// import wan from '../../public/krea.png'
import source from '@/assets/source.png'
// import source from '../../public/kreawhite.png'



export const navItems: NavLink[] = [
  { href: "/gallery", name: "Gallery", icon: FaPhotoFilm },
  { href: "/support", name: "Support", icon: FaHeadset },

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

export const carouselData: CarouselType[] = [
  {
    title: 'WAN 2.2',
    subtitle: 'WAN 2.2 Image generation',
    desc: 'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt coherence and ultra realistic textures.',
    buttonText: 'Try WAN 2.2',
    image: wan,
  },
  {
    title: 'Open Source',
    subtitle: 'FLUX.1 Krea',
    desc: "We're making the weights to our FLUX1 Krea model open source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: null,
    image: source,
  }
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
