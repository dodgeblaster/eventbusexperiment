import React from 'react'
import createContext from 'zustand/context'
import Visual from './Visual'
import createStore from './store'

const { Provider, useStore } = createContext()
export const useVisualStore = useStore

export function UI(props) {
    const store = createStore(props.eventBus)
    return (
        <Provider createStore={store}>
            <Visual/>
        </Provider>
    )
}