import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from '../common/SectionHeader';
import {ReadOnlyTextArea, TextField} from '../../fields';
import { getFixedTrans, loadResourceBundle } from '../../../service/translation';
import englishLangObj from './locales/en-US/strings.json'

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
        this.loadResourceBundle();
    }

    loadResourceBundle = async () => {
        await loadResourceBundle({ componentName: COMPONENT_NAME, langJson: englishLangObj });
        this.setState({isTranslationLoaded: true})
    }

    render() {
        const { resource } = this.props;
        const { isTranslationLoaded } = this.state;
        
        if (!isTranslationLoaded) return null;

        const fixedTrans = getFixedTrans({componentName: COMPONENT_NAME})
        
        const sectionHeaderProps = {
            headerText: fixedTrans('TITLE'),
            subHeaderText: fixedTrans('SUB_TITLE')
        };
        const {name, description, resourceType, path} = resource;
        const nameProps = {
            value: name,
            label: fixedTrans('FIELD_TITLE_NAME')
        };
        const descriptionProps = {
            value: description,
            label: fixedTrans('FIELD_TITLE_DESCRIPTION')
        };
        const resourceTypeProps = {
            value: resourceType,
            label: fixedTrans('FIELD_TITLE_RESOURCE_TYPE')
        };
        const pathProps = {
            value: path,
            label: fixedTrans('FIELD_TITLE_RESOURCE_PATH')
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

export default GeneralDetailsSection;