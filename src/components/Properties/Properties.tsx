"use client"

import Link from "next/link"
import { Transition } from "../Transition"
import { dataProperties } from "./Properties.data"
import { LiaBathSolid, LiaBedSolid, LiaRulerCombinedSolid, LiaStarSolid } from 'react-icons/lia'
import Image from "next/image"
import { formatPrice } from "@/utils/formatPrice"
import { useState } from "react"

export function Properties() {
    const [counterHouses, setCounterHouses] = useState(8)
    const dataFilterHouses = dataProperties.slice(0, counterHouses)
    const loadMoreHouses = () => setCounterHouses(counterHouses + 4)
    return (
      <Transition className="px-4 py-8 md:py-40 md:px-36 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4" id="properties">
          {dataFilterHouses.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className="shadow-light hover:shadow-xl rounded-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative -zx-[1] ">
                <div className="relative">
                  <div className="absolute flex items-center px-2 py-1 rounded-lg bg-slate-50 top-2 right-2 text-secondary">
                    <LiaStarSolid />
                    <span className="ml-1 font-semibold">{property.star}</span>
                  </div>
                  <Image
                    src={`/assets/properties/${property.image}`}
                    alt={property.location}
                    width={150}
                    height={150}
                    className="object-cover w-full max-h-full h-[200px] rounded-t-2xl"
                  />
                  <div className="px-3 py-5 ">
                    <p className="text-secondary">{property.location}</p>
                    <p className="font-semibold">
                      {formatPrice(property.price)}
                    </p>
                    <div className="gap-4 mt-2 flex items-center">
                      <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-300/30">
                        <LiaBedSolid />
                        <span className="ml-2">{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-300/30">
                        <LiaBathSolid />
                        <span className="ml-2">{property.bathroom}</span>
                      </div>
                      <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-300/30">
                        <LiaRulerCombinedSolid />
                        <span className="ml-2">{property.meters}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center my-7">
            {counterHouses < dataProperties.length && (
          <button onClick={loadMoreHouses} className="px-5 py-3 text-white transition-all delay-150 cursor-pointer bg-secondary rounded-xl hover:bg-black">
            Ver mas propiedades
          </button>   
            )}
        </div>
      </Transition>
    );
}
