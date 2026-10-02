import usePageTitle from '../ui/usePageTitle'

const service = [
  {
    header: 'Volunteer, President, Organization of Chinese Americans – Greater Philadelphia',
    detail:
      'Convention Chair, Philadelphia, PA, 2005–2008, 2013–2025. Founded in 1973, OCA is a national organization dedicated to advancing the social, political, and economic well-being of Asian Pacific Americans in the United States.',
  },
  {
    header: 'Accreditation Reviewer, Member, Middle States Association',
    detail:
      'Pennsylvania, 2025. Make objective observations and conclusions based on evidence presented; participate in intensive work sessions and cooperate with other team members in meeting the expectations of the team.',
  },
  {
    header: 'Manuscript Reviewer',
    detail: 'Literacy Research: Theory, Method, and Practice, Vol. 75 (2026); Emerging Adulthood (2025)',
  },
  {
    header: 'Conference Reviewer',
    detail: 'American Psychological Association Conference (2026)',
  },
]

const mentees = [
  'Andromeda Henderson, University of Delaware',
  'Jada Lawrence, University of Delaware',
  'Brianna Deklavon, University of Delaware',
]

const menteePresentations = [
  'Henderson, A., & Del Tufo, S.N. (2025, September 12-14). Emotional regulation in individuals with developmental dyslexia. [Poster presentation]. Society for the Neurobiology of Language (SNL) 17th Annual Meeting, Washington, DC.',
  'Deklavon, B. (2025, April 24). Self-Report of a Specific Learning Disability Differs by Race. [Poster presentation]. Steele Symposium, College of Education and Human Development, University of Delaware, Newark, DE.',
  'Henderson, A. (2025, April 24). Emotional regulation in individuals with reading difficulties: A preliminary investigation. [Poster presentation]. Steele Symposium, College of Education and Human Development, University of Delaware, Newark, DE.',
  'Lawrence, J. (2025, April 24). What is the role of computer-assisted intervention on reading comprehension in children with reading disabilities. [Poster presentation]. Steele Symposium, College of Education and Human Development, University of Delaware, Newark, DE.',
  'Lawrence, J., Vu, L., Henderson, A., Chavers, A., & Del Tufo, S.N. (2025, July 16-19). Computer-assisted intervention impact on reading outcomes in children with reading disabilities. [Poster presentation]. Scientific Study of Reading (SSSR) 32nd Annual Meeting, Calgary, Canada.',
]

const menteeAwards = [
  'Andromeda Henderson — Elisha Conover Scholarship (2025); Beinecke Scholarship Nominee (2025); Psi Chi, The International Honor Society for Psychology Students (2025)',
  'Jada Lawrence — M.A., School Psychology, University of Delaware (2025)',
]

const societies = [
  'American Educational Research Association (AERA) — Since 2015',
  'Special Interest Groups (Out-of-School Time, Research on Evaluation, Giftedness) — Since 2021',
  'National Council on Measurement in Education (NCME) — Since 2024',
  'National Association for Gifted Children, Research and Evaluation Committee — Since 2023',
  'Pennsylvania Association for Gifted Education (PAGE) — Since 2010',
  'Society for the Scientific Study of Reading (SSSR) — Since 2025',
  'Society for Research in Child Development (SRCD) — Since 2020',
  'Women in Cognitive Science (WiCS+) — Since 2025',
  'Middle States Association, Member and Volunteer — Since 2010',
]

export default function ServicePage() {
  usePageTitle('Service — Dr. Lien Vu')
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold">Service to the Field</h2>
        <ul className="mt-4 space-y-3">
          {service.map((s) => (
            <li key={s.header} className="text-gray-800">
              <div className="font-medium">{s.header}</div>
              <div className="text-sm text-gray-700 mt-1">{s.detail}</div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Mentoring</h2>
        <h3 className="mt-4 font-medium">Undergraduate Research Mentees</h3>
        <ul className="mt-2 space-y-1 list-disc list-inside text-gray-800">
          {mentees.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <h3 className="mt-6 font-medium">Mentee Presentations</h3>
        <ul className="mt-2 space-y-3 text-gray-800">
          {menteePresentations.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <h3 className="mt-6 font-medium">Mentee Awards and Achievements</h3>
        <ul className="mt-2 space-y-1 list-disc list-inside text-gray-800">
          {menteeAwards.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Professional Affiliations</h2>
        <ul className="mt-4 space-y-2 list-disc list-inside text-gray-800">
          {societies.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
