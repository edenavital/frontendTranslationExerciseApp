import styled from 'styled-components';
import {inputBackgroundColor, lightTextColor} from './colors';

export const HeaderText = styled.h3`
  font-size: 15px;
  font-weight: 400;
  margin-block-end: 0;
  margin-block-start: 0;
`;

export const SubHeaderText = styled.div`
  font-size: 11px;
  color: ${lightTextColor};
`;

export const headerPanelHeight = '40px';

export const verticalContainerStyle = `
  display: flex;
  flex-direction: column;
`;

export const VerticalContainer = styled.div`
  ${verticalContainerStyle};
`;

export const iconCommonStyle = `
height: 20px;
margin: auto 0;
`;

export const fieldCommonStyle = `
padding: 7px 8px;
background-color: ${inputBackgroundColor};
border: none;
font-size: 10px;
margin-bottom: 5px;
:focus {
  outline: 0;
}
`;

export const StyledList = styled.ul`
  ${verticalContainerStyle};
  padding: 0;
  margin: 0;
`;
