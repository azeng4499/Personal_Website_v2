"use client";

import Image from "next/image";
import Link from "next/link";
import { CornerDownRight, Star, BookOpen, Newspaper, Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import Clock from "./components/Clock";
import BackgroundBlob from "./components/BackgroundBlob";
import {
  ChevronRightIcon,
  ChevronRightIconHandle,
} from "../components/ChevronRightIcon";
import {
  ExternalLinkIcon,
  ExternalLinkIconHandle,
} from "../components/ExternalLinkIcon";
import { EyeIcon, EyeIconHandle } from "../components/EyeIcon";
import { GithubIcon } from "../components/GithubIcon";
import { LinkedInIcon } from "../components/LinkedinIcon";
import { InstagramIcon } from "../components/InstagramIcon";
import { useRef } from "react";
import sharedLinks from "./shared-links.json";

export default function Home() {
  const chevronRightIconRef = useRef<ChevronRightIconHandle>(null);

  return (
    <div className="w-screen flex justify-center items-center bg-zinc-900">
      <BackgroundBlob />
      <main className="mx-auto max-w-3xl px-6 py-24 sm:py-32 z-50">
        <div className="space-y-16">
          <div className="flex items-start sm:items-center gap-8">
            <div className="sm:h-30 sm:w-30 sm:min-w-30 sm:min-h-30 h-28 w-28 min-h-28 min-w-28">
              <Image
                src="/bio_img_blue.png"
                alt="Profile"
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <code className="text-sm sm:text-base text-muted-foreground tracking-tighter">
                It's <Clock /> in{" "}
                <span className="hidden sm:inline">Dallas,</span> TX
              </code>
              <h1
                className={`hidden sm:block text-2xl sm:text-4xl font-semibold tracking-tight mt-2`}
              >
                <span className={`font-semibold tracking-wide leading-normal`}>
                  <span className="hidden sm:inline">Hi 👋🏻</span> I'm{" "}
                  <span className="text-nowrap">Aaron Zeng</span>
                </span>
              </h1>
              <h1
                className={`block sm:hidden text-3xl sm:text-4xl font-semibold tracking-tight mt-2`}
              >
                <span
                  className={`font-semibold tracking-wide leading-normal flex flex-col`}
                >
                  <span>Aaron Zeng</span>
                  <span className="text-nowrap font-thin text-xl mt-3">
                    Full Stack SWE
                  </span>
                </span>
              </h1>
              <div className="mt-2">
                <code className="hidden sm:block text-muted-foreground tracking-tighter">
                  I use code to fix problems I think of in the shower
                </code>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              About
            </h2>
            <code className="text-sm leading-relaxed">
              Currently @ Chase, building AI tooling to generate brand-aligned
              web and app UI from the firm's proprietary design system. In my
              free time, I solve silly problems with even sillier solutions.
            </code>
            <div className="w-full flex items-center justify-between mt-6 text-muted-foreground">
              <div className="flex items-center gap-5">
                <Link
                  href={sharedLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon
                    size={20}
                    duration={0.5}
                    className="hover:text-foreground transition-colors"
                  />
                </Link>
                <Link
                  href={sharedLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon
                    size={20}
                    duration={0.5}
                    className="hover:text-foreground transition-colors"
                  />
                </Link>
                <Link
                  href={sharedLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    size={20}
                    duration={0.5}
                    className="hover:text-foreground transition-colors"
                  />
                </Link>
              </div>
              <Link
                href="/about"
                onMouseEnter={() =>
                  chevronRightIconRef.current?.startAnimation()
                }
                onMouseLeave={() =>
                  chevronRightIconRef.current?.stopAnimation()
                }
                className="flex items-center gap-2 hover:text-foreground transition-colors overflow-visible font-medium underline-offset-4 underline"
              >
                More about me{" "}
                <ChevronRightIcon
                  size={20}
                  duration={1}
                  isAnimated={true}
                  ref={chevronRightIconRef}
                />
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Experience
            </h2>
            <div className="relative">
              <div className="absolute left-2 top-0 bottom-0 w-px bg-blue-300/80" />
              <div className="space-y-6 pl-10 ">
                {[
                  {
                    title: "Software Engineer 1",
                    company: "JPMorganChase",
                    period: "Present",
                  },
                  {
                    title: "Machine Learning Intern",
                    company: "JPMorganChase",
                    period: "Summer 2024",
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "JPMorganChase",
                    period: "Summer 2023",
                  },
                  {
                    title: "Software Engineer Intern",
                    company: "U.S. Dept of Agriculture",
                    companyAbbr: "USDA",
                    period: "Summer 2022",
                  },
                ].map((exp, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[36px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-400 border-1 border-zinc-300" />
                    <div className="flex flex-col items-start justify-between gap-2">
                      <div className="text-base font-medium flex items-center justify-between w-full">
                        {exp.companyAbbr ? (
                          <>
                            <div className="hidden sm:block">{exp.company}</div>
                            <div className="block sm:hidden">
                              {exp.companyAbbr}
                            </div>
                          </>
                        ) : (
                          <div>{exp.company}</div>
                        )}

                        <div className="font-normal">{exp.period}</div>
                      </div>
                      <div className="flex flex-col items-start justify-between gap-1">
                        <div className="text-sm text-muted-foreground">
                          <code>{exp.title}</code>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Highlighted Work
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "The Better Threads Project",
                  description:
                    "Who needs ChatGPT when you can just write your own GPT from scratch and train it to classify cyberbullying? Probably not my bully.",
                  highlight: "GPT from scratch",
                  href: "/the-better-threads-project",
                  action: "Try it",
                  icon: "/tbpt.png",
                  date: "2024",
                },
                {
                  title: "GptGO Chrome Extension",
                  description:
                    "Hey this cool new thing called ChatGPT just came out. How can I use it everywhere all the time?",
                  highlight: "50k+ installs",
                  href: sharedLinks.gptgo,
                  action: "Visit",
                  icon: "/gpt-go.png",
                  date: "2023",
                },
              ].map((project, idx) => {
                const externalLinkIconRef =
                  useRef<ExternalLinkIconHandle>(null);

                return (
                  <Link
                    key={idx}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      externalLinkIconRef.current?.startAnimation()
                    }
                    onMouseLeave={() =>
                      externalLinkIconRef.current?.stopAnimation()
                    }
                    className="block space-y-3 transition-all duration-300 hover:text-foreground rounded-xl p-0 sm:p-2 hover:backdrop-blur-xl hover:bg-white/5 border border-transparent hover:border-white/10 hover:shadow-lg"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image
                            src={project.icon}
                            alt=""
                            width={16}
                            height={16}
                            className="h-4 w-4"
                          />
                          <div className="text-base font-medium">
                            {project.title}
                          </div>
                        </div>
                        <div className="text-base text-muted-foreground whitespace-nowrap">
                          <span className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                            {project.action}{" "}
                            <ExternalLinkIcon
                              size={18}
                              duration={1}
                              isAnimated={true}
                              ref={externalLinkIconRef}
                            />
                          </span>
                        </div>
                      </div>
                      <div className="text-sm leading-relaxed text-muted-foreground">
                        <code>{project.description}</code>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center mt-3">
                        <span
                          key={project.highlight}
                          className="text-xs text-muted-foreground"
                        >
                          <code className="bg-zinc-800 p-1 rounded-md text-yellow-400/60 flex items-center gap-2">
                            <Star className="w-3 h-3" />
                            {project.highlight}
                          </code>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Featured In
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "The Effects of Quarantine on Depression",
                  publication: "ISTEAM",
                  type: "Publication",
                  date: "2020",
                  href: sharedLinks.isteam,
                },
                {
                  title:
                    "Mechanical Paradox Cubed wins at MD State FTC Championships",
                  publication: "I95 Business",
                  type: "Article",
                  date: "2019",
                  href: sharedLinks.i95business,
                },
                {
                  title:
                    "Mt. Hebron wins fifth consecutive Howard County Invitational swimming title",
                  publication: "Baltimore Sun",
                  type: "Article",
                  date: "2019",
                  href: sharedLinks.baltimoresun,
                },
              ].map((article, idx) => {
                const eyeIconRef = useRef<EyeIconHandle>(null);
                return (
                  <a
                    key={idx}
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => eyeIconRef.current?.startAnimation()}
                    onMouseLeave={() => eyeIconRef.current?.stopAnimation()}
                    className="block transition-all duration-300 hover:text-foreground rounded-xl p-3 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1 flex-1">
                        <div className="text-base font-medium flex items-start justify-between">
                          {article.title}
                          <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors ml-4">
                            <span className="font-normal">View</span>
                            <EyeIcon
                              size={18}
                              duration={1}
                              isAnimated={true}
                              ref={eyeIconRef}
                            />
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <code className="text-blue-300/80 flex items-center gap-2 w-fit text-sm">
                            {article.type === "Publication" ? (
                              <>
                                <BookOpen className="w-4 h-4" />
                                Publication
                              </>
                            ) : (
                              <>
                                <Newspaper className="w-4 h-4" />
                                Article
                              </>
                            )}
                          </code>
                          <code>| {article.publication}</code>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Other Work
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Colos",
                  description:
                    "Why am I still using a keyfob to enter my gym? and swiping my card to buy a Celcius? Seriously, its 2025.",
                  tags: ["JavaScript", "React"],
                  href: sharedLinks.colos,
                  action: "Visit",
                  icon: "/colos.ico",
                  date: "2023",
                },
                {
                  title: "Harbor Dating",
                  description:
                    "The reason I don't get any matches is because Hinge hates me. There's gotta be a better approach to online dating. Right? ...RIGHT?",
                  tags: ["JavaScript", "React"],
                  href: sharedLinks.harbor,
                  action: "Visit",
                  icon: "/harbor.png",
                  date: "2023",
                },
                {
                  title: "Prept.ai",
                  description:
                    '"So what\'s your greatest weakness?" - ummmmmmmmmmmmmmmmmmmmm.',
                  tags: ["Whisper API", "GPT Fine-tuning"],
                  href: sharedLinks.preptai,
                  action: "Visit",
                  icon: "/prept.ico",
                  date: "2023",
                },
                {
                  title: "Brickify Lab",
                  description:
                    "I wonder if I can make ANY image with those Lego Mosaic sets?",
                  tags: ["Euclidean distance", "Image processing"],
                  href: sharedLinks.brickify,
                  action: "Visit",
                  icon: "/brickify.ico",
                  date: "2022",
                },
              ].map((project, idx) => {
                const externalLinkIconRef =
                  useRef<ExternalLinkIconHandle>(null);

                return (
                  <Link
                    key={idx}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() =>
                      externalLinkIconRef.current?.startAnimation()
                    }
                    onMouseLeave={() =>
                      externalLinkIconRef.current?.stopAnimation()
                    }
                    className="block space-y-3 transition-all duration-300 hover:text-foreground rounded-xl p-0 sm:p-2 hover:backdrop-blur-xl hover:bg-white/5 border border-transparent hover:border-white/10 hover:shadow-lg"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image
                            src={project.icon}
                            alt=""
                            width={16}
                            height={16}
                            className="h-4 w-4"
                          />
                          <div className="text-base font-medium">
                            {project.title}
                          </div>
                        </div>
                        <div className="text-base text-muted-foreground whitespace-nowrap">
                          <span className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                            {project.action}{" "}
                            <ExternalLinkIcon
                              size={18}
                              duration={1}
                              isAnimated={true}
                              ref={externalLinkIconRef}
                            />
                          </span>
                        </div>
                      </div>
                      <div className="text-sm leading-relaxed text-muted-foreground">
                        <code>{project.description}</code>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center mt-3">
                        <CornerDownRight className="w-4 h-4" />
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-muted-foreground"
                          >
                            <code className="bg-zinc-800 p-1 rounded-md">
                              {tag}
                            </code>
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Contact
            </h2>
            <div className="flex gap-8 text-sm">
              <a
                href={sharedLinks.email}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> <code>Email</code>
              </a>
              <a
                href={sharedLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <FaGithub className="w-4 h-4" /> <code>GitHub</code>
              </a>
              <a
                href={sharedLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <FaLinkedin className="w-4 h-4" /> <code>LinkedIn</code>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
