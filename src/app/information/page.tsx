import { locations, faqs } from "@/lib/data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Information | Locations, Leasing & Brand Philosophy",
  description: "Learn about our apartment locations, leasing process, and the Purple Jest promise of old-fashioned values and transparent pricing.",
};

export default function InformationPage() {
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

      {/* Our Locations */}
      <section id="locations" className="py-16 bg-white" aria-labelledby="locations-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="locations-heading" className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="border border-neutral-200 overflow-hidden hover:border-primary-200 transition-colors">
                <div className="h-48 bg-neutral-100 flex items-center justify-center relative">
                  <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="absolute inset-4 border border-primary-100 pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2">
                    {location.name}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {location.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Purple Jest Promise */}
      <section className="py-16 bg-neutral-50" aria-labelledby="promise-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="promise-heading" className="font-serif text-3xl font-bold text-neutral-900 text-center mb-12">
            The Purple Jest Promise
          </h2>
          <div className="bg-white border border-neutral-200 p-8">
            <ul className="space-y-4">
              {[
                "Handshake deals – your word means something here.",
                "Transparent pricing – no hidden fees, no surprises.",
                "No compromise on quality – classic buildings, modern standards.",
                "Respect for tenants – we're landlords who care about real living.",
                "Old-fashioned integrity – we do what we say."
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
      <section className="py-16 bg-white" aria-labelledby="process-heading">
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
              <div key={index} className="text-center p-6 border border-neutral-200">
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
