document.addEventListener('DOMContentLoaded', () => {
    const langSelector = document.getElementById('lang-selector');
    let currentLang = localStorage.getItem('lang') || 'en';
    const baseUrl = document.body.dataset.baseUrl || '/';

    async function setLanguage(lang) {
        try {
            const fetchUrl = `${baseUrl}locales/${lang}.json`.replace(/([^:]\/)\/+/g, "$1");
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                console.error(`Could not load ${lang}.json from ${fetchUrl}`);
                return;
            }
            const translations = await response.json();
            document.querySelectorAll('[data-i18n-key]').forEach(element => {
                const key = element.getAttribute('data-i18n-key');
                if (translations[key]) {
                    element.textContent = translations[key];
                }
            });
            document.documentElement.lang = lang;
            localStorage.setItem('lang', lang);
            if (langSelector) {
                langSelector.value = lang;
            }
            if (window.onLanguageLoad) {
                window.onLanguageLoad();
            }
        } catch (error) {
            console.error('Error setting language:', error);
        }
    }

    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // Set initial language
    setLanguage(currentLang);
}); 