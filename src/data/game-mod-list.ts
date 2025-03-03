import { GameModInfo, GameSeries } from 'src/interface/game-mod-info';

const gameModList: GameModInfo[] = [
  {
    gameSeries: GameSeries.MHS,
    gameName: 'Monster Hunter: World (Iceborne)',
    modName: 'CSO SGMissile HBG | 撼宇碎星替换冥赤重弩MOD',
    modVersion: 'Ver.1.0',
    modDescription:
      "This MOD will replace the model of Safi's Burstcannon with the model of SGMissile shotgun in CSO/CS-Zombie.\n" +
      '这个MOD将会使用CSOL的撼宇碎星(狗神)武器模型替换冥赤系列重弩。\n',
    modDownloadLink: [
      {
        source: 'NexusMods',
        url: 'https://www.nexusmods.com/monsterhunterworld/mods/3258',
      },
      {
        source: '小黑盒',
        url: 'https://api.xiaoheihe.cn/v3/bbs/app/api/web/share?link_id=39322702',
      },
    ],
  },
  {
    gameSeries: GameSeries.MHS,
    gameName: 'Monster Hunter: Rise (Sunbreak)',
    modName: 'Auto Resupply Item Set | 任务完成自动补充背包',
    modVersion: 'Ver.1.4',
    modDescription:
      'This mod can automatically resupply at the end of a mission according to a preset combination of item sets.\n' +
      '这个MOD可以在你完成任务时自动加载你的道具个人组合。\n',
    modDownloadLink: [
      {
        source: 'NexusMods',
        url: 'https://www.nexusmods.com/monsterhunterrise/mods/1088',
      },
      {
        source: 'GitHub',
        url: 'https://github.com/dzxrly/MHR-ItemSetAutoResupplyMod',
      },
      {
        source: '小黑盒',
        url: 'https://api.xiaoheihe.cn/v3/bbs/app/api/web/share?link_id=87648433',
      },
    ],
  },
  {
    gameSeries: GameSeries.MHS,
    gameName: 'Monster Hunter: Wilds',
    modName: 'ItemBox Editor | 道具箱编辑器',
    modVersion: 'Ver.0.2 - beta',
    modDescription:
      'A mod of Monster Hunter Wilds for editing the itembox.\n' +
      '用于怪物猎人：荒野的道具箱编辑器。\n',
    modDownloadLink: [
      {
        source: 'GitHub',
        url: 'https://github.com/dzxrly/MHWS-BoxItemEditor',
      },
      {
        source: 'NexusMods',
        url: 'https://www.nexusmods.com/monsterhunterwilds/mods/102',
      },
    ],
  },
];

export default { gameModList };
