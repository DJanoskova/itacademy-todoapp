import React from 'react';

import Todo from './Todo';

function App() {
  return (
    <div className="App p-3">
      <Todo title="Todo 1" createdAt="26.05.2019">
        text 1
      </Todo>

      <Todo title="Todo 2" createdAt="25.05.2019" finished={true}>
      </Todo>
    </div>
  );
}

export default App;
