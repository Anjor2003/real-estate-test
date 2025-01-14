import { SearchButton } from "../SearchButton";
import { SearchLocation } from "../SearchLocation";
import { SearchPriceRange } from "../SearchPriceRange";
import { SearchProperty } from "../SearchProperty";
import { Transition } from "../Transition";

export function FloatedSearch() {
    return (
        <Transition className="absolute -bottom-10 md:-bottom-10 left-0 right-0 w-[75%] mx-auto">
            <div className=" flex-col justify-between gap-4 py-4 px-8 bg-white text-black rounded-md md:flex md:flex-row backdrop-blur shadow-light">
                <SearchLocation />
                <SearchProperty />
                <SearchPriceRange />
                <SearchButton   />
            </div>
        </Transition>
    )
}
