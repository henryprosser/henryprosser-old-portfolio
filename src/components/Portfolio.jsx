import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import assembly from "../assets/images/assembly.png";
import chefClaude from "../assets/images/chef_claude.png";
import memeGenerator from "../assets/images/meme_generator.png";
import tenzies from "../assets/images/tenzies.png";
import travelJournal from "../assets/images/travel_journal.png";

export default function Portfolio() {
  const projects = [
    { id: 1, title: "Meme Generator", image: memeGenerator },
    { id: 2, title: "Assembly: Endgame", image: assembly },
    { id: 3, title: "AI Chef Claude", image: chefClaude },
    { id: 4, title: "Tenzies", image: tenzies },
    { id: 5, title: "My Travel Journal", image: travelJournal },
  ];

  return (
    <section className="portfolio section">
      <h2 className="section__title">Portfolio</h2>
      <div className="portfolio-slider">
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={false}
          initialSlide={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          className="swiper-container"
          breakpoints={{
            320: { slidesPerView: 1 },
            850: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="swiper-slide">
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <h3 className="project-title">{project.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination */}
        <div className="custom-pagination"></div>
        {/* Custom Navigation Arrows */}
        <div className="custom-navigation">
          <button
            className="custom-prev"
            onClick={() => document.querySelector(".swiper").swiper.slidePrev()}
          >
            <div className="arrow-circle">
              <svg
                width="31"
                height="31"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l14 0" />
                <path d="M5 12l4 4" />
                <path d="M5 12l4 -4" />
              </svg>
            </div>
          </button>
          <button
            className="custom-next"
            onClick={() => document.querySelector(".swiper").swiper.slideNext()}
          >
            <div className="arrow-circle">
              <svg
                width="31"
                height="31"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
