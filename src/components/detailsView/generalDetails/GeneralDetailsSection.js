import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from '../common/SectionHeader';
import {ReadOnlyTextArea, TextField} from '../../fields';
import { getFixedTrans, loadResourceBundle } from '../../../service/translation';
import enLangObj from './locales/en-US/strings.json'
import deLangObj from './locales/de-LU/strings.json';
import { withTranslation } from 'react-i18next';
import {SUPPORTED_LANGUAGES} from '../../../constants'

const SectionContainer = styled.div`
    width: 60%;
    border-right: 1px solid lightgray;
    padding: 0 12px 5px;
    min-height: 100%;
`;

const FieldsContainer = styled.div`
    margin-top: 6px;
`;

const COMPONENT_NAME = "GeneralDetailsSection";
class GeneralDetailsSection extends Component {

    state = {
        isTranslationLoaded: false
    }

    async componentDidMount() {
        const initLangObj = this.getLangObj()
        this.loadResourceBundle(initLangObj);
    }

    componentDidUpdate(prevProps) {
        if (this.props.t !== prevProps.t) {
            const langObj = this.getLangObj()
            this.loadResourceBundle(langObj)
        }
    }

    getLangObj = () => {
        const { i18n } = this.props;
        return i18n.language === SUPPORTED_LANGUAGES.ENGLISH ? enLangObj : deLangObj;
    }

    loadResourceBundle = async (langObj) => {
        const { i18n } = this.props;
        await loadResourceBundle({ lang: i18n.language, componentName: COMPONENT_NAME, langJson: langObj });
        this.setState({isTranslationLoaded: true})
    }

    render() {
        const { resource, t } = this.props;
        const { isTranslationLoaded } = this.state;
        
        if (!isTranslationLoaded) return null;

        // const fixedTrans = getFixedTrans({componentName: COMPONENT_NAME})
        
        const sectionHeaderProps = {
            headerText: t('TITLE'),
            subHeaderText: t('SUB_TITLE')
        };
        const {name, description, resourceType, path} = resource;
        const nameProps = {
            value: name,
            label: t('FIELD_TITLE_NAME')
        };
        const descriptionProps = {
            value: description,
            label: t('FIELD_TITLE_DESCRIPTION')
        };
        const resourceTypeProps = {
            value: resourceType,
            label: t('FIELD_TITLE_RESOURCE_TYPE')
        };
        const pathProps = {
            value: path,
            label: t('FIELD_TITLE_RESOURCE_PATH')
        };

        return (
            <SectionContainer>
                <SectionHeader {...sectionHeaderProps} />
                <FieldsContainer>
                    <TextField {...nameProps} />
                    <ReadOnlyTextArea {...descriptionProps} />
                    <TextField {...resourceTypeProps} />
                    <TextField {...pathProps} />
                </FieldsContainer>
            </SectionContainer>
        );
    }
}

GeneralDetailsSection.propTypes = {
    resource: PropTypes.object
};

export default (withTranslation(COMPONENT_NAME)(GeneralDetailsSection));