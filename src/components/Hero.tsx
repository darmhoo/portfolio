import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col-reverse items-start gap-10 px-6 py-24 sm:py-32 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <p className="text-sm font-medium text-foreground/60">
          {profile.location}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m {profile.name}.
        </h1>
        <p className="mt-2 text-xl text-foreground/70 sm:text-2xl">
          {profile.title}
        </p>
        <p className="mt-6 max-w-2xl text-base text-foreground/70 sm:text-lg">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Download resume
          </a>
        </div>
      </div>
      <Image
        src="/damola.jpg"
        alt={profile.name}
        width={160}
        height={160}
        priority
        className="h-32 w-32 shrink-0 rounded-full object-cover ring-1 ring-black/10 sm:h-40 sm:w-40 dark:ring-white/15"
      />
    </section>
  );
}
