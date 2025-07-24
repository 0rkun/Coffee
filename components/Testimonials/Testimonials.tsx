import React from "react";
import TestimonialsItem from "./TestimonialsItem";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const TestimonialsData = [
    {
      id: 1,
      img: "/images/person/1.jpg",
      name: "Jinx",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
      aosDelay: "100",
    },
    {
      id: 2,
      img: "/images/person/2.jpg",
      name: "Senna",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
      aosDelay: "200",
    },
    {
      id: 3,
      img: "/images/person/3.jpg",
      name: "Kobe Bryant",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
      aosDelay: "300",
    },
    {
      id: 4,
      img: "/images/person/4.jpg",
      name: "Latte",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
      aosDelay: "400",
    },
    {
      id: 5,
      img: "/images/person/5.jpg",
      name: "Sansa Stark",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
      aosDelay: "500",
    },
    {
      id: 6,
      img: "/images/person/6.jpg",
      name: "Arya Stark",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
      aosDelay: "600",
    },
    {
      id: 7,
      img: "/images/person/7.jpg",
      name: "Jackson Teller ",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
      aosDelay: "700",
    },
  ];

  return (
    <div className="py-10">
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Customers Comment
        </h1>

        <div className="flex justify-center m-4">
          <div className="mb-6 h-1 w-full max-w-2xl bg-gradient-to-r opacity-40 from-orange-950 to-orange-400"></div>
        </div>
      </div>

      <div className="ml-7 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {TestimonialsData.map((testimon, index) => (
            <SwiperSlide key={index}>
              <TestimonialsItem
                id={testimon.id}
                img={testimon.img}
                name={testimon.name}
                aosDelay={testimon.aosDelay}
                description={testimon.description}
              ></TestimonialsItem>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative ">
          <FaChevronLeft className="absolute text-2xl md:text-4xl -left-6 top-1/2 -translate-y-45    z-1 " />
          <FaChevronRight
            className="absolute right-4 text-2xl md:text-4xl top-1/2 -translate-y-45   
          z-1 "
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
