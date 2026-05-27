export const metadata = {
  title: 'Contact',
  description: 'Have a question? Get in touch with the Play Years team.',
  openGraph: {
    title: 'Contact | Play Years',
    images: ['/images/og-image.png'],
  },
}

export default function ContactPage() {
  return (
    <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
      <div className="content">
        <div className="flex-container flex-col gap-xl items-center">
          <div className="col-lg-8">
            <div className="flex-container flex-col gap-sm text-center">
              <div className="flex-container flex-col gap-xxs">
                <h1 className="body-lg weight-500 text-highlight-secondary">Contact Us</h1>
                <span className="heading heading-xl">Have a Question?</span>
              </div>
              <p className="body-lg">
                We're here to help! Whether you have a question about our product, need support with
                your order, or just want to share feedback — we'd love to hear from you.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <a href="mailto:hello@theplayyears.com" className="heading heading-md text-highlight-secondary">
              hello@theplayyears.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}