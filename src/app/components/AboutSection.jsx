"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>C</li>
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>C#</li>
        {/* <li>HTML</li>
        <li>CSS</li> */}
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "Frameworks",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>React.js</li>
        <li>.NET</li>
      </ul>
    ),
  },
  {
    title: "Databases",
    id: "Databases",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>NoSQL</li>
        <li>SQL</li>
        <li>Firebase</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "Tools",
    content: (
      <ul className="list-disc pl-2">
        <li>Git</li>
        <li>Postman</li>
        <li>Heroku</li>
        <li>Figma</li>
        <li>Google Cloud</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 place-items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        <section className="w-full lg:max-w-2xl xl:max-w-4xl box-border mx-auto lg:h-[600px] shadow-[0_0.5rem_1rem_rgba(0,0,0,.4)]">
          <div className="p-5 rounded-tl-lg rounded-tr-lg text-base bg-gray-500">
            <span className="pr-4">🔴</span>
            <span className="pr-4">🟡</span>
            <span>🟢</span>
          </div>
          <div className="rounded-bl-lg rounded-br-lg text-lg font-mono bg-gray-800 pl-4 pr-4">
            <p className="pt-4">
              <span className="text-green-400">hongthynguyen $ </span>
              cd info
            </p>

            <p className="pt-4 pb-4">
              <span className="text-green-400">info $ </span>
              ls
            </p>

            <p className="pb-2">
              <Link
                href="https://www.linkedin.com/in/hong-thy-nguyen/"
                className="text-green-400"
              >
                linkedin{" "}
              </Link>
              hong-thy-nguyen
            </p>

            <p className="pb-2">
              <Link
                href="https://github.com/thieng101"
                className="text-green-400"
              >
                github{" "}
              </Link>
              thieng101
            </p>
            <p className="pb-2">
              <Link href="/#contact" className="text-green-400">
                email{" "}
              </Link>
              ho125066@gmail.com
            </p>

            <p className="pb-2">
              <span className="text-green-400">certificates </span>

              <p>1. The GWC Bank of America Work Prep Summer 2023.</p>
              <p>2.AT&T Technology Academy Summer 2023.</p>
            </p>

            <p className="pb-2">
              <span className="text-green-400">fun facts </span>
              <p>
                I am a 🐱 & 🐶 lover. I want to raise a kitty and a puppy at a
                same time!
              </p>
            </p>
          </div>
        </section>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">My Story</h2>
          <p className="text-base lg:text-lg">
            Hello! My name is Hong Thy Nguyen. I am currently an undergraduate
            student at the University of Central Florida. I am majoring in
            Computer Science. My interests are Cybersecurity, Fullstack
            Development, and Artificial Intelligence. I look forward to working
            in software development or cybersecurity field where I can either
            develop innovative software or protect the system from cyber
            attacks.
          </p>
          <br></br>
          <p className="text-base lg:text-lg">Check out my tech stack 👇</p>
          <div className="flex flex-col md:flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Frameworks")}
              active={tab === "Frameworks"}
            >
              {" "}
              Frameworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Databases")}
              active={tab === "Databases"}
            >
              {" "}
              Databases{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Tools")}
              active={tab === "Tools"}
            >
              {" "}
              Tools{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
