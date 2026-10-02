import usePageTitle from '../ui/usePageTitle'

export default function ResearchPage() {
  usePageTitle('Research — Dr. Lien Vu')
  return (
    <article className="prose max-w-none">
      <h2>Research Focus</h2>
      <ul>
        <li>
          Application of statistical techniques to evaluate STEM learning through interventions, professional development, and instructional programs.
        </li>
        <li>
          Educational neuroscience, cognitive development, and research into the fundamental mechanisms of learning as they inform development of instructional principles.
        </li>
      </ul>

      <h2>Dissertation</h2>
      <p>
        <em>Kumon and the Developing Mind: A Three-Part Study of Learning, Achievement, and Brain Change</em>
        <br />
        Ph.D., Educational Statistics and Research Methods, University of Delaware (expected 2027). Advisors: Dr. Henry May and Dr. Stephanie Del Tufo.
      </p>

      <h2>Grants</h2>
      <p>
        Co-Investigator and Graduate Researcher, <em>Exploring the Relationship Between Dosage, Working Memory, and Home Environment Factors After a Math and Reading Intervention</em>. University of Delaware Research Foundation – Strategic Initiative Grant.
      </p>

      <h2>Current and Recent Projects</h2>
      <ul>
        <li>Knowledge Brokering: CREATEd (2025–2026)</li>
        <li>Investigating the neurobiological changes resulting from a reading or mathematics intervention (2023–Present)</li>
        <li>Principal and School Policy Analysis (2022–2023)</li>
        <li>Examining Motivational Constructs in Computational Thinking for Preservice Teacher Development (2021–2022)</li>
      </ul>
    </article>
  )
}
