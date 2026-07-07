import React from "react";
import FloatingLeaves from "../components/FloatingLeaves";

export default function Privacy() {
  return (
    <div className="relative min-h-screen pt-12 pb-24 px-6 md:px-12">
      <FloatingLeaves />

      <div className="max-w-4xl mx-auto relative z-10 bg-white/60 backdrop-blur-md border border-[#0F3D26]/10 rounded-[30px] p-8 md:p-12 shadow-xl">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-darkbrown mb-6">Privacy Policy</h1>
        <p className="text-sm text-darkbrown/50 mb-8">Last Updated: July 2026</p>

        <div className="space-y-6 text-darkbrown/85 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold text-darkbrown mb-3">1. Information We Collect</h2>
            <p>
              We collect information that you send directly to us using our contact forms, email messages, or phone calls. This may include your first name, last name, phone number, email address, event details (date, guest count, venue locations), and any specific text messages or inquiries you provide.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-darkbrown mb-3">2. How We Use Your Information</h2>
            <p>
              We use your information exclusively to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Process bookings and coordinate event refreshment counter setups.</li>
              <li>Provide catalog templates, quotations, and customize your engraved coconut designs.</li>
              <li>Respond directly to queries, feedback, or support requests.</li>
              <li>Communicate logistical updates for scheduled event dates.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-darkbrown mb-3">3. Data Sharing & Privacy</h2>
            <p>
              Your personal information is kept strictly confidential. We do not sell, rent, trade, or share your details with external third-party advertisers or data brokers. Information is only shared with trusted coordinators or assistants directly involved in executing the catering setup at your event.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-darkbrown mb-3">4. Security</h2>
            <p>
              We apply standard organizational and technical measures to protect your personal details against unauthorized access, loss, alteration, or misuse.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-darkbrown mb-3">5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our privacy policies, feel free to contact us at: <a href="mailto:hello@auracoco.in" className="text-brandgreen font-semibold">hello@auracoco.in</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
