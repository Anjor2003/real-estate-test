import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div
        className="relative mb-2 md:mb-0 flex items-center gap-2 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GrTag />
        <div className="">
          <span>Rango de Precio</span>
          <p className="text-xs">Selecciona tu rango de precio</p>
        </div>
        {isOpen ? <GrFormUp /> : <GrFormDown />}
        {isOpen && (
          <div className="absolute -top-[70px] md:top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[200px] left-0">
            <p>Cualquier precio </p>
            <p>13.000 - 20.000</p>
            <p>20.000 - 30.000</p>
            <p>30.000 - 40.000</p>
          </div>
        )}
      </div>
    );
}
