const redux = require('redux');

function increment(){
    return {
        type: 'INCREMENT'
    };
}

function decrement(){
    return {
        type: 'DECREMENT'
    };
}

function double(){
    return {
        type: 'DOUBLE'
    };
}

function halve(){
    return {
        type: 'HALVE'
    };
}
function reducer(state ={coutnter: 0}, action){
    switch(action.type){
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            };
        case 'DOUBLE':
            return {
                counter: state.counter * 2
            };
        case 'HALVE':
            return {
                counter: state.counter / 2
            };
        default:
            return state;
    }
}

const store = redux.createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DOUBLE'});
store.dispatch({type: 'HALVE'});