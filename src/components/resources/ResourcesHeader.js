import React from 'react';
import styled from 'styled-components';
import {HeaderText, SubHeaderText} from '../../styles/commonStyles';

const ResourceHeaderText = styled(HeaderText)`
    color: #686868;
    margin-bottom: 3px;
`;

export default function ResourcesHeader() {
    const {t} = global;
    return (
        <>
            <ResourceHeaderText>{t('RESOURCES_HEADER_TITLE')}</ResourceHeaderText>
            <SubHeaderText>{t('RESOURCES_HEADER_SUBTITLE')}</SubHeaderText>
        </>
    );
}
