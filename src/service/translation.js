import i18n from 'i18next';

export const init = ({lang}) => {
    return new Promise(async (resolve, reject) => {
        const response = await fetch(`/locales/${lang}/strings.json`);
        const translation = await response.json();

        i18n.init({
            lng: lang,
            resources: {
                [lang]: {translation}
            }
        }, (err, t) => {
            if (err) return reject(err);

            global.t = t;
            resolve();
        });
    });
};
