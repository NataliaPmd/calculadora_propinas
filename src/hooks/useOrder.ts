import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)



    const addItem = (item: MenuItem) => {
        const itemExist: number = order.findIndex(order => item.id === order.id)
        if(itemExist >= 0) {
            const updatedOrder: OrderItem[] = [...order]
            updatedOrder[itemExist].quantity++
            setOrder(updatedOrder)
        } else {
            const newItem: OrderItem = {...item, quantity:1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: OrderItem['id']) => {
        setOrder(order.filter(item => item.id !==id))
    }


    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem
    }
}