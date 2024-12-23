"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { mySkills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {mySkills.map(({ skill, icon }, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex flex-col items-center space-x-2">
              <div
                className="w-10 h-10  dark:bg-slate-300 dark:rounded-full"
                dangerouslySetInnerHTML={{ __html: icon }} // This will render the raw SVG content
              />
              <span className=" text-sm">{skill}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
