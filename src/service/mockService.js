import data from './data.json';

const MockService = (() => {
    const fetchData = async () => {
        return await data;
    };

    return {
        getResources: async filteredName => {
            const data = await fetchData();
            let resources = data.resources;
            if (filteredName) {
                resources = resources.filter(({name}) =>
                    name.toLowerCase().includes(filteredName.toLowerCase())
                );
            }
            return resources;
        },
        getActions: async actionIds => {
            const data = await fetchData();
            const actions = data.actions.filter(({id}) => actionIds.includes(id));
            return actions;
        }
    };
})();

export default MockService;
