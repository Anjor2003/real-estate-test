"use client"

import { Transition } from "../Transition"
import { Slider } from "./Slider"

export function Services() {
    return (
      <Transition className="grid px-4 py-8 md:py-38 md:px-36 md:grid-cols-2 md:gap-28">
        <div
          className="flex flex-col items-center justify-center max-w-xl mb-7"
          id="services"
        >
          <h4 className="text-secondary">Servicios</h4>
          <h2 className="my-4 text-3xl font-semibold">
            Promociona tu vivienda para alquilarla o venderla al mejor precio
          </h2>
          <p className="mb-10 mt-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            aspernatur minus quos minima dignissimos laudantium deleniti? Eos
            aut deserunt neque.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Slider />
        </div>
      </Transition>
    );
}
