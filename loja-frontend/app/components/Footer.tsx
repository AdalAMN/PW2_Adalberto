export default function Footer() {
  return (
    <footer className="bg-blue-900 text-slate-200 mt-20 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* COLUNA 1 – SOBRE */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Nossa Loja</h3>
          <p className="text-slate-200 leading-relaxed">
            A melhor loja de jogos digitais do Brasil. 
            <br />
            Jogos com os melhores preços e download instantâneo.
          </p>
        </div>

        {/* COLUNA 2 – LINKS */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Links</h3>
          <ul className="space-y-2 text-slate-200">
            <li className="hover:text-white transition cursor-pointer font-medium">Sobre</li>
            <li className="hover:text-white transition cursor-pointer font-medium">Jogos</li>
            <li className="hover:text-white transition cursor-pointer font-medium">Contato</li>
          </ul>
        </div>

        {/* COLUNA 3 – REDES SOCIAIS */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Redes Sociais</h3>

          <div className="flex items-center gap-4 text-3xl">
            <span className="cursor-pointer hover:text-white transition">🌐</span>
            <span className="cursor-pointer hover:text-white transition">📱</span>
            <span className="cursor-pointer hover:text-white transition">📸</span>
            <span className="cursor-pointer hover:text-white transition">🦩</span>
          </div>
        </div>

      </div>

      {/* RODAPÉ INFERIOR */}
      <div className="text-center py-4 border-t border-blue-800 text-slate-400 text-sm">
        © 2025 Loja de Jogos Pay To Win — Todos os direitos reservados
      </div>
    </footer>
  );
}