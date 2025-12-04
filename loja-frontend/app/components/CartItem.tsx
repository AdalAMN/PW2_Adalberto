"use client";

import { CartItem as CartItemType, useCart } from "./CartContext";

export default function CartItem({ item }: { item: CartItemType }) {
  const { add, decrease, remove } = useCart();

  return (
    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 mb-4 flex items-center gap-4">
      <img
        src={item.image}
        className="w-20 h-20 object-cover rounded-lg"
        alt={item.name}
      />

      <div className="flex-1">
        <h3 className="font-bold text-white">{item.name}</h3>
        <p className="text-blue-300 text-lg font-semibold">
          R$ {item.price.toFixed(2)}
        </p>
        <p className="text-slate-200 text-sm font-medium">Qtd: {item.quantity}</p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => decrease(item.id)}
            className="w-8 h-8 rounded-full bg-slate-900 border border-slate-500 text-white hover:bg-slate-700 transition"
          >
            -
          </button>
          <button
            onClick={() => add(item)}
            className="w-8 h-8 rounded-full bg-slate-900 border border-slate-500 text-white hover:bg-slate-700 transition"
          >
            +
          </button>
        </div>
        <button
          onClick={() => remove(item.id)}
          className="text-xs text-red-300 hover:text-red-200 font-medium"
        >
          Remover
        </button>
      </div>
    </div>
  );
}