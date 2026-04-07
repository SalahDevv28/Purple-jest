import Link from 'next/link';
import Image from 'next/image';

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
          <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px] order-1 lg:order-2">
            <Image
              src="/images/hero-apartments.svg"
              alt="Classic apartment buildings skyline"
              fill
              className="object-cover"
              priority
            />
            {/* Vintage border effect */}
            <div className="absolute inset-4 border-2 border-primary-200 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
