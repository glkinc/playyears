// src/pages/Home.js
import { useRef, useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import MailingListModal from "../components/MailingListModal";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const sliderRef = useRef(null);
  const [sliderSettings, setSliderSettings] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const STORAGE_KEY = "mailing_modal_last_seen";
    const ONE_DAY = 24 * 60 * 60 * 1000;

    const lastSeen = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (lastSeen && now - lastSeen < ONE_DAY) return;

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setShowModal(true);
        localStorage.setItem(STORAGE_KEY, Date.now());
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Determine initial slider settings on page load (NOT resize)
  useEffect(() => {
    const width = window.innerWidth;

    let settings = {
      centerMode: true,
      centerPadding: "24%",
      slidesToShow: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 800,
      cssEase: "ease-in-out",
      infinite: true,
    };

    // Apply breakpoint logic on load
    if (width <= 768) {
      settings = { ...settings, centerPadding: "16px" };
    } else if (width <= 1024) {
      settings = { ...settings, centerPadding: "24px" };
    }

    setSliderSettings(settings);
  }, []);

  if (!sliderSettings) return null;

  const quotes = [
    "I think these [cards] are great. Super simple ideas and explanations. They are clear and easy to read and seemed well informed on developmental stages and what learning is happening. The formatting is relaxing and easy to follow.",
    "The activities are simple enough that a tired parent can actually do them. And the explanations of what's happening developmentally are really clear without being too technical.",
    "What I liked is that it's simple, uses stuff you have at home, and the activities actually make sense for where baby is at developmentally.",
  ];

  return (
    <>
      <section className="hero">
        <div className="content">
          <div className="columns items-center wrap-sm wrap-xs justify-between">
            <div className="col col-lg-5 col-sm-12 col-xs-12">
              <div className="flex-container flex-col gap-sm">
                <div className="flex-container flex-col gap-xxs">
                  <span className="body-lg weight-500 text-highlight-primary">
                    50 Activity Cards
                  </span>
                  <h1 className="heading heading-xl">
                    Play ideas for development &amp; bonding.
                  </h1>
                </div>
                <div className="flex-container flex-col gap-md">
                  <p>
                    Babies learn through play. Each card offers a research-backed activity to support your baby’s growth in the first year.
                  </p>
                  <button className="btn" onClick={openModal}>
                    Join Mailing List
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-lg-7 col-sm-12 col-xs-12">
              <img
                src={process.env.PUBLIC_URL + "/images/hero-mockup.png"}
                alt="Play Years - First-Year Deck"
                className="hero-image"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENTO */}
      <main className="main padding-top-xl padding-bottom-3xl">
        <div className="content">
          <div className="flex-container flex-col gap-sm col-lg-6">
            <div className="flex-container flex-col gap-xxs">
              <span className="body-lg weight-500 text-highlight-secondary">
                One Deck.
              </span>
              <h2 className="heading heading-xl">A Full Year of Milestones.</h2>
            </div>
            <p className="body-lg">
              At Play Years&trade;, we believe play is more than just fun. It's
              how your baby starts to learn, grow, and connect.
            </p>
          </div>

          <div className="clear lg"></div>

          <div className="bento">
            <div className="item-1">
              <div className="flex-container flex-col gap-sm">
                <span className="heading heading-lg">
                  Your baby's first year is full of growth.
                </span>
                <p className="body-lg">
                  Your baby's brain makes over a million new connections every
                  second. The way you play together now shapes what comes next.
                </p>
                <button className="btn btn-secondary" onClick={openModal}>
                  Join Mailing List
                </button>
              </div>
            </div>

            <div className="item-2">
              <div className="flex-container flex-col gap-sm">
                <span className="heading heading-lg">
                  Support for Five Key Development Areas
                </span>
                <p className="body-lg">
                  Each activity supports one or more core areas of your baby's
                  growth.
                </p>
              </div>
              <img
                src={process.env.PUBLIC_URL + "/images/bento-cards.png"}
                alt="Play Year Cards"
              />
            </div>

            <div className="item-3">
              <div className="flex-container flex-row gap-sm">
                <img
                  src={process.env.PUBLIC_URL + "/images/bento-elephant.svg"}
                  alt=""
                />
                <span className="heading heading-md">
                  Help your baby learn through play
                </span>
              </div>
            </div>

            <div className="item-4">
              <div className="flex-container flex-col gap-xxs text-align-center justify-center full-height">
                <span className="heading heading-sm">Tested with</span>
                <span className="heading heading-lg text-highlight-primary">
                  Families
                </span>
              </div>
            </div>

            <div className="item-5">
              <div className="flex-container flex-col gap-xxs text-align-center justify-center full-height">
                <span className="heading heading-sm text-highlight-tertiary">
                  For babies
                </span>
                <span className="heading heading-lg">
                  0–12
                  <br />
                  Months
                </span>
              </div>
            </div>

            <div className="item-6">
              <div className="flex-container flex-col gap-sm text-align-center">
                <img
                  src={process.env.PUBLIC_URL + "/images/bento-50.svg"}
                  alt="50"
                  className="bento-50"
                />
                <span className="body-lg">
                  Play ideas that support development and connection every day!
                </span>
                <img
                  src={process.env.PUBLIC_URL + "/images/bento-dog.svg"}
                  alt=""
                  className="bento-dog"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* REVIEWS */}
      <section className="padding-top-3xl padding-bottom-3xl bg-secondary">
        <div className="content">
          <div className="columns justify-center">
            <div className="col col-lg-6">
              <div className="flex-container flex-col gap-xxs text-align-center">
                <h2 className="heading heading-xl">
                  What our professionals say about Play Years&trade;
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {quotes.map((quote, i) => (
              <div key={i} className="slide">
                <div
                  className={`testimonial ${
                    ["pink", "yellow", "blue"][i % 3]
                  }`}
                >
                  <blockquote className="body-xl">
                    "{quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="slick-arrows">
          <button onClick={() => sliderRef.current.slickPrev()}>Previous</button>
          <button onClick={() => sliderRef.current.slickNext()}>Next</button>
        </div>
      </section>

      <section className="main padding-top-3xl padding-bottom-3xl bg-primary">
        <div className="content">
          <div className="columns wrap-sm wrap-xs justify-between">

            {/* LEFT COLUMN */}
            <div className="col col-lg-4 col-md-6 col-sm-12 col-xs-12 sticky">
              <div className="flex-container flex-col gap-xs">
                <span className="body-lg weight-500 text-highlight-secondary">Key Developmental Skills</span>
                <h2 className="heading heading-xl">Built around what your baby is learning</h2>
                <div className="flex-container flex-col gap-sm">
                  <p className="body-lg">
                    The Play Years&trade; First-Year deck includes 50 research-backed activities that
                    support your baby's development and strengthen your bond, one playful moment at a time.
                  </p>
                  <p className="body-lg">
                    Each card is organized by skill, helping you understand how simple play supports language, motor, cognitive, sensory, and social-emotional development.
                  </p>
                  <div className="clear md"></div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="flex-container flex-col gap-md">

                {/* OCTOPUS */}
                <div data-aos="fade-up" className="flex-container flex-row gap-md items-center padding-top-md padding-bottom-md padding-left-lg padding-right-lg radius-md text-invert bg-galaxy-blue">
                  <img src={process.env.PUBLIC_URL + "/images/octopus.png"} alt="Sensory" style={{ width: "12rem" }} />
                  <div className="flex-container flex-col gap-xs">
                    <h3 className="heading heading-md">Sensory</h3>
                    <p className="body-lg">Helps your baby process and make sense of the world</p>
                  </div>
                </div>

                {/* PARROT */}
                <div data-aos="fade-up" className="flex-container flex-row gap-md items-center padding-top-md padding-bottom-md padding-left-lg padding-right-lg radius-md text-invert bg-moon-dust">
                  <img src={process.env.PUBLIC_URL + "/images/parrot.png"} alt="Speech and Language" style={{ width: "12rem" }} />
                  <div className="flex-container flex-col gap-xs">
                    <h3 className="heading heading-md">Speech &amp; Language</h3>
                    <p className="body-lg">Builds early attention, back-and-forth interaction, and expressive skills</p>
                  </div>
                </div>

                {/* ELEPHANT */}
                <div data-aos="fade-up" className="flex-container flex-row gap-md items-center padding-top-md padding-bottom-md padding-left-lg padding-right-lg radius-md text-invert bg-cosmic-pink">
                  <img src={process.env.PUBLIC_URL + "/images/elephant.png"} alt="Physical and Gross Motor" style={{ width: "12rem" }} />
                  <div className="flex-container flex-col gap-xs">
                    <h3 className="heading heading-md">Physical &amp; Gross Motor</h3>
                    <p className="body-lg">Supports big movements like rolling, crawling, and standing</p>
                  </div>
                </div>

                {/* RACCOON */}
                <div data-aos="fade-up" className="flex-container flex-row gap-md items-center padding-top-md padding-bottom-md padding-left-lg padding-right-lg radius-md text-primary bg-solar-yellow">
                  <img src={process.env.PUBLIC_URL + "/images/raccoon.png"} alt="Fine Motor" style={{ width: "12rem" }} />
                  <div className="flex-container flex-col gap-xs">
                    <h3 className="heading heading-md">Fine Motor</h3>
                    <p className="body-lg">Supports small movements like grasping, reaching, and exploring.</p>
                  </div>
                </div>

                {/* DOG */}
                <div data-aos="fade-up" className="flex-container flex-row gap-md items-center padding-top-md padding-bottom-md padding-left-lg padding-right-lg radius-md bg-grass-green text-invert">
                  <img src={process.env.PUBLIC_URL + "/images/dog.png"} alt="Social-Emotional" style={{ width: "12rem" }} />
                  <div className="flex-container flex-col gap-xs">
                    <h3 className="heading heading-md">Social-Emotional</h3>
                    <p className="body-lg">Fosters connection, trust, and self-awareness through shared play</p>
                  </div>
                </div>

                {/* DOLPHIN */}
                <div data-aos="fade-up" className="flex-container flex-row gap-md items-center padding-top-md padding-bottom-md padding-left-lg padding-right-lg radius-md text-invert bg-true-blue">
                  <img src={process.env.PUBLIC_URL + "/images/dolphin.png"} alt="Cognitive" style={{ width: "12rem" }} />
                  <div className="flex-container flex-col gap-xs">
                    <h3 className="heading heading-md">Cognitive</h3>
                    <p className="body-lg">Encourages problem-solving, focus, and early memory</p>
                  </div>
                </div>

              </div> {/* closes flex-container flex-col gap-md */}
            </div> {/* closes col col-lg-6 */}

          </div> {/* closes columns justify-between */}
        </div> {/* closes content */}
      </section>

      { /* SIGN OFF */ } 
      <section className="main padding-top-3xl padding-bottom-3xl bg-tertiary"> 
        <div className="content"> 
          <div className="columns gap-none wrap-sm wrap-xs radius-md"> 
            <div className="col col-lg-6"> 
              <div className="flex-container flex-row items-center justify-center padding-all-md full-height bg-solar-yellow"> 
                <img src={process.env.PUBLIC_URL + "/images/card-anatomy.png"} alt="Tagged by development skill, Compact Storage Box, Easy-to-Follow Instructions, Why it matters - understanding what baby is learning" className="card-anatomy" data-aos="zoom-in" /> 
              </div> 
            </div> 
            <div className="col col-lg-6"> 
              <div className="flex-container flex-col gap-md padding-all-xl full-height bg-primary"> 
                <div className="flex-container flex-col gap-xxs"> 
                  <span className="body-lg weight-500 text-highlight-secondary">Backed by Research and Expertise</span> 
                  <h2 className="heading heading-xl">Designed with Early Childhood Educators</h2> 
                  </div> 
                  <p>Each activity helps your baby grow, explore, and thrive. Play becomes a way to bond, support their development, and bring more calm and connection to your day.</p> 
                  <ul className="checks"> 
                    <li>Organized by age and development skill</li> 
                    <li>Simple ideas using everyday items from around your home</li> 
                    <li>Created by parents who believe in the power of play</li> 
                  </ul> 
                  <button className="btn" onClick={openModal}>
                    Join Mailing List
                  </button>
                </div> 
            </div> 
          </div> 
        </div> 
      </section>

      <MailingListModal open={showModal} onClose={closeModal} />
    </>
  );
};

export default Home;