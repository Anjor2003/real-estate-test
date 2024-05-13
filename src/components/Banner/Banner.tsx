import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
    return (
       <div className="container relative mx-auto">
        <div className="pt-20 md:pt-0 min-h-[80vh] h-screen md:h-full bg-banner bg-no-repeat bg-cover bg-center rounded-3xl flex flex-col items-center md:justify-center">
            <div className="max-w-3xl text-center text-white">
                <h2 className="text-4xl md:text-5xl font-semibold">Descrubre la vivienda ideal para tu familia en toda España</h2>
                <p  className="mt-2 text-xl md:mt-8">Con mas de 30 años de experiencia en InmoEstate contamos con las mejores profesionales para lo que necesites</p>
                <FloatedSearch/>
            </div>
        </div>
       </div>
    )
}
