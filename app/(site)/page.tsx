"use client";

import Navbar from "@/components/Navbar/Navbar";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero/Hero";
import Service from "@/components/Services/Service";
import Banner from "@/components/Banner/Banner";
import PlayStore from "@/components/PlayStore/PlayStore";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <PlayStore />
      <Testimonials />
      <Footer />
    </div>
  );
}
