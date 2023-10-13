import React, { useState } from 'react';
import List from './List';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3> Meet {people.length} New People Today</h3>
        <List people={people} /> {/* Use 'people' state instead of 'data' */}
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
