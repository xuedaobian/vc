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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            探索 AI 编码工具的新世界
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Vibe Coding 工具聚合，帮助你找到最适合的 AI 编程助手
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            最后更新: {toolsData.lastUpdated}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <CategoryFilter
            categories={toolsData.categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            显示 <span className="font-medium text-gray-900 dark:text-white">{filteredTools.length}</span> 个工具
            {selectedCategory && (
              <span>
                {' '}在 <span className="font-medium text-indigo-600 dark:text-indigo-400">{getCategoryById(selectedCategory)?.name}</span>
              </span>
            )}
          </p>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                category={getCategoryById(tool.category)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              没有找到匹配的工具，请尝试其他搜索词或分类
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
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
