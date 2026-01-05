import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-black/5 bg-white/80 backdrop-blur-xl sticky top-0 z-50 dark:bg-black/80 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0071e3] rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-[#1d1d1f] dark:text-white tracking-tight">
                Vibe Coding Tools
              </h1>
              <p className="text-xs text-[#86868b]">
                发现最好的 AI 编码工具
              </p>
            </div>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#0071e3] hover:text-[#0077ed] font-medium transition-colors duration-150"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
