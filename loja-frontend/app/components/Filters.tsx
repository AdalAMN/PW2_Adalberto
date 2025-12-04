"use client";

export default function Filters({ setFilters }: any) {
  return (
    <div className="bg-blue-900 p-5 rounded-xl border border-blue-950 shadow-md fade-in space-y-4">

      <input
        type="text"
        placeholder="Buscar jogo..."
        className="w-full p-3 rounded-lg bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 font-medium"
        onChange={(e) => setFilters((f: any) => ({ ...f, search: e.target.value }))}
      />

      <select
        className="w-full p-3 rounded-lg bg-blue-800 border-blue-700 text-white font-medium"
        onChange={(e) => setFilters((f: any) => ({ ...f, category: e.target.value }))}
      >
        <option value="" className="bg-blue-900 text-white">Todas as categorias</option>
        <option value="acao" className="bg-blue-900 text-white">Ação/Aventura</option>
        <option value="estrategia" className="bg-blue-900 text-white">Estratégia</option>
        <option value="indie" className="bg-blue-900 text-white">Indie</option>
      </select>

      <select
        className="w-full p-3 rounded-lg bg-blue-800 border-blue-700 text-white font-medium"
        onChange={(e) => setFilters((f: any) => ({ ...f, order: e.target.value }))}
      >
        <option value="">Ordenar por</option>
        <option value="asc">Preço: menor para maior</option>
        <option value="desc">Preço: maior para menor</option>
      </select>
    </div>
  );
}