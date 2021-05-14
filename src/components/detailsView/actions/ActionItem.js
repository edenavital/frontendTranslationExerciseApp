import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from '../../fields';
import {lightTextColor} from '../../../styles/colors';

const StyledInputField = styled(TextField)`
  font-size: 13px;
  color: ${lightTextColor};
`;

export default function ActionItem({name}) {
    return (
        <li>
            <StyledInputField {...{value: name}} />
        </li>
    );
}

ActionItem.propTypes = {
    name: PropTypes.string
};
