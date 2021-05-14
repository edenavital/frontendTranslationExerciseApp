import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from '../common/SectionHeader';
import {ReadOnlyTextArea, TextField} from '../../fields';

const SectionContainer = styled.div`
    width: 60%;
    border-right: 1px solid lightgray;
    padding: 0 12px 5px;
    min-height: 100%;
`;

const FieldsContainer = styled.div`
    margin-top: 6px;
`;

export default function GeneralDetailsSection({resource}) {
    const {t} = global;
    const sectionHeaderProps = {
        headerText: t('GENERAL_DETAILS_SECTION_TITLE'),
        subHeaderText: t('GENERAL_DETAILS_SECTION_SUB_TITLE')
    };
    const {name, description, resourceType, path} = resource;
    const nameProps = {
        value: name,
        label: t('GENERAL_DETAILS_SECTION_FIELD_TITLE_NAME')
    };
    const descriptionProps = {
        value: description,
        label: t('GENERAL_DETAILS_SECTION_FIELD_TITLE_DESCRIPTION')
    };
    const resourceTypeProps = {
        value: resourceType,
        label: t('GENERAL_DETAILS_SECTION_FIELD_TITLE_RESOURCE_TYPE')
    };
    const pathProps = {
        value: path,
        label: t('GENERAL_DETAILS_SECTION_FIELD_TITLE_RESOURCE_PATH')
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

GeneralDetailsSection.propTypes = {
    resource: PropTypes.object
};
