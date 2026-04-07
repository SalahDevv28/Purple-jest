import { teamMembers } from '@/lib/data';

export default function TeamSection() {
  return (
    <section className="py-16 bg-white" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="team-heading" className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
            About the Team
          </h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            We're not suits. We're landlords who care about real living. 
            Brave, experienced, and built on old-fashioned integrity.
          </p>
          <div className="mt-4 w-16 h-0.5 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Photo placeholder */}
              <div className="relative w-32 h-32 mx-auto mb-4 bg-neutral-100 rounded-full overflow-hidden border-2 border-primary-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              <h3 className="font-serif text-lg font-bold text-neutral-900">
                {member.name}
              </h3>
              <p className="text-primary-700 text-sm font-medium mb-2">
                {member.role}
              </p>
              <p className="text-neutral-500 text-sm italic">
                "{member.quirkyFact}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
