declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}

// View transitions (Chromium 111+, Safari 18+, Firefox 144+) are newer than
// TypeScript 5.5's DOM typings; optional because callers feature-detect them.
interface ViewTransition {
  readonly finished: Promise<void>;
}

interface Document {
  startViewTransition?: (update: () => void | Promise<void>) => ViewTransition;
}
