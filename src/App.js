import react from 'react';
import Hello from './Hello';
import './App.css'

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // main unit
    padding: '1rem'
  }

  return (
    <>
      {/* descr test1 */}
      /* descr test2 */
      <Hello
        // test open tag
      />
      <Hello/>
      <Hello/>
      <div style={style}>Good Bye {name}!</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
