import React from "react";
import AboutCard from "./AboutCard";

import { RiGraduationCapFill } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-8 border-t mb-6 border-b">
      <div class="flex flex-col gap-4 lg:flex-row md:justify-between md:items-center">
        <AboutCard
          Icon={RiGraduationCapFill}
          title="Education"
          description="BE Artificial Intelligence and Data Science, Rizvi College of Engineering"
        />
        <AboutCard
          Icon={FaFileCode}
          title="Skills"
          description="MERN, Tailwind CSS, Bootstrap, Python, Java, C programming"
        />
        <AboutCard
          Icon={FaCertificate}
          title="Certifications"
          description="Great Learning - React JS Tutorial, Front End Development - HTML"
        />
        <AboutCard
          Icon={FaUser}
          title="Hobbies"
          description="Coding, Puzzle solving, Basketball"
        />
      </div>
    </section>
  );
};

export default About;
