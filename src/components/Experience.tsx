import { experience, education, community } from "@/data/profile";

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
            {job.summary && (
              <p className="mt-3 text-sm text-foreground/70 sm:text-base">
                {job.summary}
              </p>
            )}
            {job.groups.map((group, index) => (
              <div key={group.heading ?? index} className="mt-4">
                {group.heading && (
                  <h4 className="text-sm font-semibold text-foreground/80">
                    {group.heading}
                  </h4>
                )}
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-foreground/70 sm:text-base">
                  {group.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
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

      <h2 className="mt-14 text-sm font-semibold uppercase tracking-widest text-foreground/50">
        Community
      </h2>
      <div className="mt-4">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold">
            {community.role}, {community.organisation}
          </h3>
          <span className="text-sm text-foreground/50">{community.period}</span>
        </div>
        <p className="mt-1 text-sm text-foreground/70 sm:text-base">
          {community.description}
        </p>
      </div>
    </section>
  );
}
