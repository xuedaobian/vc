import { ExternalLink, Check, Sparkles } from 'lucide-react';
import type { Tool, Category } from '../types';
import { clsx } from 'clsx';

interface ToolCardProps {
  tool: Tool;
  category?: Category;
}

const tagColors: Record<string, string> = {
  popular: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'open-source': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  free: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  agent: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  enterprise: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
};

export function ToolCard({ tool, category }: ToolCardProps) {
  const freePrice = tool.pricing.free;
  const proPrice = tool.pricing.pro;

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl flex items-center justify-center text-2xl font-bold text-gray-600 dark:text-gray-300">
            {tool.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {tool.company}
            </p>
          </div>
        </div>
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      {/* Category Badge */}
      {category && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-xs">
            {category.name}
          </span>
        </div>
      )}

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
        {tool.description}
      </p>

      {/* Features */}
      <div className="space-y-2 mb-4">
        {tool.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tool.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className={clsx(
              'px-2 py-0.5 rounded-full text-xs font-medium',
              tagColors[tag] || 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Pricing */}
      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            {freePrice && freePrice.price === 0 ? (
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  免费可用
                </span>
              </div>
            ) : (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                需付费
              </span>
            )}
          </div>
          {proPrice && proPrice.price && (
            <div className="text-right">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ${proPrice.price}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                /{proPrice.period === 'user/month' ? '用户/月' : '月'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Funding badge */}
      {tool.funding && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
            {tool.funding}
          </span>
        </div>
      )}
    </div>
  );
}
