import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import symbol from "@/public/symbol.png"
import community from "@/public/community.png"
import chatapp from "@/public/chatapp.png"
import bliss from "@/public/bliss.png"
import ecommerce from "@/public/ecommerce.png"
import blog from "@/public/blog app.png"
import {siAwsorganizations, siBootstrap, siC, siCss, siDocker, siExpress, siFramer, siGithub, siHtml5, siJavascript, siMaterialdesign, siMongodb, siNextdotjs, siNodedotjs, siPostgresql, siPython, siReact, siReactquery, siRedis, siRedux, siSpringboot, siSpringsecurity, siSqlite, siSwr, siTailwindcss, siTypescript} from 'simple-icons';
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

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "Tailwind",
//   "Bootstrap",
//   "JavaScript",
//   "TypeScript",
//   "Python",
//   "Java",
//   "C/C++",
//   "jQuery",
//   "React.js",
//   "Redux",
//   "SWR",
//   "React Query",
//   "Framer Motion",
//   "Material UI",
//   "Next.js",
//   "Node.js",
//   "Express",
//   "MongoDB",
//   "PostgreSQL",
//   "GraphQL",
//   "Prisma",
//   "Redis",
//   "Next Auth",
//   "Firebase",
//   "Appwrite",
//   "Payment gateways",
//   "Git",
//   "AWS",
//   "GCP APIs",
//   "Docker",
//   "AWS SDK",
//   "Serverless Framework",
//   "Arduino Development",
//   "React Native"

