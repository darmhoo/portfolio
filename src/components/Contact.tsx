import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
        Contact
      </h2>
      <p className="mt-4 max-w-2xl text-base text-foreground/70 sm:text-lg">
        I&apos;m open to new opportunities and interesting projects. Feel free
        to reach out.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {profile.email}
        </a>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
        >
          GitHub
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
        >
          LinkedIn
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          className="text-sm font-medium underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
        >
          {profile.phone}
        </a>
      </div>
    </section>
  );
}
