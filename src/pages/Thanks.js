// src/pages/Thanks.js
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Thanks() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.fromForm) navigate("/", { replace: true });
  }, [state, navigate]);

  return (
    <>
      <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
        <div className="content">
          <div className="flex-container flex-col gap-xl items-center">
            
            <div className="col-lg-8">
              <div className="flex-container flex-col gap-lg">

                <div className="flex-container flex-row gap-md items-center wrap-xs wrap-sm">
                  <div className="flex-container flex-col gap-sm">
                    <div className="flex-container flex-col gap-xxs">
                      <h1 className="heading heading-xl">Thanks for Subscribing!</h1>
                    </div>

                    <p className="body-lg">Thank you for entering the baby library giveaway.</p>
                    <p>We will be announcing the winner, <strong>Monday April 20th</strong>.<br />
                    Follow us for play ideas <a href="https://instagram.com/shopplayyears/" className="text-highlight-secondary" target="_blank" rel="noreferrer">@shopplayyears</a></p>
                  </div>

                  <img
                    src={process.env.PUBLIC_URL + "/images/thanks-racoon.svg"}
                    alt="Thanks"
                    style={{
                      maxWidth: '24rem'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}