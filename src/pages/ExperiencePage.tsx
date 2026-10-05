import usePageTitle from '../ui/usePageTitle'

type Item = { label: string; years: string }

const recentPositions: { title: string; items: Item[] }[] = [
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
  {
    title: 'Research Assistant, University of Delaware',
    items: [
      { label: 'Knowledge Brokering: CREATEd', years: '2025–2026' },
      { label: 'Investigating the neurobiological changes resulting from a reading or mathematics intervention', years: '2023–Present' },
      { label: 'Principal and School Policy Analysis', years: '2022–2023' },
      { label: 'Examining Motivational Constructs in Computational Thinking for Preservice Teacher Development', years: '2021–2022' },
    ],
  },
]

const roles = [
  {
    title: 'Certified Instructor, Director and Owner',
    org: 'Kumon Math and Reading Center, Willow Grove/Hatboro & Elkins Park, PA',
    years: '2006–Present',
  },
  {
    title: 'Senior Business Analyst, Marketing Analysis',
    org: 'Advanta Corp., Spring House, PA',
    years: '2001–2005',
  },
  {
    title: 'Consultant, Management Consulting Services',
    org: 'PricewaterhouseCoopers LLP, Rosslyn, VA',
    years: '2000–2001',
  },
  {
    title: 'Assistant to the Director',
    org: 'Division of International Finance, Federal Reserve Board of Governors, Washington, D.C.',
    years: '1999–2000',
    note: 'Recipient of the 2000 Annual Cash Award for outstanding service.',
  },
  {
    title: 'Research Assistant',
    org: 'Division of Research and Statistics, Federal Reserve Board of Governors, Washington, D.C.',
    years: '1998–1999',
  },
]

export default function ExperiencePage() {
  usePageTitle('Experience — Dr. Lien Vu')
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold">Academic Appointments</h2>
        <ul className="mt-4 space-y-4">
          {recentPositions.map((p) => (
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

      <section>
        <h2 className="text-xl font-semibold">Professional Experience</h2>
        <ul className="mt-4 space-y-4">
          {roles.map((r) => (
            <li key={r.title} className="border rounded-lg p-4">
              <div className="font-medium">{r.title}</div>
              <div className="text-sm text-gray-700">{r.org}</div>
              <div className="text-sm text-gray-500">{r.years}</div>
              {r.note && <div className="text-sm text-gray-600 mt-1">{r.note}</div>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
