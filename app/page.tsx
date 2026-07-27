import sharedLinks from "./shared-links.json";

const projects = [
  {
    name: "The Better Threads Project",
    desc: "From-scratch GPT for cyberbullying detection",
    href: sharedLinks.betterThreads,
    year: "2025",
  },
  {
    name: "Prept.ai",
    desc: "AI mock interview platform",
    href: sharedLinks.preptai,
    year: "2024",
  },
  {
    name: "GptGO",
    desc: "Chrome extension for ChatGPT",
    href: sharedLinks.gptgo,
    year: "2023",
  },
];

const writing = [
  {
    name: "Why is chatting with LLMs in Chinese the new wave?",
    href: "https://medium.com/@aaronz2003/why-is-chatting-with-llms-in-chinese-the-new-wave-67a161e29bad?postPublishedType=initial",
    date: "3/30/26",
  },
  {
    name: "The Beige Brand Epidemic",
    href: "https://medium.com/@aaronz2003/the-beige-brand-epidemic-67cc4cb3769d",
    date: "2/28/26",
  },
  {
    name: "There Are No Shortcuts in Entrepreneurship",
    href: "https://medium.com/@aaronz2003/there-are-no-shortcuts-in-entrepreneurship-74674318ecba",
    date: "1/25/26",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-32">
      <div className="space-y-10">
        <header className="space-y-4">
          <h1
            className="text-4xl tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Aaron Zeng
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed border-b border-muted-foreground/20 pb-6">
            Building AI infra @ JPMorganChase for brand-aligned UI generation.
            Previously built{" "}
            <a
              href={sharedLinks.preptai}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-foreground"
            >
              Prept.ai
            </a>{" "}
            <span className="text-nowrap">{"(grant-funded)"}</span>
            {" and "}
            <a
              href={sharedLinks.gptgo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-foreground"
            >
              GptGO
            </a>{" "}
            <span className="text-nowrap">{"(50k+ installs)"}</span>
          </p>
        </header>
        <section className="space-y-4">
          <h2 className="text-xs text-muted-foreground uppercase tracking-widest">
            Writing
          </h2>
          <ul className="space-y-3">
            {writing.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-4 text-sm justify-between"
                >
                  <span className="text-foreground group-hover:text-muted-foreground transition-colors">
                    {p.name}
                  </span>
                  <span className="text-muted-foreground text-xs whitespace-nowrap">
                    {p.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xs text-muted-foreground uppercase tracking-widest">
            Work
          </h2>
          <ul className="space-y-3">
            {projects.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target={p.href.startsWith("/") ? undefined : "_blank"}
                  rel={
                    p.href.startsWith("/") ? undefined : "noopener noreferrer"
                  }
                  className="group text-sm"
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="text-foreground group-hover:text-muted-foreground transition-colors">
                      {p.name}
                    </span>
                    <span className="text-muted-foreground tabular-nums text-xs">
                      {p.year}
                    </span>
                  </span>
                  <span className="block text-muted-foreground text-xs mt-0.5">
                    {p.desc}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <footer className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground pt-2">
          <a
            href={sharedLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            [github]
          </a>
          <a
            href={sharedLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            [linkedin]
          </a>
          <a
            href={sharedLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            [instagram]
          </a>
          <a href={sharedLinks.email} className="hover:text-foreground">
            [email]
          </a>
          <a
            href="/ZENG_AARON_RESUME_3_30_26.pdf"
            download="Aaron_Zeng_Resume.pdf"
            className="hover:text-foreground"
          >
            [resume]
          </a>
        </footer>
      </div>
    </main>
  );
}
