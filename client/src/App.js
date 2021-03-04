import React from 'react';
import Login from './components/Login';
import useLocalStorage from './utils/Hooks/useLocalStorage';
import Dashboard from './components/Dashboard';
import { ContactsProvider } from './utils/Contexts/ContactsProvider';
import { ConversationsProvider } from './utils/Contexts/ConversationsProvider';
import { SocketProvider } from './utils/Contexts/SocketProvider';

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
    
  )
  return (
    id ? dashboard : <Login onIdSubmit={setId} /> 
  );
}

export default App;
