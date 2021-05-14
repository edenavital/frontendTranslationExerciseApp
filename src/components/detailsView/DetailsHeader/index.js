import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {HeaderText, SubHeaderText} from '../../../styles/commonStyles';

const DetailsHeaderContainer = styled.div`
  background-color: #5390ea;
  height: 70px;
  padding: 9px;
`;

const DetailsHeaderText = styled(HeaderText)`
  color: white;
  margin-bottom: 6px;
`;

export default function DetailsHeader({resourceName}) {
    return (
        <DetailsHeaderContainer>
            <DetailsHeaderText>{resourceName}</DetailsHeaderText>
            <SubHeaderText>{`${resourceName} details`}</SubHeaderText>
        </DetailsHeaderContainer>
    );
}

DetailsHeader.propTypes = {
    resourceName: PropTypes.string
};
