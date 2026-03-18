import { useState } from 'react';
import PageHero from '@/components/PageHero.tsx';
import ProductCard from '@/components/ProductCard.tsx';
import SectionHeader from '@/components/SectionHeader.tsx';
import { productFilters, products } from '@/data/siteContent.ts';

const maximumProductPrice = Math.max(...products.map((product) => product.priceValue));

const priceFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof productFilters)[number]>('All');
  const [maxPrice, setMaxPrice] = useState(maximumProductPrice);

  const filteredProducts = products.filter((product) => {
    const categoryMatches = selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatches = product.priceValue <= maxPrice;
    return categoryMatches && priceMatches;
  });

  return (
    <>
      <PageHero
        badge="Products"
        title="A curated product catalogue built to showcase laptops and accessories with premium polish."
        description="The product experience now showcases real-brand laptops and accessories so customers feel like they are browsing an authentic store inventory before they contact the shop."
        highlights={[
          'Real-brand catalogue featuring Apple, Dell, Lenovo, Xiaomi, HP, ASUS, and trusted accessories.',
          'Price cap filter to match different budgets.',
          'Product cards with visual consistency and local pricing.',
        ]}
      />

      <section className="section-shell pt-24">
        <div className="grid gap-10 xl:grid-cols-[0.36fr_0.64fr]">
          <aside className="glass-panel rounded-[2rem] p-6 xl:sticky xl:top-32 xl:h-fit">
            <SectionHeader
              eyebrow="Smart filters"
              title="Find the right fit faster."
              description="These controls make the catalogue easier to scan on both desktop and mobile."
            />

            <div className="mt-8 space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Category</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {productFilters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setSelectedCategory(filter)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        selectedCategory === filter
                          ? 'bg-slate-950 text-white'
                          : 'border border-slate-200 bg-white text-slate-700 hover:border-brand-200 hover:text-brand-700'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Max price</p>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                    {priceFormatter.format(maxPrice)}
                  </span>
                </div>

                <input
                  type="range"
                  min={1000}
                  max={maximumProductPrice}
                  step={500}
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(Number(event.target.value))}
                  className="mt-5 h-2 w-full cursor-pointer accent-brand-600"
                />
              </div>
            </div>
          </aside>

          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader
                eyebrow="Catalogue"
                title="Premium selection from real brands for work, study, and gaming setups."
                description="Each card keeps the model name, pricing, and brand positioning visible without overwhelming the shopper."
              />
              <p className="text-sm text-slate-500">{filteredProducts.length} products available</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="glass-panel mt-6 rounded-[2rem] p-6 text-sm text-slate-600">
                No products match the selected filters. Increase the price cap or switch categories.
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
