import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import symbol from "@/public/symbol.png"
import community from "@/public/community.png"
import chatapp from "@/public/chatapp.png"
import bliss from "@/public/bliss.png"
import ecommerce from "@/public/ecommerce.png"
import blog from "@/public/blog app.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation",
    location: "Kerala",
    description:
      "I graduated from the B.Tech computer science and engineering program.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Ernakulam, Kerala",
    description:
      "I worked as full stack developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Kerala",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, MongoDB, PostgreSQL and AWS SDK. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Symbol Academy Institute Website",
    description:
      "Institute website with dashboard and referral system",
    tags: ["AWS Amplify", "Next.js","AWS Cloudformation", "AWS Services (Lambda,SES,SNS,SQS etc)", "Dynamo Db", "Tailwind","Framer","SWR", "Google APIs"],
    imageUrl: symbol,
  },
  {
    title: "Community Web Application",
    description:
      "Web Application for community members to pay fees owed and admin dashboard for other community related purposes",
    tags: ["React","Material UI","Node js","Redux","Google Cloud APIs"],
    imageUrl: community,
  },
  {
    title: "Chatting Application",
    description:
      "Realtime chat application to connect people online",
    tags: ["React","Socket.IO","Node js","MongoDB"],
    imageUrl: chatapp,
  },
  {
    title: "Bliss Social Media Mobile Application",
    description:
      "Mobile Application to upload, watch and share videos online",
    tags: ["React Native","Appwrite","MongoDB"],
    imageUrl: bliss,
  },
  {
    title: "Blog Web Application",
    description:
      "Blog app to share articles online ",
    tags: ["Next.js"],
    imageUrl:blog,
  },
  {
    title: "Bliss Social Media Mobile Application",
    description:
      "Mobile Application to upload, watch and share videos online",
    tags: ["React Native","Appwrite","MongoDB"],
    imageUrl: bliss,
  },
  {
    title: "E-commerce Web Application",
    description:
      "Online platform to buy products online",
    tags: ["React","Redux","Node js","MongoDb","Stripe","RazorPay","Paypal"],
    imageUrl: ecommerce,
  },
  {
    title: "E-commerce Microservices",
    description:
      "Microservices for E-commerce Application to buy and sell products online.",
    tags: ["AWS SDK","Node js","MongoDB","PostgreSQL","AWS(EC2,S3,Lamda,RDS,SNS,SQS,Coudformation)"],
    imageUrl: ecommerce,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C/C++",
  "jQuery",
  "React.js",
  "Redux",
  "SWR",
  "React Query",
  "Framer Motion",
  "Material UI",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Prisma",
  "Redis",
  "Next Auth",
  "Firebase",
  "Appwrite",
  "Payment gateways",
  "Git",
  "AWS",
  "GCP APIs",
  "Docker",
  "AWS SDK",
  "Serverless Framework",
  "Arduino Development",
  "React Native"

] as const;
