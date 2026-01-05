import { clsx } from 'clsx';
import { Code, Bot, Cloud, Terminal, Search, LayoutGrid } from 'lucide-react';
import type { Category } from '../types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  bot: Bot,
  cloud: Cloud,
  terminal: Terminal,
  search: Search,
};

interface CategoryFilterProps {
  categories: Category[];
  selected: string | null;
  onSelect: (id: string | null) => void;
}

export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={clsx(
          'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
          selected === null
            ? 'bg-indigo-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
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
              'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
              selected === category.id
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
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
