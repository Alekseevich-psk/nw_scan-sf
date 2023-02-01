const initialStore = ["Task 1", "Task 2"];

function taskStore (state = initialStore, action) {
    switch (action.type) {
        case "ADD__TASK":
            return [...state, action.payload];
        default:
            return state;
    }
}


export default taskStore;