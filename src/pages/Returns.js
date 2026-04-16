// src/pages/Returns.js
const Returns = () => {
  return (
    <>
      <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
        <div className="content">
          <div className="flex-container flex-col gap-xl items-start">

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <div className="flex-container flex-col gap-xxs">
                  <h1 className="body-lg weight-500 text-highlight-secondary">Returns Policy</h1>
                  <span className="heading heading-xl">Hassle-Free Returns Through Amazon</span>
                </div>
                <p className="body-lg">Play Years, we want you to love your purchase. Because all orders are fulfilled and shipped through Amazon, all returns and refunds are handled directly by Amazon according to their return policies. 
                  This ensures a simple, secure, and convenient process for every customer.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">1. How to Start a Return</h2>
                <p>
                  If you purchased our product on Amazon and wish to return or replace it, you can easily start the process through your Amazon account:
                </p>
                <div>
                  <ul className="list-disc list-inside">
                    <li>Go to <strong>Your Orders</strong> on Amazon.</li>
                    <li>Find your order for our product.</li>
                    <li>Select <strong>Return or Replace Items</strong> and follow the on-screen instructions.</li>
                  </ul>
                </div>
                <p>
                  Amazon will provide the available return options, including drop-off locations, pickup options, and printable return labels if applicable.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">2. Return Window</h2>
                <p>
                  Amazon typically allows returns within <strong>30 days</strong> of delivery for most products, subject to their return policy. 
                  Please check your specific Amazon order details for exact eligibility and timing, as certain items or promotions may have different return periods.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">3. Condition of Returned Items</h2>
                <p>
                  To qualify for a full refund, items must be returned in their original condition, including all packaging and materials. 
                  Products that are damaged, used, or missing components may be subject to partial refunds in accordance with Amazon’s evaluation process.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">4. Refunds</h2>
                <p>
                  Once your return is received and processed by Amazon, a refund will be issued to your original payment method. 
                  Refund timing may vary based on your payment provider, but you can track your refund status in the <strong>Your Orders</strong> section of your Amazon account.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">5. Replacements and Exchanges</h2>
                <p>
                  If your product arrives defective, damaged, or incorrect, Amazon offers replacement or exchange options through the same return process. 
                  Simply select <strong>Replace Item</strong> when prompted, and Amazon will provide available replacement options.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">6. Products Purchased Outside Amazon</h2>
                <p>
                  This policy applies only to purchases made through our official Amazon listing. 
                  If you purchased our product from another retailer, please refer to that retailer’s return and refund policy. 
                  We are unable to process returns or refunds for items not purchased through Amazon.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">7. Contact Us</h2>
                <p>
                  While Amazon handles all return logistics and refunds, we’re happy to assist with any product questions or quality concerns. 
                  Please don’t hesitate to reach out — we’re here to help.
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
    </>

  );
};

export default Returns;