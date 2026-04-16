// src/pages/Shipping.js
const Shipping = () => {
  return (
    <>
      <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
        <div className="content">
          <div className="flex-container flex-col gap-xl items-start">

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <div className="flex-container flex-col gap-xxs">
                  <h1 className="body-lg weight-500 text-highlight-secondary">Shipping Policy</h1>
                  <span className="heading heading-xl">Fast, Reliable Delivery with Amazon Prime</span>
                </div>
                <p className="body-lg">
                  At Play Years, we partner with Amazon to fulfill all product orders. 
                  This means every purchase made through our Amazon listing is handled and shipped directly by Amazon, ensuring the fast and reliable delivery experience you expect — including **Prime shipping** options where available.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">1. Order Processing</h2>
                <p>
                  Since all sales are completed on Amazon, order processing begins as soon as your payment is confirmed through Amazon’s secure checkout. 
                  Orders are typically prepared and shipped by Amazon within 1–2 business days. 
                  You can view your order status, tracking information, and estimated delivery date directly in your Amazon account under <strong>Your Orders</strong>.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">2. Shipping Methods & Delivery Times</h2>
                <p>
                  All products purchased through our Amazon listing are shipped using Amazon’s trusted delivery network. 
                  Depending on your location and eligibility, you may choose from:
                </p>
                <div>
                  <ul className="list-disc list-inside">
                    <li><strong>Amazon Prime Shipping:</strong> Free two-day or next-day delivery for Prime members (where available).</li>
                    <li><strong>Standard Shipping:</strong> Delivery typically within 3–5 business days.</li>
                    <li><strong>Expedited or Priority Shipping:</strong> Options may be available at checkout for faster delivery.</li>
                  </ul>
                </div>
                <p>
                  Delivery times and costs are determined by Amazon and shown during checkout. 
                  Once shipped, you’ll receive tracking details via your Amazon order confirmation email.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">3. Shipping Regions</h2>
                <p>
                  We currently ship to the same regions and countries supported by Amazon’s fulfillment network. 
                  Availability may vary by product or location. 
                  To confirm whether your address is eligible for delivery, please check the shipping details on our product’s Amazon page before placing your order.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">4. Shipping Costs</h2>
                <p>
                  Shipping costs (if applicable) are calculated and displayed at checkout on Amazon. 
                  Prime members enjoy free shipping benefits on eligible products. 
                  Any promotions, free shipping offers, or bundled deals will be handled directly through Amazon’s platform.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">5. Tracking Your Order</h2>
                <p>
                  Once your order ships, you can track its progress directly through your Amazon account or the tracking link included in your order confirmation email. 
                  Amazon provides real-time updates on shipping status and estimated delivery.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">6. Lost, Delayed, or Damaged Packages</h2>
                <p>
                  If your order is delayed, arrives damaged, or is lost in transit, please contact Amazon Customer Support directly through your account. 
                  Amazon handles all shipping claims and can assist with replacements, refunds, or delivery updates according to their policies.
                </p>
              </div>
            </div>

            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">7. Contact Us</h2>
                <p>
                  While Amazon manages all order fulfillment, we’re always here to help answer product-related questions or feedback about your experience. 
                  Feel free to reach out to our team:
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

export default Shipping;