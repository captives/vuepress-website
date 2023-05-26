
import navbar from "../config/navbar";

export default {
    logo: 'assets/images/logo.svg',
    repo: 'captives/vuepress-website',
    repoLabel: "Captives",
    docsDir: "docx",
    // 启用页面滚动
    smoothScroll: true,
    backToHome: "返回Captives",
    editLinkPattern: ':repo/edit/develop/:path',
    locales: {
        '/': {
            // navbar: true,
            sidebar: false,
            editLink: false,
            selectLanguageText: "Captives",
            selectLanguageName: "Captives"
        },
        '/guide/': {
            navbar,
            editLink: true,
            // sidebar: guideSidebar,
            selectLanguageText: "学习指南",
            selectLanguageName: "学习指南"
        },
        // '/poetry/': {
        //     navbar,
        //     selectLanguageText: "中华古诗词",
        //     selectLanguageName: "中华古诗词"
        // }
    }
};