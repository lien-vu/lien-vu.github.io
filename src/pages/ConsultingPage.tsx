import usePageTitle from '../ui/usePageTitle'

export default function ConsultingPage() {
  usePageTitle('Consulting — Dr. Lien Vu')
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Consulting</h2>
      <p className="text-gray-800">
        I help organizations design and evaluate programs that improve learning outcomes. My services include:
      </p>
      <ul className="list-disc list-inside text-gray-800">
        <li>Program evaluation and impact analysis (propensity score matching, causal inference)</li>
        <li>Measurement, assessment, and instrument design</li>
        <li>Statistical modeling and experimental/quasi-experimental design</li>
        <li>Professional development evaluation for STEM and literacy programs</li>
      </ul>
      <p className="text-gray-800">
        Software: R (RStudio), Python, SAS, STATA, MPlus, HLM 7, JASP, JAGS, STAN, Dedoose, REDCap, Qualtrics, SPM12/MATLAB, FSL
      </p>
    </div>
  )
}


