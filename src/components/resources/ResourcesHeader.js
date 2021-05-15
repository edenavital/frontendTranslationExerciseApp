import React, {Component} from 'react';
import styled from 'styled-components';
import { loadResourceBundle, getFixedTrans } from '../../service/translation';
import {HeaderText, SubHeaderText} from '../../styles/commonStyles';
import enLangObj from './locales/en-US/strings.json';
import deLangObj from './locales/de-LU/strings.json';
import { withTranslation } from 'react-i18next';
import {SUPPORTED_LANGUAGES} from '../../constants'
const ResourceHeaderText = styled(HeaderText)`
    color: #686868;
    margin-bottom: 3px;
`;

// Set the name of the component as constant - will be used as namespace

const COMPONENT_NAME = "ResourcesHeader";
class ResourcesHeader extends Component {
    
    state = {
        isTranslationLoaded: false
    }

    async componentDidMount() {
        const initLangObj = this.getLangObj()
        this.loadResourceBundle(initLangObj);
    }

    getLangObj = () => {
        const { i18n } = this.props;
        return i18n.language === SUPPORTED_LANGUAGES.ENGLISH ? enLangObj : deLangObj;
    }

    componentDidUpdate(prevProps) {
        if (this.props.t !== prevProps.t) {
            const langObj = this.getLangObj()
            this.loadResourceBundle(langObj)
        }
    }
     
    // Load the translations of ResourcesHeader
    loadResourceBundle = async (langObj) => {
        const { i18n } = this.props;
        await loadResourceBundle({ lang: i18n.language, componentName: COMPONENT_NAME, langJson: langObj });
        this.setState({isTranslationLoaded: true})
    }

    render() {
        const { isTranslationLoaded } = this.state;
        if (!isTranslationLoaded) return null;
        const { t } = this.props;

        // Get translations according to language & namespace
        // const fixedTrans = getFixedTrans({componentName: COMPONENT_NAME})

        return (
            <>
                <ResourceHeaderText>{t('TITLE')}</ResourceHeaderText>
                <SubHeaderText>{t('SUBTITLE')}</SubHeaderText>
            </>
        );
    }
    
}

export default withTranslation(COMPONENT_NAME)(ResourcesHeader);