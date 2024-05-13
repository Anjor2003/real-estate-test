import Image from "next/image";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";

export function Form() {
  return (
    <div className="px-3">
      <div className="py-4 px-3 rounded-lg shadow-light">
        <div className="flex gap-4">
          <Image
            src={"/assets/comercial.png"}
            alt="comercial"
            width={50}
            height={50}
            className="border-2 rounded-full border-secondary"
          />
          <div className="">
            <p>Alfredo Martinez</p>
            <p className="text-secondary font-semibold">Comercial</p>
          </div>
        </div>
        <div className="my-5">
          <div className="">
            <label className="text-sm text-secondary">Nombre</label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm "
              />
            </div>
          </div>
          <div className="mt-2">
            <label className="text-sm text-secondary">Telefono</label>
            <div className="">
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="phone"
                className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm "
              />
            </div>
          </div>
          <div className="mt-2">
            <label className="text-sm text-secondary">Descripcion</label>
            <div className="">
              <textarea
                name="description"
                rows={3}
                className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm "
                defaultValue={""}
              />
            </div>
          </div>
          <div className="flex justify-between gap-5 my-4">
            <button className="bg-secondary text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-secondary hover:border-[1px] hover:border-secondary">
              Enviar Mensaje
            </button>
            <Link
              href="tel:666777888"
              className="flex justify-between gap-2 border-[1px] border-secondary text-secondary px-2 py-2 rounded-lg text-sm hover:bg-secondary hover:text-white"
            >
              <button className="flex items-center gap-2">
                <BsTelephone />
                <span>LLamar</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
