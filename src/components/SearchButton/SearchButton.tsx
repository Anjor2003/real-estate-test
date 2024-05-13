import { RiSearch2Line } from 'react-icons/ri'
export function SearchButton() {
    return (
        <div className="gap-4 border-[1px] rounded-lg px-14 py-1 bg-secondary flex items-center text-white justify-center hover:opacity-80">
            <RiSearch2Line />
        </div>
    )
}