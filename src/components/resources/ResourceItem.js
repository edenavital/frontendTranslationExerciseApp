import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as CheckMarkIcon} from '../../assets/icons/active.svg';
import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow-right.svg';
import {iconCommonStyle} from '../../styles/commonStyles';

const StyledListItem = styled.li`
  display: flex;
  cursor: pointer;
  padding: 6px 0;
  position: relative;
  border-bottom: 1px solid lightgray;
  background-color: ${({isSelected}) =>
    isSelected ? 'lightgray' : 'initial'};
  border-left: 2px solid
    ${({isSelected}) => (isSelected ? 'royalblue' : 'transparent')};
  font-weight: ${({isSelected}) => (isSelected ? '600' : 'initial')};
`;

const StyledCheckMarkIcon = styled(CheckMarkIcon)`
  ${iconCommonStyle};
  width: 25px;
  #active {
    fill: limegreen;
  }
`;

const ResourceName = styled.span`
  color: #696969;
  margin: auto 0;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
`;

const StyledArrowIcon = styled(ArrowIcon)`
  ${iconCommonStyle};
  margin: initial;
  position: absolute;
  right: 5px;
`;

export default function ResourceItem({name, isSelected, onClick}) {
    const listItemProps = {
        onClick,
        isSelected
    };
    return (
        <StyledListItem {...listItemProps}>
            <StyledCheckMarkIcon/>
            <ResourceName>{name}</ResourceName>
            {isSelected && <StyledArrowIcon/>}
        </StyledListItem>
    );
}

ResourceItem.propTypes = {
    name: PropTypes.string,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func
};
