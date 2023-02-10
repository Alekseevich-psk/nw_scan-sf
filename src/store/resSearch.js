const initialStore = {
    histograms: [],
    objectSearch: {},
};

function resSearch(state = initialStore, action) {
    switch (action.type) {
        case "setResHistograms":
            return (initialStore.histograms = action.value.data);
        case "setResObjectSearch":
            return (initialStore.objectSearch = { objectSearch: action.value });
        default:
            return state;
    }
}


export default resSearch;
