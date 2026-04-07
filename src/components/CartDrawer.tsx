'use client';

import { useCart, type CartItem } from '@/lib/cart-context';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <h2 className="font-serif text-xl font-bold text-neutral-900">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-neutral-500 hover:text-neutral-700 p-2"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-neutral-500 text-center py-8">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item: CartItem) => (
                <li key={item.id} className="flex gap-4 border-b border-neutral-200 pb-4">
                  <div className="w-20 h-20 bg-neutral-100 flex-shrink-0 flex items-center justify-center text-neutral-400 text-xs">
                    Image
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900">{item.name}</h3>
                    <p className="text-primary-700 font-medium">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border border-neutral-300 flex items-center justify-center hover:bg-neutral-100"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border border-neutral-300 flex items-center justify-center hover:bg-neutral-100"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-neutral-400 hover:text-red-600 text-sm"
                        aria-label={`Remove ${item.name}`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-neutral-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-neutral-900">Total</span>
              <span className="font-bold text-primary-700 text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full btn-primary">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
