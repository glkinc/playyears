// src/pages/Approach.js
import React from "react";

const Approach = () => {
  return (
    <>
    <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
      <div className="content">
        <div className="flex-container flex-col gap-xl items-center">
          
          <div className="col-lg-8">
            <div className="flex-container flex-col gap-sm">
              <div className="flex-container flex-col gap-xxs">
                <h1 className="body-lg weight-500 text-highlight-secondary">Our Approach</h1>
                <span className="heading heading-xl">Play Fits Your Day</span>
              </div>
              <p className="body-lg">No more wondering if you're doing enough. Each Play Years™ card gives you a simple, age-based activity backed by early childhood research. Designed to fit into everyday moments—like snack time, floor time, or that short window between naps—these prompts help you make the most of your baby's awake time.</p>
            </div>
          </div>

          <div className="col-lg-10">
            <img
              src={process.env.PUBLIC_URL + "/images/approach-image.jpg"}
              alt="Father playing with son"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-lg-8">
            <div className="flex-container flex-col gap-sm">
              <h2 className="heading heading-md">Designed for Real Life (and Tired Parents)</h2>
              <p>You don't need fancy toys, a perfect routine, or a full night's sleep. Just pick a card, grab a few things from around the house, and play. Every activity is easy to set up and flexible enough for short windows of time.</p>
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className="flex-container flex-col gap-sm">
              <h2 className="heading heading-md">Backed by Experts. Loved by Families.</h2>
              <p>Our activities are created with early childhood experts and tested with real parents to meet your baby where they are. Based on early learning research, each card helps your baby grow key skills like attention, communication, motor coordination, and emotional safety.</p>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="flex-container flex-col gap-sm">
              <h2 className="heading heading-md">Let Your Instincts Lead the Way</h2>
              <p>You know your baby best. We simply gives you tools to tune in and trust yourself. Each card invites you to follow your baby’s cues, adapt the activity to your rhythm, and enjoy meaningful connection through simple play that works for your family.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default Approach;