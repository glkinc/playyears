// src/pages/About.js
import React from "react";

const About = () => {
  return (
    <>
      <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
        <div className="content">
          <div className="flex-container flex-col gap-xl items-center">
            
            <div className="about-banner-container">
              <div className="about-banner">
                <img
                  src={process.env.PUBLIC_URL + "/images/denoja.svg"}
                  alt=""
                  className="denoja"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/lee.svg"}
                  alt=""
                  className="lee"
                />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="flex-container flex-col gap-sm">
                <div className="flex-container flex-col gap-xxs">
                  <h1 className="heading heading-xl">About Us</h1>
                </div>
                <p className="body-lg">We're <strong>Lee and Denoja</strong>, two product designers, parents, and big believers in the magic of play.</p>
                <p className="body-lg">When we became parents, our worlds changed overnight. Suddenly, design thinking met nap schedules, and our creative energy went into figuring out how to keep tiny humans happy, curious, and connected.</p>
                <p className="body-lg">Between us, we've spent years designing products that make life easier and more joyful. But nothing tested our creativity quite like parenting. We wanted simple, thoughtful ways to help our children learn and grow — without needing a Pinterest board or a playroom full of toys.</p>
                <p className="body-lg">That's why we created <strong>Play Years</strong>.</p>
                <p className="body-lg">Each card in our deck is a small invitation to play and connect, built around your baby's natural milestones. The activities are easy to do, backed by early childhood research, and designed to grow with your child — and with you.</p>
                <p className="body-lg">We believe play is how children make sense of the world, and how parents rediscover the joy in it.</p>
                <p className="body-lg">Thanks for being here. We hope Play Years brings more laughter, learning, and calm to your everyday.</p>
                
                <div className="flex-container flex-col gap-xxs">
                  <p className="body-lg text-secondary"><strong>Lee &amp; Denoja</strong></p>
                  <p><em>Founders, Play Years Inc.</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;