import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {HeaderText, iconCommonStyle, SubHeaderText} from '../../../styles/commonStyles';
import {ReactComponent as HelpIcon} from '../../../assets/icons/help-12.svg';

const SectionHeaderContainer = styled.div`
  margin-bottom: 10px;
`;

const SectionHeaderText = styled(HeaderText)`
  color: royalBlue;
  font-size: 11px;
  margin: auto 0;
`;

const HeaderTextContainer = styled.div`
  display: flex;
  margin-bottom: 3px;
`;
const StyledHelpIcon = styled(HelpIcon)`
  ${iconCommonStyle};
  #help {
    fill: #676767;
  }
`;

export default function SectionHeader({headerText, subHeaderText}) {
    return (
        <SectionHeaderContainer>
            <HeaderTextContainer>
                <SectionHeaderText>{headerText}</SectionHeaderText>
                <StyledHelpIcon/>
            </HeaderTextContainer>
            <SubHeaderText>{subHeaderText}</SubHeaderText>
        </SectionHeaderContainer>
    );
}

SectionHeader.propTypes = {
    headerText: PropTypes.string,
    subHeaderText: PropTypes.string
};
