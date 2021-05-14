import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from '../common/SectionHeader';
import ActionsList from './ActionsList';

const SectionContainer = styled.div`
  width: 40%;
  padding: 0 12px 5px;
  min-height: 100%;
`;

export default function ActionsSection({resourceActions}) {
    const sectionHeaderProps = {
        headerText: 'PERMITTED ACTIONS',
        subHeaderText: 'Actions Section'
    };
    return (
        <SectionContainer>
            <SectionHeader {...sectionHeaderProps} />
            <ActionsList {...{resourceActions}} />
        </SectionContainer>
    );
}

ActionsSection.propTypes = {
    resourceActions: PropTypes.array
};
