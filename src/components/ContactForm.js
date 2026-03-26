import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://theplayyears.com/sendMail.php", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("❌ " + text);
      }
    } catch (error) {
      setStatus("❌ Error sending message. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-container flex-col gap-sm form-container w-full max-w-lg"
    >
      <div className="flex-container flex-col gap-xs">
        <label htmlFor="name">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your full name"
          className="input-field"
          required
        />
      </div>

      <div className="flex-container flex-col gap-xs">
        <label htmlFor="email">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          className="input-field"
          required
        />
      </div>

      <div className="flex-container flex-col gap-xs">
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="How can we help?"
          rows="5"
          className="input-field"
          required
        ></textarea>
      </div>

      <div className="flex-container flex-row justify-end">
          <button type="submit" className="btn btn-accent w-full mt-sm">
            Send Message
          </button>
      </div>
      {status && <p className="body-sm text-center mt-2">{status}</p>}
    </form>
  );
};

export default ContactForm;