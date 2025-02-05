import { useReducer } from "react";

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type ResetAction = {
    type: 'reset',
}

//Discriminated unions: is a pattern in TypeScript that combines multiple object types (unions) in a way that ensures type safety when working with those types.
type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
    switch(action.type){
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default: return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>Increment 10</button>
            <button onClick={() => dispatch({type: 'decrement', payload: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </>
    )

}

export default Counter;