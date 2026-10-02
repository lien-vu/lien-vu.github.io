import usePageTitle from '../ui/usePageTitle'

const conferencePresentations = [
  'Vu, L., May, H., Houang, R., & Del Tufo, S.N. (2025, July 16-19). Kumon: let’s read for fun! [Conference Poster]. Society for the Scientific Study of Reading (SSSR), Calgary, Canada.',
  'Lawrence, J., Vu, L., Henderson, A., Chavers, A., & Del Tufo, S.N. (2025, July 16-19). Computer-assisted intervention impact on reading outcomes in children with reading disabilities. [Conference Poster]. Society for the Scientific Study of Reading (SSSR), Calgary, Canada.',
  'Vu, L., & Student, M. (2025, April 23-26). An Item-Level Investigation of the Impact of Kumon. [Conference Poster]. National Council on Measurement in Education (NCME), Denver, CO.',
  'Vu, L., Houang, R., May, H., & Ran, F. (2024, April 11-14). Evaluation of the Impacts of Kumon Using Propensity Score Matching. [Conference Poster]. American Educational Research Association (AERA), Philadelphia, PA.',
  'Vu, L., Preston, M., Delgado, A., Patt, R., & Golinkoff, G. (2023, March 23-25). An International Study on Children’s and Adults’ Perception of Play. [Conference Poster]. Society for Research in Child Development (SRCD), Salt Lake City, UT.',
  'Vu, L., Bower, C., Evans, N., Zimmermann, L., Verdine, B., Toub, T. S., Foster, L., Islam, S., Golinkoff, R. M., & Hirsh-Pasek, K. (2019, March 21-23). Growth curve modeling of preschoolers’ spatial skills during spatial training. [Conference Poster]. Society for Research in Child Development (SRCD), Baltimore, MD.',
]

const otherPresentations = [
  'Vu, L., Houang, R., May, H., & Ran, F. (2024, April 19). Evaluation of the Impacts of Kumon Using Propensity Score Matching. [Paper Presentation – 1st place winner]. 39th Annual Marion H. Steele Research Symposium, Newark, DE.',
  'Vu, L. (1998, April 23-25). An International Comparison of Health Care Policy for Asian Ethnic Minorities. National Conferences on Undergraduate Research Proceedings. [Paper Presentation]. 12th National Undergraduate Research Conference, Salisbury, MD.',
  'Vu, L. (1998). An International Comparison of Health Care Policy for Asian Ethnic Minorities. McNair Research Journal. [Paper Presentation]. Ronald E. McNair Research Conference and Barth-Crapsey Research Conference, Rochester, NY.',
]

export default function PresentationsPage() {
  usePageTitle('Presentations — Dr. Lien Vu')
  const baseUrl = import.meta.env.BASE_URL
  return (
    <div className="space-y-8">
      <section className="rounded-xl p-5 bg-white ring-1 ring-brand-100 shadow-sm">
        <h3 className="text-lg font-semibold">Kumon: Let’s Read for Fun!</h3>
        <p className="mt-2 text-gray-800">
          In partnership with the University of Delaware, this research studied how children in Kumon’s reading and math programs develop a love for reading. Using surveys and achievement data from thousands of students, the team found that strong learning attitudes, academic engagement, and consistent practice were linked to greater reading enjoyment. These insights help Kumon and similar programs create learning experiences that foster both skills and a lifelong love of reading.
        </p>
        <div className="mt-3">
            <a
            className="inline-flex items-center gap-2 text-brand-700 font-medium hover:gap-3 transition-all"
            href={`${baseUrl}posters/kumon-lets-read-for-fun.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            View Poster <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Invited Talks</h2>
        <div className="mt-4 text-gray-800">
          <div className="font-medium">Exploring the Relationship Between Dosage and Working Memory</div>
          <div className="text-sm text-gray-700 mt-1">
            March 2026 — Education and Brain Sciences Research Lab (EBRL), Peabody College of Education at Vanderbilt University, Nashville, TN
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">National and International Conference Presentations</h2>
        <ul className="mt-4 space-y-3 text-gray-800">
          {conferencePresentations.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Other Presentations</h2>
        <ul className="mt-4 space-y-3 text-gray-800">
          {otherPresentations.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
