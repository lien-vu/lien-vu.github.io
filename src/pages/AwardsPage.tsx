import usePageTitle from '../ui/usePageTitle'

const grants = [
  {
    role: 'Co-Investigator and Graduate Researcher',
    title: 'Exploring the Relationship Between Dosage, Working Memory, and Home Environment Factors After a Math and Reading Intervention',
    funder: 'University of Delaware Research Foundation – Strategic Initiative Grant',
  },
]

const awards = [
  { year: '2026', label: 'Doctoral Fellowship for Excellence, University of Delaware' },
  { year: '2024', label: 'First Place Graduate Paper, Steele Symposium, University of Delaware' },
  { year: '2023', label: 'Delegate, Kakehashi Project, Asian Pacific American Institute for Congressional Studies' },
  { year: '2021', label: 'Graduate Student Travel Award, University of Delaware' },
  { year: '2014', label: 'Participant, AERA Institute on Statistical Analysis for Education Policy on Causal Analysis Using International Data, AERA Grants Program' },
  { year: '2010', label: 'School of Education Scholarship, Johns Hopkins University' },
  { year: '1998', label: 'Charles E. Phelps Scholar; Senior Scholar, University of Rochester' },
  { year: '1997', label: 'Barth-Crapsey Undergraduate Research Award, University of Rochester' },
  { year: '1996', label: 'Reach for Rochester Community Service Scholarship, University of Rochester' },
  { year: '1995', label: 'Howard Hughes Summer Research Fellowship, University of Rochester' },
  { year: '1994', label: 'Ronald E. McNair Post-Baccalaureate Achievement Scholar, University of Rochester' },
  { year: '1994', label: 'Bausch and Lomb Scholarship, University of Rochester' },
]

export default function AwardsPage() {
  usePageTitle('Awards — Dr. Lien Vu')
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold">Grants</h2>
        <ul className="mt-4 space-y-4">
          {grants.map((g) => (
            <li key={g.title} className="border rounded-lg p-4">
              <div className="font-medium">{g.title}</div>
              <div className="text-sm text-gray-700">{g.role}</div>
              <div className="text-sm text-gray-500">{g.funder}</div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Honors and Awards</h2>
        <ul className="mt-4 space-y-2">
          {awards.map((a) => (
            <li key={a.label} className="flex gap-4 text-gray-800">
              <span className="text-gray-500 shrink-0 w-12">{a.year}</span>
              <span>{a.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
