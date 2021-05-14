import React from 'react';
import PropTypes from 'prop-types';
import ResourceItem from './ResourceItem';
import {StyledList} from '../../styles/commonStyles';

export default function ResourcesList({
                                          resources,
                                          selectResource,
                                          selectedResourceId
                                      }) {
    return (
        <StyledList>
            {resources.map(({id, name, actionIds}, key) => {
                const itemProps = {
                    key,
                    name,
                    isSelected: id === selectedResourceId,
                    onClick: () => selectResource(id, actionIds)
                };
                return <ResourceItem {...itemProps} />;
            })}
        </StyledList>
    );
}

ResourcesList.propTypes = {
    resources: PropTypes.array,
    selectResource: PropTypes.func,
    selectedResourceId: PropTypes.string
};
