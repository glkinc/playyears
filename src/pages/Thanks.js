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
                <div className="flex-container flex-col gap-sm">
                  <div className="flex-container flex-col gap-xxs">
                    <h1 className="body-lg weight-500 text-highlight-secondary">You're subscribed!</h1>
                    <span className="heading heading-xl">Thanks for Subscribing</span>
                  </div>
                  <p className="body-lg">You have been entered into our <strong>Play Years Giveaway</strong> for 2 Play Years decks + $150 in curated baby books to support your baby's growth in the first year.</p>            
                  <p>A winner will be notified by email on May 9th, 2026</p>
                </div>

                <img
                  src={process.env.PUBLIC_URL + "/images/giveaway-banner.png"}
                  alt="Giveaway prize"
                />
                <p className="body-sm"><strong>Terms:</strong> One entry per family. No purchase necessary. Prize has no cash value. Giveaway open to residents of Canada. Winner will be notified by email.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}