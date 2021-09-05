export function manageFriends(state = { friends: [] }, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {...state, friends: state.friends.concat(action.friend)}
        case "REMOVE_FRIEND":
            return { ...state, friends: state.friends.filter(item => item.id !== action.id) }
        default:
            return state;
    }
}    