// ] as const;
export const mySkills = [
  { skill: "TypeScript", icon: siTypescript.svg},
  { skill: "JavaScript", icon: siJavascript.svg },
  { skill: "Java", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="java">
  <path d="M5.701 18.561s-.918.534.653.714c.575.085 1.239.134 1.913.134 1.084 0 2.138-.125 3.149-.363l-.093.018c.374.228.809.445 1.262.624l.059.02c-4.698 2.014-10.633-.117-6.942-1.148zM5.127 15.933s-1.029.762.542.924c.687.086 1.482.136 2.289.136 1.461 0 2.884-.162 4.252-.468l-.129.024c.275.258.604.463.968.596l.02.006c-5.68 1.661-12.008.131-7.942-1.218zM9.966 11.475c1.158 1.333-.304 2.532-.304 2.532s2.939-1.52 1.59-3.418c-1.261-1.772-2.228-2.653 3.006-5.688 0 0-8.216 2.052-4.292 6.574z"></path>
  <path d="M16.18 20.505s.678.56-.747.992c-2.712.822-11.287 1.07-13.67.033-.856-.373.75-.89 1.254-.998.232-.059.499-.093.774-.093h.057-.003c-.952-.671-6.155 1.318-2.64 1.886 9.579 1.554 17.462-.7 14.978-1.82zM6.142 13.21s-4.362 1.036-1.545 1.412c.759.063 1.644.098 2.536.098 1.139 0 2.264-.058 3.372-.171l-.139.012c1.805-.152 3.618-.48 3.618-.48-.425.186-.785.382-1.126.605l.029-.018c-4.43 1.165-12.986.623-10.523-.569 1.086-.563 2.372-.893 3.734-.893h.046-.002zM13.966 17.585c4.502-2.34 2.421-4.588.967-4.286-.199.037-.372.085-.539.146l.023-.007c.095-.134.226-.237.379-.295l.006-.002c2.874-1.01 5.086 2.981-.928 4.56.037-.033.067-.072.089-.115l.001-.002zM11.252 0s2.494 2.494-2.366 6.33c-3.896 3.077-.889 4.831 0 6.836-2.274-2.052-3.943-3.858-2.824-5.54 1.644-2.468 6.197-3.664 5.19-7.627z"></path>
  <path d="m6.585 23.925c4.32.277 10.96-.154 11.12-2.198 0 0-.302.775-3.572 1.391-1.806.326-3.885.512-6.008.512-1.739 0-3.448-.125-5.121-.366l.191.023s.553.458 3.393.64z"></path>
</svg>
` },
  { skill: "Python", icon: siPython.svg },
  { skill: "C/C++", icon: siC.svg },
  { skill: "HTML", icon: siHtml5.svg },
  { skill: "CSS", icon: siCss.svg },
  { skill: "Tailwind CSS", icon: siTailwindcss.svg },
  { skill: "Bootstrap", icon: siBootstrap.svg },
  { skill: "Material UI", icon: siMaterialdesign.svg },
  { skill: "jQuery", icon: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>jQuery</title><path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269.037.079.078.154.118.229.023.052.049.1.077.15.013.027.031.056.047.082.026.052.054.102.081.152l.157.266c.03.049.057.097.09.146.056.094.12.187.178.281.026.04.05.078.079.117a6.368 6.368 0 00.31.445c.078.107.156.211.24.315.027.038.058.076.086.115l.22.269c.028.03.055.067.084.099.098.118.202.233.306.35l.005.006a3.134 3.134 0 00.425.44c.08.083.16.165.245.245l.101.097c.111.105.223.209.34.309.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.174.133.26.2l.137.105c.093.07.192.139.287.207.035.025.07.05.106.073l.03.023.28.185.12.08c.148.094.294.184.44.272.041.02.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.234.125a.324.324 0 01.056.023c.033.015.064.031.096.047.12.06.245.118.375.175.024.01.05.02.076.034.144.063.289.123.438.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.154.052.305.102.46.15.036.01.073.023.111.033.16.048.314.105.474.137 10.273 1.872 13.258-6.177 13.258-6.177-2.508 3.266-6.958 4.127-11.174 3.169-.156-.036-.312-.086-.47-.132a13.539 13.539 0 01-.567-.182l-.062-.024c-.136-.046-.267-.097-.4-.148a1.615 1.615 0 00-.11-.04c-.148-.06-.29-.121-.433-.184-.031-.01-.057-.024-.088-.036a23.44 23.44 0 01-.362-.17 1.485 1.485 0 01-.106-.052c-.094-.044-.188-.095-.28-.143a3.947 3.947 0 01-.187-.096c-.114-.06-.227-.125-.34-.187-.034-.024-.073-.044-.112-.066a15.922 15.922 0 01-.439-.27 2.107 2.107 0 01-.118-.078 6.01 6.01 0 01-.312-.207c-.035-.023-.067-.048-.103-.073a9.553 9.553 0 01-.295-.212c-.042-.034-.087-.066-.132-.1-.088-.07-.177-.135-.265-.208l-.118-.095a10.593 10.593 0 01-.335-.28.258.258 0 00-.037-.031l-.347-.316-.1-.094c-.082-.084-.166-.164-.25-.246l-.098-.1a9.081 9.081 0 01-.309-.323l-.015-.016c-.106-.116-.21-.235-.313-.355-.027-.03-.053-.064-.08-.097l-.227-.277a21.275 21.275 0 01-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9.111 9.111 0 00.678 1.133c.23.33.484.721.793.988.107.122.223.24.344.36l.09.09c.114.11.232.217.35.325l.016.013a9.867 9.867 0 00.414.342c.034.023.063.05.096.073.14.108.282.212.428.316l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.318.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.1.054.066.033.132.068.197.102l.032.014c.135.067.273.129.408.19.034.014.063.025.092.039.111.048.224.094.336.137.05.017.097.037.144.052.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8.04 8.04 0 01-.449-.13c-.048-.014-.09-.029-.136-.043-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.192l-.206-.107-.119-.06a5.673 5.673 0 01-.265-.15.62.62 0 01-.062-.035c-.106-.066-.217-.13-.318-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313-.032-.029-.063-.053-.094-.079-1.499-1.178-2.681-2.79-3.242-4.613-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46.665 1.563 2.024 2.79 3.608 3.37.065.025.128.046.196.07l.088.027c.092.03.185.063.28.084 4.381.845 5.567-2.25 5.886-2.704-1.043 1.498-2.792 1.857-4.938 1.335a4.85 4.85 0 01-.516-.16 6.352 6.352 0 01-.618-.254 6.53 6.53 0 01-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5"/></svg>` },
  { skill: "React.js", icon: siReact.svg },
  { skill: "Next.js", icon: siNextdotjs.svg },
  { skill: "Redux Toolkit", icon: siRedux.svg },
  { skill: "React Query", icon: siReactquery.svg },
  { skill: "SWR", icon: siSwr.svg },
  { skill: "Framer Motion", icon: siFramer.svg },
  { skill: "TanStack", icon: siReactquery.svg },
  { skill: "React Native", icon: siReact.svg },
  { skill: "Node.js", icon: siNodedotjs.svg },
  { skill: "Express", icon: siExpress.svg },
  { skill: "Spring Boot", icon: siSpringboot.svg },
  { skill: "Spring Security", icon: siSpringsecurity.svg },
  { skill: "MongoDB", icon: siMongodb.svg },
  { skill: "PostgreSQL", icon: siPostgresql.svg },
  { skill: "Sql", icon: siSqlite.svg },
  { skill: "Redis", icon: siRedis.svg },
  { skill: "AWS", icon: siAwsorganizations.svg },
  { skill: "Docker", icon: siDocker.svg },
  { skill: "GitHub", icon: siGithub.svg }
] as const
