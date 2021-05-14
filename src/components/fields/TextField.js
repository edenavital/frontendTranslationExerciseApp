import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {fieldCommonStyle} from '../../styles/commonStyles';
import FieldWrapper from './FieldWrapper';

const StyledInputField = styled.input`
  ${fieldCommonStyle};
`;

export function TextField({label, readOnly = true, ...props}) {
    const inputProps = {
        ...props,
        readOnly
    };
    return (
        <FieldWrapper {...{label}}>
            <StyledInputField {...inputProps} />
        </FieldWrapper>
    );
}

TextField.propTypes = {
    label: PropTypes.string,
    readOnly: PropTypes.bool
};
