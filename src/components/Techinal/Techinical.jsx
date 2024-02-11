// export default Techinical;
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "./techinical.css"
import "./index.css"
import { useNavigate } from "react-router-dom";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { AiFillTrophy } from "react-icons/ai";

function Techinical({ event, eventType }) {
  const [swiper, setSwiper] = useState(null);
  const navigate = useNavigate();

  const handleSlideChange = (swiper) => {
    setSwiper(swiper);
  };

  const handleTransitionEnd = (swiper) => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (activeSlide) {
      activeSlide.style.opacity = 1; // Ensure the opacity of the active slide is set to 1
      activeSlide.classList.add('active-slide');
    }

    // Set opacity for other slides based on their depth
    swiper.slides.forEach((slide, index) => {
      const depthDifference = Math.abs(index - swiper.realIndex);
      const opacity = 1 - depthDifference*depthDifference * 0.15; 
      slide.style.opacity = Math.max(opacity, 0.05); 
    });
  };

  return (
    <div className="container w-full">
      {/* <h1 className="heading">HEADING</h1> */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        onSlideChange={handleSlideChange}
        onSlideChangeTransitionEnd={handleTransitionEnd}
      >
        {event && event.map((event) => (
        <SwiperSlide key={event.eid}>
        <div
          onClick={() => navigate(`/events/technical/${event.eid}`)}
          className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer"
        >
          <span className="absolute top-2 left-2 rounded-lg p-2 text-lg bg-black text-yellow-50">
            {eventType === "technical" ? "Technical" : "Cultural"}
          </span>
          <div className="h-4/6">
            <img
              src={event.event_images}
              alt={event.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 h-2/6 flex flex-col absolute bottom-0 bg-slate-700 w-full">
            <h2 className="text-4xl font-semibold text-white">
            {event.title.length < 20 ? (
                        event.title
                    ) : (
                        <>
                            {event.title.slice(0, 15)}
                            <span className="font-poppins">{" ..."}</span>
                        </>
              )}
            </h2>
            <div className="flex flex-col p-2  text-gray-400 text-sm">
              <span className="pr-2 flex text-2xl gap-2" >
                <span className='flex gap-2'> 
                <BsFillCalendar2WeekFill />{" "}
                {new Date(event.start_time).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                </span>
              </span>
              <span className="pr-2 flex text-2xl gap-2">
                    <HiOutlineLocationMarker /> {" "}
                    {event.vid}
              </span>
              <span className="pr-2 flex text-2xl gap-2"><AiFillTrophy />{" "} ₹{event.prize_money}</span>
              <span className="pr-2 flex text-2xl gap-2">Participants: {" "} {event.total_participation}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Techinical;