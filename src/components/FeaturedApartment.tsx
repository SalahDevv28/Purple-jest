import Link from 'next/link';
import Image from 'next/image';
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
            <div className="relative h-64 lg:h-auto min-h-[250px]">
              <Image
                src={featuredApartment.image}
                alt={featuredApartment.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-4 border-2 border-primary-100 pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-serif text-3xl font-bold text-primary-700">
                  ${featuredApartment.price}
                </span>
                <span className="text-neutral-500">/month</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">
                {featuredApartment.name}
              </h3>
              <p className="text-neutral-500 text-sm mb-4">
                {featuredApartment.location} - {featuredApartment.address}
              </p>
              <p className="text-neutral-600 mb-4 text-sm">
                {featuredApartment.bedrooms === 0 ? 'Studio' : `${featuredApartment.bedrooms} Bed`} | {featuredApartment.bathrooms} Bath | {featuredApartment.sqft} sqft
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
