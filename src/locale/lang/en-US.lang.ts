import Locale from './index';

console.log('英文', Locale.loading, Locale);

export default {
    [Locale.loading]:"loading",
    [Locale.language]: "English",
    [Locale.languageLocale]: "en-US",
    [Locale.currency]: "￥",
    [Locale.currencyType]: "$",
    [Locale.timeZone]: "+0800",
    [Locale.timeFormat]: "YYYY-MM-DD",
    [Locale.themeLight]: "light",
    [Locale.themeDark]: "dark"
}; 