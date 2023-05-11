const redux = require("redux");

const CounterReducer = (state = { Counter: 0 }, action) => {

    if (action.type === "increment") {
        return {
            Counter: state.Counter + 6
        }
    }
    if (action.type === "decrement") {
        return {
            Counter: state.Counter - 6
        }
    }
}

const store = redux.legacy_createStore(CounterReducer)

// console.log(store.getState())

const CounterSubscriber = () => {
    const LatestState = store.getState();
    console.log(LatestState)
}
store.subscribe(CounterSubscriber);

store.dispatch({ type: "increment" })
store.dispatch({ type: "decrement" })