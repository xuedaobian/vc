import { clsx } from 'clsx';
import { Code, Bot, Cloud, Terminal, Search, LayoutGrid, Box } from 'lucide-react';
import type { Category } from '../types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  bot: Bot,
  cloud: Cloud,
  terminal: Terminal,
  search: Search,
  box: Box,
};

interface CategoryFilterProps {
  categories: Category[];
  selected: string | null;
  onSelect: (id: string | null) => void;
}

export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onSelect(null)}
        className={clsx(
          'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150',
          selected === null
            ? 'bg-[#0071e3] text-white'
            : 'bg-white/60 text-[#1d1d1f] hover:bg-white dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
        )}
      >
        <LayoutGrid className="w-4 h-4" />
        全部
      </button>
      {categories.map((category) => {
        const Icon = iconMap[category.icon] || Code;
        return (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={clsx(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150',
              selected === category.id
                ? 'bg-[#0071e3] text-white'
                : 'bg-white/60 text-[#1d1d1f] hover:bg-white dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
            )}
          >
            <Icon className="w-4 h-4" />
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
