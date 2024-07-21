import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
}

export default function MenuItem({item} : MenuItemProps) {
    return (
        <button
            className="border-2 border-teal-100 hover:bg-teal-100 w-full p-3 flex justify-between"
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}
