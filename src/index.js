import React from 'react';
import ReactDOM from 'react-dom/client';
import EventBus from './eventBus'
import { setupBackend } from './Backend'
import { setupFileSystem } from './FileSystem'
import { UI } from './UI'

function App() {
  const eventBus = new EventBus()
  setupBackend(eventBus)
  setupFileSystem(eventBus)
  return <UI eventBus={eventBus} />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

