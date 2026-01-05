import { useState, useMemo } from 'react';
import { Header, CategoryFilter, SearchBar, ToolCard } from './components';
import { toolsData } from './data/tools';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return toolsData.tools.filter((tool) => {
      // Filter by category
      if (selectedCategory && tool.category !== selectedCategory) {
        return false;
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.company.toLowerCase().includes(query) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryById = (id: string) => {
    return toolsData.categories.find((cat) => cat.id === id);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-black">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] dark:text-white mb-4 tracking-tight">
            探索 AI 编码工具的新世界
          </h2>
          <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
            Vibe Coding 工具聚合，帮助你找到最适合的 AI 编程助手
          </p>
          <p className="text-sm text-[#86868b] mt-4">
            最后更新: {toolsData.lastUpdated}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-10">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <CategoryFilter
            categories={toolsData.categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-[#6e6e73]">
            显示 <span className="font-medium text-[#1d1d1f] dark:text-white">{filteredTools.length}</span> 个工具
            {selectedCategory && (
              <span>
                {' '}在 <span className="font-medium text-[#0071e3]">{getCategoryById(selectedCategory)?.name}</span>
              </span>
            )}
          </p>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                category={getCategoryById(tool.category)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[#86868b] text-lg">
              没有找到匹配的工具，请尝试其他搜索词或分类
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-[#86868b] text-sm">
            <p>Vibe Coding Tools - 发现最好的 AI 编码工具</p>
            <p className="mt-2">
              数据来源于公开信息，如有错误请提交 Issue
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
