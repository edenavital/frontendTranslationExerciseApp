import React, {Component} from 'react';
import styled from 'styled-components';
import { loadResourceBundle, getFixedTrans } from '../../service/translation';
import {HeaderText, SubHeaderText} from '../../styles/commonStyles';
import englishLangObj from './locales/en-US/strings.json';

const ResourceHeaderText = styled(HeaderText)`
    color: #686868;
    margin-bottom: 3px;
`;

// Set the name of the component as constant - will be used as namespace

const COMPONENT_NAME = "ResourcesHeader";
class ResourcesHeader extends Component {
    
    state = {
        isTranslationLoaded: false
    }

    async componentDidMount() {
        this.loadResourceBundle();
    }

    // Load the translations of ResourcesHeader
    loadResourceBundle = async () => {
        console.log("LOl")
        await loadResourceBundle({ componentName: COMPONENT_NAME, langJson: englishLangObj });
        this.setState({isTranslationLoaded: true})
    }

    render() {
        const { isTranslationLoaded } = this.state;
        if (!isTranslationLoaded) return null;

        // Get translations according to language & namespace
        const fixedTrans = getFixedTrans({componentName: COMPONENT_NAME})
        return (
            <>
                <ResourceHeaderText>{fixedTrans('TITLE')}</ResourceHeaderText>
                <SubHeaderText>{fixedTrans('SUBTITLE')}</SubHeaderText>
            </>
        );
    }
    
}

export default ResourcesHeader;