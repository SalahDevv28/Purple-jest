import { locations, faqs, apartments, testimonials } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Information | Locations, Leasing & Brand Philosophy",
  description: "Learn about our apartment locations, leasing process, and the Purple Jest promise of old-fashioned values and transparent pricing.",
};

export default function InformationPage() {
  const availableApartments = apartments.filter(apt => apt.available);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-neutral-900">
            The Purple Jest <span className="text-primary-700">Information</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know about our apartments, locations, and how to make yours.
          </p>
        </div>
      </section>

      {/* Available Apartments */}
      <section className="py-16 bg-white" aria-labelledby="apartments-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="apartments-heading" className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">
            Available Apartments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableApartments.map(apt => (
              <div key={apt.id} className="border border-neutral-200 overflow-hidden hover:border-primary-200 transition-colors">
                <div className="relative h-48 bg-neutral-100">
                  <Image
                    src={apt.image}
                    alt={apt.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-4 border border-primary-100 pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-neutral-900 mb-1">{apt.name}</h3>
                  <p className="text-neutral-500 text-sm mb-2">{apt.location}</p>
                  <p className="text-primary-700 font-bold text-xl mb-2">${apt.price}/month</p>
                  <p className="text-neutral-600 text-sm mb-3">
                    {apt.bedrooms === 0 ? 'Studio' : `${apt.bedrooms} Bed`} | {apt.bathrooms} Bath | {apt.sqft} sqft
                  </p>
                  <ul className="space-y-1 mb-4">
                    {apt.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-neutral-600 text-sm flex items-start gap-2">
                        <span className="text-primary-600 mt-0.5">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-neutral-400">{apt.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section id="locations" className="py-16 bg-neutral-50" aria-labelledby="locations-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="locations-heading" className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white border border-neutral-200 p-6 hover:border-primary-200 transition-colors">
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">
                  {location.name}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {location.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Purple Jest Promise */}
      <section className="py-16 bg-white" aria-labelledby="promise-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="promise-heading" className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">
            The Purple Jest Promise
          </h2>
          <div className="bg-neutral-50 border border-neutral-200 p-8">
            <ul className="space-y-4">
              {[
                "Handshake deals - your word means something here.",
                "Transparent pricing - no hidden fees, no surprises.",
                "No compromise on quality - classic buildings, modern standards.",
                "Respect for tenants - we're landlords who care about real living.",
                "Old-fashioned integrity - we do what we say."
              ].map((promise, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 leading-relaxed">{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How to Rent */}
      <section className="py-16 bg-neutral-50" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="process-heading" className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">
            How to Rent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Choose", description: "Browse our locations and find the apartment that suits your character." },
              { step: "2", title: "Tour", description: "Schedule a visit. See the space, feel the neighbourhood, make your decision." },
              { step: "3", title: "Sign", description: "Simple lease, honest terms. No fine print, no games. Welcome home." }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white border border-neutral-200">
                <div className="w-12 h-12 bg-primary-600 text-white font-serif text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="testimonials-heading" className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">
            What Tenants Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <blockquote key={t.id} className="bg-neutral-50 border border-neutral-200 p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < t.rating ? 'text-primary-600' : 'text-neutral-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-700 text-sm italic mb-4">"{t.text}"</p>
                <p className="text-neutral-900 font-semibold text-sm">{t.name}</p>
                <p className="text-neutral-500 text-xs">{t.apartment}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-neutral-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-neutral-200 group">
                <summary className="p-6 cursor-pointer font-semibold text-neutral-900 hover:text-primary-700 transition-colors list-none">
                  {faq.question}
                  <span className="float-right text-primary-600 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">
            Get Your Apartment-Hunting Kit
          </h2>
          <p className="text-neutral-600 mb-6">
            Visit our shop for branded gear, vintage maps, and everything you need to start your search.
          </p>
          <Link href="/shop" className="btn-primary inline-block">
            Visit the Shop
          </Link>
        </div>
      </section>
    </>
  );
}
