import { IconType } from "react-icons";

export interface NavLink {
  name: string;
  href: string;
  icon: IconType;
}

export interface CarouselType {
  title: string,
  subtitle: string,
  desc: string,
  buttonText: string | null,
  image: string,
  alt: string,
}

export interface GenerateType {
  name: string;
  icon: IconType;
  desc: string;
  color: string;
  isNew: boolean
}
