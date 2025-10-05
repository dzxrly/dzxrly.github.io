import type { ToolsSites } from 'src/interface/tools-sites';

const toolsSitesList: ToolsSites[] = [
  {
    siteName: '真实地址生成器',
    siteDesc: '根据IP生成随机的真实地址信息，适用于测试和数据填充。',
    siteUrl: 'https://addrerator.eggtargaryen.com/',
  },
  {
    siteName: '战地中文ID查询工具',
    siteDesc: '快速搜索战地1/5/2042的可用中文ID编码。',
    siteUrl: 'https://bfid.eggtargaryen.com/',
  },
  {
    siteName: '怪物猎人：荒野护石表生成器',
    siteDesc: '用于网页配装器的护石表生成工具。',
    siteUrl: 'https://mhws-amulet.eggtargaryen.com/',
  },
];

export default { toolsSitesList };
