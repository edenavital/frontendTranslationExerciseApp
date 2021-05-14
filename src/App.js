import React, {Component} from 'react';
import MockService from './service/mockService';
import {init as initTranlation} from './service/translation';
import styled from 'styled-components';
import HeaderPanel from './components/HeaderPanel';
import {GlobalStyle} from './styles/appDefaultStyles';
import ResourcesContainer from './containers/ResourcesContainer';
import DetailsViewContainer from './containers/DetailsViewContainer';
import {headerPanelHeight, VerticalContainer} from './styles/commonStyles';

const ApplicationContainer = styled(VerticalContainer)`
    min-height: calc(100vh - ${headerPanelHeight});
`;
const MainContainer = styled.main`
    display: flex;
    flex: 1;
    position: relative;
    top: ${headerPanelHeight};
`;

export default class App extends Component {

    async componentDidMount() {
        await this.init();
        await this.filterResources();
    }

    init = async () => {
        await initTranlation({lang: 'en-US'});
        this.setState({initCompleted: true});
    };

    state = {
        initCompleted: false,
        resources: [],
        actions: [],
        selectedResourceId: ''
    };
    setResources = resources => {
        this.setState({resources});
    };
    setActions = actions => {
        this.setState({actions: [...this.state.actions, ...actions]});
    };
    setSelectedResourceId = selectedResourceId => {
        this.setState({selectedResourceId});
    };
    fetchMissingActions = async requiredActionIds => {
        const {
            state: {actions},
            setActions
        } = this;
        const actionIds = actions.map(({id}) => id);
        const missingActionIds = requiredActionIds.filter(
            id => !actionIds.includes(id)
        );

        if (missingActionIds.length > 0) {
            const actions = await MockService.getActions(missingActionIds);
            setActions(actions);
        }
    };
    filterResources = async filteredName => {
        const {
            setResources,
            fetchMissingActions,
            state: {selectedResourceId}
        } = this;

        const resources = await MockService.getResources(filteredName);
        setResources(resources);

        const selectedResource = resources.find(
            ({id}) => id === selectedResourceId
        );
        if (selectedResource) {
            fetchMissingActions(selectedResource.actionIds);
        }
    };
    selectResource = (selectedResourceId, selectedResourceActionIds) => {
        const {fetchMissingActions, setSelectedResourceId} = this;

        setSelectedResourceId(selectedResourceId);
        fetchMissingActions(selectedResourceActionIds);
    };

    render() {
        const {
            state: {initCompleted, resources, actions, selectedResourceId},
            filterResources,
            selectResource
        } = this;

        const selectedResource = resources.find(
            ({id}) => id === selectedResourceId
        );

        const selectedResourceActions = selectedResource
            ? actions.filter(({id}) => selectedResource.actionIds.includes(id))
            : null;

        const detailsViewProps = {
            resource: selectedResource,
            resourceActions: selectedResourceActions
        };

        const resourcesProps = {
            resources,
            filterResources,
            selectResource,
            selectedResourceId
        };

        if (!initCompleted)
            return null;

        return (
            <>
                <GlobalStyle/>
                <ApplicationContainer>
                    <HeaderPanel/>
                    <MainContainer>
                        <ResourcesContainer {...resourcesProps} />
                        <DetailsViewContainer {...detailsViewProps} />
                    </MainContainer>
                </ApplicationContainer>
            </>
        );
    }
}
