// src/components/Footer.js
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Brevo form action URL
    const formAction =
      "https://1b482e2f.sibforms.com/serve/MUIFAEAyijIOIumZHVu0lNkY3E9IEmRIeK8UvCXrlepWYkUYxRDC1jiWtD05ApWkS-1iy8vJ2GNUuGgSacGLAEdLySTnCOXZb0RbpMmu86dEPZOYF5MR7ILCJVnzFNLktageZ4W8ABeWwR5yM4HY_NKfeYxYe3Ln-JCLfJT3KC2hGPVKkNRwphUFFWhnZ9EBvCltm2shFClKqNXH";

    // Create form data
    const data = new FormData();
    data.append("FIRSTNAME", firstName);
    data.append("EMAIL", email);
    data.append("email_address_check", "");
    data.append("locale", "en");

    try {
    await fetch(formAction, {
      method: "POST",
      body: data,
      mode: "no-cors", // Brevo doesn't return JSON to client-side
    });
    navigate("/thanks", { state: { fromForm: true } });
    setEmail("");
  } catch (err) {
    setStatus("error");
  }
  };

  return (
    <footer className="footer">
      <div className="content">
        <div className="flex-container flex-col col-lg-8 gap-sm">
          <p className="heading heading-xl">
            <span className="text-highlight-primary">
              Play, Learn &amp; Grow
            </span>{" "}
            — Be first to know what's coming from Play Years
          </p>

          <div className="mailing-list-form">
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="newsletter-input"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>

            {status === "error" && <p className="newsletter-error">Something went wrong. Please try again.</p>}
          </div>
        </div>

        <div className="clear xxl"></div>

        <div className="columns justify-between wrap-sm wrap-xs items-end">
          <div className="col col-lg-4 col-md-5">
            <div className="flex-container flex-col gap-sm">
              <a
                href="https://instagram.com/shopplayyears/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                Follow us on Instagram
              </a>
              <p>&copy;2026 Play Years Inc.<sup>&trade;</sup> <br className="tablet mobile" />All rights reserved.</p>
            </div>
          </div>
          <div className="col flex-container col-lg-8 col-md-7 flex-col gap-sm">
            <nav className="footer-nav small">
              <ul>
                <li>
                  <NavLink
                    to="/terms"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Terms &amp; Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/privacy"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}