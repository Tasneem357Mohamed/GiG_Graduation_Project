import { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMapPin,
    title: "OUR OFFICE",
    lines: ["123 Business Avenue", "Suite 456, City Center", "New York, NY 10001"],
  },
  {
    icon: FiPhone,
    title: "PHONE",
    lines: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: FiMail,
    title: "EMAIL",
    lines: ["info@proserv.com", "support@proserv.com"],
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header className="text-center py-16 md:py-24">
        <h1
          className="text-4xl md:text-5xl font-normal text-[#10152E] dark:text-white mb-3"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Contact us
        </h1>
        <p className="text-text/60 text-sm md:text-base max-w-md mx-auto px-4">
          Have questions or need assistance? We&apos;d love to hear from you.
          Reach out and let&apos;s start a conversation.
        </p>
      </header>

      {/* Contact Info Cards */}
      <section className="max-w-5xl mx-auto px-6 mb-12 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contactInfo.map(({ icon: Icon, title, lines }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center py-6"
            >
              <div className="w-12 h-12 rounded-full border border-[#CDBB88] flex items-center justify-center mb-4">
                <Icon className="text-[#CDBB88] text-xl" />
              </div>
              <h3
                className="text-sm font-normal tracking-[2px] text-[#10152E] dark:text-white mb-3"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {title}
              </h3>
              {lines.map((line) => (
                <p
                  key={line}
                  className="text-text/60 text-sm leading-6"
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-gray-200 dark:border-gray-700" />
      </div>

      {/* Contact Form */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-light text-[#10152E] dark:text-white mb-2 tracking-[1px]"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                FIRST NAME
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-2 text-sm text-[#10152E] dark:text-white placeholder-gray-400 focus:border-[#CDBB88] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-light text-[#10152E] dark:text-white mb-2 tracking-[1px]"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                LAST NAME
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-2 text-sm text-[#10152E] dark:text-white placeholder-gray-400 focus:border-[#CDBB88] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-light text-[#10152E] dark:text-white mb-2 tracking-[1px]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-2 text-sm text-[#10152E] dark:text-white placeholder-gray-400 focus:border-[#CDBB88] focus:outline-none transition-colors"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-light text-[#10152E] dark:text-white mb-2 tracking-[1px]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              SUBJECT
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-2 text-sm text-[#10152E] dark:text-white placeholder-gray-400 focus:border-[#CDBB88] focus:outline-none transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-light text-[#10152E] dark:text-white mb-2 tracking-[1px]"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              YOUR MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full border-b border-gray-300 dark:border-gray-600 bg-transparent py-2 text-sm text-[#10152E] dark:text-white placeholder-gray-400 focus:border-[#CDBB88] focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-[#10152E] dark:bg-[#CDBB88] text-white px-10 py-3 text-sm tracking-[2px] font-light hover:bg-[#1a2347] dark:hover:bg-[#b8a672] transition-colors rounded-sm cursor-pointer"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              SEND
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactUs;
