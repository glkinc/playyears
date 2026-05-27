export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using the Play Years website.',
}

export default function TermsPage() {
  return (
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
                  Welcome to theplayyears.com, operated by The Play Years Inc. (“we,” “our,” or “us”). 
                  These Terms & Conditions (“Terms”) govern your use of our website (the “Site”). 
                  By accessing or using this Site, you agree to comply with and be bound by these Terms. 
                  If you do not agree, please do not use the Site.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">1. Purpose of This Site</h2>
                <p>
                  This Site is designed to provide information about our product and brand, and may include links to purchase our products on Amazon or other third-party platforms. 
                  No direct sales or transactions occur on this Site. All purchases and order-related matters are governed by the respective third-party platform’s terms and policies.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">2. Use of the Site</h2>
                <p>
                  You agree to use the Site only for lawful purposes and in accordance with these Terms. 
                  You may not use the Site in a way that could damage, disable, overburden, or impair it, or interfere with others’ use of the Site. 
                  Unauthorized attempts to gain access to any portion of the Site, or to any systems or networks connected to the Site, are prohibited.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">3. Intellectual Property</h2>
                <p>
                  All content on this Site — including text, graphics, images, logos, and design elements — is owned by or licensed to [Your Company Name] and protected by applicable copyright, trademark, and intellectual property laws. 
                  You may view, download, or print portions of the Site for personal, non-commercial use only. 
                  You may not reproduce, distribute, modify, or use any materials from this Site for commercial purposes without our prior written consent.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">4. Links to Amazon and Third-Party Sites</h2>
                <p>
                  This Site may contain links to third-party websites, including Amazon. 
                  These links are provided for your convenience, but we do not control or endorse any third-party content, products, or services. 
                  When you leave our Site, you are subject to that website’s own terms and policies. 
                  [Your Company Name] is not responsible for the accuracy, legality, or content of any external site.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">5. Disclaimer of Warranties</h2>
                <p>
                  The Site and its content are provided on an “as is” and “as available” basis without any warranties of any kind, either express or implied. 
                  We do not guarantee that the Site will be uninterrupted or error-free, that defects will be corrected, or that the Site or its servers are free from viruses or other harmful components. 
                  Your use of the Site is at your own risk.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">6. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, [Your Company Name] and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of the Site or reliance on its content. 
                  This includes, but is not limited to, damages for loss of data, profits, or goodwill, even if we have been advised of the possibility of such damages.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">7. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless [Your Company Name], its officers, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, or expenses (including legal fees) arising out of your use of the Site or violation of these Terms.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">8. Changes to These Terms</h2>
                <p>
                  We may update or modify these Terms from time to time without prior notice. 
                  Any changes will be posted on this page with an updated “Last Updated” date. 
                  Your continued use of the Site after changes are made constitutes your acceptance of the revised Terms.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">9. Governing Law</h2>
                <p>
                  These Terms are governed by and construed in accordance with the laws of the state or country in which [Your Company Name] operates, without regard to its conflict of law principles. 
                  Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the courts located in that jurisdiction.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">10. Contact Us</h2>
                <p>
                  If you have any questions or concerns about these Terms & Conditions, please contact us:
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
