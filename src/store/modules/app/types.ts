export interface AppState {
  theme: string;
  themeColor: string;
  language: string,
  singleIndex: number,
  siteIndex: number,
  colorWeek: boolean;
  footer: boolean;
  menuWidth: number;
  navbar: boolean;
  tabBar: boolean;
  globalSettings: boolean;
  device: string;
  [key: string]: unknown;
}

export interface StateType {
  key: string,
  value: any
}