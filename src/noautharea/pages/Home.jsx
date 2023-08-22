import { UserServices } from "../../services/UserService";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Container } from "../styles/components/Container";
import Features from "noautharea/components/Features";
import HowItWorks from "noautharea/components/HowItWorks";
import AchieveYourGoals from "noautharea/components/AchieveYourGoals";
import AboutUs from "noautharea/components/AboutUs";
import VocationalCourses from "noautharea/components/VocationalCourses";
import Footer from "noautharea/components/Footer";


const Home = () => {


  return (
    <div>
      <Navbar />
      <Hero />
      <Container>
        <Features />
        <HowItWorks />
        <AchieveYourGoals />
      </Container>
      <AboutUs />
      <Container>
        <VocationalCourses />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
