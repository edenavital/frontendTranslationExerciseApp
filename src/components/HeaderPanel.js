import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/plainid-logo-white.png';
import {headerPanelHeight, HeaderText} from '../styles/commonStyles';

const HeaderPanelContainer = styled.header`
  display: flex;
  background-color: #4b555f;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: ${headerPanelHeight};
  align-items: center;
  z-index: 1;
`;

const Logo = styled.img`
  width: 100px;
  height: 27px;
  margin: 7px;
`;

const HeaderPanelText = styled(HeaderText)`
  color: #fbfbfb;
  margin-left: 5px;
`;

export default function HeaderPanel() {
    const logoProps = {
        src: logo,
        alt: 'Logo'
    };
    return (
        <HeaderPanelContainer>
            <Logo {...logoProps} />
            <HeaderPanelText>PlainID- Demo App</HeaderPanelText>
        </HeaderPanelContainer>
    );
}
