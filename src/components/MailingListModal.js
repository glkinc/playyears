import { useEffect, useState } from "react";

export default function MailingListModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formAction =
      "https://1b482e2f.sibforms.com/serve/MUIFAEAyijIOIumZHVu0lNkY3E9IEmRIeK8UvCXrlepWYkUYxRDC1jiWtD05ApWkS-1iy8vJ2GNUuGgSacGLAEdLySTnCOXZb0RbpMmu86dEPZOYF5MR7ILCJVnzFNLktageZ4W8ABeWwR5yM4HY_NKfeYxYe3Ln-JCLfJT3KC2hGPVKkNRwphUFFWhnZ9EBvCltm2shFClKqNXH";

    const data = new FormData();
    data.append("EMAIL", email);
    data.append("email_address_check", "");
    data.append("locale", "en");

    try {
      await fetch(formAction, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <div
      className={`modal-backdrop ${open ? "is-open" : ""}`}
      onClick={onClose}
      aria-hidden={!open}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-top">
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            
          </button>
        </div>

        <div className="modal-bottom">
          <div className="flex-container flex-col gap-sm">
            <p className="body-lg">
              Join our mailing list to get updates about our Kickstarter campaign!
            </p>

            <form onSubmit={handleSubmit} className="modal-form">
              <input
                type="email"
                value={email}
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>

            {status === "success" && <p>Thanks for subscribing!</p>}
            {status === "error" && <p>Something went wrong.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}