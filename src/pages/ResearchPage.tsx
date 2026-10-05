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

export default function ResearchPage() {
  usePageTitle('Research — Dr. Lien Vu')
  const baseUrl = import.meta.env.BASE_URL
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold">Research Focus</h2>
        <p className="mt-4 text-gray-800 leading-relaxed">
          My research sits at the intersection of educational psychology, learning sciences, and quantitative methods. Broadly, I seek to understand the mechanisms that drive student success in educational interventions and learning environments. Drawing on causal inference, psychometrics, Bayesian modeling, educational data science, and program evaluation, I investigate how factors such as motivation, engagement, practice dosage, persistence, home environments, and cognitive processes contribute to learning outcomes. My goal is not only to determine whether interventions work, but also to identify for whom they are most effective, under what conditions they succeed, and through which mechanisms they produce meaningful academic growth.
        </p>
        <p className="mt-4 text-gray-800">
          Dissertation: <em>Kumon and the Developing Mind: A Three-Part Study of Learning, Achievement, and Brain Change</em>
        </p>
        <details className="mt-2 group">
          <summary className="cursor-pointer text-brand-700 font-medium list-none">
            <span className="group-open:hidden">Click here for the abstract →</span>
            <span className="hidden group-open:inline">Hide abstract ↑</span>
          </summary>
          <p className="mt-3 text-gray-800 leading-relaxed rounded-lg bg-brand-50/60 ring-1 ring-brand-100 p-4">
            This dissertation involves three studies of the Kumon program, an international supplemental education program in mathematics and reading. The first study investigates the academic and career outcomes of students who previously participated in Kumon (e.g., during 2000-2020). Through a mixed-methods approach, combining quantitative surveys and qualitative interviews, this study aims to assess whether former Kumon participants feel that the skills and knowledge gained from Kumon had lasting effects on their academic trajectories, self-discipline, and overall life/career. The second study utilizes a causal framework, employing propensity score matching (PSM), to assess the effectiveness of the Kumon Method on student academic achievement using historical data on Kumon students who completed an internationally standardized mathematics test in 2006, compared to a matched sample of non-Kumon peers (who completed the same test) based on sex, grade, and other covariates. The third study employs a one-group pre-post design within a small pilot study that examines whether engagement with Kumon activities is associated with changes in cognitive, behavioral, academic, and brain data of young children (e.g., in grades K-1). Together, these studies aim to advance educational neuroscience and inform effective math interventions that foster achievement and developmental growth across diverse learners.
          </p>
        </details>
      </section>

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

      <section className="rounded-xl p-5 bg-white ring-1 ring-brand-100 shadow-sm">
        <h3 className="text-lg font-semibold">Featured Poster: Kumon: Let’s Read for Fun!</h3>
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
