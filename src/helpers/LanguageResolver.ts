const supportedDefaults = {
    ar: 'ar-EG',
    ca: 'ca-ES',
    da: 'da-DK',
    de: 'de-DE',
    en: 'en-US',
    es: 'es-ES',
    fi: 'fi-FI',
    fr: 'fr-FR',
    hi: 'hi-IN',
    it: 'it-IT',
    ja: 'ja-JP',
    ko: 'ko-KR',
    nb: 'nb-NO',
    nl: 'nl-NL',
    pl: 'pl-PL',
    pt: 'pt-PT',
    ru: 'ru-RU',
    sv: 'sv-SE',
    zh: 'zh-CN'
}

export const resolveLang = (langHint: string) => {
    return supportedDefaults[langHint] || langHint;
}
