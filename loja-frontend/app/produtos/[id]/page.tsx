import type { Metadata } from "next";
import { getProductById } from "../../../lib/products";
import AddToCartButton from "../../components/AddToCartButton";

type Params = { params: { id: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const product = getProductById(Number(params.id));
  if (!product) {
    return { title: "Produto não encontrado | Minha Loja" };
  }

  return {
    title: `${product.name} | Minha Loja`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default function ProductDetails({ params }: Params) {
  const product = getProductById(Number(params.id));

  if (!product) return <p className="text-white text-lg">Produto não encontrado.</p>;

  return (
    <div className="fade-in grid grid-cols-1 md:grid-cols-2 gap-16">
      <img
        src={product.image}
        className="w-full rounded-xl shadow-lg border border-slate-600"
        alt={product.name}
      />

      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white">{product.name}</h1>

        <p className="text-blue-300 text-3xl font-extrabold">
          R$ {product.price.toFixed(2)}
        </p>

        <p className="text-slate-100 text-lg leading-relaxed">{product.description}</p>

        <div className="text-sm">
          {product.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-slate-800 border border-slate-600 text-slate-200 rounded-full px-3 py-1 mr-2 mt-2 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        <AddToCartButton id={product.id} />
      </div>
    </div>
  );
}