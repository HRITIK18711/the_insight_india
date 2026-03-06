import React from "react";
import { Helmet } from "react-helmet";

export default function Privacy() {
  return (
    <div className="bg-white text-gray-800">

      {/* SEO TAGS */}
      <Helmet>

        <title>Privacy Policy | RUExplores</title>

        <meta
          name="description"
          content="Read the Privacy Policy of RUExplores to understand how we collect, use and protect visitor information while exploring travel guides, destinations and stories."
        />

        <meta
          name="keywords"
          content="RUExplores privacy policy, travel blog privacy policy, website privacy policy India, data protection policy"
        />

        <link
          rel="canonical"
          href="https://ruexplores.com/privacy"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | RUExplores" />
        <meta
          property="og:description"
          content="Learn how RUExplores protects visitor information and maintains transparency in data usage."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ruexplores.com/privacy" />
        <meta
          property="og:image"
          content="https://ruexplores.com/Image/1.png"
        />

        {/* Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"WebPage",
            "name":"Privacy Policy",
            "url":"https://ruexplores.com/privacy",
            "publisher":{
              "@type":"Organization",
              "name":"RUExplores",
              "url":"https://ruexplores.com"
            }
          }
          `}
        </script>

      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg opacity-90">
          Last updated: March 2026
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

        <div>
          <h3 className="text-xl font-semibold mb-2">
            a) Analytics Tools
          </h3>

          <p>
            RU Explores may use analytics tools to understand website traffic
            and visitor behavior.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            b) Advertising Partners
          </h3>

          <p>
            RU Explores may display advertisements through services such as
            Google AdSense.
          </p>

          <p className="mt-2">
            These services may use cookies or similar technologies to display
            advertisements based on your interests.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            c) Affiliate Links
          </h3>

          <p>
            Some pages may contain affiliate links for hotels and travel
            services.
          </p>

          <p className="mt-2">
            If you book through these links, RU Explores may earn a small
            commission at no extra cost to you.
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