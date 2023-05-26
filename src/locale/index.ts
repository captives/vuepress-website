import { reactive } from 'vue';
import { createI18n } from 'vue-i18n';

export let i18Config = reactive({
    locale: localStorage.getItem('arco-locale') || 'en-US',
    fallbackLocale: 'zh-CN',
    allowComposition: true,
    silentTranslationWarn: true,
    messages: {}
});

/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input: string, re: RegExp | RegExp[], value: string) {
    if (re instanceof RegExp) return input.replace(re, value);
    return re.reduce((input, re) => input.replace(re, value), input);
}

/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input: string, options: any = {}) {
    // Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
    const DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
    // Remove all non-word characters.
    const DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;

    const {
        splitRegexp = DEFAULT_SPLIT_REGEXP,
        stripRegexp = DEFAULT_STRIP_REGEXP,
        transform = (str: string) => {
            return str.toLowerCase();
        },
        delimiter = " ",
    } = options;

    let result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    let start = 0;
    let end = result.length;

    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0") start++;
    while (result.charAt(end - 1) === "\0") end--;

    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}


/**
 * 创建具有模块名称的国家化语言
 * @param name 模块名称
 * @param locales 
 * @returns 
 */
export function defineLocale(name: string | null, locale: { [key: string]: string }): { [key: string]: string } {
    Object.keys(locale).forEach((key) => {
        if (Reflect.has(locale, key)) {
            locale[key as keyof typeof locale] = noCase((!!name ? name + "." : '') + locale[key as keyof typeof locale], { delimiter: "." });
        }
    });
    return locale;
}

/**
 * 增加或设置国际化语言
 * @param language 
 * @param locale 
 */
export function setLocale(language: string, locale: { [key: string]: string }) {
    if (Reflect.has(i18Config.messages, language)) {
        Object.assign(i18Config.messages[language], locale);
    } else {
        i18Config.messages[language] = locale;
    }
}

/***
 * BEGIN: 把子模块语言包加载进来
 */
const langs: { [key: string]: any } = import.meta.glob('/src/locale/lang/*.lang.ts', { eager: true });
for (let [path, value] of Object.entries(langs)) {
    const language: string = path.slice(path.lastIndexOf('/') + 1, path.indexOf('.lang.ts'));
    if (!!value.default) {
        i18Config.messages[value.default['app.language.locale']] = value.default;
        Object.assign(i18Config.messages[language], value.default);
    }
};

const modules: { [key: string]: any } = import.meta.glob('/src/**/*.lang.ts', { eager: true });
for (let [path, value] of Object.entries(modules)) {
    const language: string = path.slice(path.lastIndexOf('/') + 1, path.indexOf('.lang.ts'));
    !!value.default && Object.assign(i18Config.messages[language], value.default);
};

/**************************** END ****************************/

console.log(i18Config);
export default createI18n(i18Config);
