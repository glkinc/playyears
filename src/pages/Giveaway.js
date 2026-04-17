// src/pages/Giveaway.js
const Giveaway = () => {
  return (
    <>
    <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
      <div className="content">
        <div className="flex-container flex-col gap-xl items-center">
          
          <div className="col-lg-8">
            <div className="flex-container flex-col gap-lg">
              <div className="flex-container flex-col gap-sm">
                <div className="flex-container flex-col gap-xxs">
                  <h1 className="body-lg weight-500 text-highlight-secondary">The Play Years Giveaway</h1>
                  <span className="heading heading-xl">Babies learn through play</span>
                </div>
                <p className="body-lg">We're giving one lucky family <strong>2 Play Years decks + $150 in curated baby books</strong> to support your baby's growth in the first year.</p>            
                <p className="body-lg">Each Play Years deck features</p>

                <ul>
                  <li>50 research-backed activities designed to support your baby's development.</li>
                  <li>Activities organized by skill area, so you can see how simple play encourages language, motor, cognitive, sensory, and social-emotional growth.</li>
                </ul>
              </div>

              <img
                src={process.env.PUBLIC_URL + "/images/giveaway-banner.png"}
                alt="Giveaway prize"
                style={{
                  width: '100%'
                }}
              />

              <p className="body-sm"><strong>Terms:</strong> One entry per family. No purchase necessary. Prize has no cash value. Giveaway open to residents of Canada. Winner will be notified by email.</p>

              <div className="flex-container flex-row gap-xs">
                <h2 className="heading heading-md text-highlight-secondary">Join our mailing list below for your chance to win!</h2>
                 <img
                  src={process.env.PUBLIC_URL + "/images/down-arrow.svg"}
                  alt=""
                  style={{ width: "24px", marginTop: "16px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Giveaway;