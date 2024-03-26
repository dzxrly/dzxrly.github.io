import { OpenSourceInterface } from 'src/interface/open-source-interface';

const OpenSourceInfo: OpenSourceInterface[] = [
  {
    name: 'BF2042Stats V2',
    description: [
      {
        language: 'en-US',
        description: 'A simple application for querying Battlefield 2042 profiles, supporting Android and Web PWA'
      },
      {
        language: 'zh-CN',
        description: '一个简单的Flutter应用，用于查询战地2042战绩，支持Android与Web PWA'
      }
    ],
    url: 'https://github.com/dzxrly/BF2042State2.0',
    tags: ['Flutter', 'Android', 'PWA', 'Battlefield 2042'],
    language: ['Dart'],
    license: 'MIT',
    bannerUri: 'https://raw.githubusercontent.com/dzxrly/BF2042State2.0/main/img/banner_EN.svg',
    openSourceDate: new Date('2023-10-17'),
    githubRepoInfo: {
      owner: 'dzxrly',
      repo: 'BF2042State2.0'
    }
  },
  {
    name: 'BF2042Stats V1',
    description: [
      {
        language: 'en-US',
        description: 'An Android App for BF 2042 based on Jetpack Compose'
      },
      {
        language: 'zh-CN',
        description: '一个基于Jetpack Compose的战地2042战绩查询应用'
      }
    ],
    url: 'https://github.com/dzxrly/BF2042State',
    tags: ['Jetpack Compose', 'Android', 'Battlefield 2042'],
    language: ['Kotlin'],
    license: 'MIT',
    openSourceDate: new Date('2023-01-23'),
    githubRepoInfo: {
      owner: 'dzxrly',
      repo: 'BF2042State'
    }
  }
];

export {
  OpenSourceInfo
};
