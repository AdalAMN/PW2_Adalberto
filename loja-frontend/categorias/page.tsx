"use client";

import Link from "next/link";
import SectionTitle from "../app/components/SectionTitle";
import ProductGrid from "../app/components/ProductGrid";
import { PRODUCTS } from "../lib/products";
import { motion } from "framer-motion";

const CATEGORIES = [
  {
    id: "sandbox",
    label: "Jogos criativos",
    image: "/images/produto1.jpg",
    description: "Jogos que oferecem o jogador a criar o seu próprio mundo",
  },
  {
    id: "Ação",
    label: "Jogos de deixar o coração batendo",
    image: "/images/produto2.jpg",
    description: "Jogos que desafiam o jogador a ser o melhor",
  },
  {
    id: "Terror",
    label: "Jogos assustadores",
    image: "/images/produto3.jpg",
    description: "Jogos que causam medo e ansiedade",
  },
];

export default function CategoriasPage() {
  return (
    <div className="space-y-20">

      {/* TÍTULO */}
      <SectionTitle>Categorias</SectionTitle>

      {/* GRID DE CATEGORIAS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 fade-in">

        {CATEGORIES.map((c, index) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <Link
              href={`/produtos?category=${c.id}`}
              className="block bg-blue-800 rounded-2xl overflow-hidden border border-blue-700 shadow-lg hover:border-blue-500 hover:shadow-blue-500/20 hover:scale-[1.02] transition duration-300"
            >
              {/* Imagem da categoria */}
              <img
                src={c.image}
                alt={c.label}
                className="w-full h-40 object-cover"
              />

              {/* Conteúdo */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  {c.label}
                </h3>

                <p className="text-slate-200 text-sm">{c.description}</p>

                <span className="text-blue-300 font-medium text-sm">
                  Ver produtos →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}

      </div>

      {/* PRODUTOS EM DESTAQUE */}
      <div className="space-y-8 fade-in">
        <SectionTitle>Todos os produtos</SectionTitle>
        <ProductGrid products={PRODUCTS} />
      </div>

    </div>
  );
}