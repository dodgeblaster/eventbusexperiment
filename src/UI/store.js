import create from 'zustand'

const makeEventBusMiddleware = (eventBus) => (storeDefinition) => (set, get, store) => {
    eventBus.on('BACKEND_STATE_UPDATED', (x) => {
        set({
            nodes: [...x]
        })
    })

    store.addNode = () => {
        eventBus.emit('USER_ADDED_NODE', { id: 'ui-' + Date.now() })
    }

    return storeDefinition(get, set, store)
}

const storeDefinition = (set, get, store) => ({
    nodes: [],
    addNode: () => {
        store.addNode()
    }
})

const store = eventBus => {
    const eventBusMiddleware = makeEventBusMiddleware(eventBus)
    return () => create(eventBusMiddleware(storeDefinition))
}

export default store