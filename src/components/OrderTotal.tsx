import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

export default function OrderTotal({order, tip, placeOrder}: OrderTotalProps) {
    const subTotalOrder = useMemo(() => order.reduce((acc, current) => {
        return acc + (current.price * current.quantity)
    }, 0), [order])

    const tipOrder = useMemo(() => subTotalOrder * tip, [order, tip])

    const totalOrder = useMemo(() => subTotalOrder + tipOrder, [order, tip])


  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y propina:</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subTotalOrder)}</span>
            </p>
            <p>Propina: {''}
                <span className="font-bold">{formatCurrency(tipOrder)}</span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalOrder)}</span>
            </p>

        </div>

        <button 
            className="w-full bg-black p-2 uppercase text-white
            disabled:opacity-10"
            disabled={totalOrder === 0}
            onClick={placeOrder}
        >
            Guardar Orden
        </button>

    </>
  )
}
