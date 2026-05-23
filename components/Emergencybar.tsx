export default function EmergencyBar() {
  return (
    <div className="bg-[#1010a7] text-white text-xs font-sans py-2 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shrink-0" />
          <span className="text-white/70">
            <span className="font-semibold text-white">24/7 Emergency:</span>{' '}
            <a href="tel:+18005550199" className="text-amber-400 font-semibold hover:text-white transition-colors">+1 (800) 555-0199</a>
            <span className="mx-2 text-white/30">·</span>
            <a href="tel:+442071234567" className="text-amber-400 font-semibold hover:text-white transition-colors">+44 207 123 4567</a>
          </span>
        </div>
      </div>
    </div>
  )
}