"use client";

import { motion } from "framer-motion";
import SectionTitle from "./components/SectionTitle";
import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "../lib/products";

export default function Home() {
  return (
    <div className="space-y-24">

      {/* BANNER PRINCIPAL */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-900 p-16 rounded-3xl shadow-xl overflow-hidden border border-blue-700"
      >
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-white drop-shadow">
           Jogos populares
          </h1>

          <p className="text-white text-lg max-w-xl mx-auto font-medium">
            Os melhores jogos para você
          </p>

          <a
            href="/produtos"
            className="inline-block mt-6 px-10 py-3 bg-white text-blue-800 font-bold rounded-xl shadow-lg hover:scale-105 transition hover:bg-blue-50"
          >
            buscar jogos
          </a>
        </div>

        {/* Efeito gráfico no fundo */}
        <div className="absolute inset-0 opacity-20 bg-[url('/window.svg')] bg-cover bg-center"></div>
      </motion.section>

      {/* SEÇÃO DE CATEGORIAS */}
      <section className="fade-in space-y-10">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-800 mb-6 tracking-tight fade-in">
          Categorias
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 ls:grid-cols-3 gap-6">
          {[
            { nome: "Minecraft", img: "/images/produto1.jpg" },
            { nome: "War thunder", img: "/images/produto2.jpg" },
            { nome: "Silent hill", img: "/images/produto3.jpg" },
          ].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="bg-blue-600 p-4 rounded-xl border border-blue-700 shadow hover:border-blue-400 transition cursor-pointer"
            >
              <img
                src={cat.img}
                className="w-full h-24 object-cover rounded-lg mb-2"
              />
              <p className="text-white text-center font-semibold">
                {cat.nome}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Jogos EM DESTAQUE */}
      <section className="fade-in space-y-10">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-800 mb-6 tracking-tight fade-in">
          Destaques da semana
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard {...p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCOS DE INFORMAÇÃO */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 fade-in">
        {[
          {
            title: "Download instantâneo",
            desc: "Acesso imediato após a compra",
          },
          {
            title: "Suporte 24/7",
            desc: "Atendimento sempre disponível",
          },
          {
            title: "Pagamento seguro",
            desc: "Pix, Cartão (Crédito ou débito), Boleto",
          },
        ].map((info, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className="bg-blue-800 p-6 rounded-2xl border border-blue-950 shadow text-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              {info.title}
            </h3>
            <p className="text-slate-100">{info.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}