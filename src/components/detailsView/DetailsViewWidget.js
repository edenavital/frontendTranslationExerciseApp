import React from 'react';
import PropTypes from 'prop-types';
import {ActionsSection, DetailsHeader, GeneralDetailsSection} from './';
import {VerticalContainer} from '../../styles/commonStyles';
import styled from 'styled-components';

const WidgetContainer = styled(VerticalContainer)`
  min-height: 100%;
  background-color: white;
  box-shadow: 0px 1px 4px 1px #888888;
`;

const ContentContainer = styled.div`
  display: flex;
  padding-top: 15px;
  flex: 1;
`;

export default function DetailsViewWidget({resource, resourceActions}) {
    const {name: resourceName} = resource;
    return (
        <WidgetContainer>
            <DetailsHeader {...{resourceName}} />
            <ContentContainer>
                <GeneralDetailsSection {...{resource}} />
                <ActionsSection {...{resourceActions}} />
            </ContentContainer>
        </WidgetContainer>
    );
}

DetailsViewWidget.propTypes = {
    resource: PropTypes.object,
    resourceActions: PropTypes.array
};
