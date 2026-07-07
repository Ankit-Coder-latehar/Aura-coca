import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import FloatingLeaves from "../components/FloatingLeaves";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    eventDate: "",
    guestCount: "100",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const infoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      infoRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName && formData.phone) {
      try {
        // Submit details to Formspree (replace 'xoqgrney' with actual Formspree ID)
        const response = await fetch("https://formspree.io/f/xzdlwyov", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            eventDate: formData.eventDate,
            guestCount: formData.guestCount,
            message: formData.message
          })
        });

        if (response.ok) {
          setSubmitted(true);
          // Trigger confetti! This makes the website feel extremely attractive and pleasant.
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#10B981", "#0F3D26", "#FCFBF7", "#D4AF37"],
          });
          setTimeout(() => {
            setSubmitted(false);
            setFormData({
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              eventDate: "",
              guestCount: "100",
              message: "",
            });
          }, 6000);
        } else {
          alert("Submission failed. Please try again or contact us directly!");
        }
      } catch (err) {
        console.error("Formspree Error:", err);
        alert("An error occurred. Please try again or contact us directly!");
      }
    }
  };

  return (
    <div className="relative min-h-screen pt-12 pb-24 px-6 md:px-12">
      <FloatingLeaves />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#0F3D26]/5 text-[#0F3D26] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase inline-block border border-[#0F3D26]/10 mb-4">
            Connect
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-darkbrown mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-darkbrown/70 leading-relaxed">
            Ready to treat your guests to premium engraved coconuts? Fill out the form or reach us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Support Info */}
          <div ref={infoRef} className="lg:col-span-5 flex flex-col space-y-8">

            <div className="bg-[#0F3D26] text-white rounded-[30px] p-8 shadow-xl flex flex-col space-y-6">
              <h2 className="font-serif text-2xl font-bold text-brandgreen">Contact Details</h2>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full text-brandgreen shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#FCFBF7]/50 uppercase tracking-widest">Call or WhatsApp</p>
                  <a href="tel:+917483261771" className="text-lg font-bold hover:text-brandgreen transition-colors">+91 74832 61771</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full text-brandgreen shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#FCFBF7]/50 uppercase tracking-widest">Email Address</p>
                  <a href="mailto:hello@auracoco.in" className="text-lg font-bold hover:text-brandgreen transition-colors">hello@auracoco.in</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full text-brandgreen shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#FCFBF7]/50 uppercase tracking-widest">Service Area</p>
                  <p className="text-lg font-bold">Bangalore City, Karnataka</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white/60 backdrop-blur-md border border-[#0F3D26]/10 rounded-[30px] p-8 shadow-md flex flex-col space-y-6">
              <h2 className="font-serif text-2xl font-bold text-darkbrown flex items-center">
                <Clock className="w-6 h-6 text-brandgreen mr-2" />
                Working Hours
              </h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-darkbrown">Weekdays</p>
                  <p className="text-darkbrown/65">Monday - Friday</p>
                  <p className="text-brandgreen font-bold mt-1">08:30 - 20:00</p>
                </div>
                <div>
                  <p className="font-semibold text-darkbrown">Weekends</p>
                  <p className="text-darkbrown/65">Saturday - Sunday</p>
                  <p className="text-brandgreen font-bold mt-1">09:30 - 21:30</p>
                </div>
              </div>
            </div>

          </div>

          {/* Form container */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#0F3D26]/10 rounded-[30px] p-8 md:p-12 shadow-xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-darkbrown mb-6">Booking Inquiry Form</h2>

              {submitted ? (
                <div className="bg-[#0F3D26] text-white p-8 rounded-2xl text-center shadow-md animate-fade-in">
                  <h3 className="font-serif text-2xl font-bold mb-2 text-brandgreen">Enquiry Sent!</h3>
                  <p className="text-[#FCFBF7]/85 mb-4">
                    Thank you {formData.firstName}. We will get back to you with custom catalog templates and quotation options within 24 hours.
                  </p>
                  <div className="w-12 h-12 border-4 border-t-brandgreen border-white/20 rounded-full animate-spin mx-auto mt-4"></div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-darkbrown mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter first name"
                        className="w-full px-4 py-3 rounded-xl border border-darkbrown/10 bg-white focus:outline-none focus:border-brandgreen transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-darkbrown mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter last name"
                        className="w-full px-4 py-3 rounded-xl border border-darkbrown/10 bg-white focus:outline-none focus:border-brandgreen transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-darkbrown mb-2">Phone / Mobile *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-3 rounded-xl border border-darkbrown/10 bg-white focus:outline-none focus:border-brandgreen transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-darkbrown mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                        className="w-full px-4 py-3 rounded-xl border border-darkbrown/10 bg-white focus:outline-none focus:border-brandgreen transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-darkbrown mb-2">Event Date</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-darkbrown/10 bg-white focus:outline-none focus:border-brandgreen transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-darkbrown mb-2">Estimated Guest Count</label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-darkbrown/10 bg-white focus:outline-none focus:border-brandgreen transition-colors text-sm"
                      >
                        <option value="50">50 - 100 guests</option>
                        <option value="100">100 - 200 guests</option>
                        <option value="200">200 - 300 guests</option>
                        <option value="300">300+ guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-darkbrown mb-2">Your Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share particulars about your event themes, styling preferences, or design branding..."
                      className="w-full px-4 py-3 rounded-xl border border-darkbrown/10 bg-white focus:outline-none focus:border-brandgreen transition-colors text-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0F3D26] hover:bg-brandgreen text-white font-bold py-4 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Submit Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
