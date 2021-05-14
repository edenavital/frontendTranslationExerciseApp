import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg';
import {iconCommonStyle} from '../../styles/commonStyles';
import {TextField} from '../fields';
import {inputBackgroundColor} from '../../styles/colors';

const FilterFieldContainer = styled.div`
  display: flex;
  background-color: ${inputBackgroundColor};
  margin-top: 8px;
  > div {
    flex: 4;
  }
  > svg {
    flex: 1;
  }
`;

const StyledTextField = styled(TextField)`
  font-size: 12px;
  color: #696969;
  background-color: inherit;
  ::placeholder {
    opacity: 0.5;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  ${iconCommonStyle};
  #search {
    fill: #656565;
  }
`;

export default function ResourcesFilterField({onChange, value}) {
    const fieldProps = {
        onChange,
        value,
        readOnly: false,
        placeholder: 'Search Resource',
        spellCheck: 'false'
    };
    return (
        <FilterFieldContainer>
            <StyledTextField {...fieldProps} />
            <StyledSearchIcon/>
        </FilterFieldContainer>
    );
}

ResourcesFilterField.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
};
