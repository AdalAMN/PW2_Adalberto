// lib/products.ts
export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  tags?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Minecraft",
    price: 299.0,
    category: "acao",
    image: "/images/produto1.jpg",
    description: "O jogo de construção e aventura mais popular do mundo. Crie, explore e sobreviva em um mundo infinito de blocos.",
    tags: ["novo", "destaque", "multijogador"],
  },
  {
    id: 2,
    name: "War Thunder",
    price: 329.9,
    category: "estrategia",
    image: "/images/produto2.jpg",
    description: "Construa um império que resista ao teste do tempo. Liderar uma civilização desde a antiguidade até a era moderna.",
    tags: ["estratégia", "lançamento", "multijogador"],
  },
  {
    id: 3,
    name: "Silent hill 2",
    price: 249.9,
    category: "terror",
    image: "/images/produto3.jpg",
    description: "Um jogo de terror psicológico que te assusta. Explore um hospital abandonado e enfrente criaturas assustadoras.",
    tags: ["terror", "promoção", "destaque"],
  },
];

export function getProductById(id: number): Product | null {
  return PRODUCTS.find((p) => p.id === id) ?? null;
}
