"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, BookOpen, Newspaper, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import TextLoop from "react-text-loop";
import BackgroundBlob from "./components/BackgroundBlob";
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
import { DownloadIcon, DownloadHandle } from "../components/DownloadIcon";

export default function Home() {
  const downloadIconRef = useRef<DownloadHandle>(null);

  return (
    <div className="w-screen flex justify-center items-center bg-zinc-900">
      <BackgroundBlob />
      <main className="mx-auto max-w-3xl px-6 py-24 sm:py-32 z-50">
        <div className="space-y-16">
          <div className="space-y-10">
            <div className="flex items-center gap-8">
              <div className="sm:h-30 sm:w-30 sm:min-w-30 sm:min-h-30 hidden sm:block">
                <Image
                  src="/bio_img_blue.png"
                  alt="Profile"
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h1
                  className={`block text-4xl font-semibold tracking-tight mt-2`}
                >
                  <span
                    className={`font-semibold tracking-wide leading-normal flex items-start gap-4 sm:gap-0`}
                  >
                    Hi, I'm Aaron{" "}
                    <span className="hidden sm:inline">&nbsp;Zeng</span>{" "}
                    <div className="h-12 w-12 inline-block sm:hidden">
                      <Image
                        src="/bio_img_small.png"
                        alt="Profile"
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </span>
                </h1>
                <div className="mt-2">
                  <code className="block text-muted-foreground tracking-normal">
                    & I'm probably{" "}
                    <TextLoop interval={3000}>
                      <span>building</span>
                      <span>learning</span>
                      <span>testing</span>
                      <span>debugging</span>
                      <span>crashing</span>
                    </TextLoop>{" "}
                    something.
                  </code>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-base font-medium text-muted-foreground flex items-start justify-between"></div>
              <code className="text-sm leading-relaxed">
                Currently @{" "}
                <a
                  href="https://www.jpmorganchase.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-foreground transition-colors underline underline-offset-4"
                >
                  JPMorganChase
                </a>
                , building AI tools to generate brand-aligned UI. In the past,
                I’ve built projects like{" "}
                <a
                  href={sharedLinks.preptai}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Prept.ai
                </a>{" "}
                and{" "}
                <a
                  href={sharedLinks.gptgo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-foreground transition-colors underline underline-offset-4"
                >
                  GptGO
                </a>{" "}
                that have been grant-funded and adopted by thousands of users.
                Don't blink! I'm always building something bigger.
              </code>
              <div className="w-full flex items-center justify-start mt-8 text-muted-foreground">
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
                  <Link
                    className="text-sm flex items-center gap-2 mb-1.5"
                    href="/ZENG_AARON_RESUME_5_31_25.pdf"
                    download="Aaron_Zeng_Resume.pdf"
                    onMouseEnter={() =>
                      downloadIconRef.current?.startAnimation()
                    }
                    onMouseLeave={() =>
                      downloadIconRef.current?.stopAnimation()
                    }
                  >
                    <DownloadIcon
                      size={20}
                      duration={0.5}
                      className="hover:text-foreground transition-colors"
                      ref={downloadIconRef}
                    />
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Highlights
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
                  newTab: false,
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
                  newTab: true,
                  date: "2023",
                },
              ].map((project, idx) => {
                const externalLinkIconRef =
                  useRef<ExternalLinkIconHandle>(null);

                return (
                  <Link
                    key={idx}
                    href={project.href}
                    target={project.newTab ? "_blank" : undefined}
                    rel={project.newTab ? "noopener noreferrer" : undefined}
                    onMouseEnter={() =>
                      externalLinkIconRef.current?.startAnimation()
                    }
                    onMouseLeave={() =>
                      externalLinkIconRef.current?.stopAnimation()
                    }
                    className="block space-y-3 pl-4 sm:pt-2 sm:pr-2 sm:pb-2 border-l-2 border-zinc-100/50"
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
                        <span key={project.highlight} className="text-xs">
                          <code className="text-yellow-400/60 flex items-center gap-2">
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

          {/* Blog Posts */}
          {/* <div className="space-y-6">
            <h2 className="text-base font-medium text-muted-foreground uppercase">
              Blog Posts
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Blog Post Title",
                  description:
                    "Brief description of the blog post content and what it covers.",
                  image: "/blog-placeholder.jpg",
                  href: "/blog/post-slug",
                  date: "2024",
                },
                {
                  title: "Blog Post Title",
                  description:
                    "Brief description of the blog post content and what it covers.",
                  image: "/blog-placeholder.jpg",
                  href: "/blog/post-slug",
                  date: "2024",
                },
              ].map((post, idx) => (
                <Link
                  key={idx}
                  href={post.href}
                  className="block transition-all duration-300 hover:text-foreground rounded-xl overflow-hidden hover:backdrop-blur-xl hover:bg-white/5 border border-transparent hover:border-white/10 hover:shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-48 sm:h-32 flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={192}
                        height={128}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1 flex-1">
                          <div className="text-base font-medium">
                            {post.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <code>{post.description}</code>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap">
                          <code>{post.date}</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div> */}

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
                  title: "Prept.ai",
                  description:
                    'Interviewer: "So what\'s your greatest weakness?" Me: "ummmmmmmmmmmm."',
                  href: sharedLinks.preptai,
                  icon: "/prept.ico",
                  date: "2023",
                },
                {
                  title: "Colos",
                  description:
                    "Why am I still using a keyfob to enter my gym? and swiping my card to buy a Celcius? Seriously, its 2025.",
                  href: sharedLinks.colos,

                  icon: "/colos.ico",
                  date: "2023",
                },
                {
                  title: "Harbor Dating",
                  description:
                    "The reason I don't get any matches is because Hinge hates me. There's gotta be a better approach to online dating. Right? ...RIGHT?",
                  href: sharedLinks.harbor,
                  icon: "/harbor.png",
                  date: "2023",
                },
                {
                  title: "Brickify Lab",
                  description:
                    "I wonder if I can make ANY image with those Lego Mosaic sets?",
                  href: sharedLinks.brickify,
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
                    className="block space-y-3 pl-4 sm:pt-2 sm:pr-2 sm:pb-2 border-l-2 border-zinc-100/50"
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
