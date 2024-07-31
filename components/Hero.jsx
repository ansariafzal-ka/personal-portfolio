"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import profileImage from "../public/personal-img-edited.jpg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const scrollToProjects = () => {
    const projectSection = document.getElementById("projects");
    projectSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col items-center gap-y-4 py-4 md:flex-row md:justify-between md:mt-6 md:gap-6">
      <div className="flex flex-col gap-y-4 md:w-[500px]">
        <h1 className="font-bold text-3xl">Hello, I'm Ansari Mohammed Afzal</h1>
        <h1 className="font-medium text-xl text-muted-foreground">
          Web Development
        </h1>
        <p className="font-medium">
          I am a student at Rizvi College of Engineering, studying Artificial
          Intelligence and Data Science, building the future with Technology.
        </p>
        <Button onClick={scrollToProjects} className="mt-2 mb-2 w-[120px]">
          projects
          <FaArrowRight className="ml-2" />
        </Button>
      </div>
      <Image
        className="rounded-sm mb-4 md:w-[450px] md:h-[450px]"
        src={profileImage}
        alt="profile-img"
      />
    </section>
  );
};

export default Hero;
