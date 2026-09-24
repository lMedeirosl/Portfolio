import Section from './Section'
import SkillIcon from './SkillIcon'
import { categories } from '../data/categories'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="Tecnologias e ferramentas que uso no dia a dia, agrupadas pela área em que aparecem."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
        {skillGroups.map((group) => {
          const c = categories[group.area]
          return (
            <section
              key={group.title}
              aria-labelledby={`skill-${group.title}`}
              className={`rounded-lg border border-line bg-panel p-5 sm:p-6 ${group.wide ? 'md:col-span-2' : ''}`}
            >
              <h3
                id={`skill-${group.title}`}
                className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
              >
                <span className={`h-2.5 w-2.5 rounded-sm ${c.bgSolid}`} aria-hidden="true" />
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className={`inline-flex items-center gap-2 rounded-md border border-line bg-raised px-3 py-1.5 text-sm transition-colors ${c.hoverBorder}`}
                  >
                    <SkillIcon name={item.icon} className={c.text} />
                    {item.name}
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </Section>
  )
}
