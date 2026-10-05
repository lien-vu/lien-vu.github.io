import Hero from '../ui/Hero'
import usePageTitle from '../ui/usePageTitle'
import { Link } from 'react-router-dom'

export default function HomePage() {
  usePageTitle('Lien Vu — Educational Statistics & Research Methods')
  return (
    <div className="space-y-12">
      <Hero
        name="Lien Vu"
        title="Ph.D. Candidate, Educational Statistics & Research Methods, University of Delaware · Adjunct Faculty, Johns Hopkins University"
        subtitle="Research on STEM learning, educational neuroscience, and program evaluation"
      />

      <section className="grid md:grid-cols-3 gap-6">
        <Card
          title="Honors"
          items={[
            'Doctoral Fellowship for Excellence, University of Delaware (2026)',
            'First Place Graduate Paper, Steele Symposium, University of Delaware (2024)',
            'Delegate, Kakehashi Project, Asian Pacific American Institute for Congressional Studies (2023)',
          ]}
          cta={{ to: '/awards', label: 'See all awards' }}
        />
        <Card
          title="Publications"
          items={[
            'Journal of Interactive Learning Research',
            'Young Children (NAEYC)',
            'Early Childhood Research Quarterly',
          ]}
          cta={{ to: '/research', label: 'See publications' }}
        />
        <Card
          title="Teaching"
          items={[
            'Adjunct Faculty/Instructor of Record, Johns Hopkins University',
            'Learning Sciences Studios: Theory, Analysis, and Ed Tech Design (Fall 2026)',
            'Explorations in Mind, Brain, and Teaching (Summer 2026)',
          ]}
          cta={{ to: '/teaching', label: 'See teaching' }}
        />
      </section>

      <section className="bg-white/80 rounded-xl p-6 ring-1 ring-brand-100 shadow-sm">
        <p className="text-sm text-ink-700">
          Currently based in North Wales, PA. Open to research collaborations and consulting projects in education and learning sciences.
        </p>
      </section>
    </div>
  )
}

function Card({
  title,
  items,
  cta,
}: {
  title: string
  items: string[]
  cta?: { to: string; label: string }
}) {
  return (
    <div className="group rounded-xl p-5 bg-white ring-1 ring-brand-100 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-ink-900">{title}</h3>
      <ul className="mt-3 space-y-1 text-sm text-ink-700 list-disc list-inside">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      {cta && (
        <Link
          to={cta.to}
          className="inline-flex items-center gap-2 mt-4 text-brand-700 font-medium hover:gap-3 transition-all"
        >
          {cta.label} <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  )
}


