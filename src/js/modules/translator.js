import yeast from 'yeast';
import $ from 'jquery';

function setLanguageCookie(lang) {
    document.cookie = `lang=${lang}; path=/; max-age=31536000`; // 1 year
}

function getLanguageCookie() {
    const match = document.cookie.match(/(?:^|; )lang=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : null;
}

function getCurrentLanguage() {
    const params = new URLSearchParams(window.location.search);
    let lang = params.get('lang');
    if (lang) {
        setLanguageCookie(lang);
        // Remove the lang parameter from URL without reloading
        params.delete('lang');
        const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '') + window.location.hash;
        window.history.replaceState({}, '', newUrl);
        return lang;
    }
    lang = getLanguageCookie();
    if (lang) return lang;
    return 'en';
}

const translationStrings = {
    jp: {
        "About": "自己紹介",
        "Home": "ホーム",
        "Lang": "言語",
        "Socials":"SNS",
        "Language Selection":"言語選択",
        "LANGUAGE SELECTION":"言語選択",
        "Projects":"プロジェクト",
        "PROJECTS":"プロジェクト",
        "Your Experience":"データを",
        "Is Loading":"読み込み中",
        "CV": "履歴書",
        "SCROLL DOWN": "スクロ-ル →",
        "Software": "ソフト",
        "Research": "研究",
        "Hardware": "ハード",
        "Design": "デザイン",
        "Misc": "その他",
        "MANUFACTURE DATE": "製造",
        "CHANGE":"テーマを",
        "THEME":"変更",
        "PORTFOLIO": "ポートフォリオ",
        "Contents": "内容",
        "Publications": "出版物",
        "SafeGuard AI": "SafeGuard AI",
        "GraminCare": "GraminCare",
        "Rural Care": "Rural Care",
        "CV AI Platform": "CV AI Platform",
        "CV AI": "CV AI",
        "The Daily Tasker": "The Daily Tasker",
        "Tick": "Tick",
        "Adaptive Notes": "Adaptive Notes",
        "AI Reliability": "AI信頼性",
        "RGGEC Coursework": "RGGEC履修科目"
    },
    de:{
        "About": "Über Mich",
        "Home": "Startseite",
        "Lang": "Sprache",
        "Socials":"Soziale Medien",
        "LANGUAGE SELECTION": "SPRACHAUSWAHL",
        "Projects":"Projekte",
        "PROJECTS":"PROJEKTE",
        "Your Experience":"Ihre Erfahrung",
        "Is Loading": "Wird geladen",
        "CV": "Lebenslauf",
        "SCROLL DOWN": "SCROLLEN →",
        "Software": "Software",
        "Research": "Forschung",
        "Hardware": "Hardware",
        "Design": "Design",
        "Misc": "Sonstiges",
        "MANUFACTURE DATE": "HERSTELLDATUM",
        "CHANGE":"ÄNDERN",
        "THEME":"FARBE",
        "Contents": "Inhalt",
        "Publications": "Publikationen",
        "PORTFOLIO": "PORTFOLIO",
        "SafeGuard AI": "SafeGuard AI",
        "GraminCare": "GraminCare",
        "Rural Care": "Rural Care",
        "CV AI Platform": "CV AI Platform",
        "CV AI": "CV AI",
        "The Daily Tasker": "The Daily Tasker",
        "Tick": "Tick",
        "Adaptive Notes": "Adaptive Notes",
        "AI Reliability": "KI-Zuverlässigkeit",
        "RGGEC Coursework": "RGGEC-Studium"
    },
    ru:{
        "About": "Обо мне",
        "Home": "На Главную",
        "Lang": "Язык",
        "Socials":"Социальные сети",
        "Anil":"Анил",
        "Sambyal":"Самбьял",
        "LANGUAGE SELECTION": "ВЫБОР ЯЗЫКА",
        "Your Experience": "Ваша страница",
        "Is Loading": "Загружается",
        "Projects":"Проекты",
        "PROJECTS":"ПРОЕКТЫ",
        "CV": "Резюме",
        "SCROLL DOWN": "ПРОКРУТИТЬ →",
        "Software": "ПО",
        "Research": "НИРОКР",
        "Hardware": "Железо",
        "Design": "Дизайн",
        "Misc": "Прочее",
        "MANUFACTURE DATE": "ДАТА ПУБЛИКАЦИИ",
        "CHANGE":"ПОМЕНЯТЬ",
        "THEME": "ЦВЕТ",
        "Contents": "Содержание",
        "Publications": "Публикации",
        "PORTFOLIO": "ПОРТФОЛИО",
        "SafeGuard AI": "SafeGuard AI",
        "GraminCare": "GraminCare",
        "Rural Care": "Rural Care",
        "CV AI Platform": "CV AI Platform",
        "CV AI": "CV AI",
        "The Daily Tasker": "The Daily Tasker",
        "Tick": "Tick",
        "Adaptive Notes": "Adaptive Notes",
        "AI Reliability": "Надёжность ИИ",
        "RGGEC Coursework": "Курсы RGGEC"
    },
    fr:{
        "About": "À Propos",
        "Home": "Accueil",
        "Lang": "Langue",
        "Socials":"Contact",
        "LANGUAGE SELECTION": "LANGUE",
        "Your Experience": "Votre expérience",
        "Is Loading": "Est en cours de chargement",
        "Projects":"Projets",
        "PROJECTS":"PROJETS",
        "SCROLL DOWN": "SCROLLEZ →",
        "Software": "Logiciels",
        "Research": "Recherche",
        "Hardware": "Projet Elec.",
        "Design": "Design",
        "Misc": "Autre",
        "MANUFACTURE DATE": "DATE DE FABRICATION",
        "CHANGE":"CHANGER",
        "THEME": "LA COULEUR",
        "Contents": "Contenu",
        "Publications": "Publications",
        "CV": "CV",
        "PORTFOLIO": "PORTFOLIO",
        "SafeGuard AI": "SafeGuard AI",
        "GraminCare": "GraminCare",
        "Rural Care": "Rural Care",
        "CV AI Platform": "CV AI Platform",
        "CV AI": "CV AI",
        "The Daily Tasker": "The Daily Tasker",
        "Tick": "Tick",
        "Adaptive Notes": "Adaptive Notes",
        "AI Reliability": "Fiabilité de l'IA",
        "RGGEC Coursework": "Cours RGGEC"
    },
    hi: {
        "About": "परिचय",
        "Home": "होम",
        "Lang": "भाषा",
        "Socials": "सोशल",
        "Anil": "अनिल",
        "Sambyal": "साम्ब्याल",
        "Language Selection": "भाषा चयन",
        "LANGUAGE SELECTION": "भाषा चयन",
        "Projects": "प्रोजेक्ट्स",
        "PROJECTS": "प्रोजेक्ट्स",
        "Your Experience": "अनुभव",
        "Is Loading": "लोड हो रहा है",
        "CV": "बायोडाटा",
        "SCROLL DOWN": "नीचे स्क्रॉल करें →",
        "Software": "सॉफ्टवेयर",
        "Research": "अनुसंधान",
        "Hardware": "हार्डवेयर",
        "Design": "डिजाइन",
        "Misc": "विविध",
        "MANUFACTURE DATE": "निर्माण तिथि",
        "CHANGE": "बदलें",
        "THEME": "थीम",
        "Contents": "विषय सूची",
        "Publications": "लेख व शोध",
        "PORTFOLIO": "पोर्टफोलियो",
        "SafeGuard AI": "सेफगार्ड एआई",
        "GraminCare": "ग्रामीणकेयर",
        "Rural Care": "रूरल केयर",
        "CV AI Platform": "सीवी एआई प्लेटफॉर्म",
        "CV AI": "सीवी एआई",
        "The Daily Tasker": "द डेली टास्कर",
        "Tick": "टिक",
        "Adaptive Notes": "अडेप्टिव नोट्स",
        "AI Reliability": "एआई विश्वसनीयता",
        "RGGEC Coursework": "आरजीजीईसी पाठ्यक्रम",
        "Machine Learning & AI": "मशीन लर्निंग व एआई",
        "Research & Systems": "शोध व सिस्टम्स",
        "Code & Repositories": "कोड व रिपॉजिटरी"
    }
};

