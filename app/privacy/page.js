export const metadata = {
  title: 'Privacy Policy',
  description: 'How Play Years Inc. collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
        <div className="content">
          <div className="flex-container flex-col gap-xl items-start">

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <div className="flex-container flex-col gap-xxs">
                  <h1 className="body-lg weight-500 text-highlight-secondary">Privacy Policy</h1>
                  <span className="heading heading-xl">Your Privacy Matters to Us</span>
                </div>
                <p className="body-lg">
                  This Privacy Policy explains how Play Years Inc. (“we,” “our,” or “us”) collects, uses, and protects information when you visit our website theplayyears.com (the “Site”). 
                  By using our Site, you agree to this Privacy Policy. If you do not agree, please discontinue use of the Site.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">1. Information We Collect</h2>
                <p><strong>a. Information You Provide Voluntarily:</strong> When you contact us through our Contact page, we may collect your name, email address, and any information you include in your message.</p>
                <p><strong>b. Automatically Collected Information:</strong> When you visit the Site, we may automatically collect your IP address, browser type, device information, and pages visited. We may use cookies or similar technologies for analytics and performance improvements.</p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">2. How We Use Your Information</h2>
                <p>We may use your information to:</p>
                <div>
                  <ul className="list-disc list-inside">
                    <li>Respond to your inquiries</li>
                    <li>Improve our Site and user experience</li>
                    <li>Analyze Site usage and visitor behavior</li>
                    <li>Maintain Site security</li>
                  </ul>
                </div>
                <p>We do not sell, rent, or trade your personal information.</p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">3. Links to Amazon and Third Parties</h2>
                <p>
                  Our Site includes links to our product listings on Amazon and possibly other external websites. 
                  Once you leave our Site, your information is governed by those third-party privacy policies. 
                  We encourage you to review <strong>Amazon’s Privacy Policy</strong> for details. We do not receive or store any payment or order information — all transactions are processed securely by Amazon.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">4. Cookies and Analytics</h2>
                <p>
                  We may use cookies, pixels, or analytics tools (such as Google Analytics) to understand how visitors interact with our Site and improve user experience. 
                  You can disable cookies in your browser settings, though some parts of the Site may not function properly as a result.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">5. Data Retention</h2>
                <p>
                  We retain personal information only as long as necessary to fulfill the purposes described above or as required by law. 
                  Messages submitted through our Contact page may be stored for recordkeeping or customer service purposes.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">6. Data Security</h2>
                <p>
                  We take reasonable precautions to protect your information from unauthorized access, alteration, disclosure, or destruction. 
                  However, no online system is completely secure, and we cannot guarantee absolute protection of your data.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">7. Children’s Privacy</h2>
                <p>
                  Our Site is not intended for children under 13 years of age. 
                  We do not knowingly collect personal information from children. 
                  If you believe a child has provided us with personal information, please contact us and we will delete it promptly.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">8. Your Rights and Choices</h2>
                <p>
                  Depending on your location, you may have the right to access, correct, or delete your personal information, opt out of cookies or analytics tracking, or withdraw consent for data use. 
                  To exercise these rights, please contact us at <strong>hello@theplayyears.com</strong>.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">9. Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. 
                  Any changes will be posted on this page with an updated “Last Updated” date. 
                  We encourage you to review this Policy periodically.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our practices, please contact us:
                </p>
                <p><strong>Play Years Inc.</strong><br />
                  Email: <a href="mailto:hello@theplayyears.com" className="text-highlight-secondary">hello@theplayyears.com</a><br />
                  Website: <a href="https://theplayyears.com" className="text-highlight-secondary">theplayyears.com</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}
