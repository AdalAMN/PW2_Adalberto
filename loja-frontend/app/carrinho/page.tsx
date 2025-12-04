"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../components/CartContext";
import CartItem from "../components/CartItem";

export default function CarrinhoPage() {
  const { items, total, clear } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  function handleFinalizePurchase() {
    clear();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  }

  if (showSuccess) {
    return (
      <div className="fade-in text-center space-y-6 py-20">
        <div className="inline-block p-6 bg-green-600 rounded-full">
          <svg
            className="w-16 h-16 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-blue-950">Compra realizada com sucesso!</h2>
        <p className="text-blue-950 text-lg">
          Obrigado pela sua compra. Seus jogos estão disponíveis para download.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition shadow-lg"
        >
          Voltar à loja
        </Link>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="fade-in text-center space-y-6 py-20">
        <p className="text-white text-lg">Seu carrinho está vazio.</p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition shadow-lg"
        >
          Continuar comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 fade-in">
      <h1 className="text-3xl font-bold text-white">Seu Carrinho</h1>

      <div>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-blue-300">
          Total: R$ {total.toFixed(2)}
        </p>
        <button
          onClick={handleFinalizePurchase}
          className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition"
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}