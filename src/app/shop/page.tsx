'use client';

import { products } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

function ProductCard({ product }: { product: typeof products[0] }) {
  const { addToCart } = useCart();

  return (
    <div className="border border-neutral-200 overflow-hidden hover:border-primary-200 transition-colors">
      <div className="h-64 bg-neutral-100 flex items-center justify-center relative">
        <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        <div className="absolute inset-4 border border-primary-100 pointer-events-none"></div>
      </div>
      <div className="p-6">
        <span className="text-xs text-neutral-400 uppercase tracking-wider">{product.category}</span>
        <h3 className="font-serif text-lg font-bold text-neutral-900 mb-1">
          {product.name}
        </h3>
        <p className="text-neutral-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary-700 font-bold text-xl">${product.price}</span>
          {product.inStock ? (
            <button
              onClick={() => addToCart(product)}
              className="btn-primary text-sm px-4 py-2"
            >
              Add to Cart
            </button>
          ) : (
            <span className="text-neutral-400 text-sm font-medium">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const inStockProducts = products.filter(p => p.inStock);
  const outOfStockProducts = products.filter(p => !p.inStock);

  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-neutral-900">
            The Purple Jest <span className="text-primary-700">Shop</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Branded gear for the bold. Classic fit, old-school style.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="products-heading" className="sr-only">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {inStockProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Out of Stock */}
      {outOfStockProducts.length > 0 && (
        <section className="py-12 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-8 text-center">
              Coming Soon
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {outOfStockProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
