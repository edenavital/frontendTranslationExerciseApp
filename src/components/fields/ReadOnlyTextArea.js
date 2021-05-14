import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {fieldCommonStyle} from '../../styles/commonStyles';
import FieldWrapper from './FieldWrapper';

const StyledTextArea = styled.textarea`
  ${fieldCommonStyle};
  resize: none;
`;

export function ReadOnlyTextArea({value, label}) {
    const textAreaProps = {
        readOnly: true,
        value,
        rows: 3
    };
    return (
        <FieldWrapper {...{label}}>
            <StyledTextArea {...textAreaProps} />
        </FieldWrapper>
    );
}

ReadOnlyTextArea.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string
};
