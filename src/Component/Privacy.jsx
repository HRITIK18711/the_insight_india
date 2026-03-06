import React from "react";

export default function Privacy() {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg opacity-90">
          Last updated:
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-lg leading-relaxed space-y-6">
        <p>
          Welcome to <span className="font-semibold">RU Explores</span>. Your
          privacy is very important to us. This Privacy Policy explains what
          information we collect, how we use it and how we protect it when you
          visit our website.
        </p>

        <p>
          By using this website, you agree to the terms described in this
          Privacy Policy.
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-6">

          <h2 className="text-3xl font-bold">1. Information We Collect</h2>

          <p>
            RU Explores may collect limited personal and non-personal
            information.
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              a) Personal Information (only if you provide it)
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Messages sent through contact forms or email</li>
            </ul>

            <p className="mt-3">
              We collect this information only when you voluntarily share it.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              b) Non-personal Information (automatic)
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Browser type</li>
              <li>Device type</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>General location (country/region)</li>
            </ul>

            <p className="mt-3">
              This data helps us improve content and user experience.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2 */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-3xl font-bold">2. How We Use Your Information</h2>

        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>Improve website content and performance</li>
          <li>Respond to your messages or inquiries</li>
          <li>Understand visitor interests and behavior</li>
          <li>Maintain website security</li>
        </ul>

        <p className="font-medium">
          We do not sell, rent, or trade your personal information to third
          parties.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-6">

          <h2 className="text-3xl font-bold">3. Cookies</h2>

          <p>
            RU Explores may use cookies to:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>Remember visitor preferences</li>
            <li>Analyze traffic and usage</li>
            <li>Improve website functionality</li>
          </ul>

          <p>
            You can choose to disable cookies in your browser settings at any
            time. Disabling cookies may affect some website features.
          </p>

        </div>
      </section>

      {/* SECTION 4 */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">

        <h2 className="text-3xl font-bold">4. Third-Party Services</h2>

        {/* Analytics */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            a) Analytics Tools
          </h3>

          <p>
            RU Explores may use tools such as Google Analytics to understand
            website traffic and usage patterns.
          </p>

          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>IP address</li>
            <li>Browser or device data</li>
            <li>Usage behavior</li>
          </ul>
        </div>

        {/* Ads */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            b) Advertising Partners
          </h3>

          <p>
            RU Explores may display advertisements through services such as
            Google AdSense.
          </p>

          <p className="mt-2">
            These services may use cookies, web beacons or similar technologies
            to show advertisements based on your interests and browsing
            behavior.
          </p>
        </div>

        {/* Affiliate */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            c) Affiliate Links
          </h3>

          <p>
            Some pages may contain affiliate links for hotels, travel services
            and related resources.
          </p>

          <p className="mt-2">
            If you purchase through these links, RU Explores may earn a small
            commission at no extra cost to you.
          </p>

          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Maintain the website</li>
            <li>Create free travel content</li>
            <li>Improve guides and resources</li>
          </ul>

        </div>

      </section>

      {/* SECTION 5 */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-6">

          <h2 className="text-3xl font-bold">5. Data Protection</h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Protect your information</li>
            <li>Prevent unauthorized access</li>
            <li>Maintain website security</li>
          </ul>

          <p>
            However, no method of transmission over the internet is completely
            secure, so absolute security cannot be guaranteed.
          </p>

        </div>
      </section>

      {/* SECTION 6,7,8,9 */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">

        <div>
          <h2 className="text-3xl font-bold mb-3">6. External Links</h2>
          <p>
            RU Explores may link to external websites. We are not responsible
            for the content, privacy practices or policies of those sites.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-3">7. Children’s Information</h2>
          <p>
            RU Explores does not knowingly collect personal data from children
            under 13. If you believe a child has provided personal information,
            please contact us and we will remove it promptly.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-3">8. Your Consent</h2>
          <p>
            By using RU Explores, you consent to this Privacy Policy and the
            collection and use of information described here.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated “Last updated” date.
          </p>
        </div>

      </section>

      {/* CONTACT */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="text-lg mb-3">
          If you have questions about this Privacy Policy, you may contact us:
        </p>

        <p className="text-lg">
          Email: <span className="font-semibold">ruexplore02@gmail.com</span>
        </p>

        <p className="text-lg mt-2">
          Website: <span className="font-semibold">www.ruexplores.com</span>
        </p>

      </section>

    </div>
  );
}