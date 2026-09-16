import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
        About
      </h2>
      <div className="mt-4 space-y-4 max-w-2xl">
        {profile.about.map((paragraph) => (
          <p key={paragraph} className="text-base text-foreground/80 sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
