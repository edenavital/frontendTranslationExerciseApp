import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {VerticalContainer} from '../../styles/commonStyles';
import {lightTextColor} from '../../styles/colors';

const StyledLabel = styled.label`
  font-size: 11px;
  color: ${lightTextColor};
  margin-bottom: 2px;
`;

export default function FieldWrapper({label, children}) {
    return (
        <VerticalContainer>
            {label && <StyledLabel>{label}</StyledLabel>}
            {children}
        </VerticalContainer>
    );
}

FieldWrapper.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node
};
