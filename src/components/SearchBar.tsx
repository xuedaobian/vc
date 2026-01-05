import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="搜索工具名称、描述或标签..."
        className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl text-[#1d1d1f] placeholder:text-[#86868b] border-none outline-none focus:ring-2 focus:ring-[#0071e3]/30 transition-shadow duration-150 dark:bg-white/10 dark:text-white"
      />
    </div>
  );
}
