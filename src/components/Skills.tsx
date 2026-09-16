import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
        Skills
      </h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium text-foreground/60">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-black/10 px-3 py-1 text-sm dark:border-white/15"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
