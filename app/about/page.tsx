"use client";

import Image from "next/image";
import BackgroundBlob from "../components/BackgroundBlob";
import { DownloadIcon, DownloadHandle } from "../../components/DownloadIcon";
import { useRef } from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import sharedLinks from "../shared-links.json";

export default function About() {
  const downloadIconRef = useRef<DownloadHandle>(null);

  return (
    <div className="w-screen flex justify-center items-center bg-zinc-900">
      <BackgroundBlob />
      <main className="mx-auto max-w-3xl px-6 py-24 sm:py-32 z-50">
        <div className="space-y-12">
          <div className="space-y-6">
            <div>
              <Breadcrumb>
                <BreadcrumbList className="text-base">
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>About</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                <span className="">More about me</span>
              </h1>
              <a
                href="/ZENG_AARON_RESUME_5_31_25.pdf"
                download="Aaron_Zeng_Resume.pdf"
                onMouseEnter={() => downloadIconRef.current?.startAnimation()}
                onMouseLeave={() => downloadIconRef.current?.stopAnimation()}
                className="text-lg flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Resume{" "}
                <DownloadIcon
                  ref={downloadIconRef}
                  isAnimated={true}
                  duration={1}
                  size={18}
                />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-8">
              <div className="w-full sm:w-64 sm:h-64 flex-shrink-0">
                <Image
                  src="/aaron_bio.png"
                  alt="Aaron Zeng"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 space-y-6 p-4 rounded-lg block text-foreground rounded-xl backdrop-blur-xl bg-white/5 border border-transparent border-white/10 shadow-lg">
                <h2 className="text-base font-medium text-muted-foreground uppercase">
                  Bio
                </h2>
                <code className="text-sm leading-relaxed block">
                  I'm a developer who's been driven by a passion for problem
                  solving and innovation. Whether I'm building solutions for 5
                  people or 5000, I've always sought opportunities to make a
                  difference through technology and creativity.
                </code>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Accolades
            </h2>
            <div className="space-y-4">
              <code className="text-sm leading-relaxed block">
                In 2019, I was a key contributor to FTC Robotics team #7182,
                which placed first in the Mid-Atlantic region and second at the{" "}
                <Link
                  href={sharedLinks.ftc}
                  className="text-blue-300/80 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  World Championships.
                </Link>
              </code>
              <code className="text-sm leading-relaxed block">
                In 2021, during the height of COVID-19, I conducted research on
                the effects that quarantining would have on people with
                depression. My findings were{" "}
                <Link
                  href={sharedLinks.isteam}
                  className="text-blue-300/80 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  published
                </Link>{" "}
                in a scientific journal.
              </code>
              <code className="text-sm leading-relaxed block">
                In 2023, I built{" "}
                <Link
                  href={sharedLinks.gptgo}
                  className="text-blue-300/80 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GptGO
                </Link>
                , a Chrome Extension that allows users to access ChatGPT without
                ever leaving their tab. It received over 30k downloads within
                its first month of launch.
              </code>
              <code className="text-sm leading-relaxed block">
                In 2024, I designed and developed{" "}
                <Link
                  href={sharedLinks.preptai}
                  className="text-blue-300/80 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prept.Ai
                </Link>
                , a website that leverages AI to help job seekers practice and
                refine their interview skills. The platform received financial
                backing from the University of Maryland's Dingman Center for
                Entrepreneurship.
              </code>
              <code className="text-sm leading-relaxed block">
                Today, I see myself as someone who's always learning. Whether
                it's developing a skill, refining an idea, or tackling a new
                project, every step I take is rooted in my passion for building
                things that matter.
              </code>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Fun Facts
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "Alma Mater", value: "UMD" },
                { label: "NFL Team", value: "Ravens" },
                { label: "Childhood Sport", value: "Swim" },
                { label: "Favorite Language", value: "JS" },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <code>{stat.label}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

{
  /* <div className="flex items-center">
    <div className="w-10 h-10 bg-zinc-800 rounded-full z-1 hover:-translate-y-4 transition-all duration-300 border-2 border-zinc-300 flex items-center justify-center">
      <IoLogoJavascript className="w-6 h-6" />
    </div>
    <div className="w-10 h-10 bg-zinc-800 rounded-full z-2 -ml-2 hover:-translate-y-4 transition-all duration-300 border-2 border-zinc-300 flex items-center justify-center">
      <FaPython className="w-6 h-6" />
    </div>
    <div className="w-10 h-10 bg-zinc-800 rounded-full z-3 -ml-2 hover:-translate-y-4 transition-all duration-300 border-2 border-zinc-300 flex items-center justify-center">
      <FaJava className="w-6 h-6" />
    </div>
    <div className="w-10 h-10 bg-zinc-800 rounded-full z-4 -ml-2 hover:-translate-y-4 transition-all duration-300 border-2 border-zinc-300 flex items-center justify-center overflow-hidden">
      <Image
        src="/golang.svg"
        alt="Golang"
        width={30}
        height={30}
      />
    </div>
  </div> */
}
