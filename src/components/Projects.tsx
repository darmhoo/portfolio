import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
        Projects
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-2xl border border-black/10 p-6 transition-colors hover:border-black/20 dark:border-white/10 dark:hover:border-white/25"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm text-foreground/70">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/5 px-3 py-1 text-xs text-foreground/70 dark:bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm font-medium">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                >
                  Live
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                >
                  Code
                </a>
              )}
            </div>
            {project.loginDetails && (
              <div className="mt-4 rounded-lg bg-black/5 p-3 text-xs text-foreground/70 dark:bg-white/10">
                <p className="font-medium text-foreground/80">Demo login</p>
                <p className="mt-1">Username: {project.loginDetails.username}</p>
                <p>Password: {project.loginDetails.passwordNote}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
