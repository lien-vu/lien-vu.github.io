import usePageTitle from '../ui/usePageTitle'

type Item = { label: string; years: string }

const teachingPositions: { title: string; items: Item[] }[] = [
  {
    title: 'Adjunct Faculty/Instructor of Record, Johns Hopkins University',
    items: [
      { label: 'Learning Sciences Studios: Theory, Analysis, and Ed Tech Design', years: 'Fall 2026' },
      { label: 'Explorations in Mind, Brain, and Teaching', years: 'Summer 2026' },
    ],
  },
  {
    title: 'Teaching Assistant, University of Delaware',
    items: [
      { label: 'Research Methods', years: 'Spring 2025' },
      { label: 'Perception and Sensation', years: 'Fall 2024' },
      { label: 'A Multidisciplinary Introduction to Disability Studies', years: 'Fall 2023, Spring 2024' },
    ],
  },
]

export default function TeachingPage() {
  usePageTitle('Teaching — Dr. Lien Vu')
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold">Teaching Philosophy</h2>
        <p className="mt-4 text-gray-800 leading-relaxed">
          My teaching philosophy is grounded in a simple but enduring question: <em>What enables students to succeed?</em> As a researcher, I investigate the mechanisms that contribute to student success in educational interventions. As an adjunct instructor at Johns Hopkins University (JHU), I seek to create learning environments that support those same mechanisms by fostering curiosity, motivation, persistence, self-regulation, and intellectual engagement. I believe effective teaching extends beyond transmitting knowledge. It involves helping students develop the skills to critically examine evidence, apply knowledge to authentic problems, and become independent learners capable of adapting to new challenges throughout their careers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Teaching Positions</h2>
        <ul className="mt-4 space-y-4">
          {teachingPositions.map((p) => (
            <li key={p.title} className="border rounded-lg p-4">
              <div className="font-medium">{p.title}</div>
              <ul className="mt-2 space-y-1">
                {p.items.map((it) => (
                  <li key={it.label} className="flex flex-col sm:flex-row sm:justify-between sm:gap-4 text-sm">
                    <span className="text-gray-700">{it.label}</span>
                    <span className="text-gray-500 shrink-0">{it.years}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
