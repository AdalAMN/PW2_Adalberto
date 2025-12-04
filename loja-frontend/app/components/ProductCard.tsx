"use client";

import Link from "next/link";
import { useCart } from "./CartContext";
import type { Product } from "../../lib/products";

type Props = Product;

export default function ProductCard({ id, name, price, image, category, description, tags }: Props) {
  const { add } = useCart();

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    add({ id, name, price, image, category, description, tags });
  }

  return (
    <div className="relative bg-white dark:bg-blue-800 rounded-2xl shadow-md hover:shadow-xl border border-slate-200 dark:border-blue-950 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <Link href={`/produtos/${id}`} className="block">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />

        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {name}
          </h3>

          <p className="text-blue-600 dark:text-blue-300 text-xl font-bold">
            R$ {price.toFixed(2)}
          </p>
        </div>
      </Link>

      <div className="p-4 pt-0 flex gap-2">
        <Link
          href={`/produtos/${id}`}
          className="flex-1 text-center text-xs px-3 py-2 rounded-lg bg-slate-100 dark:bg-blue-700 text-slate-700 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-blue-600 transition"
        >
          Ver detalhes
        </Link>
        <button
          onClick={handleAddToCart}
          className="flex-1 text-xs px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-md hover:shadow-lg"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}