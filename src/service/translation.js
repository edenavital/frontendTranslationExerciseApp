import i18n from 'i18next';

// Initialize i18n object 
export const init = ({lang}) => {
    return new Promise(async (resolve, reject) => {

        i18n.init({
            lng: lang,
            resources: {}
        }, (err, t) => {
            if (err) return reject(err);
            global.i18n = i18n;
            resolve();
        });
    });
};

/**
 * Generate fixed translations according to language and namespace which is componentName 
 * @param {String} lang Shows if form submitting is in progress
 * @param {String} componentName Form submit callback function
 */
export const getFixedTrans = ({ lang = "en-US", componentName }) => {
    if (!componentName) return;   
    return i18n.getFixedT(lang, componentName);    
}

/**
 * Generate fixed translations according to language and namespace which is componentName 
 * @param {String} lang selected language
 * @param {String} componentName component name 
 * @param {Object} langJson represents the language object (key:value object)
 */
export const loadResourceBundle = async ({lang = "en-US", componentName, langJson}) => {
    if (!componentName) return;

    //Check if the resource has already been loaded - turns out it comes out of the box from their library

    // const isExist = i18n.hasResourceBundle(lang, componentName);
    // if (isExist) {
    //     return console.log("Language has been loaded already");
    // }

    i18n.addResourceBundle(lang, componentName, langJson);
}