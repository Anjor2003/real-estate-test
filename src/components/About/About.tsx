import Image from "next/image";
import { Transition } from "../Transition";

export function About() {
    return (
        <Transition className="grid px-4 py-8 md:py-36 md:px-36 md:grid-cols-2 md:gap-28" >
            <div className="flex flex-col items-center justify-center max-w-xl mb-7" id="about">
                <h4 className="text-secondary">Sobre Nosotros</h4>
                <h2 className="my-4 text-3xl font-semibold">Mas de 1.000 viviendas para vender y comprar en España.</h2>
                <p className="mb-10 mt-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum aspernatur minus quos minima dignissimos laudantium deleniti? Eos aut deserunt neque.</p>
                <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black">Cargar mas</button>
            </div>
            <div className="flex flex-1 items-center jjucent-center">
                <Image src="/assets/house.jpeg" alt="about" width={500} height={400} className="w-full h-auto" priority />
            </div>
        </Transition>
    )
}
