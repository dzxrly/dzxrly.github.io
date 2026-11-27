import {
  type OpenSourcePackageInfo,
  OpenSourcePackageRegistry,
  type OpenSourceRegistryInfo,
} from 'src/interface/open-source-interface';

const openSourceRegistryList: OpenSourceRegistryInfo[] = [
  {
    packageRegistry: OpenSourcePackageRegistry.NPM,
    iconName: 'integration_instructions',
    titleKeyword: 'openSourceBtnRegistryNpm',
  },
  {
    packageRegistry: OpenSourcePackageRegistry.PYPI,
    iconName: 'data_object',
    titleKeyword: 'openSourceBtnRegistryPypi',
  },
];

const openSourcePackageList: OpenSourcePackageInfo[] = [
  {
    packageRegistry: OpenSourcePackageRegistry.PYPI,
    packageRegistryName: 'PyPI',
    packageName: 'PyREUser3',
    packageDescription: {
      'en-US': 'A Python package for exporting and repacking RE Engine .user.3 files.',
      'zh-Hans': '用于导出和重新打包 RE Engine .user.3 文件的 Python 软件包。',
      'zh-Hant': '用來匯出與重新封裝 RE Engine .user.3 檔案的 Python 套件。',
    },
    packageLink: [
      {
        source: 'PyPI',
        url: 'https://pypi.org/project/PyREUser3/',
      },
      {
        source: 'GitHub',
        url: 'https://github.com/dzxrly/PyREUser3',
      },
    ],
  },
];

export default { openSourceRegistryList, openSourcePackageList };
