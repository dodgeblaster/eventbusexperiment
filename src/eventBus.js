/**
 * Events
 */
const eventsWeEventStormed = {
    'USER_ADDED_NODE': [],
    'USER_REMOVED_NODE': [],
    'BACKEND_STATE_UPDATED': []
}

/**
 * Event Bus
 */
export default class EventBus {
    events = eventsWeEventStormed

    on(event, fn) {
        if (!this.events[event]) {
            throw new Error('We didnt event storm this')
        }

        this.events[event].push(fn)
    }

    emit(event, payload) {
        if (!this.events[event]) {
            throw new Error('We didnt event storm this')
        }

        if (this.events[event].length === 0) {
            console.log('No one is listening')
        }

        for (const fn of this.events[event]) {
            fn(payload)
        }
    }
}