"use client"
import ContactForm from "./_components/ContactFormComponent";
import HeroSection from "./_components/HeroSection";
import ServiceCard from "./_components/ServiceCardComponent";
import HeroBanner from "./_components/HeroBanner";
import { FaChevronDown } from "react-icons/fa6";
import QualityServices from "./_components/QualityServices";
import AboutUs from "./_components/AboutUsComponent";
import WhyChooseUs from "./_components/WhyChooseUs";
import img1 from '../../public/our-work-img-1.png'
import img2 from '../../public/our-work-img-2.png'
import OurWork from "./_components/OurWorkSection";
import ClientReview from "./_components/ClientReviewSection";
import PostCardSection from "./_components/PostCardSectionComponent";
import Newsletter from "./_components/NewsLetterComponent";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroBanner />
      <div className="bg-gradient-to-r from-white to-gray-100 py-12">
      <h2 className="text-3xl px-3 md:px-0 md:text-4xl font-bold tracking-wider text-center uppercase">Request a Free Diagnostic</h2>
      <FaChevronDown className="text-6xl text-gray-800 animate-bounce mt-4 mx-auto" />
      {/* Contact Form */}
      <ContactForm
      formStyles={'border border-gray-300 px-6 py-4 w-[90%] md:w-[60%] rounded-xl shadow-md bg-white mt-6 relative z-30'}
      title={false}
      />
      </div>

      {/* Quality Services */}
      <QualityServices />
      {/* About Us */}
      <AboutUs />

      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Our Work */}
      <OurWork />

      {/* Client Review */}
      <ClientReview />

      {/* Blog posts */}
      <PostCardSection />

      {/* News Letter */}
      <Newsletter />

      
      
      
    </>
  );
}
