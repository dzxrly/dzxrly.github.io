import { type GameModInfo, GameSeries } from 'src/interface/game-mod-info';

const games = {
  world: {
    'en-US': 'Monster Hunter: World (Iceborne)',
    'zh-Hans': '怪物猎人：世界（冰原）',
    'zh-Hant': '魔物獵人 世界（Iceborne）',
  },
  rise: {
    'en-US': 'Monster Hunter Rise: Sunbreak',
    'zh-Hans': '怪物猎人：崛起（曙光）',
    'zh-Hant': '魔物獵人 崛起（破曉）',
  },
  wilds: {
    'en-US': 'Monster Hunter Wilds',
    'zh-Hans': '怪物猎人：荒野',
    'zh-Hant': '魔物獵人 荒野',
  },
  stories: {
    'en-US': 'Monster Hunter Stories 3',
    'zh-Hans': '怪物猎人物语 3',
    'zh-Hant': '魔物獵人物語 3',
  },
  pragmata: {
    'en-US': 'PRAGMATA',
    'zh-Hans': '识质存在',
    'zh-Hant': 'PRAGMATA',
  },
};

const gameModList: GameModInfo[] = [
  {
    gameSeries: GameSeries.MHS,
    gameName: games.world,
    modName: {
      'en-US': 'CSO SGMissile HBG',
      'zh-Hans': '撼宇碎星替换冥赤重弩',
      'zh-Hant': '撼宇碎星替換冥赤重弩',
    },
    modDescription: {
      'en-US':
        "Replaces Safi's Burstcannon with the SGMissile shotgun model from Counter-Strike Online.",
      'zh-Hans': '使用《反恐精英 Online》的撼宇碎星（狗神）霰弹枪模型替换冥赤龙重弩。',
      'zh-Hant': '使用《絕對武力 Online》的撼宇碎星霰彈槍模型替換冥赤龍重弩。',
    },
    modDownloadLink: [
      { source: 'Nexus Mods', url: 'https://www.nexusmods.com/monsterhunterworld/mods/3258' },
      {
        source: '小黑盒',
        url: 'https://api.xiaoheihe.cn/v3/bbs/app/api/web/share?link_id=39322702',
      },
    ],
  },
  {
    gameSeries: GameSeries.MHS,
    gameName: games.rise,
    modName: {
      'en-US': 'Auto Resupply Item Set',
      'zh-Hans': '任务完成自动补充背包',
      'zh-Hant': '任務完成後自動補充道具',
    },
    modDescription: {
      'en-US':
        'Automatically resupplies your item pouch from a preset loadout at the end of a quest.',
      'zh-Hans': '任务结束后，按预设的道具组合自动补充背包。',
      'zh-Hant': '任務結束後，依照預設的道具組合自動補充道具袋。',
    },
    modDownloadLink: [
      { source: 'Nexus Mods', url: 'https://www.nexusmods.com/monsterhunterrise/mods/1088' },
      { source: 'GitHub', url: 'https://github.com/dzxrly/MHR-ItemSetAutoResupplyMod' },
      {
        source: '小黑盒',
        url: 'https://api.xiaoheihe.cn/v3/bbs/app/api/web/share?link_id=87648433',
      },
    ],
  },
  {
    gameSeries: GameSeries.MHS,
    gameName: games.wilds,
    modName: {
      'en-US': 'ItemBox Editor',
      'zh-Hans': '道具箱编辑器',
      'zh-Hant': '道具箱編輯器',
    },
    modDescription: {
      'en-US': 'Edit the contents of your item box in Monster Hunter Wilds.',
      'zh-Hans': '编辑《怪物猎人：荒野》道具箱里的道具。',
      'zh-Hant': '編輯《魔物獵人 荒野》道具箱中的道具。',
    },
    modDownloadLink: [
      { source: 'Nexus Mods', url: 'https://www.nexusmods.com/monsterhunterwilds/mods/102' },
      { source: 'GitHub', url: 'https://github.com/dzxrly/MHWS-BoxItemEditor' },
    ],
  },
  {
    gameSeries: GameSeries.MHS,
    gameName: games.wilds,
    modName: {
      'en-US': 'CSO SGMissile HBG',
      'zh-Hans': '撼宇碎星替换锁刃重弩',
      'zh-Hant': '撼宇碎星替換鎖刃重弩',
    },
    modDescription: {
      'en-US':
        "Replaces Arkveld's rarity 8 heavy bowgun with the SGMissile shotgun model from Counter-Strike Online.",
      'zh-Hans': '使用《反恐精英 Online》的撼宇碎星霰弹枪模型替换稀有度 8 的锁刃龙重弩。',
      'zh-Hant': '使用《絕對武力 Online》的撼宇碎星霰彈槍模型替換稀有度 8 的鎖刃龍重弩。',
    },
    modDownloadLink: [
      { source: 'Nexus Mods', url: 'https://www.nexusmods.com/monsterhunterwilds/mods/3178' },
    ],
  },
  {
    gameSeries: GameSeries.MHS,
    gameName: games.stories,
    modName: {
      'en-US': 'AreaEcoLevelCustomizer',
      'zh-Hans': '生态等级编辑器',
      'zh-Hant': '生態等級編輯器',
    },
    modDescription: {
      'en-US': 'Customize the ecology level of each area in Monster Hunter Stories 3.',
      'zh-Hans': '调整《怪物猎人物语 3》中各个区域的生态等级。',
      'zh-Hant': '調整《魔物獵人物語 3》中各個區域的生態等級。',
    },
    modDownloadLink: [
      {
        source: 'Nexus Mods',
        url: 'https://www.nexusmods.com/monsterhunterstories3twistedreflection/mods/4',
      },
      { source: 'GitHub', url: 'https://github.com/dzxrly/MHST3-AreaEcoLevelCustomizer' },
    ],
  },
  {
    gameSeries: GameSeries.MHS,
    gameName: games.stories,
    modName: {
      'en-US': 'NestRarityLocker',
      'zh-Hans': '巢穴稀有度锁定',
      'zh-Hant': '巢穴稀有度鎖定',
    },
    modDescription: {
      'en-US': 'Lock nest rarity in Monster Hunter Stories 3.',
      'zh-Hans': '锁定《怪物猎人物语 3》中的巢穴稀有度。',
      'zh-Hant': '鎖定《魔物獵人物語 3》中的巢穴稀有度。',
    },
    modDownloadLink: [
      {
        source: 'Nexus Mods',
        url: 'https://www.nexusmods.com/monsterhunterstories3twistedreflection/mods/5',
      },
      { source: 'GitHub', url: 'https://github.com/dzxrly/MHST3-LockNestMaxRarity' },
    ],
  },
  {
    gameSeries: GameSeries.MHS,
    gameName: games.stories,
    modName: {
      'en-US': 'Item Box Editor',
      'zh-Hans': '道具箱编辑器',
      'zh-Hant': '道具箱編輯器',
    },
    modDescription: {
      'en-US': 'Edit the contents of your item box in Monster Hunter Stories 3.',
      'zh-Hans': '编辑《怪物猎人物语 3》道具箱里的道具。',
      'zh-Hant': '編輯《魔物獵人物語 3》道具箱中的道具。',
    },
    modDownloadLink: [
      {
        source: 'Nexus Mods',
        url: 'https://www.nexusmods.com/monsterhunterstories3twistedreflection/mods/6',
      },
      { source: 'GitHub', url: 'https://github.com/dzxrly/MHST3-ItemBoxEditor' },
    ],
  },
  {
    gameSeries: GameSeries.MHS,
    gameName: games.stories,
    modName: {
      'en-US': 'Normal Otomon Scale',
      'zh-Hans': '正常随行兽体型',
      'zh-Hant': '正常隨行獸體型',
    },
    modDescription: {
      'en-US': 'Keeps every Monstie at its normal size in Monster Hunter Stories 3.',
      'zh-Hans': '将《怪物猎人物语 3》中的随行兽锁定为正常体型。',
      'zh-Hant': '將《魔物獵人物語 3》中的隨行獸固定為正常體型。',
    },
    modDownloadLink: [
      {
        source: 'Nexus Mods',
        url: 'https://www.nexusmods.com/monsterhunterstories3twistedreflection/mods/172',
      },
      { source: 'GitHub', url: 'https://github.com/dzxrly/MHST3-NormalOtomonScale' },
    ],
  },
  {
    gameSeries: GameSeries.PRAGMATA,
    gameName: games.pragmata,
    modName: {
      'en-US': 'Maximum Time Limit',
      'zh-Hans': '模拟游戏时间上限最大化',
      'zh-Hant': '模擬小遊戲時間上限最大化',
    },
    modDescription: {
      'en-US': "Sets the simulation minigame's time limit to its maximum in PRAGMATA.",
      'zh-Hans': '将《识质存在》中模拟小游戏的时间上限设为最大值。',
      'zh-Hant': '將《PRAGMATA》中模擬小遊戲的時間上限設為最大值。',
    },
    modDownloadLink: [
      { source: 'Nexus Mods', url: 'https://www.nexusmods.com/pragmata/mods/136' },
      { source: 'GitHub', url: 'https://github.com/dzxrly/PRAGMATA-MaximumTimeLimit' },
    ],
  },
  {
    gameSeries: GameSeries.MHS,
    gameName: games.wilds,
    modName: {
      'en-US': 'Better4KHDTexture',
      'zh-Hans': '高清材质包画质增强',
      'zh-Hant': '高畫質材質包影像強化',
    },
    modDescription: {
      'en-US': 'Enhances the visual quality of high-resolution textures in Monster Hunter Wilds.',
      'zh-Hans': '增强《怪物猎人：荒野》的高清材质表现。',
      'zh-Hant': '改善《魔物獵人 荒野》的高解析度材質表現。',
    },
    modDownloadLink: [
      { source: 'GitHub', url: 'https://github.com/dzxrly/MHWS-Better4KHDTexture' },
    ],
  },
];

export default { gameModList };
