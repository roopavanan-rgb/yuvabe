"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <main className="min-h-screen bg-white p-4 md:p-8 flex flex-col items-center">
      {/* Hero Section */}
      <section
        className="
    relative w-full max-w-[1600px] h-[815px] md:h-[615px] mx-auto px-4 md:px-12 py-6 rounded-3xl 
    bg-[url('/images/mob-banner.svg')] 
    sm:bg-[url('/images/hero-banner.svg')] 
    bg-cover bg-[position:center_top] sm:bg-right bg-no-repeat
  "
      >        {/* Top Row: Logo (left) & Buttons (right) */}
        <div className="flex flex-row items-center justify-between w-full">
          <Image
            src="/images/logo.png"
            alt="Yuvabe logo"
            width={230}
            height={230}
            className="w-30 sm:w-32 md:w-[230px] h-auto"
            unoptimized
          />

          <div className="flex items-center gap-8">
            {/* Hide Home + Careers on small screens */}
            <div className="hidden md:flex bg-white rounded-full items-center px-2 py-2 shadow-md">
              <Link
                href="/"
                onClick={() => setActiveTab("home")}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${activeTab === "home"
                  ? "bg-black text-amber-300"
                  : "text-black"
                  }`}
              >
                <span className="inline-block align-middle w-2 h-2 mr-1 rounded-full bg-yellow-400"></span>
                Home
              </Link>

              {/* Hover Dropdown for Careers */}
              <div className="relative">
                <a
                  href="#careers"
                  className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${activeTab === "careers"
                    ? "bg-black text-white"
                    : "text-black"
                    }`}
                  onClick={() => setActiveTab("careers")}
                >
                  Careers
                </a>
              </div>
            </div>

            <Link
              href="https://yuvabeeducation.com/get-involved/donate#donation-form"
              className="bg-yellow-400 hover:bg-yellow-300 transition text-black px-4 py-3 rounded-full font-semibold shadow-sm inline-flex items-center gap-4"
            >
              🖤 Donate
            </Link>
          </div>
        </div>

        {/* Bottom Row: Content (left) & Image (right) */}
        <div className="flex flex-col md:flex-row justify-start w-full h-full md:mt-[-40px] mt-0">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-start mt-10 md:mt-0 md:justify-center h-full 
                  text-center md:text-left 
                  items-center md:items-start 
                  md:pr-12">

            <h1 className="text-3xl  md:text-[45px] font-medium text-black mb-4 font-primary">
              Two Paths, One Purpose
            </h1>

            <p className="text-lg text-black leading-[30px] font-secondary font-regular max-w-[520px]">
              Welcome to Yuvabe! Dive into a world where passion meets purpose,
              offering two unique paths:
              <strong> Yuvabe Education </strong> for hands-on learning and
              <strong> Yuvabe Studios </strong> for future-focused creativity.
              Let&apos;s build, learn, and create together.
            </p>

          </div>
        </div>
      </section>

      {/* Comparison Section */}

      <section className="w-full  justify-center px-4 mt-24 hidden lg:block">
        <div className="relative flex flex-col lg:flex-row items-stretch justify-between w-full max-w-7xl mx-auto gap-40  lg:gap-0">
          {/* Yuvabe Education */}
          <div className="relative w-full md:w-1/2 h-[500px] md:h-[350px] border-[2px] border-[#FFCA2D] hover:bg-[#FFCA2D]  lg:rounded-l-[70px]  p-8 md:pr-48 bg-white z-10">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/ye-logo.png"
                width={50}
                height={50}
                alt="Edu Icon"
                unoptimized
              />
              <h2 className="text-[24px] lg:text-[28px] font-medium text-gray-800 font-primary">
                Yuvabe Education
              </h2>
            </div>
            <p className="text-gray-700 text-md mb-6 font-secondary">
              At Yuvabe Education, learning is a journey of discovery. Through
              hands-on experiences in our STEAM Lab and Bridge Program, we turn
              curiosity into confidence and knowledge into action. Join us to
              shape the next generation for a world of innovation!
            </p>
            <Link
              href="https://www.yuvabeeducation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#FFE495] border border-[#FFCA2D] text-gray-900 font-medium px-6 py-3 text-sm shadow transition font-primary"
            >
              EXPLORE OUR WEBSITE →
            </Link>
          </div>

          {/* Center Logo — responsive sizing */}
          <div className="flex justify-center absolute lg:left-1/2 top-110 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20">
            <Image
              src="/images/yb.png"
              alt="stuidos Logo"
              width={500}
              height={500}
              className="w-[600px] h-[250px] lg:w-[450px] lg:h-[350px]"
              unoptimized
            />
          </div>

          {/* Yuvabe Studios */}
          <div className="group relative w-full md:w-1/2 h-[500px] md:h-[350px] border-[2px] border-[#5829C7] lg:rounded-r-[70px] p-8 md:pl-48 bg-white z-10 hover:bg-[#5829C7] transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/yblogo.png"
                width={50}
                height={50}
                alt="Studios Icon"
                unoptimized
              />
              <h2 className="text-[24px]  lg:text-[28px] font-medium font-primary text-gray-800 transition-colors duration-300 group-hover:text-white">
                Yuvabe Studios
              </h2>
            </div>
            <p className="text-gray-700 mb-6 text-md transition-colors duration-300 group-hover:text-white font-secondary">
              Yuvabe Studios blends creativity with purpose. <br />
              Based in Auroville, our team of pros across AI, design, and
              digital marketing deliver fresh, impactful solutions that push
              boundaries. Let’s break barriers and create meaningful change
              together!
            </p>
            <Link
              href="https://www.yuvabestudios.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#471ea8] text-white font-medium font-primary px-6 py-3 text-sm shadow transition"
            >
              EXPLORE OUR WEBSITE →
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile View  */}
      <section className="w-full  justify-center px-4 mt-24 block md:hidden overflow-hidden">
        <div className="relative flex flex-col md:flex-row pt-6 items-stretch justify-between w-full max-w-7xl mx-auto  lg:gap-0">
          {/* Yuvabe Education */}
          <div className="relative w-full md:w-1/2 h-[500px] md:h-[350px] border-[2px] border-[#FFCA2D] hover:bg-[#FFCA2D]  rounded-t-[70px]  p-8 md:pr-48 bg-white z-10 mb-10 flex flex-col justify-start items-center text-center">
            <div className="flex items-center gap-3 mb-0">
              <Image
                src="/images/ye-logo.png"
                width={50}
                height={50}
                alt="Edu Icon"
                unoptimized
              />
              <h2 className="text-[20px] lg:text-[28px] font-medium text-gray-800 font-primary">
                Yuvabe Education
              </h2>
            </div>
            <p className="text-gray-700 text-md mb-2 font-secondary text-center">
              At Yuvabe Education, learning is a journey of discovery. Through
              hands-on experiences in our STEAM Lab and Bridge Program, we turn
              curiosity into confidence and knowledge into action. Join us to
              shape the next generation for a world of innovation!
            </p>
            <Link
              href="https://www.yuvabeeducation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#FFE495] border  border-[#FFCA2D] text-gray-900 font-medium px-4 py-3 text-sm shadow transition font-primary"
            >
              EXPLORE OUR WEBSITE →
            </Link>
          </div>

          {/* Center Logo — responsive sizing */}
          <div className="flex justify-center absolute lg:left-1/2 top-88 -right-20 -left-22 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20">
            <Image
              src="/images/mob-yb.png"
              alt="Center Logo"
              width={700}
              height={700}
              className="w-[382px] h-[390px]"
              unoptimized
            />
          </div>

          {/* Yuvabe Studios */}
          <div className="group relative w-full md:w-1/2 h-[500px] md:h-[350px] border-[2px] border-[#5829C7] rounded-b-[70px] p-8 md:pl-48 bg-white z-10 hover:bg-[#5829C7] transition-colors duration-300 flex flex-col justify-center items-center text-center">
            <div className="flex items-center gap-3 mb-4 mt-28">
              <Image
                src="/images/yblogo.png"
                width={50}
                height={50}
                alt="Studios Icon"
                unoptimized
              />
              <h2 className="text-[20px]  lg:text-[28px] font-medium font-primary text-gray-800 transition-colors duration-300 group-hover:text-white">
                Yuvabe Studios
              </h2>
            </div>
            <p className="text-gray-700 mb-4 text-center text-md transition-colors duration-300 group-hover:text-white font-secondary">
              Yuvabe Studios blends creativity with purpose. Based in Auroville,
              our team of pros across AI, design, and digital marketing deliver
              fresh, impactful solutions that push boundaries. Let’s break
              barriers and create meaningful change together!
            </p>
            <Link
              href="https://www.yuvabestudios.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#471ea8] text-white font-medium font-primary px-4 py-3 text-sm shadow transition"
            >
              EXPLORE OUR WEBSITE →
            </Link>
          </div>
        </div>
      </section>

      {/* Tab view  */}
      <section className="w-full justify-center px-4 mt-24 hidden md:block lg:hidden">
        <div className="relative flex flex-row items-stretch justify-between w-full max-w-7xl mx-auto">
          {/* Yuvabe Education */}
          <div className="w-1/2 h-[350px] border-[2px] border-[#FFCA2D] hover:bg-[#FFCA2D] rounded-l-[40px] p-8 bg-white z-10 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/ye-logo.png"
                width={50}
                height={50}
                alt="Edu Icon"
                unoptimized
              />
              <h2 className="text-[24px] font-medium text-gray-800 font-primary">
                Yuvabe Education
              </h2>
            </div>
            <p className="text-gray-700 text-sm mb-6 font-secondary">
              At Yuvabe Education, learning is a journey of discovery. Through
              hands-on experiences in our STEAM Lab and Bridge Program, we turn
              curiosity into confidence and knowledge into action. Join us to
              shape the next generation for a world of innovation!
            </p>
            <Link
              href="https://www.yuvabeeducation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#FFE495] border border-[#FFCA2D] text-gray-900 font-medium px-6 py-3 text-sm shadow transition font-primary"
            >
              EXPLORE OUR WEBSITE →
            </Link>
          </div>

          {/* Center Logo (Tablet View Inline) */}
          {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none z-20">
      <Image
        src="/images/yb.png"
        alt="Center Logo"
        width={320}
        height={320}
        className="w-[240px] h-[240px]"
        unoptimized
      />
    </div> */}

          {/* Yuvabe Studios */}
          <div className="group w-1/2 h-[350px] border-[2px] border-[#5829C7] rounded-r-[40px] p-8 bg-white z-10 hover:bg-[#5829C7] transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/yblogo.png"
                width={50}
                height={50}
                alt="Studios Icon"
                unoptimized
              />
              <h2 className="text-[24px] font-medium font-primary text-gray-800 transition-colors duration-300 group-hover:text-white">
                Yuvabe Studios
              </h2>
            </div>
            <p className="text-gray-700 text-sm mb-12 transition-colors duration-300 group-hover:text-white font-secondary">
              Yuvabe Studios blends creativity with purpose. Based in Auroville,
              our team of pros across AI, design, and digital marketing deliver
              fresh, impactful solutions that push boundaries. Let’s break
              barriers and create meaningful change together!
            </p>
            <Link
              href="https://www.yuvabestudios.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#471ea8] text-white font-medium font-primary px-6 py-3 text-sm shadow transition"
            >
              EXPLORE OUR WEBSITE →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about-yuvabe"
        className="w-full px-4 py-20 flex items-center justify-center bg-white"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-800 mb-6 font-primary text-center md:text-start">
              About Yuvabe
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-secondary text-center md:text-start">
              Yuvabe is all about empowering young minds and unleashing
              potential. Rooted in our ethos of
              <span className="font-medium"> “Work. Serve. Evolve.”</span>, we
              blend skills, service, and growth to help you leave your mark.{" "}
              <br />
              We’re a community that champions bold ideas, personal growth, and
              real impact, shaping a future we’re proud of.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/bulb.png"
              alt="Bulb with plant inside"
              width={400}
              height={400}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Cards section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Work Card */}
            <div className="bg-[#FFE18C] rounded-lg p-8 text-center shadow-md">
              <Image
                src="/images/work.png"
                alt="Work Icon"
                width={150}
                height={150}
                className="mx-auto mb-4"
                unoptimized
              />
              <h3 className="text-3xl font-medium font-primary  text-gray-800 mb-2 ">
                Work
              </h3>
              <p className="text-gray-700 text-md leading-relaxed font-secondary">
                Work comprises{" "}
                <span className="font-semibold">higher order skilling</span> and
                project work in predetermined areas such as AI Full stack,
                Digital Marketing, ERP, Sustainability.
              </p>
            </div>

            {/* Serve Card */}
            <div className="bg-[#FFE18C] rounded-lg p-8 text-center shadow-md">
              <Image
                src="/images/serve.png"
                alt="Serve Icon"
                width={150}
                height={150}
                className="mx-auto mb-4"
                unoptimized
              />
              <h3 className="text-3xl font-medium font-primary text-gray-800 mb-2">
                Serve
              </h3>
              <p className="text-gray-700 text-md leading-relaxed font-secondary">
                Serve is the commitment to give back to the{" "}
                <span className="font-semibold">community </span>
                through various social programs and projects supporting
                Auroville units.
              </p>
            </div>

            {/* Evolve Card */}
            <div className="bg-[#FFE18C] rounded-lg p-8 text-center shadow-md">
              <Image
                src="/images/evolve.png"
                alt="Evolve Icon"
                width={150}
                height={150}
                className="mx-auto mb-4"
                unoptimized
              />
              <h3 className="text-3xl font-medium font-primary text-gray-800 mb-2">
                Evolve
              </h3>
              <p className="text-gray-700 text-md leading-relaxed font-secondary">
                Evolve incorporates self-growth through{" "}
                <span className="font-semibold">transformative</span> activities
                that lead to better decision-making, self-compassion, overcoming
                fear, dealing with challenges and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers section */}
      <section
        id="careers"
        className="px-6 md:px-16 py-16 bg-white w-full max-w-[1600px] text-center rounded-4xl "
      >
        <h2 className="text-3xl md:text-5xl text-black font-medium font-primary tracking-wide  mb-2 ">
          Join Our Incredible Team
        </h2>

        <h1 className="text-lg md:text-xl  font-medium font-primary text-gray-900 mb-6">
          Create. Collaborate. Make an Impact.
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 font-secondary">
          Whether you&apos; re passionate about education, design, or
          technology, there&apos;s a place for you at Yuvabe. Explore meaningful
          career paths and contribute to work that truly matters.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://www.yuvabeeducation.com/get-involved/join-us"
            className="bg-[#FFCA2D]  text-sm transition font-primary text-black font-medium uppercase py-3 px-6 rounded-full shadow-md"
          >
            Jobs at Yuvabe Education
          </a>
          <a
            href="https://yuvabestudios.com/career/"
            className="bg-[#5829C7]  transition text-sm text-white font-medium  font-primary uppercase py-3 px-6 rounded-full shadow-md"
          >
            Careers at Yuvabe Studios
          </a>
        </div>
      </section>

      {/*Footer section*/}
      <footer className="bg-[#f8f8f8] rounded-[40px] w-[90%] max-w-[1600px] mx-auto mt-16 px-6 py-12">
        <div className="max-w-7xl mx-auto space-y-30">
          {/* Top Grid: Address & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Address Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <Image
                src="/images/yblogo.png"
                alt="Yuvabe Logo"
                width={50}
                height={50}
                unoptimized
              />
              <div className="text-gray-800 text-base md:text-xl leading-relaxed font-secondary">
                <p>Yuvabe, Saracon Campus,</p>
                <p>Auroville, TamilNadu - 605101</p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex justify-center md:justify-end text-center text-base md:text-xl text-gray-700">
              <p>
                Contact us on:{" "}
                <Link href="mailto:info@yuvabe.com">
                  <span className="font-semibold text-gray-900">
                    info@<span className="font-bold">yuvabe.com</span>
                  </span>
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom: Copyright & Social */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 text-center">
            <p className="text-gray-700 text-base md:text-xl font-secondary">
              Copyright © {new Date().getFullYear()} <strong>yuvabe</strong> |
              All rights reserved
            </p>

            <div className="flex flex-col items-center md:flex-row gap-3">
              <span className="text-base md:text-xl text-gray-700">
                Follow us on:
              </span>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  {
                    href: "https://www.instagram.com/yuvabe.auroville/",
                    src: "/images/insta.png",
                    alt: "Instagram",
                  },
                  {
                    href: "https://www.facebook.com/yuvabe.auroville",
                    src: "/images/fb.png",
                    alt: "Facebook",
                  },
                  {
                    href: "https://x.com/i/flow/login?redirect_after_login=%2Fyuvabeauroville",
                    src: "/images/x.png",
                    alt: "X / Twitter",
                  },
                  {
                    href: "https://www.linkedin.com/company/yuvabe/",
                    src: "/images/in.png",
                    alt: "LinkedIn",
                  },
                  {
                    href: "https://www.youtube.com/@yuvabe.auroville",
                    src: "/images/utube.png",
                    alt: "YouTube",
                  },
                ].map(({ href, src, alt }) => (
                  <Link
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={32}
                      height={32}
                      unoptimized
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
