import { generateData } from "@/utils/data";
import { FaAngleDown } from "react-icons/fa";

export default function GenerateSection() {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center mt-4 px-4">
        <p className="font-semibold">Generate</p>
        <div className="flex justify-between items-center gap-1 text-blue-500 font-semibold"><FaAngleDown /><p>Show all</p></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols lg:grid-cols-4 flex-wrap gap-5 justify-between p-4">
        {generateData.map(({ name, icon, desc, color, isNew }) => {
          const Icon = icon
          return (
            <div key={name} className="flex justify-between items-center ">
              <div className="flex justify-center items-center gap-2 ">
                <div className={`${color} p-3 rounded-lg`}>
                  <Icon />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-semibold">{name}</p> {isNew && <button className="bg-blue-600 rounded-lg px-2 text-white "> new</button>}
                  </div>
                  <p className="text-xs">{desc}</p>
                </div>
              </div>
              <button className="bg-gray-200 rounded-xl py-1 p-4">Open</button>
            </div>

          )

        })}
      </div>
    </section>
  )
}
