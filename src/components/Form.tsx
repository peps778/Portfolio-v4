import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | boolean>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_weemsiv", 
        "template_ia7h7bn", 
        formRef.current,
        "0qGLC47d_30RJck8E"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <div id="container" className="flex items-center justify-center">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative bg-custom-black backdrop-blur-xl p-10 rounded-2xl w-full max-w-md space-y-6 shadow-2xl border border-[#1e293b]/40"
      >
        <div className="absolute -top-8 -left-6 w-28 h-28 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-8 -right-6 w-28 h-28 bg-purple-500/20 blur-3xl rounded-full"></div>

        <h1 className="text-3xl font-bold text-white text-center tracking-wide">
          Contact Me
        </h1>
        <p className="text-gray-400 text-center text-sm">
          Let’s work together — I’d love to hear from you.
        </p>

        <input
          className="w-full bg-[#020618] text-white border border-[#1e293b] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          type="text"
          placeholder="Your Name"
          name="user_name"
          required
        />

        <input
          className="w-full bg-[#020618] text-white border border-[#1e293b] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          type="email"
          placeholder="Email Address"
          name="user_email"
          required
        />

        <input
          className="w-full bg-[#020618] text-white border border-[#1e293b] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          type="tel"
          placeholder="Phone Number"
          name="user_phone"
        />

        <textarea
          className="w-full bg-[#020618] text-white border border-[#1e293b] rounded-lg px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="Your Message (Optional)"
          name="message"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-blue-600/30 active:scale-95"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success === true && (
          <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
        )}
        {success === false && (
          <p className="text-red-500 text-center mt-2">Failed to send message.</p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;