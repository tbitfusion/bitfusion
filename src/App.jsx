import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OverviewCounter from "./components/Overview/OverviewCounter";
import BannerDetails from "./components/BannerDetails/BannerDetails";
import SimpleBanner from "./components/SimpleBanner/SimpleBanner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ecommerce from "./assets/ecommerceimage.avif";
import employee from "./assets/employee.png";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <OverviewCounter />
      <BannerDetails
        props={{
          title: " ECommerce software",
          intro:
            "eCommerce software is designed to enable businesses to efficiently manage and operate online stores. It offers essential features for product management, secure payment processing, and customer interactions, all while providing tools to optimize sales and enhance user experience. With capabilities ranging from inventory tracking to marketing integration, eCommerce software helps businesses streamline operations and drive growth in the digital marketplace",
          key1: "Product Management: Efficiently manages product listings, inventory, and pricing to ensure smooth operations.",
          key2: "Secure Payment Processing: Facilitates safe and varied payment options to handle transactions seamlessly.",
          key3: "Order and Customer Management: Tracks orders and maintains customer profiles to enhance service and streamline fulfillment.",
        }}
        Img={ecommerce}
      />
      <BannerDetails
        reverse={true}
        props={{
          title: "Employee Management",
          intro:
            "Employee management software is a comprehensive solution for streamlining the administration of human resources. It facilitates tasks such as tracking employee performance, managing payroll, handling attendance, and coordinating benefits. By automating routine HR functions and providing valuable insights, this software helps organizations optimize their workforce management and enhance overall efficiency.",
          key1: "Performance Tracking: Monitors and evaluates employee performance to align with company goals and support development.",
          key2: "Payroll Management: Automates payroll processing and benefits administration for accurate and timely compensation",
          key3: "Attendance Management: Streamlines tracking of attendance, time-off, and scheduling to enhance operational efficiency.",
        }}
        Img={employee}
      />
      <SimpleBanner />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
