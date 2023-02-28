/// <reference types="vite/client" />

declare type formatBytes = (size: number, fractionDigits: number) => string;
declare type loadScript = (url: string) => Promise<string>;
declare type fetch = (url: string) => Promise<string>;