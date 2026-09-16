import { experience, education } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
        Experience
      </h2>
      <div className="mt-6 space-y-10">
        {experience.map((job) => (
          <div key={`${job.role}-${job.company}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <span className="text-sm text-foreground/50">{job.period}</span>
            </div>
            <p className="text-sm text-foreground/60">{job.company}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground/70 sm:text-base">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-sm font-semibold uppercase tracking-widest text-foreground/50">
        Education
      </h2>
      <div className="mt-4">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold">{education.degree}</h3>
          <span className="text-sm text-foreground/50">{education.period}</span>
        </div>
        <p className="text-sm text-foreground/60">{education.school}</p>
      </div>
    </section>
  );
}
