import usePageTitle from '../ui/usePageTitle'

export default function CvPage() {
  usePageTitle('CV — Dr. Lien Vu')
  return (
    <div className="space-y-6">
      <div className="no-print flex gap-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.print()
          }}
          className="text-sm text-brand-700"
        >
          Print CV
        </a>
      </div>

      <header className="text-center">
        <h1 className="text-2xl font-semibold">Lien Vu</h1>
        <div className="text-gray-700">Ph.D. Candidate, Educational Statistics & Research Methods</div>
        <div className="text-sm text-gray-600">University of Delaware • Adjunct Faculty, Johns Hopkins University</div>
        <div className="mt-2 text-sm text-gray-700">215-237-7331 • lvu1@jh.edu</div>
      </header>

      <section>
        <h2 className="font-semibold border-b pb-1">Recent Positions</h2>
        <ul className="mt-2 space-y-2 text-gray-800">
          <li>
            <div className="font-medium">Adjunct Faculty/Instructor of Record, Johns Hopkins University</div>
            <div>Learning Sciences Studios: Theory, Analysis, and Ed Tech Design (Fall 2026)</div>
            <div>Explorations in Mind, Brain, and Teaching (Summer 2026)</div>
          </li>
          <li>
            <div className="font-medium">Teaching Assistant, University of Delaware</div>
            <div>Research Methods (Spring 2025)</div>
            <div>Perception and Sensation (Fall 2024)</div>
            <div>A Multidisciplinary Introduction to Disability Studies (Fall 2023, Spring 2024)</div>
          </li>
          <li>
            <div className="font-medium">Research Assistant, University of Delaware</div>
            <div>Knowledge Brokering: CREATEd (2025–2026)</div>
            <div>Investigating the neurobiological changes resulting from a reading or mathematics intervention (2023–Present)</div>
            <div>Principal and School Policy Analysis (2022–2023)</div>
            <div>Examining Motivational Constructs in Computational Thinking for Preservice Teacher Development (2021–2022)</div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Education</h2>
        <ul className="mt-2 space-y-2 text-gray-800">
          <li>
            Ph.D., Educational Statistics and Research Methods with a Certificate in Program Evaluation, University of Delaware — expected 2027
            <div className="text-sm text-gray-700">Advisors: Dr. Henry May and Dr. Stephanie Del Tufo</div>
            <div className="text-sm text-gray-700">
              Dissertation: <em>Kumon and the Developing Mind: A Three-Part Study of Learning, Achievement, and Brain Change</em>
            </div>
          </li>
          <li>M.S., Educational Studies, Johns Hopkins University (2011). Certificates in Mind, Brain, Teaching and Gifted Education</li>
          <li>B.A., Double Major in Economics and Health & Society (Cum Laude), University of Rochester (1998)</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Professional Experience</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Certified Instructor, Director and Owner, Kumon Math and Reading Center, Willow Grove/Hatboro & Elkins Park, PA (2006–Present)</li>
          <li>Senior Business Analyst, Marketing Analysis, Advanta Corp., Spring House, PA (2001–2005)</li>
          <li>Consultant, Management Consulting Services, PricewaterhouseCoopers LLP, Rosslyn, VA (2000–2001)</li>
          <li>Assistant to the Director, Division of International Finance, Federal Reserve Board of Governors, Washington, D.C. (1999–2000). Recipient of the 2000 Annual Cash Award for outstanding service.</li>
          <li>Research Assistant, Division of Research and Statistics, Federal Reserve Board of Governors, Washington, D.C. (1998–1999)</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Grants</h2>
        <p className="mt-2 text-gray-800">
          Co-Investigator and Graduate Researcher, Exploring the Relationship Between Dosage, Working Memory, and Home Environment Factors After a Math and Reading Intervention. University of Delaware Research Foundation – Strategic Initiative Grant.
        </p>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Honors and Awards</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>2026 — Doctoral Fellowship for Excellence, University of Delaware</li>
          <li>2024 — First Place Graduate Paper, Steel Symposium, University of Delaware</li>
          <li>2023 — Delegate, Kakehashi Project, Asian Pacific American Institute for Congressional Studies</li>
          <li>2021 — Graduate Student Travel Award, University of Delaware</li>
          <li>2014 — Participant, AERA Institute on Statistical Analysis for Education Policy on Causal Analysis Using International Data, AERA Grants Program</li>
          <li>2010 — School of Education Scholarship, Johns Hopkins University</li>
          <li>1998 — Charles E. Phelps Scholar; Senior Scholar, University of Rochester</li>
          <li>1997 — Barth-Crapsey Undergraduate Research Award, University of Rochester</li>
          <li>1996 — Reach for Rochester Community Service Scholarship, University of Rochester</li>
          <li>1995 — Howard Hughes Summer Research Fellowship, University of Rochester</li>
          <li>1994 — Ronald E. McNair Post-Baccalaureate Achievement Scholar, University of Rochester</li>
          <li>1994 — Bausch and Lomb Scholarship, University of Rochester</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Peer Reviewed Publications</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Patt, R., Veng, S., Vu, L., Shen, C.C., & Mouza, C. (2025). “It’s More Like Recess and Cool”: Teaching Elementary Students Cybersecurity with a Social Robot. Journal of Interactive Learning Research, 36(4), 369-396. https://doi.org/10.70725/722215oqzsne</li>
          <li>Blinkoff, E., Wright, C. A., Scott, M., Fletcher, K., Masters, A. S., Ilgaz, H., Vu, L., Hirsh-Pasek, K., & Golinkoff, R. M. (2023). Shifting from a classroom of reluctant compliance to a classroom of responsive curiosity. Young Children, 78(3), 14-22. https://www.naeyc.org/resources/pubs/yc/fall2023</li>
          <li>Dore, R.A., Hassinger-Das, B., Brezack, N., Valladares, T.L., Paller, A., Vu, L., Golinkoff, R.M., & Hirsh-Pasek, K. (2018). The parent advantage in fostering children's e-book comprehension. Early Childhood Research Quarterly, 44, 24-33. doi: 10.1016/j.ecresq.2018.02.002</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Manuscripts in Preparation</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Vu, L. (in preparation). Evaluation of the Impacts of an After-School Program Using Propensity Score Methods.</li>
          <li>Vu, L., Student, S., Houang, R., & Del Tufo, S. (in preparation). Does extra mathematical practice help students overcome barriers associated with understanding mathematical word problems?</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Proceedings Papers, Reports, and Book Chapters</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Vu, L., Mouza, C., & Garvin, M. (2024). Examining motivational constructs in computational thinking for preservice teacher development. In D. C. Gibson, M. N. Ochoa, & Y. Jin (Eds.), Research highlights in technology and teacher education 2023 (pp. 65-72). AACE. https://www.learntechlib.org/primary/p/223858/</li>
          <li>Vu, L., Mouza, C., & Garvin, M. (2023). Examining Motivational Constructs in Computational Thinking for Preservice Teacher Development. In E. Langran, P. Christensen, & J. Sanson (Eds.), Proceedings of SITE International Conference (pp. 106-112). New Orleans, LA: AACE. https://www.learntechlib.org/primary/p/221857/</li>
          <li>Vu, L., Alkhateeb, B., Garvin, M., & Mouza, C. (2022). Using Word Clouds to Uncover Preservice Teachers’ Understanding of Computational Thinking in the Context of Teacher Education Coursework. In E. Langran (Ed.), Proceedings of SITE International Conference (pp. 2138-2146). San Diego, CA: AACE. https://www.learntechlib.org/primary/p/221004/</li>
          <li>Bower, C., Vu, L., Golinkoff, R. M., & Hirsh-Pasek, K. (2019, July 12). School’s out: Block out time for spatial learning. Brookings Institution. https://www.brookings.edu/blog/education-plus-development/2019/07/09/schools-out-block-out-time-for-spatial-learning/</li>
          <li>Byrnes, J.P., & Vu, L. (2015). Educational Neuroscience: Definitional, Methodological, and Interpretive Issues. WIREs Cognitive Science.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Invited Talks</h2>
        <p className="mt-2 text-gray-800">
          Exploring the Relationship Between Dosage and Working Memory. Education and Brain Sciences Research Lab (EBRL), Peabody College of Education at Vanderbilt University, Nashville, TN (March 2026)
        </p>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Presentations</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Kumon: let’s read for fun!, SSSR (2025)</li>
          <li>Computer-assisted intervention impact on reading outcomes in children with reading disabilities, SSSR (2025)</li>
          <li>An Item-Level Investigation of the Impact of Kumon, NCME (2025)</li>
          <li>Evaluation of the Impacts of Kumon Using Propensity Score Matching, AERA (2024) and Steele Symposium (2024, 1st place)</li>
          <li>An International Study on Children’s and Adults’ Perception of Play, SRCD (2023)</li>
          <li>Growth curve modeling of preschoolers’ spatial skills during spatial training, SRCD (2019)</li>
          <li>An International Comparison of Health Care Policy for Asian Ethnic Minorities, NCUR and McNair (1998)</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Mentoring Experience</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Undergraduate Research Mentees: Andromeda Henderson, Jada Lawrence, Brianna Deklavon (University of Delaware)</li>
          <li>Mentee presentations at SNL (2025), SSSR (2025), and the Steele Symposium (2025)</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Service to the Field</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Volunteer, President, Organization of Chinese Americans – Greater Philadelphia; Convention Chair (2005–2008, 2013–2025)</li>
          <li>Accreditation Reviewer, Member, Middle States Association, Pennsylvania (2025)</li>
          <li>Manuscript Reviewer: Literacy Research: Theory, Method, and Practice, Vol. 75 (2026); Emerging Adulthood (2025)</li>
          <li>Conference Reviewer: American Psychological Association Conference (2026)</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Additional Methodological Training</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Matching Methods for Multilevel Data in Education Research, SREE, Baltimore (2026)</li>
          <li>AFNI Bootcamp (fMRI analysis using the AFNI toolset), Philadelphia (2026)</li>
          <li>Planning and Analysis of Multisite and Cluster Randomized Trials (Luke Miratrix, Harvard University, and Michael Weiss, MDRC), SREE Annual Conference (2025)</li>
          <li>Advanced Meta-Analysis, AERA Annual Meeting (2024)</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Analytical Skills and Competencies</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>Data Collection Tools: REDCap, Qualtrics</li>
          <li>Data Analysis Tools: RStudio, HLM 7, Dedoose, SAS, JASP, JAGS, STAN, STATA, MPlus</li>
          <li>Neuroimaging Tools: SPM12/MATLAB, FSL (FMRIB’s Expert Analysis Tool)</li>
          <li>Programming Languages: R, Python (Google Colab)</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Coursework</h2>
        <p className="mt-2 text-gray-800">
          Qualitative Research; Applied Multivariate Data Analysis; Multilevel Models; Educational Data Mining; Responsible Conduct of Research; Secondary Data for Decision Making; Computational Neuroscience; Regression and Structural Equation Modeling; Mixed Methods in Social Science Research; Randomized Field Trials; Design of Learning Environments; Disciplinary Knowledge/Learning Sciences; Advanced Structural Equation Modeling; Educational Measurement Theory; Intro to fMRI; Program Evaluation; Survey Design; Bayesian Statistics; Data Visualization; Intelligence Testing; fMRI Motor
        </p>
      </section>

      <section>
        <h2 className="font-semibold border-b pb-1">Professional Affiliations</h2>
        <ul className="mt-2 space-y-1 text-gray-800">
          <li>American Educational Research Association (AERA) — Since 2015</li>
          <li>Special Interest Groups: Out-of-School Time, Research on Evaluation, Giftedness — Since 2021</li>
          <li>National Council on Measurement in Education (NCME) — Since 2024</li>
          <li>National Association for Gifted Children, Research and Evaluation Committee — Since 2023</li>
          <li>Pennsylvania Association for Gifted Education (PAGE) — Since 2010</li>
          <li>Society for the Scientific Study of Reading (SSSR) — Since 2025</li>
          <li>Society for Research in Child Development (SRCD) — Since 2020</li>
          <li>Women in Cognitive Science (WiCS+) — Since 2025</li>
          <li>Middle States Association, Member and Volunteer — Since 2010</li>
        </ul>
      </section>
    </div>
  )
}
