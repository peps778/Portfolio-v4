import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | boolean>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) {
      setSuccess(false);
      return;
    }

    emailjs
      .sendForm(
        "service_weemsiv",      // your service ID
        "template_ia7h7bn",     // your template ID
        formRef.current,        // form reference
        "0qGLC47d_30RJck8E"     // your public API key
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        formRef.current?.reset();
      })
      .catch((error) => {
        setSuccess(false);
        setLoading(false);
        console.error("EmailJS error:", error);
      });
  };

  return (
    <div id="container" className="flex items-center justify-center">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative bg-custom-black backdrop-blur-xl p-10 rounded-2xl w-full max-w-md space-y-6 shadow-2xl border border-[#1e293b]/40"
      >
        <h1 className="text-3xl font-bold text-white text-center tracking-wide">
          Contact Me
        </h1>

        <input
          type="text"
          placeholder="Your Name"
          name="user_name"
          required
          className="w-full bg-[#020618] text-white border border-[#1e293b] rounded-lg px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          name="user_email"
          required
          className="w-full bg-[#020618] text-white border border-[#1e293b] rounded-lg px-4 py-3"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          name="user_phone"
          className="w-full bg-[#020618] text-white border border-[#1e293b] rounded-lg px-4 py-3"
        />

        <textarea
          placeholder="Your Message"
          name="message"
          className="w-full bg-[#020618] text-white border border-[#1e293b] rounded-lg px-4 py-3 h-28 resize-none"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
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
