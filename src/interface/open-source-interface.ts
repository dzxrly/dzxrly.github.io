import type { SiteLocale } from 'src/site/navigation';

export enum OpenSourcePackageRegistry {
  NPM = 'npm',
  PYPI = 'pypi',
}

export interface OpenSourceRegistryInfo {
  packageRegistry: OpenSourcePackageRegistry;
  iconName: string;
  titleKeyword: string;
}

export interface OpenSourcePackageLink {
  source: string;
  url: string;
}

export interface OpenSourcePackageInfo {
  packageRegistry: OpenSourcePackageRegistry;
  packageRegistryName: string;
  packageName: string;
  packageDescription: Record<SiteLocale, string>;
  packageLink: OpenSourcePackageLink[];
}
