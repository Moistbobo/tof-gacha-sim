import React from 'react';
import Main from './pages/Main';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'gray',
      }}>
      <Main />
    </div>
  );
}

export default App;
