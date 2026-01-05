import type { ToolsData } from '../types';

export const toolsData: ToolsData = {
  lastUpdated: "2025-01-05",
  categories: [
    {
      id: "ide",
      name: "AI IDE / 编辑器",
      description: "集成AI能力的代码编辑器和IDE",
      icon: "code"
    },
    {
      id: "assistant",
      name: "AI 编码助手",
      description: "IDE插件形式的AI编程助手",
      icon: "bot"
    },
    {
      id: "platform",
      name: "全栈应用生成平台",
      description: "通过自然语言生成完整应用的云平台",
      icon: "cloud"
    },
    {
      id: "terminal",
      name: "终端工具",
      description: "命令行中运行的AI编码工具",
      icon: "terminal"
    },
    {
      id: "review",
      name: "代码审查工具",
      description: "AI驱动的代码审查和质量工具",
      icon: "search"
    }
  ],
  tools: [
    {
      id: "cursor",
      name: "Cursor",
      category: "ide",
      description: "基于VSCode的AI原生代码编辑器，支持Composer功能，可通过自然语言描述生成完整应用",
      website: "https://cursor.com",
      logo: "cursor.svg",
      features: [
        "Composer模式生成完整应用",
        "Tab智能补全",
        "支持Claude、GPT-4等多模型",
        "内置Agent功能",
        "跨文件编辑"
      ],
      pricing: {
        free: {
          name: "Hobby",
          price: 0,
          features: ["2000次补全/月", "50次请求/月"]
        },
        pro: {
          name: "Pro",
          price: 20,
          period: "month",
          features: ["无限Tab补全", "无限Auto模式", "$20额度池"]
        },
        enterprise: {
          name: "Teams",
          price: 40,
          period: "user/month",
          features: ["SSO", "管理控制台", "约500次Agent请求/用户"]
        }
      },
      tags: ["popular", "vscode-based", "agent"],
      founded: "2022",
      company: "Anysphere"
    },
    {
      id: "windsurf",
      name: "Windsurf",
      category: "ide",
      description: "Codeium推出的AI原生IDE，拥有强大的Cascade Agent，支持深度代码库理解",
      website: "https://windsurf.com",
      logo: "windsurf.svg",
      features: [
        "Cascade AI Agent深度上下文理解",
        "多文件编辑",
        "工作流自动化",
        "支持VSCode/JetBrains插件",
        "终端集成"
      ],
      pricing: {
        free: {
          name: "Free",
          price: 0,
          features: ["25 credits/月"]
        },
        pro: {
          name: "Pro",
          price: 15,
          period: "month",
          features: ["500 credits/月"]
        },
        enterprise: {
          name: "Enterprise",
          price: 60,
          period: "user/month",
          features: ["ZDR默认开启", "自托管选项"]
        }
      },
      tags: ["popular", "cascade", "agent"],
      founded: "2024",
      company: "Codeium (Cognition)"
    },
    {
      id: "trae",
      name: "Trae",
      category: "ide",
      description: "字节跳动推出的免费AI IDE，支持Claude 3.7 Sonnet和DeepSeek R1，完全免费使用",
      website: "https://www.trae.ai",
      logo: "trae.svg",
      features: [
        "完全免费使用高级模型",
        "Builder模式从零构建应用",
        "Chat模式代码分析",
        "MCP协议支持",
        "Figma集成"
      ],
      pricing: {
        free: {
          name: "Free",
          price: 0,
          features: ["无限使用Claude 3.7 Sonnet", "无限使用DeepSeek R1"]
        }
      },
      tags: ["free", "chinese", "bytedance"],
      founded: "2025",
      company: "ByteDance"
    },
    {
      id: "kiro",
      name: "Kiro",
      category: "ide",
      description: "Amazon推出的规格驱动AI IDE，支持Spec模式和Vibe模式，适合从原型到生产的全流程开发",
      website: "https://kiro.dev",
      logo: "kiro.svg",
      features: [
        "Spec驱动开发",
        "Vibe模式快速原型",
        "Agent Hooks后台自动化",
        "MCP协议支持",
        "CLI工具"
      ],
      pricing: {
        free: {
          name: "Free",
          price: 0,
          features: ["50次Agent交互/月"]
        },
        pro: {
          name: "Pro",
          price: 19,
          period: "user/month",
          features: ["1000次交互"]
        },
        enterprise: {
          name: "Pro+",
          price: 39,
          period: "user/month",
          features: ["3000次交互"]
        }
      },
      tags: ["amazon", "spec-driven", "agent"],
      founded: "2025",
      company: "Amazon (AWS)"
    },
    {
      id: "github-copilot",
      name: "GitHub Copilot",
      category: "assistant",
      description: "GitHub官方AI编程助手，深度集成GitHub生态，支持多种IDE",
      website: "https://github.com/features/copilot",
      logo: "copilot.svg",
      features: [
        "代码补全",
        "Copilot Chat对话",
        "Copilot Edits多文件编辑",
        "代码库索引",
        "支持VSCode/JetBrains/Xcode等"
      ],
      pricing: {
        free: {
          name: "Free",
          price: 0,
          features: ["2000次补全/月", "50次聊天请求/月"]
        },
        pro: {
          name: "Pro",
          price: 10,
          period: "month",
          features: ["无限补全", "300次高级请求"]
        },
        enterprise: {
          name: "Enterprise",
          price: 39,
          period: "user/month",
          features: ["1000次高级请求", "知识库", "自定义模型"]
        }
      },
      tags: ["popular", "github", "enterprise"],
      founded: "2021",
      company: "GitHub (Microsoft)"
    },
    {
      id: "cline",
      name: "Cline",
      category: "assistant",
      description: "开源自主编码Agent，在VSCode中运行，支持BYOK模式，完全透明的操作审计",
      website: "https://cline.bot",
      logo: "cline.svg",
      features: [
        "Plan-then-Act模式",
        "终端命令执行",
        "MCP协议扩展能力",
        "支持多种API提供商",
        "完整的操作审计"
      ],
      pricing: {
        free: {
          name: "开源免费",
          price: 0,
          features: ["自带API密钥使用", "所有功能免费"]
        }
      },
      tags: ["open-source", "byok", "agent"],
      founded: "2024",
      company: "Cline (开源)"
    },
    {
      id: "aider",
      name: "Aider",
      category: "terminal",
      description: "开源终端AI编程助手，支持100+编程语言，自动Git提交，支持本地模型",
      website: "https://aider.chat",
      logo: "aider.svg",
      features: [
        "终端原生体验",
        "自动Git提交",
        "代码库映射",
        "自动运行测试和Lint",
        "语音命令支持"
      ],
      pricing: {
        free: {
          name: "开源免费",
          price: 0,
          features: ["自带API密钥", "支持本地模型"]
        }
      },
      tags: ["open-source", "terminal", "git"],
      founded: "2023",
      company: "Aider (开源)"
    },
    {
      id: "claude-code",
      name: "Claude Code",
      category: "terminal",
      description: "Anthropic官方CLI工具，支持自主编码、检查点回滚、后台任务、Web版本",
      website: "https://github.com/anthropics/claude-code",
      logo: "claude-code.svg",
      features: [
        "终端原生Agentic编码",
        "检查点系统自动保存",
        "Subagents并行任务",
        "Web版本支持GitHub集成",
        "VSCode扩展"
      ],
      pricing: {
        free: {
          name: "按API使用计费",
          price: 0,
          features: ["需要Claude API密钥", "按token计费"]
        }
      },
      tags: ["anthropic", "terminal", "agent"],
      founded: "2025",
      company: "Anthropic"
    },
    {
      id: "codex-cli",
      name: "Codex CLI",
      category: "terminal",
      description: "OpenAI官方编码Agent CLI，支持GPT-5-Codex，代码审查、MCP集成、沙箱安全",
      website: "https://developers.openai.com/codex/cli/",
      logo: "codex.svg",
      features: [
        "默认使用GPT-5-Codex",
        "/review代码审查",
        "MCP协议集成",
        "Agent Skills系统",
        "沙箱安全运行"
      ],
      pricing: {
        free: {
          name: "开源+API计费",
          price: 0,
          features: ["开源CLI", "按OpenAI API计费"]
        }
      },
      tags: ["openai", "open-source", "terminal"],
      founded: "2025",
      company: "OpenAI"
    },
    {
      id: "warp",
      name: "Warp",
      category: "terminal",
      description: "AI原生现代终端，支持自然语言命令、AI建议、团队协作",
      website: "https://www.warp.dev",
      logo: "warp.svg",
      features: [
        "自然语言转命令",
        "AI命令建议",
        "现代化终端UI",
        "团队协作",
        "BYOK支持"
      ],
      pricing: {
        free: {
          name: "Free",
          price: 0,
          features: ["75 AI credits/月", "终端功能免费"]
        },
        pro: {
          name: "Build",
          price: 20,
          period: "month",
          features: ["1500 AI credits", "BYOK支持"]
        }
      },
      tags: ["terminal", "modern-ui", "team"],
      founded: "2020",
      company: "Warp"
    },
    {
      id: "augment-code",
      name: "Augment Code",
      category: "assistant",
      description: "企业级AI编码助手，200K上下文窗口，Memories功能持久化上下文",
      website: "https://www.augmentcode.com",
      logo: "augment.svg",
      features: [
        "200K上下文窗口",
        "Memories持久化记忆",
        "多模型智能路由",
        "SOC 2 Type II认证",
        "企业级安全"
      ],
      pricing: {
        free: {
          name: "Trial",
          price: 0,
          features: ["30,000 credits试用"]
        },
        pro: {
          name: "Indie",
          price: 20,
          period: "month",
          features: ["40,000 credits"]
        },
        enterprise: {
          name: "Enterprise",
          price: 250,
          period: "month",
          features: ["高级功能", "专属支持"]
        }
      },
      tags: ["enterprise", "memory", "context"],
      founded: "2024",
      company: "Augment"
    },
    {
      id: "amp",
      name: "Amp",
      category: "assistant",
      description: "Sourcegraph推出的Agentic编码工具，无token限制，团队协作优先",
      website: "https://ampcode.com",
      logo: "amp.svg",
      features: [
        "无token使用限制",
        "168K上下文窗口",
        "团队线程共享",
        "动态模型选择",
        "VSCode/JetBrains/终端支持"
      ],
      pricing: {
        free: {
          name: "Free (广告支持)",
          price: 0,
          features: ["基础功能", "广告支持模式"]
        },
        pro: {
          name: "Enterprise",
          price: 59,
          period: "user/month",
          features: ["完整功能", "企业安全"]
        }
      },
      tags: ["sourcegraph", "team", "unlimited"],
      founded: "2025",
      company: "Sourcegraph"
    },
    {
      id: "lovable",
      name: "Lovable",
      category: "platform",
      description: "AI全栈应用生成平台，自然语言描述即可生成React应用，集成Supabase后端",
      website: "https://lovable.dev",
      logo: "lovable.svg",
      features: [
        "自然语言生成完整应用",
        "React + Supabase技术栈",
        "GitHub集成",
        "一键部署",
        "代码可导出"
      ],
      pricing: {
        free: {
          name: "Free",
          price: 0,
          features: ["有限credits"]
        },
        pro: {
          name: "Pro",
          price: 25,
          period: "month",
          features: ["100 credits/月", "自定义域名"]
        },
        enterprise: {
          name: "Business",
          price: 50,
          period: "month",
          features: ["SSO", "数据训练可选退出"]
        }
      },
      tags: ["popular", "fullstack", "supabase"],
      founded: "2024",
      company: "Lovable",
      funding: "$200M Series A (2025)"
    },
    {
      id: "bolt",
      name: "Bolt.new",
      category: "platform",
      description: "StackBlitz推出的浏览器内全栈应用生成器，支持多种框架，完全在浏览器运行",
      website: "https://bolt.new",
      logo: "bolt.svg",
      features: [
        "浏览器内运行(WebContainers)",
        "支持Next.js/Vue/Svelte等",
        "Discussion模式头脑风暴",
        "Netlify一键部署",
        "NPM包安装"
      ],
      pricing: {
        free: {
          name: "Free",
          price: 0,
          features: ["150K tokens/天", "1M tokens/月"]
        },
        pro: {
          name: "Pro",
          price: 20,
          period: "month",
          features: ["10M tokens"]
        },
        enterprise: {
          name: "Pro 200",
          price: 200,
          period: "month",
          features: ["120M tokens"]
        }
      },
      tags: ["popular", "browser", "fullstack"],
      founded: "2024",
      company: "StackBlitz"
    },
    {
      id: "replit",
      name: "Replit",
      category: "platform",
      description: "云端IDE + AI Agent平台，支持从描述到部署的完整流程，Effort-Based定价",
      website: "https://replit.com",
      logo: "replit.svg",
      features: [
        "云端开发环境",
        "Replit Agent自主编码",
        "一键部署",
        "团队协作",
        "移动端支持"
      ],
      pricing: {
        free: {
          name: "Starter",
          price: 0,
          features: ["有限AI功能", "3个公开应用"]
        },
        pro: {
          name: "Core",
          price: 25,
          period: "month",
          features: ["$25 credits", "约100次Agent检查点"]
        },
        enterprise: {
          name: "Teams",
          price: 40,
          period: "user/month",
          features: ["$40 credits/用户", "角色权限"]
        }
      },
      tags: ["popular", "cloud-ide", "deploy"],
      founded: "2016",
      company: "Replit"
    },
    {
      id: "v0",
      name: "v0",
      category: "platform",
      description: "Vercel推出的UI组件生成器，专注React + Tailwind组件生成，支持Figma导入",
      website: "https://v0.dev",
      logo: "v0.svg",
      features: [
        "React + Tailwind组件生成",
        "Figma设计导入",
        "一键部署到Vercel",
        "API访问",
        "Design模式"
      ],
      pricing: {
        free: {
          name: "Free",
          price: 0,
          features: ["$5 credits/月"]
        },
        pro: {
          name: "Premium",
          price: 20,
          period: "month",
          features: ["$20 credits", "Figma导入", "API访问"]
        },
        enterprise: {
          name: "Team",
          price: 30,
          period: "user/month",
          features: ["团队共享credits"]
        }
      },
      tags: ["vercel", "ui", "react"],
      founded: "2023",
      company: "Vercel"
    },
    {
      id: "same",
      name: "Same.dev",
      category: "platform",
      description: "快速全栈应用生成器，Next.js + TypeScript，预配置Supabase/Clerk/Neon",
      website: "https://same.new",
      logo: "same.svg",
      features: [
        "Next.js + TypeScript",
        "预配置后端集成",
        "即时部署",
        "自然语言迭代",
        "代码可导出"
      ],
      pricing: {
        free: {
          name: "Free",
          price: 0,
          features: ["基础功能"]
        }
      },
      tags: ["fullstack", "nextjs", "fast"],
      founded: "2024",
      company: "Same"
    },
    {
      id: "rork",
      name: "Rork",
      category: "platform",
      description: "AI移动应用生成器，使用React Native/Expo，支持iOS/Android/Web跨平台",
      website: "https://rork.com",
      logo: "rork.svg",
      features: [
        "React Native/Expo技术栈",
        "iOS/Android/Web跨平台",
        "Expo Go实时预览",
        "应用商店发布支持",
        "代码可导出"
      ],
      pricing: {
        pro: {
          name: "Pro",
          price: 20,
          period: "month",
          features: ["100 messages/月"]
        }
      },
      tags: ["mobile", "react-native", "cross-platform"],
      founded: "2024",
      company: "Rork",
      funding: "$2.8M from a16z"
    },
    {
      id: "coderabbit",
      name: "CodeRabbit",
      category: "review",
      description: "AI代码审查工具，GitHub/GitLab上安装量最高的AI应用，支持40+检查工具",
      website: "https://www.coderabbit.ai",
      logo: "coderabbit.svg",
      features: [
        "PR自动审查",
        "40+检查工具集成",
        "Agentic工作流",
        "Jira/Linear集成",
        "学习团队风格"
      ],
      pricing: {
        free: {
          name: "Free (开源)",
          price: 0,
          features: ["开源项目免费Pro功能"]
        },
        pro: {
          name: "Pro",
          price: null,
          features: ["PR审查", "40+集成", "自定义指令"]
        },
        enterprise: {
          name: "Enterprise",
          price: null,
          features: ["500+席位", "自托管"]
        }
      },
      tags: ["popular", "code-review", "github"],
      founded: "2023",
      company: "CodeRabbit",
      funding: "$88M total ($60M Series B 2025)"
    }
  ]
};
