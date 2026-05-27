export const metadata = {
  title: 'Wholesale',
  description: 'Partner with Play Years. Wholesale options for retailers, educators, and community organizations.',
}

export default function WholesalePage() {
  return (
    <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
      <div className="content">
        <div className="flex-container flex-col gap-xl items-start">
          <div className="narrow">
            <div className="flex-container flex-col gap-sm">
              <div className="flex-container flex-col gap-xxs">
                <h1 className="body-lg weight-500 text-highlight-secondary">Wholesale</h1>
                <span className="heading heading-xl">Partner with Play Years</span>
              </div>
              <p className="body-lg">We love partnering with retailers, educators, and community organizations that share our mission — helping families make play a joyful part of everyday life.</p>
            </div>
          </div>

          <div className="narrow"><div className="flex-container flex-col gap-sm"><h2 className="heading heading-md">1. Why Partner with Play Years</h2><p>By partnering with us, you'll offer a trusted resource for families while joining a growing movement that celebrates connection through play.</p></div></div>
          <div className="narrow">
            <div className="flex-container flex-col gap-sm">
              <h2 className="heading heading-md">2. Our Wholesale Program</h2>
              <p>We offer flexible wholesale options for retailers and organizations of all sizes.</p>
              <ul>
                <li><h3 className="heading heading-sm text-secondary">Low Minimum Orders</h3><p className="padding-bottom-sm">Start small — our flexible minimums make it easy to begin offering Play Years in your shop.</p></li>
                <li><h3 className="heading heading-sm text-secondary">Fast Turnaround</h3><p className="padding-bottom-sm">We ship quickly through our fulfillment partners so you can restock without delay.</p></li>
                <li><h3 className="heading heading-sm text-secondary">Retail Support</h3><p className="padding-bottom-sm">We provide product images and digital assets for your website and social media.</p></li>
              </ul>
            </div>
          </div>
          <div className="narrow"><div className="flex-container flex-col gap-sm"><h2 className="heading heading-md">3. Who We Work With</h2><p>We're proud to collaborate with a variety of partners, including:</p><ul><li>Independent toy, baby, and gift stores</li><li>Bookstores and concept shops</li><li>Early learning centers and preschools</li><li>Parenting educators and non-profit organizations</li></ul></div></div>
          <div className="narrow"><div className="flex-container flex-col gap-sm"><h2 className="heading heading-md">4. How to Apply</h2><p>Interested in becoming a Play Years wholesale partner? Email us at <a href="mailto:hello@theplayyears.com" className="text-highlight-secondary">hello@theplayyears.com</a> with the subject line <strong>"Wholesale Inquiry."</strong></p></div></div>
          <div className="narrow padding-all-md bg-secondary radius-md">
            <div className="flex-container flex-col gap-xs">
              <h2 className="heading heading-md">Let's Grow Together</h2>
              <div className="flex-container flex-col gap-md">
                <p className="body-lg">Join us in helping families everywhere make play a part of every day.</p>
                <a href="mailto:hello@theplayyears.com" className="btn btn-secondary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
