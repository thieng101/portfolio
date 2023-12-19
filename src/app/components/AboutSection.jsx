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
        <li>HTML</li>
        <li>CSS</li>
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
        <li>Flutter</li>
        <li>.NET</li>
        <li>Flutter</li>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        <section className="w-80 lg:w-full box-border h-[500px] shadow-[0_0.5rem_1rem_rgba(0,0,0,.4)]">
          <div className="p-5 rounded-tl-lg rounded-tr-lg text-base bg-gray-500">
            <span className="pr-4">🔴</span>
            <span className="pr-4">🟡</span>
            <span>🟢</span>
          </div>
          <div className="rounded-bl-lg rounded-br-lg text-lg font-mono bg-gray-800 pl-4 pr-4">
            <p className="pt-4 pb-4">
              <span className="text-green-400">hongthynguyen $ </span>
              cd information
            </p>

            <p className="pt-4 pb-4">
              <span className="text-green-400">information $ </span>
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
              <span className="text-green-400">fun facts </span>I am a big fan
              of the Marvel Cinematic Universe 😊
            </p>
          </div>
        </section>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
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
          <p className="text-base lg:text-lg">
            In my freetime, I enjoy playing video games, watching movies, and
            playing pickleball.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Programming Languages{" "}
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
