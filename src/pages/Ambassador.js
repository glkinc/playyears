// src/pages/Ambassador.js
import React from "react";

const Ambassador = () => {
  return (
    <>
      <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
        <div className="content">
          <div className="flex-container flex-col gap-xl items-start">

            {/* Intro Section */}
            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <div className="flex-container flex-col gap-xxs">
                  <h1 className="body-lg weight-500 text-highlight-secondary">Ambassador Program</h1>
                  <span className="heading heading-xl">Become a Play Years Ambassador</span>
                </div>
                <p className="body-lg">Do you love inspiring families to connect through meaningful play? We’re looking for passionate parents, caregivers, and early learning advocates to join our Play Years Ambassador community. As an ambassador, you’ll help spread the word about our mission — helping babies learn through play.</p>
              </div>
            </div>

            {/* About the Program */}
            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">1. What It Means to Be a Play Years Ambassador</h2>
                <p>Our ambassadors are trusted voices who believe in the power of play. You’ll share your authentic experiences with Play Years, create meaningful content, and connect with families who value growth, bonding, and fun.</p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="flex-container flex-col gap-md">
              <div className="narrow">
                <h2 className="heading heading-md">Ambassador Perks</h2>
                <p>As part of the Play Years community, you’ll enjoy exclusive rewards and opportunities, including:</p>
              </div>

              <div className="grid grid-lg-4 grid-md-2 grid-sm-2 grid-xs-1 gap-md">

                <div className="flex-container bg-secondary radius-md padding-top-sm padding-left-sm padding-right-sm padding-bottom-md flex-col gap-md">
                  <img src={process.env.PUBLIC_URL + "/images/bento-card-grid.png"} alt="" className="radius-md" />
                  <div className="flex-container flex-col gap-xs">
                    <h3 className="heading heading-sm">Exclusive Discounts</h3>
                    <p className="body-sm">Get early access and special discounts on new product releases</p>
                  </div>
                </div>

                <div className="flex-container bg-secondary radius-md padding-top-sm padding-left-sm padding-right-sm padding-bottom-md flex-col gap-md">
                  <img src={process.env.PUBLIC_URL + "/images/bento-card-grid.png"} alt="" className="radius-md" />
                  <div className="flex-container flex-col gap-xs">
                    <h3 className="heading heading-sm">Affiliate Rewards</h3>
                    <p className="body-sm">Earn commission through your unique Amazon referral links.</p>
                  </div>
                </div>

                <div className="flex-container bg-secondary radius-md padding-top-sm padding-left-sm padding-right-sm padding-bottom-md flex-col gap-md">
                  <img src={process.env.PUBLIC_URL + "/images/bento-card-grid.png"} alt="" className="radius-md" />
                  <div className="flex-container flex-col gap-xs">
                    <h3 className="heading heading-sm">Social Features</h3>
                    <p className="body-sm">Be featured on our website and social channels as part of our community.</p>
                  </div>
                </div>

                <div className="flex-container bg-secondary radius-md padding-top-sm padding-left-sm padding-right-sm padding-bottom-md flex-col gap-md">
                  <img src={process.env.PUBLIC_URL + "/images/bento-card-grid.png"} alt="" className="radius-md" />
                  <div className="flex-container flex-col gap-xs">
                    <h3 className="heading heading-sm">Play Years Swag</h3>
                    <p className="body-sm">Receive fun, exclusive ambassador gifts throughout the year.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Who We're Looking For */}
            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">3. Who Should Apply</h2>
                <p>We’d love to hear from you if you:</p>
                <ul>
                  <li>Are a parent, caregiver, or early childhood educator</li>
                  <li>Enjoy creating authentic, family-centered content</li>
                  <li>Are active on social media or within your local community</li>
                  <li>Believe in connection and learning through play</li>
                </ul>
              </div>
            </div>

            {/* How to Apply */}
            <div className="narrow">
              <div className="flex-container flex-col gap-sm">
                <h2 className="heading heading-md">4. How to Apply</h2>
                <p>Ready to join the Play Years family? Simply reach out with a short introduction, your social media handles (if applicable), and why you’d like to be part of our Ambassador Program.
Email us at <a href="mailto:hello@theplayyears.com" className="text-highlight-secondary">hello@theplayyears.com</a> with the subject line “Play Years Ambassador Application.”
We review all applications carefully and will get in touch if we’re a good match!</p>
              </div>
            </div>

            <div className="narrow padding-all-md bg-secondary radius-md">
              <div className="flex-container flex-col gap-xs">
                <h2 className="heading heading-md">Let's Grow Together</h2>
                <div className="flex-container flex-col gap-md">
                  <p className="body-lg">We can’t wait to grow a community of parents and caregivers who believe that every moment — big or small — can be a chance to play, connect, and grow.</p>
                  <a href="mailto:hello@theplayyears.com" className="btn btn-secondary">Apply Now</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Ambassador;