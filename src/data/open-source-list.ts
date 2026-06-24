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
    packageDescription: 'A Python package for RE Engine .user.3 file export & re-pack.',
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
