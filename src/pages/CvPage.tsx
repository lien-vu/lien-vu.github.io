import usePageTitle from '../ui/usePageTitle'

export default function CvPage() {
  usePageTitle('CV — Dr. Lien Vu')
  const baseUrl = import.meta.env.BASE_URL
  return (
    <div className="space-y-6">
      <a
        className="inline-flex items-center gap-2 text-lg text-brand-700 font-medium hover:gap-3 transition-all"
        href={`${baseUrl}cv/Lien-Vu-CV.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        Click here for CV <span aria-hidden>→</span>
      </a>
    </div>
  )
}
