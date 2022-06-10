class FileManager { 
    constructor(props) { 
        setInterval(() => { 
            props.eventBus.emit('USER_ADDED_NODE', { id: 'fs-' + Date.now() })
        }, 2000)
    }
}

export const setupFileSystem = (eventBus) => { 
    new FileManager({ eventBus })
}
