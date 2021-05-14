import React from 'react';
import {DetailsViewWidget} from '../components/detailsView';
import styled from 'styled-components';

const DetailsViewWrapper = styled.div`
  background-color: #f3f3f3;
  flex: 1;
  padding: 75px;
`;

export default class DetailsViewContainer extends React.Component {
    shouldComponentUpdate(nextProps) {
        const {resource} = nextProps;
        return !!resource;
    }

    render() {
        const {props} = this;
        const {resource} = props;
        return (
            <DetailsViewWrapper>
                {resource && <DetailsViewWidget {...props} />}
            </DetailsViewWrapper>
        );
    }
}
