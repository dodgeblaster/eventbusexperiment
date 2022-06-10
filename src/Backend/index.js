class Backend {
    nodes = []

    constructor(props) { 
        this.nodes = []
        this.eventBus = props.eventBus
        this.eventBus.on('USER_ADDED_NODE', this.addNode)
        this.eventBus.on('USER_REMOVED_NODE', this.removeNode)
    }

    addNode = (x) => { 
        this.nodes.push(x)
        this.eventBus.emit('BACKEND_STATE_UPDATED', this.nodes)
    }

    removeNode(id) { 
        this.nodes = this.nodes.filter(x => x.id !== id)
        this.eventBus.emit('BACKEND_STATE_UPDATED', this.nodes)
    }
}

export const setupBackend = (eventBus) => {
    new Backend({ eventBus })
}
