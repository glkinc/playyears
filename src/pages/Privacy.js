// src/pages/Privacy.js
const Privacy = () => {
  return (
    <>
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
                  This Privacy Policy explains how Play Years Inc. (“we,” “our,” or “us”) collects, uses, and protects information
                  when you visit our website theplayyears.com (the “Site”), including when you sign up for updates related to our
                  upcoming Kickstarter campaign.
                </p>
                <p className="body-lg">
                  By using our Site, you agree to this Privacy Policy. If you do not agree, please discontinue use of the Site.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">1. Information We Collect</h2>
                <p>
                  <strong>a. Information You Provide Voluntarily:</strong> When you sign up for our mailing list, contact us, or
                  request updates about our Kickstarter campaign, we may collect your name, email address, and any information
                  you choose to provide.
                </p>
                <p>
                  <strong>b. Automatically Collected Information:</strong> When you visit the Site, we may automatically collect
                  limited information such as your IP address, browser type, device information, and pages visited. This data is
                  used in aggregate to understand how visitors use our Site.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">2. How We Use Your Information</h2>
                <p>We may use your information to:</p>
                <ul className="list-disc list-inside">
                  <li>Send updates and announcements about our Kickstarter campaign</li>
                  <li>Respond to inquiries or messages you send us</li>
                  <li>Improve our Site, content, and user experience</li>
                  <li>Understand interest in our products prior to launch</li>
                  <li>Maintain the security and performance of our Site</li>
                </ul>
                <p>
                  We do not sell, rent, or trade your personal information.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">3. Kickstarter and Third-Party Platforms</h2>
                <p>
                  Our Site may link to our Kickstarter campaign page or other third-party platforms. Any information you provide
                  on those platforms is governed by their respective privacy policies.
                </p>
                <p>
                  Play Years Inc. does not process payments or collect financial information through this Site. All pledges and
                  transactions related to our campaign are handled securely by Kickstarter.
                </p>
                <p>
                  We encourage you to review <strong>Kickstarter’s Privacy Policy</strong> to understand how they handle your
                  information.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">4. Cookies and Analytics</h2>
                <p>
                  We may use cookies or analytics tools (such as Google Analytics) to better understand how visitors interact
                  with our Site and to improve functionality and content.
                </p>
                <p>
                  You can control or disable cookies through your browser settings. Please note that disabling cookies may
                  affect how certain parts of the Site function.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">5. Data Retention</h2>
                <p>
                  We retain personal information only for as long as necessary to fulfill the purposes described in this Policy,
                  such as sending campaign updates or responding to inquiries, unless a longer retention period is required by law.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">6. Data Security</h2>
                <p>
                  We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse.
                  However, no method of transmission over the internet or electronic storage is completely secure.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">7. Children’s Privacy</h2>
                <p>
                  Our Site is intended for adults. We do not knowingly collect personal information from children under the age of 13.
                  If you believe that a child has provided us with personal information, please contact us and we will take steps to remove it.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">8. Your Rights and Choices</h2>
                <p>
                  Depending on your location, you may have rights to access, update, or delete your personal information, or to opt
                  out of receiving email communications from us.
                </p>
                <p>
                  To make a request, please contact us at <a href="mailto:hello@theplayyears.com" className="text-highlight-secondary">hello@theplayyears.com</a>.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">9. Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
                  effective date. We encourage you to review this Policy periodically.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our practices, please contact us:
                </p>
                <p>
                  <strong>Play Years Inc.</strong><br />
                  Email: <a href="mailto:hello@theplayyears.com" className="text-highlight-secondary">hello@theplayyears.com</a><br />
                  Website: <a href="https://theplayyears.com" className="text-highlight-secondary">theplayyears.com</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;