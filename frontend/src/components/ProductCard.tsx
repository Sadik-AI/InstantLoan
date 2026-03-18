import type { Product } from '@/data/siteContent.ts';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="glass-panel hover-lift overflow-hidden rounded-[2rem]">
      <div className="relative overflow-hidden border-b border-slate-200/70 bg-white p-5">
        <span className="absolute left-5 top-5 rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">
          {product.category}
        </span>
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-52 w-full max-w-[18rem] object-contain"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          {product.tag}
        </span>
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-slate-950">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
        <div className="mt-6 flex items-end justify-between gap-4">
          <p className="text-2xl font-bold text-slate-950">{product.price}</p>
          <span className="text-sm font-medium text-slate-500">In-store and enquiry pricing</span>
        </div>
      </div>
    </article>
  );
}
