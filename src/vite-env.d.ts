// vite-env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
        readonly VITE_APP_TITLE: string;
        // 其他环境变量
    }
}

interface ImportMeta {
    glob(url: string, options?: { eager?: boolean; query?; import?}): Record<string, () => Promise<unknown>>;
}

declare module '*.md?raw' {
    const content: string;
    export default content;
}



/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />