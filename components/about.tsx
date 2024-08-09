"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className=" justify-center text-justify">
      <p className="mb-3">
        I am a passionate <span className="font-medium">Full Stack Developer</span> with a degree in{" "}
        <span className="font-medium">Computer Science and Engineering</span>, specializing in both web and mobile application development. With expertise in technologies like{" "}
        <span className="font-medium">MERN (MongoDB, Express.js, React, Node.js)</span> and{" "}
        <span className="font-medium">Next.js</span>, as well as experience in <span className="font-medium">React Native</span>, I build dynamic and responsive applications that meet modern user needs. My skill set also includes integrating complex functionalities such as <span className="font-medium">authentication systems, WebSockets, and payment gateways</span>, and leveraging cloud services with <span className="font-medium">AWS SDK</span> and <span className="font-medium">Google Cloud APIs</span>. I thrive on transforming innovative ideas into practical solutions and am always eager to tackle new challenges in the tech world.
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, you’ll find me indulging in my love for <span className="font-medium">movies</span>, where I enjoy exploring different genres and storytelling techniques. I also cherish spending quality time with <span className="font-medium">friends</span>, whether we’re catching up over coffee or embarking on new adventures together. Additionally, I have a passion for <span className="font-medium">music</span> and often unwind by strumming my guitar around a campfire, creating melodies and enjoying the simple joys of life. These interests not only enrich my personal life but also inspire my creative approach to problem-solving and development.
      </p>
      </div>
    

    </motion.section>
  );
}
