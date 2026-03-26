// src/pages/Shop.js
import { useRef, useState, useEffect } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import MailingListModal from "../components/MailingListModal";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Accordion from "../components/Accordion";
import { Baby, Heart, Smile, ListCheck } from "lucide-react";

const Shop = () => {
  const sliderRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [sliderSettings, setSliderSettings] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // --- Product gallery images ---
  const productImages = [
    process.env.PUBLIC_URL + "/images/product-shot.jpg",
    process.env.PUBLIC_URL + "/images/product-shot-alt.jpg",
    process.env.PUBLIC_URL + "/images/product-shot-alt-2.jpg",
    process.env.PUBLIC_URL + "/images/product-shot-alt-3.jpg",
  ];

  // --- Reviews data (NEW) ---
  const reviews = [
    {
      image: "/images/dolphin.png",
      text: "I think these [cards] are great. Super simple ideas and explanations. They are clear and easy to read and seemed well informed on developmental stages and what learning is happening. The formatting is relaxing and easy to follow.",
    },
    {
      image: "/images/raccoon.png",
      text: "The activities are simple enough that a tired parent can actually do them. And the explanations of what's happening developmentally are really clear without being too technical.",
    },
    {
      image: "/images/elephant.png",
      text: "What I liked is that it's simple, uses stuff you have at home, and the activities actually make sense for where baby is at developmentally.",
    },
  ];

  // --- State for main image and lightbox ---
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // --- Set up responsive slider (once, on load) ---
  useEffect(() => {
    const width = window.innerWidth;
    let settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 800,
      cssEase: "ease-in-out",
      infinite: true,
    };

    if (width <= 800) {
      settings = { ...settings, slidesToShow: 1, slidesToScroll: 1 };
    }

    setSliderSettings(settings);
  }, []);

  // Don’t render slider until settings are ready (avoids flicker)
  if (!sliderSettings) return null;

  return (
    <>
      {/* --- Product Hero --- */}
      <section className="main padding-top-2xl padding-bottom-2xl bg-primary">
        <div className="content">
          <div className="columns justify-between wrap-md wrap-sm wrap-xs">
            {/* --- Left Column: Product Info --- */}
            <div className="col-lg-4 col-md-12">
              <div className="flex-container flex-col gap-sm">
                <div className="flex-container flex-col gap-xs padding-top-xl shop-title">
                  <h1 className="heading heading-xl">
                    Play Years<sup>&trade;</sup>
                    <br />
                    First-Year Deck
                  </h1>
                </div>

                <p>
                  The Play Years™ First-Year Activity Deck includes 50 research-backed activities for learning through play from birth to 12 months. Created with early childhood educators, each card helps you support your baby’s development and strengthen your connection through play.
                </p>

                <div className="flex-container items-center flex-row gap-sm">
                  <button className="btn" onClick={openModal}>
                    Join Mailing List
                  </button>
                </div>

                <div className="spacer sm"></div>

                <p>
                  <strong>
                    Why Parents Love Play Years<sup>&trade;</sup>
                  </strong>
                </p>

                <Accordion
                  items={[
                    {
                      icon: <Baby size={18} />,
                      label: "Developmental Benefits",
                      content:
                        "Each card is designed with input from early childhood experts to support sensory, cognitive, and motor growth.",
                    },
                    {
                      icon: <Heart size={18} />,
                      label: "Parent-Child Bonding",
                      content:
                        "Every activity promotes meaningful connection and responsiveness between you and your baby.",
                    },
                    {
                      icon: <Smile size={18} />,
                      label: "Age-Appropriate Play",
                      content:
                        "Cards are organized by age range to make it easy to find activities suited for your baby's current stage.",
                    },
                  ]}
                />
              </div>
            </div>

            {/* --- Right Column: Product Gallery --- */}
            <div className="col col-lg-6 col-md-12">
              <div className="flex-container flex-col gap-sm product-gallery">
                {/* Main Image */}
                <img
                  src={mainImage}
                  alt="Play Years - First Year Deck"
                  style={{ width: "100%" }}
                  className="radius-md main-product-image"
                  onClick={() => setLightboxOpen(true)}
                />

                {/* Thumbnails */}
                <div className="grid grid-lg-4 grid-md-4 grid-sm-4 grid-xs-4 gap-sm">
                  {productImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      style={{ width: "100%" }}
                      className={`radius-sm thumb ${
                        mainImage === img ? "active" : ""
                      }`}
                      onMouseEnter={() => {
                        setMainImage(img);
                        setLightboxIndex(i);
                      }}
                    />
                  ))}
                </div>

                {/* Lightbox */}
                <Lightbox
                  open={lightboxOpen}
                  index={lightboxIndex}
                  close={() => setLightboxOpen(false)}
                  slides={productImages.map((src) => ({ src }))}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Product Details --- */}
      <section className="padding-top-2xl padding-bottom-2xl bg-secondary">
        <div className="content">
          <div className="flex-container flex-col gap-xxs">
            <span className="body-lg weight-500 text-highlight-secondary">
              Details
            </span>
            <h2 className="heading heading-lg">About Our Product</h2>
          </div>

          <div className="clear md"></div>

          <div className="columns wrap-sm wrap-xs gap-sm">
            <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
              <div className="flex-container flex-col gap-sm">
                <div className="flex-container flex-col gap-sm radius-md padding-all-lg bg-primary">
                  <div className="flex-container flex-row gap-xs items-center">
                    <ListCheck size={24} />
                    <span className="heading heading-md">Highlights</span>
                  </div>
                  <ul className="bullets text-lg">
                    <li><strong>Age Range:</strong> 0–12 months</li>
                    <li><strong>What’s Inside:</strong> 50 activity cards organized by age and developmental skill</li>
                    <li><strong>Deck Size:</strong> Tarot size (2.75″ × 4.75″)</li>
                    <li><strong>Material:</strong> Premium 350gsm cardstock for durability</li>
                    <li><strong>Finish:</strong> Soft-touch coating</li>
                    <li><strong>Packaging:</strong> Sturdy matte box designed for everyday use & storag</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="flex-container flex-col gap-sm">
                <div className="flex-container flex-col gap-sm radius-md padding-all-lg bg-primary">
                  <span className="heading heading-md">How it works</span>
                  <p>
                    Choose a card each day to explore a new play activity, using
                    common household items and simple routines.
                  </p>
                </div>

                <div className="flex-container flex-col gap-sm radius-md padding-all-lg bg-primary">
                  <div className="flex-container flex-row gap-xs items-center">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/ico-maple-leaf.svg"
                      }
                      alt=""
                      style={{ width: 24 }}
                    />
                    <span className="heading heading-md">Designed in Canada</span>
                  </div>
                  <p>Designed with love in Canada, for families everywhere.</p>
                </div>

                <div className="flex-container flex-row justify-end">
                  <img
                    src={process.env.PUBLIC_URL + "/images/bento-dog.svg"}
                    alt=""
                    className="details-dog"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Reviews --- */}
      <section className="padding-top-2xl padding-bottom-2xl bg-primary">
        <div className="content">
          <div className="flex-container flex-row justify-between wrap-xs items-end">
            <div className="flex-container flex-col col-xs-12 gap-xxs">
              <h2 className="heading heading-lg">What people are saying</h2>
            </div>
          </div>

          {mounted && (
            <Slider ref={sliderRef} {...sliderSettings} className="shop-reviews">
              {reviews.map((review, i) => (
                <div className="slide" key={i}>
                  <div className="testimonial">
                    <div className="flex-container items-start wrap-sm wrap-xs flex-row gap-sm">
                      <div className="flex-container items-center flex-row gap-xs">
                        <img
                          src={process.env.PUBLIC_URL + review.image}
                          alt=""
                          style={{ maxWidth: "6.4rem" }}
                        />
                      </div>

                      <blockquote className="body-md">
                        {review.text}
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}

          <div className="slick-arrows">
            <button onClick={() => sliderRef.current.slickPrev()}>
              Previous
            </button>
            <button onClick={() => sliderRef.current.slickNext()}>Next</button>
          </div>
        </div>
      </section>

      <MailingListModal open={showModal} onClose={closeModal} />
    </>
  );
};

export default Shop;