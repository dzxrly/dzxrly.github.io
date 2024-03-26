import { PersonalWebSite } from 'src/interface/personal-info-interface';

const languageBadgeUrlList: string[] = [
  'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white',
  'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white',
  'https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white',
  'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white',
  'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
  'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
  'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
  'https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D',
  'https://img.shields.io/badge/Quasar-16B7FB?style=for-the-badge&logo=quasar&logoColor=black',
  'https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white',
  'https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white',
  'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black',
  'https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white'
];

const personalWebSiteList: PersonalWebSite[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/dzxrly',
    iconName: 'fa-brands fa-github'
  },
  {
    name: 'Gmail',
    url: 'aegonhe993@gmail.com',
    iconName: 'fa-regular fa-paper-plane'
  },
  {
    name: 'Steam',
    url: 'https://steamcommunity.com/id/eggtargaryen/',
    iconName: 'fa-brands fa-steam'
  },
  {
    name: 'Nexusmods',
    url: 'https://www.nexusmods.com/users/myaccount?tab=files',
    iconPath: 'publicAssets/nexusmods.svg'
  }
];

export default {
  languageBadgeUrlList,
  personalWebSiteList
};
