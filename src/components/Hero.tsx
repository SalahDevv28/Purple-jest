import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 order-2 lg:order-1">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight">
              Find Your <span className="text-primary-700">Stronghold.</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed max-w-lg">
              Brave living. Old-fashioned value. Affordable apartments in amazing locations. 
              We believe a man deserves a place that reflects his character – classic, solid, 
              and built to last.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/information" className="btn-primary">
                Explore Apartments
              </Link>
              <Link href="/information#locations" className="btn-secondary">
                View Locations
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px] bg-neutral-100 order-1 lg:order-2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="mt-4 text-neutral-500 text-sm">Classic apartment building exterior</p>
              </div>
            </div>
            {/* Vintage border effect */}
            <div className="absolute inset-4 border-2 border-primary-200 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
