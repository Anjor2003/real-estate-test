import Image from "next/image";
import Link from "next/link";

export function Error404() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center px-5">
            <div>
            <h1 className="text-5xl font-semibold mb-6">Error 404</h1>
            <h2 className="text-3xl mb-5">Uups! No se ha encontrado la vivienda que buscas</h2>
            </div>
            <div>
            <Image src={"/assets/404-not-found.jpg"} alt="not Found" width={500} height={350} className="rounded-lg shadow-light" />
            </div>
        </div>
    )
}
