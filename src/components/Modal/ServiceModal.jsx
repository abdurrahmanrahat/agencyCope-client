import { useState } from "react";

const servicesList = [
  "Brand Identity",
  "Graphic Design",
  "Website Design",
  "Digital Marketing",
  "Social Media Content",
  "Brand Identity Design",
];

const ServiceModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    services: [],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setForm((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-[#0e0e0e] w-full max-w-2xl rounded-2xl shadow-2xl px-8 py-5 relative text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-medium text-center mb-8 text-[#caff00] tracking-wide uppercase">
          Service Inquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 2xl:space-y-6">
          {/* Name & Email - Two Columns */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm mb-1 block">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#caff00]"
              />
            </div>

            <div>
              <label className="text-sm mb-1 block">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#caff00]"
              />
            </div>
          </div>

          {/* Services - Responsive Grid */}
          <div>
            <label className="text-sm mb-2 block">Select Services</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 2xl:gap-3">
              {servicesList.map((service, idx) => (
                <label
                  key={idx}
                  className={`text-sm px-4 py-2 rounded-md cursor-pointer border font-medium text-center transition-all ${
                    form.services.includes(service)
                      ? "bg-[#caff00] text-black border-transparent"
                      : "bg-[#1a1a1a] text-gray-300 border-gray-700 hover:border-[#caff00]"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={form.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm mb-1 block">Your Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#caff00] resize-none"
              placeholder="Tell us more about your needs..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#caff00] text-black font-semibold py-3 rounded-md hover:bg-[#e6ff4c] transition-all text-center text-[16px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceModal;
