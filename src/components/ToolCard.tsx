import { useState } from 'react';
import { ExternalLink, Check, Sparkles } from 'lucide-react';
import type { Tool, Category } from '../types';
import { clsx } from 'clsx';

interface ToolCardProps {
  tool: Tool;
  category?: Category;
}

const tagColors: Record<string, string> = {
  popular: 'bg-[#ff9500]/10 text-[#ff9500]',
  'open-source': 'bg-[#34c759]/10 text-[#34c759]',
  free: 'bg-[#30d158]/10 text-[#30d158]',
  agent: 'bg-[#af52de]/10 text-[#af52de]',
  enterprise: 'bg-[#0071e3]/10 text-[#0071e3]',
};

function getDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
}

// 自定义图标 URL 映射（针对 website 是 GitHub 等非官网的情况）
const customLogoUrls: Record<string, string> = {
  'claude-code': 'https://www.anthropic.com/favicon.ico',
  'codex-cli': 'https://openai.com/favicon.ico',
  'aider': 'https://aider.chat/assets/favicon.ico',
  'taskmaster': 'https://www.anthropic.com/favicon.ico',
};

function getFaviconUrl(toolId: string, website: string): string {
  if (customLogoUrls[toolId]) {
    return customLogoUrls[toolId];
  }
  const domain = getDomain(website);
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

export function ToolCard({ tool, category }: ToolCardProps) {
  const [imgError, setImgError] = useState(false);
  const freePrice = tool.pricing.free;
  const proPrice = tool.pricing.pro;
  const faviconUrl = getFaviconUrl(tool.id, tool.website);

  return (
    <div className="group bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200 dark:bg-[#1c1c1e]">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#f5f5f7] rounded-xl flex items-center justify-center overflow-hidden dark:bg-[#2c2c2e]">
            {!imgError ? (
              <img
                src={faviconUrl}
                alt={`${tool.name} logo`}
                className="w-8 h-8 object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="text-xl font-semibold text-[#1d1d1f] dark:text-white">
                {tool.name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors duration-150 dark:text-white">
              {tool.name}
            </h3>
            <p className="text-sm text-[#86868b]">
              {tool.company}
            </p>
          </div>
        </div>
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-[#86868b] hover:text-[#0071e3] rounded-lg transition-colors duration-150"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      {/* Category Badge */}
      {category && (
        <div className="mb-3">
          <span className="inline-flex items-center px-2.5 py-1 bg-[#f5f5f7] text-[#6e6e73] rounded-lg text-xs font-medium dark:bg-[#2c2c2e] dark:text-[#86868b]">
            {category.name}
          </span>
        </div>
      )}

      {/* Description */}
      <p className="text-[#6e6e73] text-sm mb-4 line-clamp-2 leading-relaxed dark:text-[#86868b]">
        {tool.description}
      </p>

      {/* Features */}
      <div className="space-y-2 mb-4">
        {tool.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start gap-2 text-sm text-[#6e6e73] dark:text-[#86868b]">
            <Check className="w-4 h-4 text-[#34c759] mt-0.5 flex-shrink-0" />
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
              'px-2.5 py-0.5 rounded-full text-xs font-medium',
              tagColors[tag] || 'bg-[#f5f5f7] text-[#6e6e73] dark:bg-[#2c2c2e] dark:text-[#86868b]'
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Pricing */}
      <div className="pt-4 border-t border-[#f5f5f7] dark:border-[#2c2c2e]">
        <div className="flex items-center justify-between">
          <div>
            {freePrice && freePrice.price === 0 ? (
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#34c759]" />
                <span className="text-sm font-medium text-[#34c759]">
                  免费可用
                </span>
              </div>
            ) : (
              <span className="text-sm text-[#86868b]">
                需付费
              </span>
            )}
          </div>
          {proPrice && proPrice.price && (
            <div className="text-right">
              <span className="text-lg font-semibold text-[#1d1d1f] dark:text-white">
                ${proPrice.price}
              </span>
              <span className="text-sm text-[#86868b]">
                /{proPrice.period === 'user/month' ? '用户/月' : '月'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Funding badge */}
      {tool.funding && (
        <div className="mt-3 pt-3 border-t border-[#f5f5f7] dark:border-[#2c2c2e]">
          <span className="text-xs text-[#0071e3] font-medium">
            {tool.funding}
          </span>
        </div>
      )}
    </div>
  );
}
