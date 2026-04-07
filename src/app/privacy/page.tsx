import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Purple Jest privacy policy covering data collection, cookies, and user rights.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-neutral-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-neutral-900">
            Privacy <span className="text-primary-700">Policy</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <p className="text-neutral-600 leading-relaxed">
              Purple Jest ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website.
            </p>

            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We collect information that you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li>Contact us via email or contact forms (name, email address, message content)</li>
                <li>Make a purchase through our shop (name, shipping address, payment information)</li>
                <li>Sign up for our waitlist or newsletter (email address)</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-4">
                We also automatically collect certain information about your device and usage, including IP address, browser type, pages visited, and time spent on our site.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li>Process and fulfill your orders and requests</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you communications you have requested</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">
                3. Cookies
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to collect and track information about your activity on our website. Specifically, we use:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li><strong>Analytics cookies</strong> – We use Plausible Analytics (or Google Analytics) to understand how visitors interact with our website. This helps us improve our content and user experience.</li>
                <li><strong>Essential cookies</strong> – These are necessary for the website to function properly, such as remembering your cart items.</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect some functionality of the website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">
                4. Data Sharing
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li><strong>Payment processors</strong> – When you make a purchase, your payment information is processed by our payment provider (e.g., Stripe) in accordance with their privacy policy.</li>
                <li><strong>Legal requirements</strong> – We may disclose your information if required by law or to protect our rights.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">
                5. Your Rights
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                <li><strong>Access</strong> – Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction</strong> – Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion</strong> – Request deletion of your personal data, subject to legal obligations.</li>
                <li><strong>Objection</strong> – Object to our processing of your data for certain purposes.</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:hello@purplejest.com" className="text-primary-600 hover:text-primary-700">hello@purplejest.com</a>.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">
                6. Data Retention
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">
                7. Contact Us
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-neutral-600 leading-relaxed mt-2">
                <strong>Purple Jest</strong><br />
                Email: <a href="mailto:hello@purplejest.com" className="text-primary-600 hover:text-primary-700">hello@purplejest.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
