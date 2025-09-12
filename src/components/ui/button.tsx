"use client";
import useHover from "@/hooks/hoverHook";

interface ButtonType {
  label: string;
  icon: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ label, icon, type = "button" }: ButtonType) {
  const { active, handleHover } = useHover();
  return (
    <div
      {...handleHover}
      className={`flex flex-row justify-around items-center gap-2 p-2 rounded-xl shadow/90 ${active ? "text-blue-950 bg-white "
        : "bg-blue-950 text-white shadow-blue-500 shadow"
        }`}
    >
      {icon}
      <button type={type}>{label}</button>
    </div>
  );
}
export function ButtonWhite({ label, icon, type = "button" }: ButtonType) {
  const { active, handleHover } = useHover();
  return (
    <div
      {...handleHover}
      className={`flex flex-row justify-around items-center gap-2 p-2 rounded-xl shadow/90 ${active ? "bg-blue-950 text-white"
        : "text-blue-950 bg-white shadow-blue-500 shadow"
        }`}
    >
      {icon}
      <button type={type}>{label}</button>
    </div>
  );
}
export function ButtonForm({ label, icon, type = "button" }: ButtonType) {
  const { active, handleHover } = useHover();
  return (
    <div
      {...handleHover}
      className={`flex flex-row justify-around items-center  gap-2 p-2 rounded-xl shadow/90 shadow-yellow-500 cursor-pointer ${!active ? "bg-yellow-950 text-white shadow-white"
        : "text-yellow-950 bg-white"
        }`}
    >
      {icon}
      <button type={type}>{label}</button>
    </div>
  );
}
