export const ADD = "ADD",REMOVE = "REMOVE", DONE = "DONE", EDIT = "EDIT";
export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.newdata]
        case REMOVE:
            return state.filter((Data) => {
                return Data.id !== action.currentID
            })
        case DONE:
            return state.map((ele) =>
                ele.id === action.currentID ? { ...ele, complete: !ele.complete } : ele
            );
        case EDIT:
            const newvalue = prompt('enter New value', '');
            return state.map((ele) => {
                return ele.id === action.currentID ? (newvalue.length == 0 ? ele : { ...ele, data: newvalue }) : ele
            })
    }
}