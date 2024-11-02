// global.d.ts
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />