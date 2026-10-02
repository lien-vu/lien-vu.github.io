import usePageTitle from '../ui/usePageTitle'

type Citation = { citation: string; link?: string }

const pubs: Citation[] = [
  {
    citation:
      'Patt, R., Veng, S., Vu, L., Shen, C.C., & Mouza, C. (2025). “It’s More Like Recess and Cool”: Teaching Elementary Students Cybersecurity with a Social Robot. Journal of Interactive Learning Research, 36(4), 369-396.',
    link: 'https://doi.org/10.70725/722215oqzsne',
  },
  {
    citation:
      'Blinkoff, E., Wright, C. A., Scott, M., Fletcher, K., Masters, A. S., Ilgaz, H., Vu, L., Hirsh-Pasek, K., & Golinkoff, R. M. (2023). Shifting from a classroom of reluctant compliance to a classroom of responsive curiosity. Young Children, 78(3), 14-22.',
    link: 'https://www.naeyc.org/resources/pubs/yc/fall2023',
  },
  {
    citation:
      'Dore, R.A., Hassinger-Das, B., Brezack, N., Valladares, T.L., Paller, A., Vu, L., Golinkoff, R.M., & Hirsh-Pasek, K. (2018). The parent advantage in fostering children\'s e-book comprehension. Early Childhood Research Quarterly, 44, 24-33.',
    link: 'https://doi.org/10.1016/j.ecresq.2018.02.002',
  },
]

const manuscripts: Citation[] = [
  {
    citation:
      'Vu, L. (in preparation). Evaluation of the Impacts of an After-School Program Using Propensity Score Methods.',
  },
  {
    citation:
      'Vu, L., Student, S., Houang, R., & Del Tufo, S. (in preparation). Does extra mathematical practice help students overcome barriers associated with understanding mathematical word problems?',
  },
]

const reports: Citation[] = [
  {
    citation:
      'Vu, L., Mouza, C., & Garvin, M. (2024). Examining motivational constructs in computational thinking for preservice teacher development. In D. C. Gibson, M. N. Ochoa, & Y. Jin (Eds.), Research highlights in technology and teacher education 2023 (pp. 65-72). AACE.',
    link: 'https://www.learntechlib.org/primary/p/223858/',
  },
  {
    citation:
      'Vu, L., Mouza, C., & Garvin, M. (2023). Examining Motivational Constructs in Computational Thinking for Preservice Teacher Development. In E. Langran, P. Christensen, & J. Sanson (Eds.), Proceedings of Society for Information Technology and Teacher Education International Conference (pp. 106-112). New Orleans, LA: AACE.',
    link: 'https://www.learntechlib.org/primary/p/221857/',
  },
  {
    citation:
      'Vu, L., Alkhateeb, B., Garvin, M., & Mouza, C. (2022). Using Word Clouds to Uncover Preservice Teachers’ Understanding of Computational Thinking in the Context of Teacher Education Coursework. In E. Langran (Ed.), Proceedings of Society for Information Technology and Teacher Education International Conference (pp. 2138-2146). San Diego, CA: AACE.',
    link: 'https://www.learntechlib.org/primary/p/221004/',
  },
  {
    citation:
      'Bower, C., Vu, L., Golinkoff, R. M., & Hirsh-Pasek, K. (2019, July 12). School’s out: Block out time for spatial learning. Brookings Institution.',
    link:
      'https://www.brookings.edu/blog/education-plus-development/2019/07/09/schools-out-block-out-time-for-spatial-learning/',
  },
  {
    citation:
      'Byrnes, J.P., & Vu, L. (2015). Educational Neuroscience: Definitional, Methodological, and Interpretive Issues. WIREs Cognitive Science.',
  },
]

function CitationList({ items }: { items: Citation[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((p, idx) => (
        <li key={idx} className="text-gray-800">
          {p.citation}{' '}
          {p.link && (
            <a className="text-brand-700" href={p.link} target="_blank" rel="noreferrer">
              link
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function PublicationsPage() {
  usePageTitle('Publications — Dr. Lien Vu')
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold">Peer Reviewed Publications</h2>
        <CitationList items={pubs} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Manuscripts in Preparation</h2>
        <CitationList items={manuscripts} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Proceedings Papers, Reports, and Book Chapters</h2>
        <CitationList items={reports} />
      </section>
    </div>
  )
}
