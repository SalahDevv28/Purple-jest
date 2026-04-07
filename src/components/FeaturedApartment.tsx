import Link from 'next/link';
import { featuredApartment } from '@/lib/data';

export default function FeaturedApartment() {
  return (
    <section className="py-16 bg-neutral-50" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="featured-heading" className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
            Featured Apartment
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-primary-600 mx-auto"></div>
        </div>

        <div className="bg-white border border-neutral-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto bg-neutral-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-2 text-neutral-500 text-sm">{featuredApartment.location}</p>
                </div>
              </div>
              <div className="absolute inset-4 border-2 border-primary-100 pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif text-3xl font-bold text-primary-700">
                  ${featuredApartment.monthlyRent}
                </span>
                <span className="text-neutral-500">/month</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-4">
                {featuredApartment.location}
              </h3>

              <p className="text-neutral-600 mb-6 leading-relaxed">
                {featuredApartment.description}
              </p>

              <ul className="space-y-2 mb-8">
                {featuredApartment.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-neutral-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/information" className="btn-primary">
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
