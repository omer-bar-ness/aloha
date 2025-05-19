const { useState, useEffect } = React;

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  
  const reset = () => {
    setCount(0);
  };
  
  return (
    <div className="container">
      <h1>Hello Counter App</h1>
      
      <div className="name-input">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div className="greeting">
        {name ? `Hello, ${name}!` : 'Hello, friend!'}
      </div>
      
      <div className="counter">
        Count: {count}
      </div>
      
      <div className="counter-controls">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app')); 