function getTranslation(key) {
    const lang = getCurrentLanguage();
    if (translationStrings[lang] && translationStrings[lang][key]) {
        if( translationStrings[lang][key] === "&EMPTY&") {
            console.warn(`Translation for "${key}" is empty in language "${lang}"`);
            return ''; // Return empty string if translation is marked as empty
        }
        return translationStrings[lang][key];
    } else {
        console.warn(`Translation for "${key}" not found in language "${lang}"`);
        return key; // Return the key itself if no translation is found
    }
}

function translateEverything(){
    const lang = getCurrentLanguage();
    $("body").addClass("lang-"+lang);
    document.documentElement.lang = lang;
    if(lang === 'en') {
        return; // No translation needed for English
    }

    let elements = document.querySelectorAll(`[data-${lang}-change-attr]`);
    elements.forEach(element => {
        try{
            const json = JSON.parse(element.getAttribute('data-'+lang+'-change-attr'));
            for (const [attr, value] of Object.entries(json)) {
                element.setAttribute(attr, value);
            }
        }catch(e){
            console.error(`Error processing data-${lang}-change-attr for element`, element, e);
        }
    });

    elements = document.querySelectorAll('[data-translation]');
    elements.forEach(element => {
        if($(element).attr("already-translated")) return;
        $(element).attr("already-translated", true);
        const key = element.getAttribute('data-translation');
        if (translationStrings[lang] && translationStrings[lang][key]) {
            if(translationStrings[lang][key] === "&EMPTY&") {
                console.warn(`Translation for "${key}" is empty in language "${lang}"`);
                element.textContent = ''; // Set to empty if translation is marked as empty
                return; // Skip if translation is marked as empty
            }
            if(element.getAttribute('data-scramble-on-enter')){
                element.setAttribute('data-scramble-on-enter', translationStrings[lang][key]);
            }else{
                if(element.getAttribute('data-text'))
                    element.setAttribute('data-text', translationStrings[lang][key]);
                else
                    element.textContent = translationStrings[lang][key];
            }
        } else {
            console.warn(`Translation for "${key}" not found in language "${lang}"`);
        }
    });

    // Handle CSS from data-<lang>
    elements = document.querySelectorAll('[data-'+lang+']');
    let css = '';
    elements.forEach(element => {
        const cssString = element.getAttribute('data-'+lang);
        // yeast() can return dots, which are invalid in class names. Replace dots with underscores.
        let className = "tr-" + yeast().replace(/\./g, '_');
        css += `.${className}{${cssString}}\n`;
        element.classList.add(className);
    });
    if (css) {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    } else {
        console.warn(`No CSS found for language "${lang}"`);
    }


}

export {translateEverything, getTranslation, getCurrentLanguage};
