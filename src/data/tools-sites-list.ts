import type { ToolsSites } from 'src/interface/tools-sites';

const toolsSitesList: ToolsSites[] = [
  {
    siteName: {
      'en-US': 'Real Address Generator',
      'zh-Hans': '真实地址生成器',
      'zh-Hant': '真實地址產生器',
    },
    siteDesc: {
      'en-US':
        'Generate random real-world addresses based on an IP address for tests and sample data.',
      'zh-Hans': '根据 IP 生成随机的真实地址，适用于测试和数据填充。',
      'zh-Hant': '根據 IP 產生隨機的真實地址，適用於測試和資料填充。',
    },
    siteUrl: 'https://addrerator.eggtargaryen.com/',
  },
  {
    siteName: {
      'en-US': 'Battlefield Chinese ID Lookup',
      'zh-Hans': '战地中文 ID 查询工具',
      'zh-Hant': '戰地風雲中文 ID 查詢工具',
    },
    siteDesc: {
      'en-US':
        'Look up supported Chinese character codes for player IDs in Battlefield 1, V, and 2042.',
      'zh-Hans': '快速查询《战地 1》《战地 5》和《战地 2042》支持的中文 ID 编码。',
      'zh-Hant': '快速查詢《戰地風雲 1》《戰地風雲 V》和《戰地風雲 2042》支援的中文 ID 編碼。',
    },
    siteUrl: 'https://bfcnid.eggtargaryen.com/',
  },
  {
    siteName: {
      'en-US': 'Monster Hunter Wilds Talisman Table Generator',
      'zh-Hans': '怪物猎人：荒野护石表生成器',
      'zh-Hant': '魔物獵人 荒野護石表產生器',
    },
    siteDesc: {
      'en-US': 'Generate talisman tables for the web-based armor set builder.',
      'zh-Hans': '为网页配装器生成护石表。',
      'zh-Hant': '為網頁配裝器產生護石表。',
    },
    siteUrl: 'https://mhws-amulet.eggtargaryen.com/',
  },
  {
    siteName: {
      'en-US': 'Monster Hunter Wilds Game Database',
      'zh-Hans': '怪物猎人：荒野解包资料站',
      'zh-Hant': '魔物獵人 荒野拆包資料庫',
    },
    siteDesc: {
      'en-US': 'Browse data extracted from the game in a searchable web interface.',
      'zh-Hans': '在网页中查阅从游戏中解包得到的各类数据。',
      'zh-Hant': '在網頁中查閱從遊戲中拆包取得的各類資料。',
    },
    siteUrl: 'https://mhws-info.eggtargaryen.com/',
  },
  {
    siteName: {
      'en-US': 'AI Frontend Benchmark',
      'zh-Hans': 'AI 前端测试对比',
      'zh-Hant': 'AI 前端測試比較',
    },
    siteDesc: {
      'en-US': 'Compare the pages and interfaces AI models produce for the same frontend tasks.',
      'zh-Hans': '比较不同 AI 模型在相同前端任务中生成的页面和界面。',
      'zh-Hant': '比較不同 AI 模型在相同前端任務中產生的網頁和介面。',
    },
    siteUrl: 'https://ai-frontend-test.eggtargaryen.com/',
  },
];

export default { toolsSitesList };
