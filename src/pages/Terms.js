// src/pages/Terms.js
const Terms = () => {
  return (
    <>
      <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
        <div className="content">
          <div className="flex-container flex-col gap-xl items-start">

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <div className="flex-container flex-col gap-xxs">
                  <h1 className="body-lg weight-500 text-highlight-secondary">Terms & Conditions</h1>
                  <span className="heading heading-xl">Website Terms of Use</span>
                </div>
                <p className="body-lg">
                  Welcome to theplayyears.com (the “Site”), operated by <strong>Play Years Inc.</strong>
                  (“we,” “our,” or “us”). These Terms & Conditions (“Terms”) govern your access to and use
                  of the Site.
                </p>
                <p className="body-lg">
                  By accessing or using this Site, you agree to be bound by these Terms. If you do not
                  agree, please do not use the Site.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">1. Purpose of This Site</h2>
                <p>
                  This Site is intended to provide information about Play Years Inc., our products, and
                  our upcoming Kickstarter campaign. The Site may allow you to sign up for email updates,
                  announcements, or campaign notifications.
                </p>
                <p>
                  Play Years Inc. does not sell products or process payments through this Site. Any pledges,
                  purchases, or transactions related to our campaign are handled exclusively through
                  Kickstarter or other third-party platforms and are governed by their respective terms
                  and policies.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">2. Use of the Site</h2>
                <p>
                  You agree to use the Site only for lawful purposes and in accordance with these Terms.
                  You may not use the Site in any way that could damage, disable, overburden, or impair the
                  Site or interfere with another user’s access or use.
                </p>
                <p>
                  Unauthorized attempts to gain access to any part of the Site, its servers, or connected
                  systems are prohibited.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">3. Intellectual Property</h2>
                <p>
                  All content on this Site — including text, graphics, images, logos, illustrations, and
                  design elements — is owned by or licensed to <strong>Play Years Inc.</strong> and is
                  protected by applicable copyright, trademark, and intellectual property laws.
                </p>
                <p>
                  You may view or download content from the Site for personal, non-commercial use only.
                  You may not reproduce, distribute, modify, or use any content for commercial purposes
                  without our prior written consent.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">4. Links to Kickstarter and Third-Party Sites</h2>
                <p>
                  This Site may contain links to third-party websites, including our Kickstarter campaign
                  page. These links are provided for your convenience only.
                </p>
                <p>
                  Play Years Inc. does not control and is not responsible for the content, policies, or
                  practices of any third-party websites. When you leave our Site, you are subject to the
                  terms and privacy policies of those third parties.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">5. Disclaimer of Warranties</h2>
                <p>
                  The Site and its content are provided on an “as is” and “as available” basis without
                  warranties of any kind, either express or implied.
                </p>
                <p>
                  We do not warrant that the Site will be uninterrupted, error-free, secure, or free from
                  viruses or other harmful components. Your use of the Site is at your own risk.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">6. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, <strong>Play Years Inc.</strong> shall not be
                  liable for any direct, indirect, incidental, consequential, or special damages arising
                  out of or related to your use of the Site or reliance on its content.
                </p>
                <p>
                  This includes, without limitation, damages for loss of data, loss of profits, or loss
                  of goodwill, even if we have been advised of the possibility of such damages.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">7. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless <strong>Play Years Inc.</strong>, its
                  officers, directors, employees, and agents from and against any claims, liabilities,
                  damages, losses, or expenses (including reasonable legal fees) arising from your use of
                  the Site or your violation of these Terms.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">8. Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time. Any changes will be posted on this page with
                  an updated effective date. Your continued use of the Site after changes are posted
                  constitutes acceptance of the revised Terms.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">9. Governing Law</h2>
                <p>
                  These Terms are governed by and construed in accordance with the laws of the jurisdiction
                  in which <strong>Play Years Inc.</strong> is organized, without regard to conflict of law
                  principles.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">10. Contact Us</h2>
                <p>
                  If you have any questions about these Terms & Conditions, please contact us:
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

export default Terms;